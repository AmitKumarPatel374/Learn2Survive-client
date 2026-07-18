import { CheckCircle2, Gamepad2, Award, MapPin, Laptop } from "lucide-react"

const ActivitySection = () => {
  return (
    <section className="px-6 py-6 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
        {/* ================= Recent Activity ================= */}

        <div className="rounded-3xl border border-white/10 bg-[#171f33]/40 p-6 backdrop-blur-xl">
          <h2 className="mb-5 text-[32px] font-bold text-white">Recent Activity</h2>

          <div className="space-y-3">
            {/* Activity 1 */}

            <div className="flex items-center gap-4 rounded-xl bg-[#0f1729] px-4 py-3 transition hover:bg-[#1b2238]">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#4edea3]/10">
                <CheckCircle2
                  size={20}
                  className="text-[#4edea3]"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">Quiz Completed</h3>

                <p className="text-sm text-[#8e909f]">Emergency First Aid (Level 2)</p>

                <span className="mt-1 block text-[11px] uppercase tracking-[0.25em] text-[#8e909f]">
                  2 Hours Ago
                </span>
              </div>
            </div>

            {/* Activity 2 */}

            <div className="flex items-center gap-4 rounded-xl bg-[#0f1729] px-4 py-3 transition hover:bg-[#1b2238]">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ffb95f]/10">
                <Gamepad2
                  size={20}
                  className="text-[#ffb95f]"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">Simulation Started</h3>

                <p className="text-sm text-[#8e909f]">Urban Earthquake Response</p>

                <span className="mt-1 block text-[11px] uppercase tracking-[0.25em] text-[#8e909f]">
                  Yesterday
                </span>
              </div>
            </div>

            {/* Activity 3 */}

            <div className="flex items-center gap-4 rounded-xl bg-[#0f1729] px-4 py-3 transition hover:bg-[#1b2238]">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1e40af]/10">
                <Award
                  size={20}
                  className="text-[#b8c4ff]"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">Badge Earned</h3>

                <p className="text-sm text-[#8e909f]">Flood Safety Specialist</p>

                <span className="mt-1 block text-[11px] uppercase tracking-[0.25em] text-[#8e909f]">
                  3 Days Ago
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= Upcoming Drills ================= */}

        <div className="rounded-3xl border border-white/10 bg-[#171f33]/40 p-6 backdrop-blur-xl">
          <h2 className="mb-5 text-[32px] font-bold text-white">Upcoming Drills</h2>

          <div className="space-y-4">
            {/* Drill 1 */}

            <div className="rounded-2xl border-l-[3px] border-[#b8c4ff] bg-[#0f1729] px-5 py-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">Mega Mock Drill 2023</h3>

                  <p className="mt-1 text-sm text-[#8e909f]">Earthquake & Evacuation</p>
                </div>

                <div className="rounded-lg bg-[#1e40af]/20 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#b8c4ff]">
                  OCT 28
                </div>
              </div>

              <div className="mt-3 flex items-center gap-2 text-sm text-[#8e909f]">
                <MapPin size={15} />
                BIT Campus, Bhopal
              </div>
            </div>

            {/* Drill 2 */}

            <div className="rounded-2xl border-l-[3px] border-[#4edea3] bg-[#0f1729] px-5 py-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">Community Seminar</h3>

                  <p className="mt-1 text-sm text-[#8e909f]">Wildfire Prevention</p>
                </div>

                <div className="rounded-lg bg-[#4edea3]/20 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#4edea3]">
                  NOV 02
                </div>
              </div>

              <div className="mt-3 flex items-center gap-2 text-sm text-[#8e909f]">
                <Laptop size={15} />
                Virtual Link Sent
              </div>
            </div>

            <button className="mt-2 w-full rounded-xl border border-white/10 bg-[#171f33]/50 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:border-[#b8c4ff]/30 hover:bg-[#222a3d]">
              View All Events
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ActivitySection
