import { HeartPulse, PhoneCall, UserRound, Droplets, ShieldAlert } from "lucide-react"
import { useAuth } from "../../../context/AuthContext"

const EmergencyInfo = () => {
    const {user} = useAuth()
  return (
    <section className="px-6 py-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl border-l-4 border-red-500/60 border border-white/10 bg-[#171f33]/40 p-7 backdrop-blur-xl">
          {/* Header */}

          <div className="mb-8 flex items-center gap-3 border-b border-white/10 pb-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10">
              <HeartPulse
                size={22}
                className="text-red-400"
              />
            </div>

            <h3 className="text-lg font-semibold uppercase tracking-[0.2em] text-white">
              Emergency Information
            </h3>
          </div>

          {/* Content */}

          <div className="grid gap-8 md:grid-cols-5">
            {/* Contact Name */}

            <div>
              <div className="mb-3 flex items-center gap-2">
                <UserRound
                  size={16}
                  className="text-[#b8c4ff]"
                />

                <span className="text-xs uppercase tracking-[0.25em] text-[#8e909f]">
                  Contact Name
                </span>
              </div>

              <p className="font-semibold text-white">{user?.emergencyContact?.contactName}</p>
            </div>

            {/* Relationship */}

            <div>
              <div className="mb-3 flex items-center gap-2">
                <ShieldAlert
                  size={16}
                  className="text-[#4edea3]"
                />

                <span className="text-xs uppercase tracking-[0.25em] text-[#8e909f]">
                  Relationship
                </span>
              </div>

              <p className="font-semibold text-white">{user?.emergencyContact?.relationship}</p>
            </div>

            {/* Phone */}

            <div>
              <div className="mb-3 flex items-center gap-2">
                <PhoneCall
                  size={16}
                  className="text-[#ffb95f]"
                />

                <span className="text-xs uppercase tracking-[0.25em] text-[#8e909f]">
                  Phone Number
                </span>
              </div>

              <p className="font-semibold text-white">+91 {user?.emergencyContact?.emergencyNumber}</p>
            </div>

            {/* Blood Group */}

            <div>
              <div className="mb-3 flex items-center gap-2">
                <Droplets
                  size={16}
                  className="text-red-400"
                />

                <span className="text-xs uppercase tracking-[0.25em] text-[#8e909f]">
                  Blood Group
                </span>
              </div>

              <p className="font-semibold text-red-400">{user?.emergencyContact?.bloodGroup}</p>
            </div>

            {/* Medical */}

            <div>
              <div className="mb-3 flex items-center gap-2">
                <HeartPulse
                  size={16}
                  className="text-red-400"
                />

                <span className="text-xs uppercase tracking-[0.25em] text-[#8e909f]">
                  Medical Condition
                </span>
              </div>

              <p className="italic text-[#c4c5d5]">{user?.emergencyContact?.medicalConditions}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EmergencyInfo
