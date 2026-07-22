import {
  X,
  Clock3,
  BookOpen,
  ShieldCheck,
} from "lucide-react"

const QuizInstructionsModal = ({
  isOpen,
  onClose,
  duration,
  totalQuestions,
}) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-xl rounded-3xl border border-white/10 bg-[#171f33] p-8 shadow-2xl">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-lg p-2 text-gray-400 transition hover:bg-white/10 hover:text-white"
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-bold text-white">
          Quiz Instructions
        </h2>

        <p className="mt-2 text-sm text-gray-400">
          Read these instructions before continuing.
        </p>

        {/* Quiz Info */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="rounded-xl bg-[#0b1326] p-4">
            <Clock3 className="mb-2 text-[#b8c4ff]" />
            <p className="text-sm text-gray-400">
              Duration
            </p>
            <p className="text-lg font-semibold text-white">
              {duration} Minutes
            </p>
          </div>

          <div className="rounded-xl bg-[#0b1326] p-4">
            <BookOpen className="mb-2 text-[#b8c4ff]" />
            <p className="text-sm text-gray-400">
              Questions
            </p>
            <p className="text-lg font-semibold text-white">
              {totalQuestions}
            </p>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-6 space-y-4">

          <div className="flex gap-3">
            <ShieldCheck className="text-green-400" size={18} />
            <p className="text-gray-300">
              Each question has only one correct answer.
            </p>
          </div>

          <div className="flex gap-3">
            <ShieldCheck className="text-green-400" size={18} />
            <p className="text-gray-300">
              Your answers are saved automatically.
            </p>
          </div>

          <div className="flex gap-3">
            <ShieldCheck className="text-green-400" size={18} />
            <p className="text-gray-300">
              The timer pauses when you leave the quiz.
            </p>
          </div>

          <div className="flex gap-3">
            <ShieldCheck className="text-green-400" size={18} />
            <p className="text-gray-300">
              Submit before the timer reaches zero.
            </p>
          </div>

        </div>

        <button
          onClick={onClose}
          className="mt-8 w-full rounded-xl bg-[#b8c4ff] py-3 font-semibold text-[#002584] transition hover:opacity-90"
        >
          Got it
        </button>

      </div>
    </div>
  )
}

export default QuizInstructionsModal