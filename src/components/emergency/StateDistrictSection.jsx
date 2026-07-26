import { MapPin, Phone, Globe, Mail, Loader2 } from "lucide-react"

const StateDistrictSection = ({
  states = [],
  districts = [],
  stateContacts = [],
  districtContacts = [],
  selectedState,
  selectedDistrict,
  setSelectedState,
  setSelectedDistrict,
  loading,
  search = "",
  selectedCategory = "",
}) => {
  const contacts =
    selectedDistrict && districtContacts.length > 0 ? districtContacts : stateContacts

  const filteredContacts = contacts.filter((contact) => {
    const matchesSearch =
      !search ||
      contact.office?.toLowerCase().includes(search.toLowerCase()) ||
      contact.category?.toLowerCase().includes(search.toLowerCase()) ||
      contact.phone?.includes(search)

    const matchesCategory = !selectedCategory || contact.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <section className="mx-auto mt-16 max-w-7xl px-6">
      <div className="mb-8 flex items-center gap-3">
        <MapPin className="text-cyan-400" />
        <h2 className="text-3xl font-bold">State & District Contacts</h2>
      </div>

      {/* Filters */}

      <div className="grid gap-4 md:grid-cols-2">
        <select
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-3"
        >
          <option value="">Select State</option>

          {states.map((state) => (
            <option
              key={state._id}
              value={state.stateCode}
            >
              {state.name}
            </option>
          ))}
        </select>

        <select
          value={selectedDistrict}
          onChange={(e) => setSelectedDistrict(e.target.value)}
          disabled={!selectedState}
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 disabled:opacity-50"
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

      {/* Loading */}

      {loading && (
        <div className="flex justify-center py-10">
          <Loader2 className="animate-spin" />
        </div>
      )}

      {/* Contacts */}

      {!loading && filteredContacts.length > 0 && (
        <div className="mt-8 space-y-3">
          {filteredContacts.map((contact) => (
            <div
              key={contact._id}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4"
            >
              <div>
                <h3 className="font-semibold">{contact.office}</h3>

                <p className="mt-1 text-sm text-slate-400">{contact.category}</p>

                <div className="mt-2 flex flex-wrap gap-4 text-sm">
                  <span className="flex items-center gap-1">
                    <Phone size={14} />
                    {contact.phone}
                  </span>

                  {contact.email && (
                    <span className="flex items-center gap-1">
                      <Mail size={14} />
                      {contact.email}
                    </span>
                  )}

                  {contact.website && (
                    <a
                      href={contact.website}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 text-cyan-400"
                    >
                      <Globe size={14} />
                      Website
                    </a>
                  )}
                </div>
              </div>

              <button
                onClick={() => window.open(`tel:${contact.phone}`)}
                className="rounded-lg bg-cyan-600 px-5 py-2 font-medium hover:bg-cyan-700"
              >
                Call
              </button>
            </div>
          ))}
        </div>
      )}

      {!loading && selectedState && filteredContacts.length === 0 && (
        <div className="mt-10 rounded-xl border border-dashed border-white/20 py-10 text-center text-slate-400">
          No contacts found.
        </div>
      )}
    </section>
  )
}

export default StateDistrictSection
