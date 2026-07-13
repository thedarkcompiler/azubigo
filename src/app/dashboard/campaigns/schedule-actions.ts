"use server";

import db from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function pauseSchedule(id: number) {
  db.prepare(
    `

UPDATE schedules

SET status='paused'

WHERE id=?

`,
  )

    .run(id);

  revalidatePath("/dashboard/campaigns");
}

export async function resumeSchedule(id: number) {
  db.prepare(
    `

UPDATE schedules

SET status='active'

WHERE id=?

`,
  )

    .run(id);

  revalidatePath("/dashboard/campaigns");
}
