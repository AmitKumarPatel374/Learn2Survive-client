import QuizStats from "./QuizStats"
import QuizTip from "./QuizTip"
import QuizTimer from "./QuizTimer"

const QuizSidebar = ({ totalQuestions, attemptedQuestions, remainingQuestions, tip, timeLeft,totalTime }) => {
  return (
    <aside className="flex w-full flex-col gap-4 lg:w-72">
      <QuizStats
        totalQuestions={totalQuestions}
        attemptedQuestions={attemptedQuestions}
        remainingQuestions={remainingQuestions}
      />

      <QuizTip tip={tip || "Read every question carefully before selecting your answer."} />

      <QuizTimer
        timeLeft={timeLeft}
        totalTime={totalTime}
      />
    </aside>
  )
}

export default QuizSidebar
