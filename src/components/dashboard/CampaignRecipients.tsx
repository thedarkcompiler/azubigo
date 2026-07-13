import db from "@/lib/db";

export default function CampaignRecipients({
  campaignId,
}: {
  campaignId: number;
}) {
  const recipients = db
    .prepare(
      `

SELECT recipients.*

FROM recipients

JOIN campaign_recipients

ON recipients.id =
campaign_recipients.recipient_id

WHERE campaign_recipients.campaign_id = ?

`,
    )
    .all(campaignId);

  return (
    <div>
      <h3 className="font-bold mb-3">Recipients</h3>

      <ul>
        {recipients.map((r: any) => (
          <li key={r.id}>{r.email}</li>
        ))}
      </ul>
    </div>
  );
}
