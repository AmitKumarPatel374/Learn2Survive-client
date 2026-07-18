import { Lightbulb, Share2, Bookmark } from "lucide-react"

const DailySafetyTip = () => {
  return (
    <section className="px-6 py-5 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl border border-[#b8c4ff]/20 bg-gradient-to-br from-[#1e40af]/15 to-[#171f33]/60 p-6 backdrop-blur-xl">

          {/* Header */}

          <div className="mb-5 flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1e40af]/20">

              <Lightbulb
                size={22}
                className="text-[#b8c4ff]"
              />

            </div>

            <div>

              <h2 className="text-[28px] font-bold text-white">
                Daily Safety Tip
              </h2>

              <p className="text-sm text-[#8e909f]">
                Small actions can make a big difference.
              </p>

            </div>

          </div>

          {/* Quote */}

          <div className="rounded-2xl border border-white/10 bg-[#0f1729]/60 p-5">

            <p className="text-[16px] italic leading-8 text-[#c4c5d5]">
              "Keep an emergency kit ready with at least
              <span className="font-semibold text-white">
                {" "}3 liters of drinking water per person,
              </span>
              {" "}non-perishable food, essential medicines,
              a flashlight, power bank and copies of
              important documents."
            </p>

          </div>

          {/* Actions */}

          <div className="mt-5 flex gap-3">

            <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#171f33]/50 transition-all duration-300 hover:border-[#b8c4ff]/30 hover:bg-[#222a3d]">

              <Share2
                size={18}
                className="text-[#b8c4ff]"
              />

            </button>

            <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#171f33]/50 transition-all duration-300 hover:border-[#b8c4ff]/30 hover:bg-[#222a3d]">

              <Bookmark
                size={18}
                className="text-[#b8c4ff]"
              />

            </button>

          </div>

        </div>
      </div>
    </section>
  )
}

export default DailySafetyTip