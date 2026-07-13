import CampaignTable from "@/components/dashboard/CampaignTable";
import CampaignControls from "@/components/dashboard/CampaignControls";

import db from "@/lib/db";

export default function CampaignPage() {
  const campaigns = db
    .prepare(
      `
      SELECT

        campaigns.*,

        schedules.frequency,

        schedules.next_run,

        schedules.status AS schedule_status,

        schedules.id AS schedule_id


      FROM campaigns


      LEFT JOIN schedules

      ON campaigns.id = schedules.campaign_id


      ORDER BY campaigns.created_at DESC

      `,
    )
    .all();

  const recipients = db
    .prepare(
      `
      SELECT *
      FROM recipients
      ORDER BY email ASC
      `,
    )
    .all();

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Email Campaigns</h1>

            <p className="text-gray-500">
              Manage your email automation campaigns.
            </p>
          </div>

          <CampaignControls recipients={recipients} />
        </div>

        <CampaignTable campaigns={campaigns} />
      </div>
    </main>
  );
}
