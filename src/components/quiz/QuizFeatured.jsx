import { Award, Timer, HelpCircle, ArrowRight } from "lucide-react"

const FeaturedQuiz = ({ quiz }) => {
  if (!quiz) return null

  return (
    <section className="rounded-3xl border border-[#3755c3]/20 bg-[#171f33]/60 p-8 backdrop-blur-xl">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
        {/* Left */}

        <div className="flex-1">
          <div className="mb-4 flex items-center gap-2 text-[#ffb95f]">
            <Award size={20} />

            <span className="text-sm font-semibold uppercase tracking-wider">
              Recommended Quiz
            </span>
          </div>

          <h2 className="text-3xl font-bold text-white lg:text-4xl">
            {quiz.title}
          </h2>

          <p className="mt-4 max-w-xl leading-7 text-[#8e909f]">
            {quiz.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-6 text-[#8e909f]">
            <div className="flex items-center gap-2">
              <Timer size={18} />

              <span>{quiz.duration} Minutes</span>
            </div>

            <div className="flex items-center gap-2">
              <HelpCircle size={18} />

              <span>{quiz.totalQuestions} Questions</span>
            </div>
          </div>

          <button className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#1e40af] px-6 py-3 font-semibold text-white transition hover:bg-[#3755c3]">
            Start Quiz

            <ArrowRight size={18} />
          </button>
        </div>

        {/* Right */}

        <div className="overflow-hidden rounded-2xl lg:w-[420px]">
          <img
            src={quiz.thumbnail}
            alt={quiz.title}
            className="h-[280px] w-full object-cover transition duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  )
}

export default FeaturedQuiz