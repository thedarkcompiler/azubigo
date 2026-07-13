"use server";

import db from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createCampaign(formData: FormData) {
  const name = formData.get("name") as string;

  const subject = formData.get("subject") as string;

  const sender = formData.get("sender") as string;

  const email = formData.get("email") as string;

  const html = formData.get("html") as string;

  const frequency = formData.get("frequency") as string;

  const startDate = formData.get("start_date") as string;

if (!startDate) {
  throw new Error("Start date is required");
}

  const result = db
    .prepare(
      `

INSERT INTO campaigns

(
name,
subject,
sender_name,
reply_email,
html
)

VALUES

(
?,
?,
?,
?,
?
)

`,
    )
    .run(name, subject, sender, email, html);

  const campaignId = result.lastInsertRowid;

  const recipients = formData.getAll("recipients");

  const insertRecipient = db.prepare(`

INSERT INTO campaign_recipients

(
campaign_id,
recipient_id
)

VALUES
(
?,
?
)

`);

  for (const recipient of recipients) {
    insertRecipient.run(
      campaignId,

      Number(recipient),
    );
  }

  db.prepare(
    `
INSERT INTO schedules

(
campaign_id,
frequency,
start_date,
next_run
)

VALUES
(
?,
?,
?,
?
)

`,
  ).run(
    campaignId,

    frequency,

    startDate,

    new Date(startDate).toISOString(),
  );

  revalidatePath("/dashboard/campaigns");
}

export async function deleteCampaign(id: number) {
  db.prepare(`
        DELETE FROM schedules
        WHERE campaign_id = ?
    `)
    .run(id);



    db.prepare(`
        DELETE FROM campaign_recipients
        WHERE campaign_id = ?
    `)
    .run(id);



    db.prepare(`
        DELETE FROM campaigns
        WHERE id = ?
    `)
    .run(id);


  revalidatePath("/dashboard/campaigns");
}

export async function toggleCampaign(id: number, status: string) {
  db.prepare(
    `
        UPDATE campaigns

        SET status = ?

        WHERE id = ?

    `,
  ).run(status, id);

  revalidatePath("/dashboard/campaigns");
}
