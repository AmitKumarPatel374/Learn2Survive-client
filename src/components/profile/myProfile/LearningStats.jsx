import { BookOpen, ClipboardCheck, MonitorPlay, Megaphone } from "lucide-react"

const LearningStats = () => {
  return (
    <section className="px-6 py-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {/* Topics Learned */}

        <div className="group rounded-3xl border border-white/10 bg-[#171f33]/40 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#b8c4ff]/30">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1e40af]/10">
            <BookOpen
              size={32}
              className="text-[#b8c4ff]"
            />
          </div>

          <h2 className="text-5xl font-black text-white">08</h2>

          <p className="mt-3 text-xs uppercase tracking-[0.3em] text-[#8e909f]">Topics Learned</p>
        </div>

        {/* Quizzes */}

        <div className="group rounded-3xl border border-white/10 bg-[#171f33]/40 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#4edea3]/30">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#4edea3]/10">
            <ClipboardCheck
              size={32}
              className="text-[#4edea3]"
            />
          </div>

          <h2 className="text-5xl font-black text-white">12</h2>

          <p className="mt-3 text-xs uppercase tracking-[0.3em] text-[#8e909f]">
            Quizzes Completed
          </p>
        </div>

        {/* Simulations */}

        <div className="group rounded-3xl border border-white/10 bg-[#171f33]/40 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#ffb95f]/30">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#ffb95f]/10">
            <MonitorPlay
              size={32}
              className="text-[#ffb95f]"
            />
          </div>

          <h2 className="text-5xl font-black text-white">05</h2>

          <p className="mt-3 text-xs uppercase tracking-[0.3em] text-[#8e909f]">
            Simulations Played
          </p>
        </div>

        {/* Mock Drills */}

        <div className="group rounded-3xl border border-white/10 bg-[#171f33]/40 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-red-400/30">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/10">
            <Megaphone
              size={32}
              className="text-red-400"
            />
          </div>

          <h2 className="text-5xl font-black text-white">03</h2>

          <p className="mt-3 text-xs uppercase tracking-[0.3em] text-[#8e909f]">
            Mock Drills Attended
          </p>
        </div>
      </div>
    </section>
  )
}

export default LearningStats
