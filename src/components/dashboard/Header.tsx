import { Bell } from "lucide-react";

export default function Header() {
    return (
        <header className="h-20 bg-white border-b flex items-center justify-between px-8">

            <div>

                <input
                    placeholder="Search campaigns..."
                    className="w-80 rounded-lg border p-3 outline-none focus:ring-2 focus:ring-blue-500"
                />

            </div>

            <div className="flex items-center gap-6">

                <Bell className="cursor-pointer" />

                <div className="flex items-center gap-3">

                    <div className="h-11 w-11 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                        A
                    </div>

                    <div>

                        <p className="font-semibold">
                            Admin
                        </p>

                        <p className="text-sm text-gray-500">
                            administrator
                        </p>

                    </div>

                </div>

            </div>

        </header>
    );
}