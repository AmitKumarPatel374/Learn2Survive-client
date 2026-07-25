import { useEffect, useState } from "react"
import {
  HeartPulse,
  Flame,
  Shield,
  AlertTriangle,
  Hospital,
  Building2,
  Baby,
  PhoneCall,
  Users,
  Loader2,
} from "lucide-react"

import apiInstance from "../../config/apiInstance"

const iconMap = {
  Hospital: Hospital,
  Ambulance: HeartPulse,
  Fire: Flame,
  "Fire Brigade": Flame,
  Police: Shield,
  "Women Helpline": Users,
  "Child Helpline": Baby,
  "Disaster Management": AlertTriangle,
  "State Disaster Management Authority": Building2,
  "National Emergency": PhoneCall,
}

const colorMap = {
  Hospital: "bg-red-500/10 text-red-400",
  Ambulance: "bg-green-500/10 text-green-400",
  Fire: "bg-orange-500/10 text-orange-400",
  "Fire Brigade": "bg-orange-500/10 text-orange-400",
  Police: "bg-blue-500/10 text-blue-400",
  "Women Helpline": "bg-pink-500/10 text-pink-400",
  "Child Helpline": "bg-yellow-500/10 text-yellow-400",
  "Disaster Management": "bg-cyan-500/10 text-cyan-400",
  "State Disaster Management Authority":
    "bg-indigo-500/10 text-indigo-400",
  "National Emergency":
    "bg-red-500/10 text-red-400",
}

const EmergencyServicesGrid = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchCategories = async () => {
    try {
      const { data } = await apiInstance.get(
        "/emergency/categories"
      )

      setCategories(data.data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center py-10">
        <Loader2 className="animate-spin" />
      </div>
    )
  }

  return (
    <section className="mx-auto mt-16 max-w-7xl px-6">

      <div className="mb-8 flex items-center gap-3">
        <AlertTriangle className="text-yellow-400" />
        <h2 className="text-3xl font-bold">
          Emergency Services
        </h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {categories.map((category) => {

          const Icon = iconMap[category] || PhoneCall

          return (
            <div
              key={category}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-indigo-500"
            >

              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${
                  colorMap[category] ||
                  "bg-indigo-500/10 text-indigo-400"
                }`}
              >
                <Icon size={24} />
              </div>

              <h3 className="text-lg font-semibold">
                {category}
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Verified emergency service contact.
              </p>

              <button
                className="mt-5 w-full rounded-xl border border-indigo-500 bg-indigo-600 py-2.5 font-medium transition hover:bg-indigo-700"
              >
                View Details
              </button>

            </div>
          )
        })}
      </div>
    </section>
  )
}

export default EmergencyServicesGrid