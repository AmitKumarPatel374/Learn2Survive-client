import { CalendarDays, MapPin, Sun } from "lucide-react"

const DashboardGreeting = () => {
  return (
    <section className="px-6 pt-10 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-end">
        {/* Left */}

        <div>
          <h1 className="text-4xl font-bold text-white lg:text-5xl">
            Good Morning,
            <span className="text-[#b8c4ff]"> Amit 👋</span>
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-6 text-[#8e909f]">
            <div className="flex items-center gap-2">
              <CalendarDays
                size={18}
                className="text-[#b8c4ff]"
              />

              <span className="text-sm">October 24, 2023 • 09:14 AM</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin
                size={18}
                className="text-[#4edea3]"
              />

              <span className="text-sm">Bhopal, Madhya Pradesh</span>
            </div>
          </div>
        </div>

        {/* Weather Card */}

        <div className="flex items-center gap-4 rounded-full border border-white/10 bg-[#171f33]/50 px-6 py-3 backdrop-blur-xl">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#4edea3]/10">
            <Sun
              size={24}
              className="text-[#4edea3]"
            />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#8e909f]">Weather</p>

            <p className="font-semibold text-white">28°C • AQI 42 (Good)</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DashboardGreeting
