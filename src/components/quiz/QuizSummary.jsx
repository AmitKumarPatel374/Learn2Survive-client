import {
  BookOpen,
  CheckCircle2,
  Clock3,
  Trophy,
} from "lucide-react"

const summaryConfig = [
  {
    key: "totalQuizzes",
    label: "Total Quizzes",
    icon: BookOpen,
    border: "border-l-blue-500",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
  },
  {
    key: "completed",
    label: "Completed",
    icon: CheckCircle2,
    border: "border-l-emerald-500",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
  },
  {
    key: "remaining",
    label: "Remaining",
    icon: Clock3,
    border: "border-l-orange-500",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-400",
  },
  {
    key: "bestScore",
    label: "Best Score",
    icon: Trophy,
    border: "border-l-yellow-500",
    iconBg: "bg-yellow-500/10",
    iconColor: "text-yellow-400",
  },
]

const QuizSummary = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 gap-5">
      {summaryConfig.map((item) => {
        const Icon = item.icon

        return (
          <div
            key={item.key}
            className={`rounded-2xl border border-white/10 ${item.border} bg-[#171f33]/60 p-5 backdrop-blur-xl transition hover:-translate-y-1`}
          >
            <div
              className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${item.iconBg}`}
            >
              <Icon
                size={24}
                className={item.iconColor}
              />
            </div>

            <p className="text-sm text-[#8e909f]">
              {item.label}
            </p>

            <h3 className="mt-2 text-3xl font-bold text-white">
              {stats[item.key]}
            </h3>
          </div>
        )
      })}
    </div>
  )
}

export default QuizSummary