import { ArrowRight, BookOpen, CheckCircle2, Clock3, Flame, UserCog } from "lucide-react"

const RecentActivity = () => {
  return (
    <section className="px-6 py-8 lg:px-10">
      <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-[#171f33]/40 p-7 backdrop-blur-xl">
        {/* Header */}

        <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">
          <div className="flex items-center gap-3">
            <Clock3
              size={24}
              className="text-[#b8c4ff]"
            />

            <h2 className="text-xl font-bold uppercase tracking-[0.2em] text-white">
              Recent Activity
            </h2>
          </div>

          <button className="flex items-center gap-2 text-sm font-semibold text-[#b8c4ff] transition hover:gap-3">
            View All
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="space-y-5">
          {/* Activity 1 */}

          <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 p-4">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4edea3]/10">
                <CheckCircle2
                  size={24}
                  className="text-[#4edea3]"
                />
              </div>

              <div>
                <h3 className="font-semibold text-white">Completed Flood Awareness Quiz</h3>

                <p className="mt-1 text-sm text-[#8e909f]">Score: 92% • Certificate Issued</p>
              </div>
            </div>

            <span className="text-sm text-[#8e909f]">2h ago</span>
          </div>

          {/* Activity 2 */}

          <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 p-4">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1e40af]/10">
                <BookOpen
                  size={24}
                  className="text-[#b8c4ff]"
                />
              </div>

              <div>
                <h3 className="font-semibold text-white">Read Radio Communication Basics</h3>

                <p className="mt-1 text-sm text-[#8e909f]">Module: Field Operations</p>
              </div>
            </div>

            <span className="text-sm text-[#8e909f]">5h ago</span>
          </div>

          {/* Activity 3 */}

          <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 p-4">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ffb95f]/10">
                <Flame
                  size={24}
                  className="text-[#ffb95f]"
                />
              </div>

              <div>
                <h3 className="font-semibold text-white">Simulated Wildfire Response</h3>

                <p className="mt-1 text-sm text-[#8e909f]">Rank: Silver Medalist</p>
              </div>
            </div>

            <span className="text-sm text-[#8e909f]">Yesterday</span>
          </div>
          {/* Activity 4 */}

          <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 p-4 transition hover:bg-white/[0.07]">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10">
                <Flame
                  size={24}
                  className="text-red-400"
                />
              </div>

              <div>
                <h3 className="font-semibold text-white">Earthquake Drill Participation</h3>

                <p className="mt-1 text-sm text-[#8e909f]">Location: SF Sector 4</p>
              </div>
            </div>

            <span className="text-sm text-[#8e909f]">3 days ago</span>
          </div>

          {/* Activity 5 */}

          <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 p-4 transition hover:bg-white/[0.07]">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <UserCog
                  size={24}
                  className="text-white"
                />
              </div>

              <div>
                <h3 className="font-semibold text-white">Updated Emergency Contact</h3>

                <p className="mt-1 text-sm text-[#8e909f]">Changed relationship information</p>
              </div>
            </div>

            <span className="text-sm text-[#8e909f]">1 week ago</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RecentActivity
