"use client";

import Link from "next/link";

import {
    LayoutDashboard,
    Mail,
    Users,
    CalendarClock,
    Settings
} from "lucide-react";

const links = [
    {
        name: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        name: "Campaigns",
        href: "/dashboard/campaigns",
        icon: Mail,
    },
    {
        name: "Recipients",
        href: "/dashboard/recipients",
        icon: Users,
    },
    {
        name: "Scheduler",
        href: "/dashboard/scheduler",
        icon: CalendarClock,
    },
    {
        name: "Settings",
        href: "/dashboard/settings",
        icon: Settings,
    },
];

export default function Sidebar() {
    return (
        <aside className="w-72 bg-slate-900 text-white flex flex-col">

            <div className="border-b border-slate-700 p-6">

                <h1 className="text-2xl font-bold">
                    MailFlow
                </h1>

                <p className="text-sm text-slate-400">
                    Email Automation
                </p>

            </div>

            <nav className="flex-1 px-4 py-6">

                {links.map((link) => {

                    const Icon = link.icon;

                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="flex items-center gap-3 rounded-lg px-4 py-3 transition hover:bg-slate-800"
                        >
                            <Icon size={20} />

                            {link.name}

                        </Link>
                    );
                })}

            </nav>

        </aside>
    );
}