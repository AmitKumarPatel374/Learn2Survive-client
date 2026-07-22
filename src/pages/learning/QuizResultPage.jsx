import { ArrowLeft, Award, Bell, CircleHelp, CheckCircle2, Clock3, XCircle } from "lucide-react"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import apiInstance from "../../config/apiInstance"

const QuizResultPage = () => {
  const navigate = useNavigate()
  const { attemptId } = useParams()

  const [loading, setLoading] = useState(true)
  const [result, setResult] = useState(null)

  useEffect(() => {
    fetchResult()
  }, [])

  const fetchResult = async () => {
    try {
      const response = await apiInstance.get(`/quiz/attempt/${attemptId}/result`)

      if (response.data.success) {
        setResult(response.data.data)
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to load result.")

      navigate("/learning/quizzes")
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0b1326] text-xl text-white">
        Loading Result...
      </div>
    )
  }

  if (!result) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0b1326] text-xl text-white">
        Result not found.
      </div>
    )
  }

  const { quiz, score, percentage, timeTaken, submittedAt, questions } = result

  const correctAnswers = score
  const wrongAnswers = questions.length - correctAnswers

  // Temporary until backend sends timeTaken

  const scoreText =
    percentage >= 90
      ? "Outstanding!"
      : percentage >= 75
        ? "Excellent!"
        : percentage >= 60
          ? "Good Job!"
          : percentage >= 40
            ? "Keep Practicing!"
            : "Needs Improvement"

  const message =
    percentage >= 75
      ? "You have a good understanding of disaster preparedness."
      : "Keep learning and improve your disaster awareness."

  const radius = 88

  const circumference = 2 * Math.PI * radius

  const offset = circumference - (percentage / 100) * circumference

  const minutes = Math.floor(timeTaken / 60)
  const seconds = timeTaken % 60

  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`

  return (
    <main className="min-h-screen bg-[#0b1326] text-white">
      {/* Header */}

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#171f33]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[900px] items-center justify-between px-5">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="rounded-full p-2 transition hover:bg-white/5"
            >
              <ArrowLeft size={24} />
            </button>

            <h1 className="text-2xl font-bold">{quiz.title}</h1>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative rounded-full p-2 hover:bg-white/5">
              <Bell size={22} />

              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
            </button>

            <button className="rounded-full p-2 hover:bg-white/5">
              <CircleHelp size={22} />
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[850px] px-5 py-8">
        {/* Result Card */}

        <section className="rounded-3xl border border-white/10 bg-[#171f33]/60 p-8 backdrop-blur-xl">
          <div className="flex flex-col items-center">
            <div className="relative h-44 w-44">
              <svg
                className="h-full w-full -rotate-90"
                viewBox="0 0 200 200"
              >
                <circle
                  cx="100"
                  cy="100"
                  r={radius}
                  stroke="#2d3449"
                  strokeWidth="10"
                  fill="none"
                />

                <circle
                  cx="100"
                  cy="100"
                  r={radius}
                  stroke="#b8c4ff"
                  strokeWidth="10"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  className="duration-1000"
                />
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl font-bold">
                  {correctAnswers}/{questions.length}
                </span>

                <span className="mt-2 text-xs uppercase tracking-[4px] text-[#b8c4ff]">SCORE</span>
              </div>
            </div>

            <h2 className="mt-6 text-4xl font-bold">🎉 {scoreText}</h2>

            <p className="mt-3 max-w-lg text-center text-gray-400">{message}</p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-5">
            <div className="rounded-2xl border border-white/5 bg-[#222a3d]/50 p-5">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-green-500/10">
                <CheckCircle2 className="text-green-400" />
              </div>

              <p className="text-xs uppercase tracking-widest text-gray-400">Correct</p>

              <h3 className="mt-2 text-4xl font-bold text-green-400">{correctAnswers}</h3>
            </div>

            <div className="rounded-2xl border border-white/5 bg-[#222a3d]/50 p-5">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-red-500/10">
                <XCircle className="text-red-400" />
              </div>

              <p className="text-xs uppercase tracking-widest text-gray-400">Incorrect</p>

              <h3 className="mt-2 text-4xl font-bold text-red-400">{wrongAnswers}</h3>
            </div>

            <div className="rounded-2xl border border-white/5 bg-[#222a3d]/50 p-5">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-amber-500/10">
                <Clock3 className="text-amber-400" />
              </div>

              <p className="text-xs uppercase tracking-widest text-gray-400">Time Taken</p>

              <h3 className="mt-2 text-4xl font-bold text-amber-400">{formattedTime}</h3>
            </div>
          </div>
        </section>

        {/* Achievement */}

        <section className="mt-8 rounded-3xl border border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 via-amber-500/10 to-orange-500/10 p-7">
          <div className="flex items-center gap-5">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-yellow-500/20">
              <Award
                size={40}
                className="text-yellow-400"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold">Achievement Unlocked!</h3>

              <p className="mt-2 text-gray-300">
                You earned{" "}
                <span className="font-bold text-yellow-400">
                  {correctAnswers * 10} Learning Points
                </span>{" "}
                for completing this quiz.
              </p>
            </div>
          </div>
        </section>
        {/* Question Summary */}

        <section className="mt-8 rounded-3xl border border-white/10 bg-[#171f33]/60 p-8 backdrop-blur-xl">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold">Question Summary</h2>

            <span className="rounded-full bg-indigo-500/20 px-4 py-2 text-sm font-semibold text-indigo-300">
              {correctAnswers}/{questions.length} Correct
            </span>
          </div>

          <div className="space-y-5">
            {questions.map((question, index) => (
              <div
                key={question.questionId}
                className={`rounded-2xl border p-6 transition ${
                  question.isCorrect
                    ? "border-green-500/20 bg-green-500/5"
                    : "border-red-500/20 bg-red-500/5"
                }`}
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white">
                      Q{index + 1}. {question.question}
                    </h3>

                    {/* Your Answer */}

                    <div className="mt-5">
                      <p className="mb-1 text-sm text-gray-400">Your Answer</p>

                      <p
                        className={`font-medium ${
                          question.isCorrect ? "text-green-400" : "text-red-400"
                        }`}
                      >
                        {question.selectedAnswer !== null
                          ? question.options[question.selectedAnswer]
                          : "Not Attempted"}
                      </p>
                    </div>

                    {/* Correct Answer */}

                    {!question.isCorrect && (
                      <div className="mt-4">
                        <p className="mb-1 text-sm text-gray-400">Correct Answer</p>

                        <p className="font-medium text-green-400">
                          {question.options[question.correctAnswer]}
                        </p>
                      </div>
                    )}

                    {/* All Options */}

                    <div className="mt-6 space-y-3">
                      {question.options.map((option, optionIndex) => {
                        const isCorrectOption = optionIndex === question.correctAnswer

                        const isSelected = optionIndex === question.selectedAnswer

                        let classes = "border-white/10 bg-white/5"

                        if (isCorrectOption) {
                          classes = "border-green-500/30 bg-green-500/10"
                        } else if (isSelected && !question.isCorrect) {
                          classes = "border-red-500/30 bg-red-500/10"
                        }

                        return (
                          <div
                            key={optionIndex}
                            className={`flex items-center justify-between rounded-xl border p-3 ${classes}`}
                          >
                            <span>
                              {String.fromCharCode(65 + optionIndex)}. {option}
                            </span>

                            {isCorrectOption ? (
                              <CheckCircle2
                                className="text-green-400"
                                size={20}
                              />
                            ) : isSelected ? (
                              <XCircle
                                className="text-red-400"
                                size={20}
                              />
                            ) : null}
                          </div>
                        )
                      })}
                    </div>

                    {/* Explanation */}

                    {question.explanation && (
                      <div className="mt-6 rounded-xl bg-white/5 p-4">
                        <h4 className="mb-2 font-semibold text-[#b8c4ff]">Explanation</h4>

                        <p className="text-sm leading-7 text-gray-300">{question.explanation}</p>
                      </div>
                    )}
                  </div>

                  <div>
                    {question.isCorrect ? (
                      <CheckCircle2
                        size={34}
                        className="text-green-400"
                      />
                    ) : (
                      <XCircle
                        size={34}
                        className="text-red-400"
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Action Buttons */}

        <section className="mt-8 flex flex-col gap-4 sm:flex-row">
          <button
            onClick={() => navigate(`/learning/quiz/start/${quiz._id}`)}
            className="flex-1 rounded-2xl bg-indigo-600 px-6 py-4 text-lg font-semibold transition hover:bg-indigo-700"
          >
            Retake Quiz
          </button>

          <button
            onClick={() => navigate("/learning/quizzes")}
            className="flex-1 rounded-2xl border border-green-500/20 bg-green-500/10 px-6 py-4 text-lg font-semibold text-green-300 transition hover:bg-green-500/20"
          >
            Back to Quiz Center
          </button>
        </section>

        {/* Performance Summary */}

        <section className="mt-8 rounded-3xl border border-white/10 bg-[#171f33]/60 p-8 backdrop-blur-xl">
          <h2 className="mb-6 text-2xl font-bold">Performance Summary</h2>

          <div className="space-y-6">
            {/* Accuracy */}

            <div>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-gray-400">Accuracy</span>

                <span className="font-semibold">{percentage}%</span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-white/10">
                <div
                  className={`h-full rounded-full transition-all duration-700 ${
                    percentage >= 75
                      ? "bg-green-500"
                      : percentage >= 50
                        ? "bg-yellow-500"
                        : "bg-red-500"
                  }`}
                  style={{
                    width: `${percentage}%`,
                  }}
                />
              </div>
            </div>

            {/* Completion */}

            <div>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-gray-400">Completion</span>

                <span className="font-semibold">100%</span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-blue-500"
                  style={{
                    width: "100%",
                  }}
                />
              </div>
            </div>

            {/* Score */}

            <div>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-gray-400">Final Score</span>

                <span className="font-semibold">
                  {score}/{questions.length}
                </span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-[#b8c4ff]"
                  style={{
                    width: `${(score / questions.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            {/* Submitted */}

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-gray-400">Submitted On</p>

              <p className="mt-2 text-lg font-semibold text-white">
                {new Date(submittedAt).toLocaleString()}
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}

      <footer className="border-t border-white/10 py-8 text-center text-sm text-gray-400">
        <p>Keep learning. Stay prepared. Save lives.</p>

        <p className="mt-2">Disaster Preparedness Learning Platform</p>
      </footer>
    </main>
  )
}

export default QuizResultPage
