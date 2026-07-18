import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import quizDummyData from "../../data/quizDummyData"
import QuizHeader from "../../components/quizzes/QuizHeader"
import QuestionCard from "../../components/quizzes/QuestionCard"
import QuestionNavigation from "../../components/quizzes/QuestionNavigation"
import QuizSidebar from "../../components/quizzes/QuizSidebar"

const QUIZ_TIME = 10 * 60 // 10 Minutes

const QuizPage = () => {
  const navigate = useNavigate()

  const [questions] = useState(quizDummyData)

  const [currentQuestion, setCurrentQuestion] = useState(0)

  const [selectedAnswers, setSelectedAnswers] = useState({})

  const [timeLeft, setTimeLeft] = useState(QUIZ_TIME)

  // Current Question

  const current = questions[currentQuestion]

  // Timer

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          handleSubmitQuiz()
          return 0
        }

        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Select Answer

  const handleSelectOption = (optionIndex) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [current.id]: optionIndex,
    }))
  }

  // Previous Question

  const handlePrevious = () => {
    if (currentQuestion === 0) return

    setCurrentQuestion((prev) => prev - 1)
  }

  // Next Question

  const handleNext = () => {
    if (currentQuestion === questions.length - 1) {
      handleSubmitQuiz()
      return
    }

    setCurrentQuestion((prev) => prev + 1)
  }

  // Submit Quiz

  const handleSubmitQuiz = () => {
    navigate("/learning/quiz/result", {
      state: {
        questions,
        selectedAnswers,
        totalTime: QUIZ_TIME,
        timeTaken: QUIZ_TIME - timeLeft,
      },
    })
  }

  // Progress

  const progress = ((currentQuestion + 1) / questions.length) * 100

  // Attempted

  const attemptedQuestions = Object.keys(selectedAnswers).length

  // Remaining

  const remainingQuestions = questions.length - attemptedQuestions

  // Format Timer

  const formattedTime = `${String(Math.floor(timeLeft / 60)).padStart(
    2,
    "0"
  )}:${String(timeLeft % 60).padStart(2, "0")}`

  return (
    <main className="min-h-screen bg-[#0b1326] text-white">
      {/* Header */}
      <QuizHeader
        title="Flood Awareness Quiz"
        category="Emergency Response Prep"
        currentQuestion={currentQuestion + 1}
        totalQuestions={questions.length}
        progress={progress}
      />

      {/* Question */}
      <div className="mx-auto flex max-w-7xl flex-col gap-8 p-8 lg:flex-row">
        {/* Left */}
        <div className="flex-1">
          <QuestionCard
            question={current}
            questionNumber={currentQuestion + 1}
            selectedAnswer={selectedAnswers[current.id]}
            onSelectOption={handleSelectOption}
          />

          <QuestionNavigation
            currentQuestion={currentQuestion + 1}
            totalQuestions={questions.length}
            selectedAnswer={selectedAnswers[current.id]}
            onPrevious={handlePrevious}
            onNext={handleNext}
          />
        </div>

        {/* Right */}
        <QuizSidebar
          totalQuestions={questions.length}
          attemptedQuestions={attemptedQuestions}
          remainingQuestions={remainingQuestions}
          tip={current.tip}
          timeLeft={timeLeft}
        />
      </div>
    </main>
  )
}

export default QuizPage
