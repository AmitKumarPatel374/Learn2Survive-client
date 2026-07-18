import { Search } from "lucide-react"

const filters = [
  { label: "All", value: "all" },
  { label: "Not Attempted", value: "notAttempted" },
  { label: "Completed", value: "completed" },
  { label: "Natural Disasters", value: "Natural" },
  { label: "Man-Made Disasters", value: "Man-Made" },
]

const QuizSearchFilter = ({
  search,
  setSearch,
  selectedFilter,
  setSelectedFilter,
}) => {
  return (
    <section className="px-6 py-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Search */}

        <div className="relative md:hidden">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8e909f]"
          />

          <input
            type="text"
            placeholder="Search quiz..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-[#171f33]/60 py-3 pl-11 pr-4 text-white outline-none transition focus:border-[#3755c3]"
          />
        </div>

        {/* Filters */}

        <div className="mt-5 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setSelectedFilter(filter.value)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                selectedFilter === filter.value
                  ? "bg-[#1e40af] text-white"
                  : "border border-white/10 bg-[#171f33]/40 text-[#c4c5d5] hover:bg-[#222a3d]"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default QuizSearchFilter