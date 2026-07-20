import {
  ArrowRight,
  BookOpen,
  Clock3,
  HelpCircle,
} from "lucide-react"
import { useNavigate } from "react-router-dom"

const ContinueLearning = ({ quiz }) => {
  const navigate = useNavigate()

  if (!quiz) return null

  const progress = Math.round(quiz.percentage || 0)

  return (
    <section className="px-6 py-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-6 text-[32px] font-bold text-white">
          Continue Learning
        </h2>

        <div className="rounded-3xl border border-emerald-500/20 bg-[#171f33]/60 p-6 backdrop-blur-xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
            {/* Icon */}

            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald-500/10">
              <BookOpen
                size={38}
                className="text-emerald-400"
              />
            </div>

            {/* Content */}

            <div className="flex-1">
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-medium text-emerald-400">
                  Continue Quiz
                </span>

                <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-white">
                  {quiz.category}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white">
                {quiz.title}
              </h3>

              <p className="mt-3 max-w-2xl leading-7 text-[#8e909f]">
                {quiz.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-6 text-sm text-[#b5b7c4]">
                <div className="flex items-center gap-2">
                  <Clock3 size={18} />
                  {quiz.duration} Minutes
                </div>

                <div className="flex items-center gap-2">
                  <HelpCircle size={18} />
                  {quiz.totalQuestions} Questions
                </div>
              </div>

              {/* Progress */}

              <div className="mt-6">
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-gray-400">
                    Progress
                  </span>

                  <span className="font-semibold text-emerald-400">
                    {progress}%
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-[#2d3449]">
                  <div
                    className="h-full rounded-full bg-emerald-400 transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Button */}

            <button
              onClick={() =>
                navigate(
                  `/dashboard/quizzes/start/${quiz.attemptId}`
                )
              }
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-black transition hover:bg-emerald-400"
            >
              Continue

              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContinueLearning