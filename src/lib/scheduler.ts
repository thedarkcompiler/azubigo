export function calculateNextRun(frequency: string, current: Date) {
  const date = new Date(current);

  switch (frequency) {
    case "minute":
      date.setMinutes(date.getMinutes() + 1);
      return date;

    case "hourly":
      date.setHours(date.getHours() + 1);
      return date;

    case "daily":
      date.setDate(date.getDate() + 1);
      break;

    case "weekly":
      date.setDate(date.getDate() + 7);
      break;

    case "monthly":
      date.setMonth(date.getMonth() + 1);
      break;

    case "once":
      return null;
  }

  return date;
}
