import { PhoneCall, Ambulance, Flame, Shield } from "lucide-react"

const iconMap = {
  "National Emergency": PhoneCall,
  Ambulance,
  Fire: Flame,
  "Fire Brigade": Flame,
  Police: Shield,
}

const colorMap = {
  "National Emergency": "bg-red-500/10 text-red-400 border-red-500/20",
  Ambulance: "bg-green-500/10 text-green-400 border-green-500/20",
  Fire: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  "Fire Brigade": "bg-orange-500/10 text-orange-400 border-orange-500/20",
  Police: "bg-blue-500/10 text-blue-400 border-blue-500/20",
}

const priority = ["National Emergency", "Ambulance", "Fire", "Fire Brigade", "Police"]

const QuickEmergencyCards = ({ contacts = [] }) => {
  const sortedContacts = [...contacts]
    .sort((a, b) => priority.indexOf(a.category) - priority.indexOf(b.category))
    .slice(0, 4)

  return (
    <section className="mx-auto mt-12 max-w-7xl px-6">
      <h2 className="mb-8 text-3xl font-bold">Emergency Numbers</h2>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {sortedContacts.map((contact) => {
          const Icon = iconMap[contact.category] || PhoneCall

          return (
            <div
              key={contact._id}
              className={`rounded-2xl border p-5 transition hover:-translate-y-1 ${
                colorMap[contact.category] || "border-white/10 bg-white/5"
              }`}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <Icon size={24} />
              </div>

              <h3 className="text-lg font-semibold">{contact.category}</h3>

              <p className="mt-2 text-3xl font-bold">{contact.phone}</p>

              <button
                onClick={() => window.open(`tel:${contact.phone}`)}
                className="mt-5 w-full rounded-xl bg-red-600 py-2.5 font-semibold transition hover:bg-red-700"
              >
                Call Now
              </button>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default QuickEmergencyCards
