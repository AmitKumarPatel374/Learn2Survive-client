import { TriangleAlert, ArrowRight, ShieldCheck } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import apiInstance from "../../config/apiInstance"

const AlertBanner = () => {
  const navigate = useNavigate()

  const [alertData, setAlertData] = useState(null)

  useEffect(() => {
    const fetchDisasterAlert = async () => {
      try {
        const response = await apiInstance.get(
          "/disaster-alert/current"
        )

        console.log("DISASTER ALERT:", response.data)

        setAlertData(response.data)
      } catch (error) {
        console.error("Disaster alert error:", error)
      }
    }

    fetchDisasterAlert()
  }, [])

  const alert = alertData?.alerts?.[0]

  return (
    <section className="px-6 py-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border border-red-500/20 bg-gradient-to-r from-red-500/10 via-red-500/5 to-[#171f33]/70 p-7 backdrop-blur-xl">

          {/* Background Glow */}

          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-red-500/10 blur-[90px]" />

          <div className="absolute -left-16 -bottom-16 h-52 w-52 rounded-full bg-[#ffb95f]/10 blur-[80px]" />

          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            {/* Left */}

            <div className="flex flex-1 items-start gap-5">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-500">

                <TriangleAlert
                  size={30}
                  className="text-white"
                />

              </div>

              <div>

                <span className="rounded-full bg-red-500/20 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-red-300">
                  Emergency Alert
                </span>

                <h2 className="mt-3 text-[34px] font-bold text-red-300">
                  🚨 {alert?.details?.event || "Emergency Alert"}
                </h2>

                <p className="mt-3 max-w-3xl text-[17px] leading-8 text-[#d7d9e5]">
                  {alert?.details?.headline ||
                    "No active disaster alert is currently available for your area."}
                </p>

              </div>

            </div>

            {/* Right */}

            <div className="flex shrink-0 items-center gap-3">

              <button
                onClick={() =>
                   navigate(`/dashboard/disaster/detail/${alert.id}`)
                }
                className="flex items-center gap-2 whitespace-nowrap rounded-xl bg-red-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:brightness-110 active:scale-95"
              >
                View Details

                <ArrowRight size={16} />
              </button>

              <button
                className="flex items-center gap-2 whitespace-nowrap rounded-xl border border-red-400/30 px-6 py-3 text-sm font-semibold text-red-300 transition-all duration-300 hover:bg-red-500/10 active:scale-95"
              >
                <ShieldCheck size={16} />

                Safety Guide
              </button>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default AlertBanner