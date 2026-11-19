
import { Search, SlidersHorizontal, X } from "lucide-react";

const notificationTypes = [
  "All Types",
  "System",
  "Emergency",
  "Announcement",
  "Reminder",
];

export default function NotificationFilters({
  search,
  setSearch,
  selectedType,
  setSelectedType,
}) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-[#0d1424] p-4 md:flex-row md:items-center">
      <div className="relative min-w-0 flex-1">
        <Search
          size={18}
          className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500"
        />

        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search by notification title or message..."
          aria-label="Search notifications"
          className="w-full rounded-xl border border-slate-700 bg-[#080d18] py-3 pl-11 pr-10 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
        />

        {search && (
          <button
            type="button"
            aria-label="Clear search"
            onClick={() => setSearch("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-slate-500 hover:bg-slate-800 hover:text-white"
          >
            <X size={15} />
          </button>
        )}
      </div>

      <div className="flex items-center gap-3">
        <SlidersHorizontal size={17} className="text-slate-500" />

        <select
          value={selectedType}
          onChange={(event) => setSelectedType(event.target.value)}
          aria-label="Filter by notification type"
          className="w-full min-w-40 rounded-xl border border-slate-700 bg-[#080d18] px-3 py-3 text-sm text-slate-300 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 md:w-auto"
        >
          {notificationTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
