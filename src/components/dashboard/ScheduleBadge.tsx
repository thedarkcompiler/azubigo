export default function ScheduleBadge({ schedule }: any) {
  return (
    <div>
      <p>
        Frequency:
        {schedule.frequency}
      </p>

      <p>
        Next:
        {new Date(schedule.next_run).toLocaleString()}
      </p>

      <span>{schedule.status}</span>
    </div>
  );
}
