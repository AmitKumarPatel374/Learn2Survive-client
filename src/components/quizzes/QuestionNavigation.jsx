import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
} from "lucide-react"

const QuestionNavigation = ({
  currentQuestion,
  totalQuestions,
  selectedAnswer,
  onPrevious,
  onNext,
  loading = false,
}) => {
  const isFirstQuestion = currentQuestion === 1
  const isLastQuestion =
    currentQuestion === totalQuestions

  return (
    <div className="mt-6 flex items-center justify-between border-t border-[#444653]/40 pt-6">
      {/* Previous Button */}
      <button
        onClick={onPrevious}
        disabled={isFirstQuestion || loading}
        className={`flex items-center gap-2 rounded-xl border px-6 py-3 text-sm font-semibold transition-all ${
          isFirstQuestion || loading
            ? "cursor-not-allowed border-[#444653] text-[#6b7280]"
            : "border-[#8e909f] text-white hover:bg-[#2d3449]"
        }`}
      >
        <ArrowLeft size={18} />
        Previous
      </button>

      {/* Next / Finish */}
      <button
        onClick={onNext}
        disabled={
          selectedAnswer === undefined ||
          loading
        }
        className={`flex items-center gap-2 rounded-xl px-8 py-3 text-sm font-semibold transition-all ${
          selectedAnswer === undefined ||
          loading
            ? "cursor-not-allowed bg-[#444653] text-[#9ca3af]"
            : "bg-[#b8c4ff] text-[#002584] hover:scale-105 hover:shadow-lg"
        }`}
      >
        {loading ? (
          "Submitting..."
        ) : isLastQuestion ? (
          <>
            Finish Quiz
            <CheckCircle size={18} />
          </>
        ) : (
          <>
            Next
            <ArrowRight size={18} />
          </>
        )}
      </button>
    </div>
  )
}

export default QuestionNavigation