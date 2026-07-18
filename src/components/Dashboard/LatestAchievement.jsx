import { Award, Sparkles } from "lucide-react"

const LatestAchievement = () => {
  return (
    <section className="px-6 py-5 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border border-[#4edea3]/20 bg-[#171f33]/40 p-6 text-center backdrop-blur-xl">
          {/* Background Glow */}

          <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4edea3]/10 blur-[90px]" />

          <div className="relative">
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#8e909f]">
              Latest Achievement
            </p>

            {/* Badge */}

            <div className="relative mx-auto flex h-24 w-24 items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-[#4edea3]/20 blur-xl" />

              <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-[3px] border-[#4edea3]/30 bg-[#222a3d]">
                <Award
                  size={40}
                  className="text-[#4edea3]"
                />
              </div>

              <div className="absolute -right-1 -top-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#ffb95f] shadow-md">
                <Sparkles
                  size={14}
                  className="text-[#472a00]"
                />
              </div>
            </div>

            <h2 className="mt-6 text-[28px] font-bold text-white">Quick Responder</h2>

            <p className="mx-auto mt-3 max-w-sm text-[15px] leading-7 text-[#c4c5d5]">
              Congratulations! You completed the emergency simulation in record time and earned the
              <span className="font-semibold text-[#4edea3]"> Quick Responder</span> badge.
            </p>

            <button className="mt-6 rounded-xl bg-[#4edea3] px-6 py-2.5 text-sm font-semibold text-[#003824] transition-all duration-300 hover:brightness-110 active:scale-95">
              View All Achievements
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LatestAchievement
