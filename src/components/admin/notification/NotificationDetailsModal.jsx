
import { useEffect } from "react";
import {
  X,
  Bell,
  CalendarDays,
  Users,
  CheckCircle2,
  Clock3,
  Send,
} from "lucide-react";

export default function NotificationDetailsModal({
  notification,
  onClose,
}) {
  useEffect(() => {
    if (!notification) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [notification, onClose]);

  if (!notification) return null;

  const details = [
    {
      label: "Notification Type",
      value: notification.type,
      icon: Bell,
    },
    {
      label: "Date Sent",
      value: `${notification.date}, ${notification.time}`,
      icon: CalendarDays,
    },
    {
      label: "Target Audience",
      value: notification.target,
      icon: Users,
    },
    {
      label: "Delivery Status",
      value: notification.status,
      icon: CheckCircle2,
    },
    {
      label: "Total Recipients",
      value: notification.recipients,
      icon: Send,
    },
    {
      label: "Read Count",
      value: notification.read,
      icon: Clock3,
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="notification-modal-title"
        className="my-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-700 bg-[#0d1424] shadow-2xl shadow-black/40"
      >
        <div className="flex items-start justify-between gap-4 border-b border-slate-800 px-5 py-5 sm:px-6">
          <div className="flex items-start gap-3">
            <div className="rounded-xl border border-indigo-500/20 bg-indigo-500/10 p-3 text-indigo-300">
              <Bell size={21} />
            </div>

            <div>
              <h2
                id="notification-modal-title"
                className="text-lg font-bold text-white"
              >
                Notification Details
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Review notification information and delivery metrics.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close details"
            className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        <div className="max-h-[70vh] space-y-6 overflow-y-auto p-5 sm:p-6">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Notification Title
            </p>
            <h3 className="text-xl font-bold text-white">
              {notification.title}
            </h3>
            <p className="mt-3 whitespace-pre-wrap text-sm leading-7 text-slate-400">
              {notification.message}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {details.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="rounded-xl border border-slate-800 bg-[#080d18] p-4"
                >
                  <div className="mb-3 flex items-center gap-2 text-slate-500">
                    <Icon size={16} />
                    <span className="text-xs">{item.label}</span>
                  </div>

                  <p className="break-words text-sm font-semibold text-slate-200">
                    {item.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-end border-t border-slate-800 px-5 py-4 sm:px-6">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-500"
          >
            Close
          </button>
        </div>
      </section>
    </div>
  );
}
