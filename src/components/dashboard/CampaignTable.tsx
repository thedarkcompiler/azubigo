import CampaignRow from "./CampaignRow";

export default function CampaignTable({ campaigns }: any) {
  return (
    <div className="mt-8 overflow-hidden rounded-xl bg-white shadow">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-4 text-left">Campaign</th>

            <th>Status</th>

            <th>Subject</th>

            <th>Schedule</th>

            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {campaigns.map((campaign: any) => (
            <CampaignRow key={campaign.id} campaign={campaign} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
