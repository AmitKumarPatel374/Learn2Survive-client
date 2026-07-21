import {
  Award,
  Timer,
  HelpCircle,
  ArrowRight,
  ShieldAlert,
  Layers3,
} from "lucide-react"
import { useNavigate } from "react-router-dom"

const categoryGradient = {
  Preparedness: "from-cyan-500 via-blue-600 to-indigo-900",
  Response: "from-orange-500 via-red-600 to-red-900",
  Recovery: "from-green-500 via-emerald-600 to-teal-900",
  Mitigation: "from-purple-500 via-indigo-600 to-slate-900",
}

const difficultyColor = {
  Easy: "bg-emerald-500/20 text-emerald-300",
  Medium: "bg-amber-500/20 text-amber-300",
  Hard: "bg-red-500/20 text-red-300",
}

const FeaturedQuiz = ({ quiz }) => {
  const navigate = useNavigate()

  if (!quiz) return null
 console.log(quiz)
  return (
    <section className="overflow-hidden rounded-3xl border border-[#3755c3]/20 bg-[#171f33]/60 backdrop-blur-xl">
      <div className="grid lg:grid-cols-2">
        {/* Left Side */}

        <div className="p-8 lg:p-10">
          <div className="mb-5 flex items-center gap-2 text-[#ffb95f]">
            <Award size={20} />

            <span className="text-sm font-semibold uppercase tracking-widest">
              Recommended Quiz
            </span>
          </div>

          <h2 className="text-3xl font-bold text-white lg:text-4xl">
            {quiz.title}
          </h2>

          <p className="mt-5 max-w-xl leading-7 text-[#9CA3AF]">
            {quiz.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white">
              {quiz.category}
            </span>

            <span
              className={`rounded-full px-4 py-2 text-sm ${
                difficultyColor[quiz.difficulty]
              }`}
            >
              {quiz.difficulty}
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-8">
            <div className="flex items-center gap-3">
              <Timer className="text-blue-400" />

              <div>
                <p className="text-xs text-gray-400">
                  Duration
                </p>

                <p className="font-semibold text-white">
                  {quiz.duration} Minutes
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <HelpCircle className="text-yellow-400" />

              <div>
                <p className="text-xs text-gray-400">
                  Questions
                </p>

                <p className="font-semibold text-white">
                  {quiz.totalQuestions}
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={() =>
              navigate(`/dashboard/quiz/${quiz._id}`)
            }
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Start Quiz

            <ArrowRight size={18} />
          </button>
        </div>

        {/* Right Side */}

        <div
          className={`relative flex min-h-[320px] items-center justify-center bg-gradient-to-br ${
            categoryGradient[quiz.category] ||
            "from-blue-600 to-indigo-900"
          }`}
        >
          <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl"></div>

          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>

          <div className="relative flex flex-col items-center">
            <div className="rounded-full bg-white/15 p-8 backdrop-blur">
              <ShieldAlert
                size={90}
                className="text-white"
              />
            </div>

            <div className="mt-6 flex items-center gap-2 text-white/90">
              <Layers3 size={20} />

              <span className="text-lg font-semibold">
                {quiz.category}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedQuiz