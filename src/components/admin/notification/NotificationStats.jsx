
import { Bell, Users, ShieldAlert, Zap } from "lucide-react";

const stats = [
  {
    label: "Total Dispatches",
    value: "24",
    description: "Notifications sent",
    icon: Bell,
    color: "text-indigo-300",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
  },
  {
    label: "Total Enrollees",
    value: "12,480",
    description: "Users reached",
    icon: Users,
    color: "text-cyan-300",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
  {
    label: "Emergency Pushes",
    value: "3",
    description: "Critical notifications",
    icon: ShieldAlert,
    color: "text-rose-300",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
  },
  {
    label: "Average Latency",
    value: "1.2s",
    description: "Dispatch response time",
    icon: Zap,
    color: "text-amber-300",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
];

export default function NotificationStats() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.label}
            className="rounded-2xl border border-slate-800 bg-[#0d1424] p-5 transition duration-200 hover:-translate-y-0.5 hover:border-slate-700"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-slate-400">
                  {stat.label}
                </p>
                <p className="mt-3 text-3xl font-bold tracking-tight text-white">
                  {stat.value}
                </p>
              </div>

              <div
                className={`rounded-xl border p-3 ${stat.bg} ${stat.border} ${stat.color}`}
              >
                <Icon size={21} />
              </div>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              {stat.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
