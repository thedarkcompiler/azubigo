import { checkScheduledEmails } from "./checkScheduledEmails";

let started = false;

export function startWorker() {
  if (started) {
    return;
  }

  started = true;

  console.log("Email automation worker started");

  setInterval(async () => {
    console.log("Checking scheduled campaigns...");

    try {
      await checkScheduledEmails();
    } catch (error) {
      console.error("Scheduler error:", error);
    }
  }, 60000);
}
