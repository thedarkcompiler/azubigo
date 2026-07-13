"use server";

import db from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createRecipient(formData: FormData) {
  const email = formData.get("email") as string;

  const first = formData.get("first_name") as string;

  const last = formData.get("last_name") as string;

  db.prepare(
    `
INSERT INTO recipients
(
email,
first_name,
last_name
)

VALUES
(
?,
?,
?
)

`,
  ).run(email, first, last);

  revalidatePath("/dashboard/recipients");
}

export async function deleteRecipient(id: number) {
  db.prepare(
    `
DELETE FROM recipients
WHERE id = ?
`,
  ).run(id);

  revalidatePath("/dashboard/recipients");
}
