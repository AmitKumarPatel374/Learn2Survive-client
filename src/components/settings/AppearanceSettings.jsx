import { Monitor, Moon, Sun } from "lucide-react"

const AppearanceSettings = () => {
  return (
    <section className="px-6 py-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl border border-white/10 bg-[#171f33]/40 p-7 backdrop-blur-xl">
          {/* Header */}

          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1e40af]/10">
              <Moon
                size={24}
                className="text-[#b8c4ff]"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">Appearance</h2>

              <p className="mt-1 text-sm text-[#8e909f]">
                Select your preferred application theme.
              </p>
            </div>
          </div>

          {/* Theme Options */}

          <div className="grid gap-4 md:grid-cols-3">
            {/* Light */}

            <button className="group rounded-2xl border border-white/10 bg-[#0f1729] p-6 transition-all duration-300 hover:border-[#b8c4ff]/30 hover:bg-[#171f33]">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-500/10">
                <Sun
                  size={28}
                  className="text-yellow-400"
                />
              </div>

              <h3 className="text-lg font-semibold text-white">Light</h3>

              <p className="mt-2 text-sm text-[#8e909f]">Bright appearance for daytime use.</p>
            </button>

            {/* Dark */}

            <button className="rounded-2xl border border-[#1e40af] bg-[#1e40af]/20 p-6 shadow-xl transition-all duration-300">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#1e40af]/20">
                <Moon
                  size={28}
                  className="text-[#b8c4ff]"
                />
              </div>

              <h3 className="text-lg font-semibold text-white">Dark</h3>

              <p className="mt-2 text-sm text-[#c4c5d5]">
                Recommended during emergencies and low-light environments.
              </p>
            </button>

            {/* System */}

            <button className="group rounded-2xl border border-white/10 bg-[#0f1729] p-6 transition-all duration-300 hover:border-[#b8c4ff]/30 hover:bg-[#171f33]">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#4edea3]/10">
                <Monitor
                  size={28}
                  className="text-[#4edea3]"
                />
              </div>

              <h3 className="text-lg font-semibold text-white">System</h3>

              <p className="mt-2 text-sm text-[#8e909f]">
                Automatically match your device appearance.
              </p>
            </button>
          </div>

          {/* Note */}

          <div className="mt-8 rounded-2xl border border-[#4edea3]/20 bg-[#4edea3]/5 p-5">
            <p className="text-sm leading-7 text-[#c4c5d5]">
              <span className="font-semibold text-[#4edea3]">Recommendation:</span> Dark mode is
              recommended to reduce eye strain and conserve battery life during power outages or
              emergency situations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppearanceSettings
