"use client";

import { createCampaign } from "@/app/dashboard/campaigns/actions";

interface Props {
  open: boolean;
  onClose: () => void;
  recipients: any[];
}

export default function NewCampaignModal({ open, onClose, recipients }: Props) {
  if (!open) return null;

  async function handleSubmit(formData: FormData) {
    await createCampaign(formData);
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <form
        action={handleSubmit}
        className="w-full max-w-2xl rounded-xl bg-white p-8"
      >
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Create Campaign</h2>

          <button type="button" onClick={onClose} className="text-2xl">
            ×
          </button>
        </div>

        <div className="space-y-5">
          <div>
            <label className="mb-2 block">Campaign Name</label>

            <input
              name="name"
              required
              className="w-full rounded-lg border p-3"
            />
          </div>

          <div>
            <label className="mb-2 block">Subject</label>

            <input
              name="subject"
              required
              className="w-full rounded-lg border p-3"
            />
          </div>

          <div>
            <label className="mb-2 block">Sender Name</label>

            <input name="sender" className="w-full rounded-lg border p-3" />
          </div>

          <div>
            <label className="mb-2 block">Reply Email</label>

            <input
              type="email"
              name="email"
              className="w-full rounded-lg border p-3"
            />
          </div>

          <div>
            <label className="mb-2 block">Email HTML</label>

            <textarea
              rows={8}
              name="html"
              className="w-full rounded-lg border p-3"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">Recipients</label>

            <div className="max-h-48 overflow-y-auto rounded-lg border p-3">
              {recipients.length === 0 ? (
                <p className="text-gray-500">No recipients found.</p>
              ) : (
                recipients.map((recipient: any) => (
                  <label
                    key={recipient.id}
                    className="mb-2 flex items-center gap-3"
                  >
                    <input
                      type="checkbox"
                      name="recipients"
                      value={recipient.id}
                    />

                    <span>{recipient.email}</span>
                  </label>
                ))
              )}
            </div>
          </div>
          <div>
            <label className="mb-2 block font-semibold">Start Date</label>

            <input
              type="datetime-local"
              name="start_date"
              required
              className="w-full rounded-lg border p-3"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">Send Frequency</label>

            <select
              name="frequency"
              required
              className="w-full rounded-lg border p-3"
            >
              <option value="once">Once</option>

              <option value="minute">Every Minute</option>

              <option value="hourly">Every Hour</option>

              <option value="daily">Every Day</option>

              <option value="weekly">Every Week</option>

              <option value="monthly">Every Month</option>
            </select>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 rounded-lg border p-4"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="w-1/2 rounded-lg bg-blue-600 p-4 text-white hover:bg-blue-700"
            >
              Save Campaign
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
