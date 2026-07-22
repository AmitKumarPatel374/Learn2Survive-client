import { useState } from "react"
import { Info } from "lucide-react"

import QuizStats from "./QuizStats"
import QuizTip from "./QuizTip"
import QuizTimer from "./QuizTimer"
import QuizInstructionsModal from "./QuizInstructionsModal"

const QuizSidebar = ({
  totalQuestions,
  attemptedQuestions,
  remainingQuestions,
  tip,
  timeLeft,
  totalTime,
}) => {
  const [showInstructions, setShowInstructions] =
    useState(false)

  return (
    <>
      <aside className="flex w-full flex-col gap-4 lg:w-72">
        <QuizStats
          totalQuestions={totalQuestions}
          attemptedQuestions={attemptedQuestions}
          remainingQuestions={remainingQuestions}
        />


        <QuizTimer
          timeLeft={timeLeft}
          totalTime={totalTime}
        />

        <button
          onClick={() =>
            setShowInstructions(true)
          }
          className="flex items-center justify-center gap-2 rounded-2xl border border-[#b8c4ff]/20 bg-[#171f33]/60 px-5 py-4 text-sm font-semibold text-[#b8c4ff] transition-all duration-300 hover:border-[#b8c4ff]/50 hover:bg-[#1d2742] hover:shadow-lg"
        >
          <Info size={18} />
          View Instructions
        </button>
      </aside>

      <QuizInstructionsModal
        isOpen={showInstructions}
        onClose={() =>
          setShowInstructions(false)
        }
        duration={Math.floor(totalTime / 60)}
        totalQuestions={totalQuestions}
      />
    </>
  )
}

export default QuizSidebar