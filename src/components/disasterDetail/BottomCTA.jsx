import { Phone, ArrowRight, ShieldAlert } from "lucide-react"
import { useState } from "react"

const BottomCTA = ({ disaster }) => {
  const [showContacts, setShowContacts] = useState(false)

  const contacts = disaster?.metadata?.emergencyNumbers || []

  return (
    <section className="px-6 py-10 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border border-[#4edea3]/20 bg-gradient-to-r from-[#1a2a44] via-[#171f33] to-[#0f1729] p-8 backdrop-blur-xl">
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-[#4edea3]/10 blur-[90px]" />
          <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#1e40af]/10 blur-[120px]" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/15">
                <ShieldAlert
                  size={28}
                  className="text-red-400"
                />
              </div>

              <h2 className="text-4xl font-bold text-white">
                Stay Prepared.
                <br />
                Stay Safe.
              </h2>

              <p className="mt-4 text-[17px] leading-8 text-[#c4c5d5]">
                Preparation saves lives. Learn about disaster risks, create an emergency plan and
                stay connected with official alerts before disaster strikes.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setShowContacts(!showContacts)}
                className="flex items-center gap-2 rounded-xl bg-red-500 px-6 py-3 font-semibold text-white transition hover:brightness-110"
              >
                <Phone size={18} />
                Emergency Contacts
              </button>
            </div>
          </div>

          {/* Emergency Contacts */}

          {showContacts && (
            <div className="mt-8 rounded-2xl border border-white/10 bg-[#0f1729] p-6">
              <h3 className="mb-5 text-2xl font-bold text-white">Emergency Contacts</h3>

              <div className="grid gap-4 md:grid-cols-2">
                {contacts.map((contact, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-[#171f33] p-4"
                  >
                    <span className="text-[#c4c5d5]">{contact.name}</span>

                    <a
                      href={`tel:${contact.number}`}
                      className="font-bold text-red-400 hover:underline"
                    >
                      {contact.number}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default BottomCTA
