import QuizStats from "./QuizStats"
import QuizTip from "./QuizTip"
import QuizTimer from "./QuizTimer"

const QuizSidebar = ({
  totalQuestions,
  attemptedQuestions,
  remainingQuestions,
  tip,
  timeLeft  ,
}) => {
  return (
    <aside className="w-full lg:w-72 flex flex-col gap-4">
      <QuizStats
        totalQuestions={totalQuestions}
        attemptedQuestions={attemptedQuestions}
        remainingQuestions={remainingQuestions}
      />

      <QuizTip tip={tip} />

      <QuizTimer timeLeft={timeLeft} />
    </aside>
  )
}

export default QuizSidebar