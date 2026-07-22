import {
  ArrowLeft,
  Droplets,
  HelpCircle,
  Timer,
  BarChart3,
} from "lucide-react"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import apiInstance from "../../config/apiInstance"

const QuizStart = () => {
  const navigate = useNavigate()
  const { quizId } = useParams()

  const [quiz, setQuiz] = useState(null)
  const [loading, setLoading] = useState(true)
  const [starting, setStarting] = useState(false)

  useEffect(() => {
    fetchQuiz()
  }, [])

  const fetchQuiz = async () => {
    try {
      console.log(quizId);
      
      const response = await apiInstance.get(`/quiz/${quizId}`)

      if (response.data.success) {
        setQuiz(response.data.data)
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to fetch quiz."
      )
    } finally {
      setLoading(false)
    }
  }

  const handleStartQuiz = async () => {
    try {
      setStarting(true)

      const response = await apiInstance.post(
        `/quiz/${quizId}/start`
      )

      if (response.data.success) {
        navigate(
          `/learning/quiz/${response.data.attemptId}`
        )
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to start quiz."
      )
    } finally {
      setStarting(false)
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0b1326] text-xl text-white">
        Loading Quiz...
      </div>
    )
  }

  if (!quiz) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0b1326] text-xl text-white">
        Quiz not found.
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-[#0b1326] p-6 text-white lg:px-10">
      <div className="mx-auto max-w-5xl">
        {/* Header */}

        <div className="mb-4 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-[#8e909f] transition hover:text-white"
          >
            <ArrowLeft size={22} />
            <span className="text-lg">
              Back to Training
            </span>
          </button>

          <div className="text-right">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#b8c4ff]">
              Quiz Module
            </p>

            <p className="text-sm text-[#8e909f]">
              {quiz.totalQuestions} Questions
            </p>
          </div>
        </div>

        {/* Card */}

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#171f33]/60 p-8 text-center backdrop-blur-xl lg:px-14">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#3755c3]/10 blur-3xl" />

          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#4edea3]/10 blur-3xl" />

          {/* Icon */}

          <div className="relative z-10 mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-[#1e40af] to-[#0b1326] shadow-2xl">
            <Droplets
              size={55}
              className="text-[#b8c4ff]"
            />
          </div>

          {/* Title */}

          <h1 className="relative z-10 text-4xl font-bold text-white">
            {quiz.title}
          </h1>

          <p className="relative z-10 mx-auto mt-4 max-w-2xl text-lg leading-8 text-[#8e909f]">
            {quiz.description}
          </p>

          {/* Info */}

          <div className="relative z-10 mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-[#131b2e] p-6">
              <HelpCircle
                className="mx-auto mb-3 text-[#b8c4ff]"
                size={32}
              />

              <h3 className="font-semibold">
                {quiz.totalQuestions} Questions
              </h3>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#131b2e] p-6">
              <Timer
                className="mx-auto mb-3 text-[#4edea3]"
                size={32}
              />

              <h3 className="font-semibold">
                {quiz.duration} Minutes
              </h3>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#131b2e] p-6">
              <BarChart3
                className="mx-auto mb-3 text-[#ffb95f]"
                size={32}
              />

              <h3 className="font-semibold">
                {quiz.difficulty}
              </h3>
            </div>
          </div>

          {/* Category */}

          <div className="mt-6">
            <span className="rounded-full bg-blue-600/20 px-4 py-2 text-sm font-medium text-blue-300">
              {quiz.category}
            </span>
          </div>

          {/* Button */}

          <button
            onClick={navigate(`/learning/quiz/${response.data.attemptId}`)}
            disabled={starting}
            className="relative z-10 mt-8 rounded-full bg-[#b8c4ff] px-14 py-4 text-xl font-semibold text-[#002584] transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {starting
              ? "Starting..."
              : "Start Quiz"}
          </button>
        </div>
      </div>
    </main>
  )
}

export default QuizStart