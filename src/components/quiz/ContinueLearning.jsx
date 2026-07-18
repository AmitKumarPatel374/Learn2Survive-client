import { ArrowRight, BookOpen } from "lucide-react"

const ContinueLearning = ({ quiz }) => {
  if (!quiz) return null

  return (
    <section className="px-6 py-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-6 text-[32px] font-bold text-white">
          Continue Learning
        </h2>

        <div className="rounded-3xl border border-emerald-500/20 bg-[#171f33]/50 p-6 backdrop-blur-xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
            {/* Icon */}

            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10">
              <BookOpen
                size={32}
                className="text-emerald-400"
              />
            </div>

            {/* Content */}

            <div className="flex-1">
              <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-2xl font-semibold text-white">
                  {quiz.title}
                </h3>

                <span className="text-sm font-semibold text-emerald-400">
                  {quiz.progress}% Complete
                </span>
              </div>

              {/* Progress */}

              <div className="h-2 overflow-hidden rounded-full bg-[#2d3449]">
                <div
                  className="h-full rounded-full bg-emerald-400 transition-all duration-700"
                  style={{ width: `${quiz.progress}%` }}
                />
              </div>

              <p className="mt-4 text-sm leading-7 text-[#8e909f]">
                {quiz.description}
              </p>
            </div>

            {/* Button */}

            <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-black transition hover:bg-emerald-400">
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