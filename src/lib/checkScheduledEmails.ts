import db from "./db";
import { calculateNextRun } from "./scheduler";
import {sendCampaign} from "./sendCampaign";

interface ScheduleJob {
  id: number;
  campaign_id: number;
  frequency: string;
  start_date: string;
  next_run: string;
  status: string;
}

export async function checkScheduledEmails() {
      console.log("Scheduler started");
      
  // const jobs = db
  //   .prepare(
  //     `
  //           SELECT *
  //           FROM schedules
  //           WHERE status = 'active'
  //           AND next_run <= datetime('now')
  //       `,
  //   )
  //   .all() as ScheduleJob[];

  const jobs = db.prepare(`
    SELECT *
    FROM schedules
`).all() as ScheduleJob[];


console.log("ALL SCHEDULES:", jobs);

  for (const job of jobs) {
    await sendCampaign(job.campaign_id);

    const next = calculateNextRun(job.frequency, new Date(job.next_run));

    if (next) {
      db.prepare(
        `
                UPDATE schedules

                SET next_run = ?

                WHERE id = ?

            `,
      ).run(next.toISOString(), job.id);
    } else {
      db.prepare(
        `
                UPDATE schedules

                SET status = 'completed'

                WHERE id = ?

            `,
      ).run(job.id);
    }
  }
}
