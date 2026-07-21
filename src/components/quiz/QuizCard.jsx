import {
  Timer,
  ListChecks,
  Play,
  ShieldAlert,
  ArrowRight,
  Trophy,
} from "lucide-react"
import { useNavigate } from "react-router-dom"

const difficultyColors = {
  Easy: "bg-emerald-500/15 text-emerald-300 border border-emerald-500/20",
  Medium: "bg-amber-500/15 text-amber-300 border border-amber-500/20",
  Hard: "bg-red-500/15 text-red-300 border border-red-500/20",
}

const categoryGradient = {
  Preparedness: "from-cyan-600 via-blue-700 to-indigo-900",
  Response: "from-orange-500 via-red-600 to-red-900",
  Recovery: "from-emerald-500 via-green-600 to-teal-900",
  Mitigation: "from-violet-600 via-indigo-700 to-slate-900",
}

const statusConfig = {
  new: {
    text: "Not Started",
    className:
      "bg-slate-500/20 text-slate-300 border border-slate-500/20",
  },
  progress: {
    text: "In Progress",
    className:
      "bg-amber-500/20 text-amber-300 border border-amber-500/20",
  },
  completed: {
    text: "Completed",
    className:
      "bg-emerald-500/20 text-emerald-300 border border-emerald-500/20",
  },
}

const QuizCard = ({ quiz }) => {
  const navigate = useNavigate()

  const status = quiz.completed
    ? statusConfig.completed
    : quiz.inProgress
    ? statusConfig.progress
    : statusConfig.new

  const handleQuiz = () => {
    if (quiz.inProgress) {
      navigate(`/learning/quiz/${quiz.attemptId}`)
      return
    }

    navigate(`/dashboard/quiz/${quiz._id}`)
  }

  return (
    <div className="group overflow-hidden rounded-3xl border border-white/10 bg-[#151d32] transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_20px_50px_rgba(59,130,246,.18)]">
      {/* Header */}

      <div
        className={`relative h-44 overflow-hidden bg-gradient-to-br ${
          categoryGradient[quiz.category] ||
          "from-blue-700 to-indigo-900"
        }`}
      >
        <div className="absolute -left-10 -top-10 h-36 w-36 rounded-full bg-white/10 blur-3xl" />

        <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

        {/* Category */}

        <div className="absolute left-5 top-5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          {quiz.category}
        </div>

        {/* Status */}

        <div
          className={`absolute right-5 top-5 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur ${status.className}`}
        >
          {status.text}
        </div>

        {/* Icon */}

        <div className="flex h-full items-center justify-center">
          <div className="rounded-full bg-white/15 p-5 backdrop-blur">
            <ShieldAlert
              size={58}
              className="text-white"
            />
          </div>
        </div>
      </div>

      {/* Body */}

      <div className="space-y-5 p-6">
        <div>
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              difficultyColors[quiz.difficulty]
            }`}
          >
            {quiz.difficulty}
          </span>

          <h3 className="mt-4 text-2xl font-bold text-white transition group-hover:text-blue-300">
            {quiz.title}
          </h3>

          <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-400">
            {quiz.description}
          </p>
        </div>

        {/* Stats */}

        <div className="grid grid-cols-2 gap-4 rounded-2xl bg-[#0f172a]/70 p-4">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-blue-500/15 p-2">
              <Timer
                size={18}
                className="text-blue-300"
              />
            </div>

            <div>
              <p className="text-xs text-slate-500">
                Duration
              </p>

              <p className="font-semibold text-white">
                {quiz.duration} min
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-yellow-500/15 p-2">
              <ListChecks
                size={18}
                className="text-yellow-300"
              />
            </div>

            <div>
              <p className="text-xs text-slate-500">
                Questions
              </p>

              <p className="font-semibold text-white">
                {quiz.totalQuestions}
              </p>
            </div>
          </div>
        </div>

        {/* Previous Score */}

        {quiz.completed && (
          <div className="flex items-center justify-between rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-emerald-500/20 p-2">
                <Trophy
                  size={20}
                  className="text-emerald-300"
                />
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-emerald-300">
                  Previous Score
                </p>

                <p className="font-semibold text-white">
                  {quiz.score}/{quiz.totalQuestions}
                </p>
              </div>
            </div>

            <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-sm font-semibold text-emerald-300">
              {Math.round(
                (quiz.score / quiz.totalQuestions) * 100
              )}
              %
            </span>
          </div>
        )}

        {/* Footer */}

        <div className="flex items-center justify-between border-t border-white/10 pt-5">
          <div>
            <p className="text-xs text-slate-500">
              Created
            </p>

            <p className="text-sm text-slate-300">
              {new Date(
                quiz.createdAt
              ).toLocaleDateString()}
            </p>
          </div>

          <button
            onClick={handleQuiz}
            className={`flex items-center gap-2 rounded-xl px-5 py-3 font-semibold text-white transition ${
              quiz.completed
                ? "bg-emerald-600 hover:bg-emerald-700"
                : quiz.inProgress
                ? "bg-amber-600 hover:bg-amber-700"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            <Play size={17} />

            {quiz.completed
              ? "Retake"
              : quiz.inProgress
              ? "Continue"
              : "Start"}

            <ArrowRight size={17} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default QuizCard