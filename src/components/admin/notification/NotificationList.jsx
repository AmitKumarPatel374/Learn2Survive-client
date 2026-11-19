
import { BellOff, Search } from "lucide-react";
import NotificationCard from "./NotificationCard";

export default function NotificationList({
  notifications,
  onViewDetails,
}) {
  if (notifications.length === 0) {
    return (
      <div className="flex min-h-64 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-700 bg-[#0d1424] px-5 py-12 text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-800 text-slate-400">
          <BellOff size={24} />
        </div>

        <h3 className="text-base font-semibold text-white">
          No notifications found
        </h3>

        <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
          Try another search term or choose a different notification type.
        </p>

        <Search size={16} className="mt-4 text-slate-600" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {notifications.map((notification) => (
        <NotificationCard
          key={notification.id}
          notification={notification}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
}
