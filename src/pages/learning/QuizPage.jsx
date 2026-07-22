import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"

import apiInstance from "../../config/apiInstance"

import QuizHeader from "../../components/quizzes/QuizHeader"
import QuestionCard from "../../components/quizzes/QuestionCard"
import QuestionNavigation from "../../components/quizzes/QuestionNavigation"
import QuizSidebar from "../../components/quizzes/QuizSidebar"

const QuizPage = () => {
  const navigate = useNavigate()
  const { attemptId } = useParams()

  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [savingAnswer, setSavingAnswer] = useState(false)

  const [quiz, setQuiz] = useState(null)
  const [questions, setQuestions] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(0)

  const [selectedAnswers, setSelectedAnswers] = useState({})

  const [timeLeft, setTimeLeft] = useState(0)
  const [totalTime, setTotalTime] = useState(0)

  useEffect(() => {
    fetchQuiz()
  }, [])

  const fetchQuiz = async () => {
    try {
      const response = await apiInstance.get(`/quiz/attempt/${attemptId}`)

      const data = response.data.data

      setQuiz(data.quiz)
      setQuestions(data.questions)

      const answerMap = {}

      data.answers.forEach((answer) => {
        answerMap[answer.questionId] = answer.selectedAnswer
      })

      setSelectedAnswers(answerMap)

      const durationInSeconds = data.quiz.duration * 60

      setTotalTime(durationInSeconds)

      // Backend should return remainingTime
      setTimeLeft(data.remainingTime ?? durationInSeconds)
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to load quiz.")

      navigate(-1)
    } finally {
      setLoading(false)
    }
  }

  const saveRemainingTime = async (remainingTime) => {
    try {
      await apiInstance.post(`/quiz/${attemptId}/timer`, {
        remainingTime,
      })
    } catch (error) {
      console.log("Failed to save timer")
    }
  }

  // Timer
  useEffect(() => {
    if (loading || submitting) return

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
  }, [loading, submitting])

  useEffect(() => {
    if (loading || submitting) return

    const interval = setInterval(() => {
      saveRemainingTime(timeLeft)
    }, 30000)

    return () => clearInterval(interval)
  }, [timeLeft, loading, submitting])

  useEffect(() => {
    const handleBeforeUnload = () => {
      saveRemainingTime(timeLeft)
    }

    window.addEventListener("beforeunload", handleBeforeUnload)

    return () => {
      handleBeforeUnload()

      window.removeEventListener("beforeunload", handleBeforeUnload)
    }
  }, [timeLeft])

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0b1326] text-white">
        Loading Quiz...
      </div>
    )
  }

  if (!questions.length) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0b1326] text-white">
        No Questions Found.
      </div>
    )
  }

  const current = questions[currentQuestion]

  // Save Answer
  const handleSelectOption = async (optionIndex) => {
    if (savingAnswer) return

    const previousAnswer = selectedAnswers[current._id]

    setSavingAnswer(true)

    // Optimistic update
    setSelectedAnswers((prev) => ({
      ...prev,
      [current._id]: optionIndex,
    }))

    try {
      await apiInstance.post(`/quiz/attempt/${attemptId}/save-answer`, {
        questionId: current._id,
        selectedAnswer: optionIndex,
      })
    } catch (error) {
      // Rollback if API fails
      setSelectedAnswers((prev) => {
        const updated = { ...prev }

        if (previousAnswer === undefined) {
          delete updated[current._id]
        } else {
          updated[current._id] = previousAnswer
        }

        return updated
      })

      toast.error(error.response?.data?.message || "Failed to save answer.")
    } finally {
      setSavingAnswer(false)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion === 0) return

    setCurrentQuestion((prev) => prev - 1)
  }

  const handleNext = () => {
    if (currentQuestion === questions.length - 1) {
      handleSubmitQuiz()
      return
    }

    setCurrentQuestion((prev) => prev + 1)
  }

  // Submit Quiz
  const handleSubmitQuiz = async () => {
    if (submitting) return

    try {
      setSubmitting(true)

      // Save final timer
      await saveRemainingTime(0)

      // Submit quiz
      await apiInstance.post(`/quiz/attempt/${attemptId}/submit`)

      navigate(`/learning/quiz/result/${attemptId}`)
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to submit quiz.")
    } finally {
      setSubmitting(false)
    }
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  const attemptedQuestions = Object.keys(selectedAnswers).length

  const remainingQuestions = questions.length - attemptedQuestions

  return (
    <main className="min-h-screen bg-[#0b1326] text-white">
      <QuizHeader
        title={quiz.title}
        category={quiz.category}
        currentQuestion={currentQuestion + 1}
        totalQuestions={questions.length}
        progress={progress}
      />

      <div className="mx-auto flex max-w-7xl flex-col gap-8 p-8 lg:flex-row">
        <div className="flex-1">
          <QuestionCard
            question={current}
            questionNumber={currentQuestion + 1}
            selectedAnswer={selectedAnswers[current._id]}
            onSelectOption={handleSelectOption}
            disabled={savingAnswer}
          />

          <QuestionNavigation
            currentQuestion={currentQuestion + 1}
            totalQuestions={questions.length}
            selectedAnswer={selectedAnswers[current._id]}
            onPrevious={handlePrevious}
            onNext={handleNext}
            loading={submitting}
          />
        </div>

        <QuizSidebar
          totalQuestions={questions.length}
          attemptedQuestions={attemptedQuestions}
          remainingQuestions={remainingQuestions}
          tip={current?.tip}
          timeLeft={timeLeft}
          totalTime={totalTime}
        />
      </div>
    </main>
  )
}

export default QuizPage
