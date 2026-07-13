"use client";

import { useState } from "react";
import AddRecipientModal from "./AddRecipientModel";

export default function AddRecipient() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="
rounded-lg
bg-blue-600
px-5
py-3
text-white
"
      >
        + Add Recipient
      </button>

      <AddRecipientModal open={open} close={() => setOpen(false)} />
    </>
  );
}
