import { Phone, Globe, Mail, PhoneCall } from "lucide-react"

const NationalHelplineList = ({ contacts = [], search = "", selectedCategory = "" }) => {
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
        <Phone className="text-green-400" />
        <h2 className="text-3xl font-bold">National Emergency Helplines</h2>
      </div>

      {filteredContacts.length === 0 ? (
        <div className="rounded-xl border border-white/10 bg-white/5 p-8 text-center text-slate-400">
          No emergency contacts found.
        </div>
      ) : (
        <div className="space-y-3">
          {filteredContacts.map((contact) => (
            <div
              key={contact._id}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-green-500 hover:bg-white/10"
            >
              {/* Left */}
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-500/10">
                  <PhoneCall
                    className="text-green-400"
                    size={20}
                  />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{contact.office}</h3>

                    <span className="rounded-full bg-green-500/10 px-2 py-0.5 text-xs text-green-400">
                      {contact.category}
                    </span>
                  </div>

                  <div className="mt-1 flex flex-wrap items-center gap-4 text-sm text-slate-400">
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
                        className="flex items-center gap-1 text-cyan-400 hover:underline"
                      >
                        <Globe size={14} />
                        Website
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Right */}
              <button
                onClick={() => window.open(`tel:${contact.phone}`)}
                className="rounded-lg bg-green-600 px-5 py-2 text-sm font-semibold transition hover:bg-green-700"
              >
                Call
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default NationalHelplineList
