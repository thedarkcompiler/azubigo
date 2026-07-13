import {
  deleteCampaign,
  toggleCampaign,
} from "@/app/dashboard/campaigns/actions";

import ScheduleBadge from "./ScheduleBadge";

export default function CampaignRow({ campaign }: any) {
  return (
    <tr className="border-t">
      {/* Campaign Name */}
      <td className="p-5 font-medium">{campaign.name}</td>

      {/* Campaign Status */}
      <td>
        <span
          className={`
          rounded-full px-3 py-1 text-sm text-white

          ${
            campaign.status === "active"
              ? "bg-green-500"
              : campaign.status === "paused"
                ? "bg-yellow-500"
                : "bg-gray-500"
          }

          `}
        >
          {campaign.status}
        </span>
      </td>

      {/* Subject */}
      <td>{campaign.subject}</td>

      {/* Schedule */}
      <td className="p-5">
        <ScheduleBadge
          schedule={{
            frequency: campaign.frequency,
            next_run: campaign.next_run,
            status: campaign.schedule_status,
          }}
        />
      </td>

      {/* Actions */}
      <td>
        <div className="flex gap-2">
          <form
            action={toggleCampaign.bind(
              null,
              campaign.id,
              campaign.status === "active" ? "paused" : "active",
            )}
          >
            <button
              className="
              rounded
              bg-yellow-500
              px-3
              py-1
              text-white
              "
            >
              {campaign.status === "active" ? "Pause" : "Resume"}
            </button>
          </form>

          <form action={deleteCampaign.bind(null, campaign.id)}>
            <button
              className="
              rounded
              bg-red-600
              px-3
              py-1
              text-white
              "
            >
              Delete
            </button>
          </form>
        </div>
      </td>
    </tr>
  );
}
