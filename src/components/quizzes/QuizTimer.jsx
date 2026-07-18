import { Clock3 } from "lucide-react"

const QuizTimer = ({ timeLeft }) => {
  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`

  const totalTime = 10 * 60

  const percentage = (timeLeft / totalTime) * 100

  let textColor = "text-[#4edea3]"
  let progressColor = "bg-[#4edea3]"
  let bgColor = "bg-[#4edea3]/10"

  if (timeLeft <= 120) {
    textColor = "text-yellow-400"
    progressColor = "bg-yellow-400"
    bgColor = "bg-yellow-400/10"
  }

  if (timeLeft <= 60) {
    textColor = "text-red-400"
    progressColor = "bg-red-500"
    bgColor = "bg-red-500/10"
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-[#171f33]/60 p-6 backdrop-blur-xl">
      {/* Header */}

      <div className="mb-3 flex items-center gap-3">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl ${bgColor}`}
        >
          <Clock3
            className={`${textColor} ${
              timeLeft <= 30 ? "animate-pulse" : ""
            }`}
          />
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Time Remaining
          </h3>

          <p className="text-xs text-gray-400">
            Complete before time runs out
          </p>
        </div>
      </div>

      {/* Timer */}

      <div
        className={`text-center text-4xl font-bold tracking-widest ${textColor} ${
          timeLeft <= 30 ? "animate-pulse" : ""
        }`}
      >
        {formattedTime}
      </div>

      {/* Progress */}

      <div className="mt-3">
        <div className="mb-2 flex justify-between text-xs text-gray-400">
          <span>Remaining</span>

          <span>{Math.round(percentage)}%</span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-[#2d3449]">
          <div
            className={`h-full rounded-full transition-all duration-1000 ${progressColor}`}
            style={{
              width: `${percentage}%`,
            }}
          />
        </div>
      </div>

      {/* Warning */}

      {timeLeft <= 60 && (
        <div className="mt-5 rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-center text-sm font-medium text-red-400">
          ⚠ Less than 1 minute remaining!
        </div>
      )}
    </div>
  )
}

export default QuizTimer