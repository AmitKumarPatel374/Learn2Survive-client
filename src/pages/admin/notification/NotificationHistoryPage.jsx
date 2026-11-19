import { useMemo, useState } from "react";
import {
  Bell,
  ChevronDown,
  LayoutDashboard,
  Send,
  Settings,
  ShieldCheck,
  Users,
  RefreshCw,
  History,
} from "lucide-react";

import NotificationStats from "../../../components/admin/notification/NotificationStats";
import NotificationFilters from "../../../components/admin/notification/NotificationFilters";
import NotificationList from "../../../components/admin/notification/NotificationList";
import NotificationDetailsModal from "../../../components/admin/notification/NotificationDetailsModal";

const initialNotifications = [
  {
    id: 1,
    title: "System Maintenance Scheduled",
    message:
      "Scheduled maintenance will take place tonight. Some services may be temporarily unavailable.",
    type: "System",
    status: "Delivered",
    date: "Oct 22, 2026",
    time: "10:30 AM",
    target: "All Users (12,480)",
    recipients: "12,480",
    read: "10,240",
    icon: "settings",
  },
  {
    id: 2,
    title: "Emergency Security Update",
    message:
      "A critical security update is available. Please update your application as soon as possible.",
    type: "Emergency",
    status: "Delivered",
    date: "Oct 21, 2026",
    time: "04:15 PM",
    target: "All Users (12,480)",
    recipients: "12,480",
    read: "11,980",
    icon: "shield",
  },
  {
    id: 3,
    title: "New Course Available",
    message:
      "A new learning module has been added. Explore the latest course material in your dashboard.",
    type: "Announcement",
    status: "Delivered",
    date: "Oct 20, 2026",
    time: "09:00 AM",
    target: "All Students (12,000)",
    recipients: "12,000",
    read: "8,450",
    icon: "users",
  },
  {
    id: 4,
    title: "Weekly Learning Reminder",
    message:
      "Keep your learning streak alive. Complete your weekly learning goals today.",
    type: "Reminder",
    status: "Delivered",
    date: "Oct 18, 2026",
    time: "11:45 AM",
    target: "Active Students (8,200)",
    recipients: "8,200",
    read: "6,150",
    icon: "bell",
  },
  {
    id: 5,
    title: "Platform Update",
    message:
      "The platform has been updated with performance improvements and bug fixes.",
    type: "System",
    status: "Delivered",
    date: "Oct 16, 2026",
    time: "02:30 PM",
    target: "All Users (12,480)",
    recipients: "12,480",
    read: "9,600",
    icon: "settings",
  },
  {
    id: 6,
    title: "Important Account Notice",
    message:
      "Please review your account details and ensure your profile information is up to date.",
    type: "Announcement",
    status: "Delivered",
    date: "Oct 14, 2026",
    time: "08:30 AM",
    target: "Registered Users (12,480)",
    recipients: "12,480",
    read: "10,100",
    icon: "shield",
  },
];

