import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";
import StatCard from "@/components/dashboard/StatCard";

import {
    Mail,
    Users,
    CalendarClock,
    Send
} from "lucide-react";

export default function DashboardPage() {
    return (
        <div className="flex min-h-screen bg-slate-100">

            <Sidebar />

            <main className="flex-1">

                <Header />

                <div className="p-8">

                    <h1 className="text-3xl font-bold">
                        Dashboard
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Manage your automated email campaigns.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

                        <StatCard
                            title="Active Campaigns"
                            value="12"
                            icon={<Mail size={26} />}
                            color="bg-blue-500"
                        />

                        <StatCard
                            title="Recipients"
                            value="3,241"
                            icon={<Users size={26} />}
                            color="bg-green-500"
                        />

                        <StatCard
                            title="Scheduled"
                            value="18"
                            icon={<CalendarClock size={26} />}
                            color="bg-orange-500"
                        />

                        <StatCard
                            title="Emails Sent"
                            value="54,212"
                            icon={<Send size={26} />}
                            color="bg-purple-500"
                        />

                    </div>

                    <div className="mt-10 rounded-xl bg-white p-6 shadow">

                        <h2 className="text-xl font-semibold">
                            Recent Campaigns
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Campaign table coming next.
                        </p>

                    </div>

                </div>

            </main>

        </div>
    );
}