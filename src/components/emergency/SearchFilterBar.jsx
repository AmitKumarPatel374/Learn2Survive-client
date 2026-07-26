import { Search } from "lucide-react"

const SearchFilterBar = ({
  search,
  setSearch,
  states,
  selectedState,
  setSelectedState,
  districts,
  selectedDistrict,
  setSelectedDistrict,
}) => {
  return (
    <section className="relative z-10 mx-auto -mt-8 max-w-7xl px-6">
      <div className="rounded-2xl border border-white/10 bg-[#111827]/90 p-5 shadow-xl backdrop-blur-md">
        <div className="grid gap-4 lg:grid-cols-3">
          {/* Search */}
          <div className="relative">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
            />

            <input
              type="text"
              placeholder="Search emergency contacts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-[#0f172a] py-3 pl-11 pr-4 outline-none transition focus:border-red-500"
            />
          </div>

          {/* State */}
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="rounded-xl border border-white/10 bg-[#0f172a] px-4 py-3 outline-none transition focus:border-red-500"
          >
            <option value="">All States</option>

            {states.map((state) => (
              <option
                key={state._id}
                value={state.stateCode}
              >
                {state.name}
              </option>
            ))}
          </select>

          {/* District */}
          <select
            value={selectedDistrict}
            onChange={(e) => setSelectedDistrict(e.target.value)}
            disabled={!selectedState}
            className="rounded-xl border border-white/10 bg-[#0f172a] px-4 py-3 outline-none transition disabled:cursor-not-allowed disabled:opacity-50 focus:border-red-500"
          >
            <option value="">All Districts</option>

            {districts.map((district) => (
              <option
                key={district._id}
                value={district.name}
              >
                {district.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  )
}

export default SearchFilterBar
