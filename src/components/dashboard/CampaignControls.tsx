"use client";

import { useState } from "react";
import NewCampaignModal from "./NewCampaignModal";


export default function CampaignControls({ recipients }: any) {

    const [open, setOpen] = useState(false);


    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
            >
                + New Campaign
            </button>


            <NewCampaignModal
                open={open}
                recipients={recipients}
                onClose={() => setOpen(false)}
            />
        </>
    );
}