
import {
  Bell,
  Settings,
  ShieldAlert,
  Users,
  Clock3,
  ChevronRight,
  Eye,
} from "lucide-react";

const typeStyles = {
  System: {
    icon: Settings,
    color: "text-cyan-300",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
  Emergency: {
    icon: ShieldAlert,
    color: "text-rose-300",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
  },
  Announcement: {
    icon: Users,
    color: "text-indigo-300",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
  },
  Reminder: {
    icon: Bell,
    color: "text-amber-300",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
};

export default function NotificationCard({
  notification,
  onViewDetails,
}) {
  const style = typeStyles[notification.type] || typeStyles.System;
  const Icon = style.icon;

  return (
    <article className="group rounded-2xl border border-slate-800 bg-[#0d1424] p-5 transition duration-200 hover:border-slate-700 hover:bg-[#10192b] sm:p-6">
      <div className="flex items-start gap-4">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${style.bg} ${style.border} ${style.color}`}
        >
          <Icon size={21} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="break-words text-base font-semibold text-white">
              {notification.title}
            </h4>

            <span
              className={`rounded-md border px-2 py-1 text-[10px] font-bold uppercase tracking-wider ${style.bg} ${style.border} ${style.color}`}
            >
              {notification.type}
            </span>
          </div>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            {notification.message}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <Clock3 size={14} />
              {notification.date} · {notification.time}
            </span>

            <span className="inline-flex items-center gap-1.5">
              <Users size={14} />
              {notification.target}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-4">
        <span className="inline-flex items-center gap-2 text-xs font-medium text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          {notification.status}
        </span>

        <button
          type="button"
          onClick={() => onViewDetails(notification)}
          className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-3 py-2 text-xs font-semibold text-slate-300 transition hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-indigo-300"
        >
          <Eye size={14} />
          View Details
          <ChevronRight size={14} className="transition group-hover:translate-x-0.5" />
        </button>
      </div>
    </article>
  );
}
