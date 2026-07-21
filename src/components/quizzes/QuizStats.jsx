import { BarChart3 } from "lucide-react"

const QuizStats = ({
  totalQuestions = 0,
  attemptedQuestions = 0,
  remainingQuestions = 0,
}) => {
  const completion =
    totalQuestions > 0
      ? Math.round((attemptedQuestions / totalQuestions) * 100)
      : 0

  return (
    <div className="rounded-2xl border border-white/10 bg-[#171f33]/60 p-6 backdrop-blur-xl">
      {/* Header */}
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10">
          <BarChart3 className="h-5 w-5 text-amber-400" />
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-400">
            Quiz Stats
          </h3>

          <p className="text-xs text-gray-400">
            Live Progress
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="space-y-2">
        {/* Total */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-400">
            Total Questions
          </span>

          <span className="font-semibold text-white">
            {totalQuestions}
          </span>
        </div>

        {/* Attempted */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-400">
            Attempted
          </span>

          <span className="font-semibold text-[#b8c4ff]">
            {attemptedQuestions}
          </span>
        </div>

        {/* Remaining */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-400">
            Remaining
          </span>

          <span className="font-semibold text-[#4edea3]">
            {remainingQuestions}
          </span>
        </div>

        {/* Progress */}
        <div className="pt-2">
          <div className="mb-2 flex items-center justify-between text-xs text-gray-400">
            <span>Completion</span>

            <span>{completion}%</span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-[#2d3449]">
            <div
              className="h-full rounded-full bg-[#4edea3] transition-all duration-500"
              style={{
                width: `${completion}%`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuizStats