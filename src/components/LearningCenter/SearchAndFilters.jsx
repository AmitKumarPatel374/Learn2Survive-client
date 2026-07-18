import { Search } from "lucide-react"

const filters = [
  { label: "All", value: "all" },
  { label: "Natural", value: "Natural" },
  { label: "Man-Made", value: "Man-Made" },
]

const SearchAndFilters = ({
  search,
  setSearch,
  selectedFilter,
  setSelectedFilter,
}) => {
  return (
    <section className="px-6 py-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Search */}

        <div className="relative">
          <Search
            size={20}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-[#8e909f]"
          />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search disaster learning modules..."
            className="h-14 w-full rounded-2xl border border-white/10 bg-[#171f33]/40 pl-14 pr-5 text-white placeholder:text-[#8e909f] backdrop-blur-xl outline-none transition focus:border-[#b8c4ff]/40"
          />
        </div>

        {/* Filters */}

        <div className="mt-6 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setSelectedFilter(filter.value)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition
                ${
                  selectedFilter === filter.value
                    ? "bg-[#1e40af] text-white"
                    : "border border-white/10 bg-[#171f33]/40 text-[#c4c5d5] hover:border-[#b8c4ff]/40 hover:text-white"
                }
              `}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SearchAndFilters