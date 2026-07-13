import { Card } from "@/components/ui/card";
import { ReactNode } from "react";

interface Props {
    title: string;
    value: string;
    icon: ReactNode;
    color: string;
}

export default function StatCard({
    title,
    value,
    icon,
    color,
}: Props) {
    return (
        <Card className="p-6">

            <div className="flex items-center justify-between">

                <div>

                    <p className="text-gray-500">
                        {title}
                    </p>

                    <h2 className="mt-3 text-4xl font-bold">
                        {value}
                    </h2>

                </div>

                <div
                    className={`h-14 w-14 rounded-xl ${color} text-white flex items-center justify-center`}
                >
                    {icon}
                </div>

            </div>

        </Card>
    );
}