export default function NotificationHistoryPage() {
  const [notifications] = useState(initialNotifications);
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const filteredNotifications = useMemo(() => {
    return notifications.filter((notification) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        notification.title.toLowerCase().includes(searchText) ||
        notification.message.toLowerCase().includes(searchText);

      const matchesType =
        selectedType === "All Types" ||
        notification.type === selectedType;

      return matchesSearch && matchesType;
    });
  }, [notifications, search, selectedType]);

  const handleRefresh = () => {
    setRefreshing(true);

    // Demo refresh animation. Connect your API here for real data.
    setTimeout(() => setRefreshing(false), 700);
  };

  return (
    <div className="min-h-screen bg-[#080d18] text-slate-200">
      {/* Admin Header */}
      <header className="sticky top-0 z-30 border-b border-slate-800 bg-[#0b1120]/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/20">
              <ShieldCheck size={22} />
            </div>

            <div>
              <h1 className="text-base font-bold tracking-wide text-white sm:text-lg">
                Learn2Survive
              </h1>
              <p className="text-xs text-slate-500">Administration Panel</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-400 sm:flex">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              System Online
            </span>

            <button
              type="button"
              aria-label="Notifications"
              className="relative rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white"
            >
              <Bell size={20} />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-indigo-400" />
            </button>

            <button
              type="button"
              className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900 px-2 py-2 transition hover:bg-slate-800 sm:px-3"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-500 text-xs font-bold text-white">
                A
              </div>
              <span className="hidden text-sm font-medium sm:block">Admin</span>
              <ChevronDown size={15} className="text-slate-500" />
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1600px]">
        {/* Sidebar */}
        <aside className="hidden w-64 shrink-0 border-r border-slate-800 px-4 py-6 lg:block">
          <p className="mb-4 px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">
            Main Menu
          </p>

          <nav className="space-y-1">
            <a
              href="/admin"
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-400 transition hover:bg-slate-800 hover:text-white"
            >
              <LayoutDashboard size={18} />
              Dashboard
            </a>

            <a
              href="/admin/users"
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-400 transition hover:bg-slate-800 hover:text-white"
            >
              <Users size={18} />
              Users
            </a>

            <a
              href="/admin/notifications"
              aria-current="page"
              className="flex items-center gap-3 rounded-xl border border-indigo-500/20 bg-indigo-500/10 px-3 py-3 text-sm font-semibold text-indigo-300"
            >
              <History size={18} />
              Notification History
            </a>

            <a
              href="/admin/settings"
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-400 transition hover:bg-slate-800 hover:text-white"
            >
              <Settings size={18} />
              Settings
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="min-w-0 flex-1 px-4 py-7 sm:px-6 lg:px-8 lg:py-10">
          <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <div className="mb-2 flex items-center gap-2 text-xs text-slate-500">
                <span>Admin</span>
                <span>/</span>
                <span className="text-indigo-400">Notification History</span>
              </div>

              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Notification History
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
                Track, search and review notifications sent to your users.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={handleRefresh}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:border-slate-600 hover:bg-slate-800"
              >
                <RefreshCw
                  size={16}
                  className={refreshing ? "animate-spin" : ""}
                />
                Refresh
              </button>

              <button
                type="button"
                onClick={() =>
                  window.alert("Connect this button to your Send Notification page.")
                }
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-500"
              >
                <Send size={16} />
                Send Notification
              </button>
            </div>
          </div>

          <NotificationStats />

          <section className="mt-8">
            <div className="mb-5">
              <h3 className="text-lg font-semibold text-white">
                Recent Notifications
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Browse and manage your notification history.
              </p>
            </div>

            <NotificationFilters
              search={search}
              setSearch={setSearch}
              selectedType={selectedType}
              setSelectedType={setSelectedType}
            />

            <div className="mt-5">
              <NotificationList
                notifications={filteredNotifications}
                onViewDetails={setSelectedNotification}
              />
            </div>

            <div className="mt-6 flex flex-col gap-3 border-t border-slate-800 pt-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
              <p>
                Showing{" "}
                <span className="font-semibold text-slate-300">
                  {filteredNotifications.length}
                </span>{" "}
                of {notifications.length} notifications
              </p>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled
                  className="rounded-lg border border-slate-800 px-3 py-2 opacity-40"
                >
                  Previous
                </button>
                <span className="rounded-lg border border-indigo-500/30 bg-indigo-500/10 px-3 py-2 font-semibold text-indigo-300">
                  1
                </span>
                <button
                  type="button"
                  disabled
                  className="rounded-lg border border-slate-800 px-3 py-2 opacity-40"
                >
                  Next
                </button>
              </div>
            </div>
          </section>

          <footer className="mt-12 border-t border-slate-800 pt-6 text-center text-xs text-slate-600 sm:text-left">
            © 2026 Learn2Survive. Admin Dashboard.
          </footer>
        </main>
      </div>

      <NotificationDetailsModal
        notification={selectedNotification}
        onClose={() => setSelectedNotification(null)}
      />
    </div>
  );
}
