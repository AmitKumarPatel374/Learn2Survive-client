
import { Lightbulb } from "lucide-react"

const QuizTip = ({ tip }) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#171f33]/60 p-6 backdrop-blur-xl">
      {/* Header */}
      <div className="mb-2 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1e40af]/10">
          <Lightbulb className="h-5 w-5 text-[#b8c4ff]" />
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[#b8c4ff]">
            Quick Tip
          </h3>

          <p className="text-xs text-gray-400">
            Stay Prepared
          </p>
        </div>
      </div>

      {/* Tip */}
      <p className="text-sm leading-5 text-gray-300">
        {tip}
      </p>
    </div>
  )
}

export default QuizTip