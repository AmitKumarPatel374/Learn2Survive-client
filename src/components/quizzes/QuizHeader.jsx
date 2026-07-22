import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"

const QuizHeader = ({
  title = "Quiz",
  category = "General",
  currentQuestion = 1,
  totalQuestions = 0,
  progress = 0,
}) => {
  const navigate = useNavigate()

  const handleBack = () => {
    const confirmLeave = window.confirm(
      "Are you sure you want to leave the quiz?\n\nYour progress has been saved, and you can resume it later."
    )

    if (confirmLeave) {
      navigate(-1)
    }
  }

  return (
    <header className="sticky top-0 z-50 flex h-20 items-center justify-between border-b border-white/10 bg-[#0b1326]/80 px-6 backdrop-blur-xl">
      {/* Left */}
      <div className="flex items-center gap-4">
        <button
          onClick={handleBack}
          className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-[#171f33]"
          aria-label="Go Back"
        >
          <ArrowLeft className="h-5 w-5 text-[#b8c4ff]" />
        </button>

        <div>
          <h1 className="text-xl font-bold text-white">
            {title}
          </h1>

          <p className="text-xs uppercase tracking-widest text-gray-400">
            {category}
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="w-44">
        <p className="mb-2 text-right text-xs font-semibold uppercase tracking-widest text-[#b8c4ff]">
          Question {currentQuestion} of {totalQuestions}
        </p>

        <div className="h-2 overflow-hidden rounded-full bg-[#2d3449]">
          <div
            className="h-full rounded-full bg-[#b8c4ff] transition-all duration-300"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </div>
    </header>
  )
}

export default QuizHeader