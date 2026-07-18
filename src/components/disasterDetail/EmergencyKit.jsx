import {
  Droplets,
  Pill,
  Flashlight,
  Radio,
  BatteryCharging,
  Backpack,
  Package,
  Utensils,
  Shield,
  HeartPulse,
  Battery,
  Phone,
  FileText,
  Thermometer,
  ShieldAlert,
  Hand,
  Flame,
  Tent,
  MapPinned,
} from "lucide-react"

const iconMap = {
  Droplets: {
    icon: Droplets,
    color: "text-sky-400",
    bg: "bg-sky-500/10",
  },
  Pill: {
    icon: Pill,
    color: "text-red-400",
    bg: "bg-red-500/10",
  },
  Flashlight: {
    icon: Flashlight,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
  },
  Radio: {
    icon: Radio,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  BatteryCharging: {
    icon: BatteryCharging,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  Backpack: {
    icon: Backpack,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
  Utensils: {
    icon: Utensils,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
  Shield: {
    icon: Shield,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  HeartPulse: {
    icon: HeartPulse,
    color: "text-pink-400",
    bg: "bg-pink-500/10",
  },
  Battery: {
    icon: Battery,
    color: "text-lime-400",
    bg: "bg-lime-500/10",
  },
  Phone: {
    icon: Phone,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  FileText: {
    icon: FileText,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
  },
  Thermometer: {
    icon: Thermometer,
    color: "text-rose-400",
    bg: "bg-rose-500/10",
  },
  ShieldAlert: {
    icon: ShieldAlert,
    color: "text-red-400",
    bg: "bg-red-500/10",
  },
  Hand: {
    icon: Hand,
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  Flame: {
    icon: Flame,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
  Tent: {
    icon: Tent,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  MapPinned: {
    icon: MapPinned,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
}

const EmergencyKit = ({ disaster }) => {
  const emergencyKit = disaster?.emergencyKit

  const kitItems = emergencyKit?.items || []

  return (
    <section className="px-6 py-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}

        <div className="mb-8">
          <h2 className="text-[32px] font-bold text-white">
            {emergencyKit?.title || "Emergency Kit Checklist"}
          </h2>

          <p className="mt-2 text-[#8e909f]">{emergencyKit?.description}</p>
        </div>

        {/* Kit Grid */}

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {kitItems.map((item, index) => {
            const config = iconMap[item.icon] || {
              icon: Package,
              color: "text-[#b8c4ff]",
              bg: "bg-[#1e40af]/10",
            }

            const Icon = config.icon

            return (
              <div
                key={index}
                className="group rounded-3xl border border-white/10 bg-[#171f33]/40 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#b8c4ff]/30"
              >
                {/* Icon */}

                <div
                  className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${config.bg}`}
                >
                  <Icon
                    size={28}
                    className={config.color}
                  />
                </div>

                {/* Name + Priority */}

                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold text-white">{item.name}</h3>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      item.priority === "Essential"
                        ? "bg-red-500/10 text-red-300"
                        : item.priority === "Important"
                          ? "bg-yellow-500/10 text-yellow-300"
                          : "bg-blue-500/10 text-blue-300"
                    }`}
                  >
                    {item.priority}
                  </span>
                </div>

                {/* Quantity */}

                <p className="mt-2 text-sm font-medium text-[#b8c4ff]">{item.quantity}</p>

                {/* Description */}

                <p className="mt-3 text-sm leading-7 text-[#8e909f]">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default EmergencyKit
