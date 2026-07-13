"use client";

import { createRecipient } from "@/app/dashboard/recipients/actions";

interface Props {
  open: boolean;

  close: () => void;
}

export default function AddRecipientModal({ open, close }: Props) {
  if (!open) return null;

  return (
    <div
      className="
fixed
inset-0
bg-black/40
flex
items-center
justify-center
"
    >
      <form
        action={createRecipient}
        className="
bg-white
rounded-xl
p-8
w-full
max-w-lg
space-y-5
"
      >
        <h2 className="text-2xl font-bold">Add Recipient</h2>

        <input
          name="email"
          placeholder="Email address"
          type="email"
          className="w-full border p-3 rounded"
        />

        <input
          name="first_name"
          placeholder="First name"
          className="w-full border p-3 rounded"
        />

        <input
          name="last_name"
          placeholder="Last name"
          className="w-full border p-3 rounded"
        />

        <div className="flex gap-3">
          <button
            type="button"
            onClick={close}
            className="
border
px-5
py-3
rounded
"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="
bg-blue-600
text-white
px-5
py-3
rounded
"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
