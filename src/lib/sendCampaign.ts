import db from "./db";
import { sendEmail } from "./mail";

export async function sendCampaign(campaignId: number) {
  const campaign = db
    .prepare(
      `

SELECT *

FROM campaigns

WHERE id=?

`,
    )
    .get(campaignId) as any;

  if(!campaign){

    console.log(
        "Skipping missing campaign:",
        campaignId
    );

    return;

}

  const recipients = db
    .prepare(
      `

SELECT recipients.*

FROM recipients

JOIN campaign_recipients

ON recipients.id =
campaign_recipients.recipient_id

WHERE campaign_recipients.campaign_id=?

`,
    )
    .all(campaignId) as any[];

  for (const recipient of recipients) {
    try {
      await sendEmail({
        to: recipient.email,

        subject: campaign.subject,

        html: campaign.html,
      });

      db.prepare(
        `

        INSERT INTO email_logs

        (
        campaign_id,
        recipient_id,
        status
        )

        VALUES
        (
        ?,
        ?,
        ?
        )

        `,
      ).run(
        campaignId,

        recipient.id,

        "sent",
      );
    } catch (error: any) {
      db.prepare(
        `

        INSERT INTO email_logs

        (
        campaign_id,
        recipient_id,
        status,
        error
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

        recipient.id,

        "failed",

        error.message,
      );
    }
  }
}
