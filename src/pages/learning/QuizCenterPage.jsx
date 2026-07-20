import { useEffect, useMemo, useState } from "react"
import { toast } from "react-toastify"

import QuizHero from "../../components/quiz/QuizHero"
import QuizSearchFilter from "../../components/quiz/QuizSearchFilter"
import FeaturedQuiz from "../../components/quiz/QuizFeatured"
import QuizSummary from "../../components/quiz/QuizSummary"
import QuizGrid from "../../components/quiz/QuizGrid"
import ContinueLearning from "../../components/quiz/ContinueLearning"
import apiInstance from "../../config/apiInstance"

const QuizCenterPage = () => {
  const [search, setSearch] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("all")

  const [quizzes, setQuizzes] = useState([])
  const [history, setHistory] = useState([])

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [quizRes, historyRes] = await Promise.all([
          apiInstance.get("/quiz"),
          apiInstance.get("/quiz/history"),
        ])

        const quizzesData = quizRes.data.data || []
        const historyData = historyRes.data.data || []

        setHistory(historyData)

        const mergedQuizzes = quizzesData.map((quiz) => {
          const attempt = historyData.find(
            (item) =>
              item.quizId?.toString() ===
              quiz._id.toString()
          )

          return {
            ...quiz,
            completed: attempt?.status === "Completed",
            inProgress: attempt?.status === "In Progress",
            score: attempt?.percentage || 0,
            attemptId: attempt?.attemptId,
          }
        })

        setQuizzes(mergedQuizzes)
      } catch (error) {
        toast.error(
          error.response?.data?.message ||
            "Failed to fetch quizzes."
        )
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const featuredQuiz =
    quizzes.length > 0 ? quizzes[0] : null

  const continueQuiz =
    history.find(
      (quiz) => quiz.status === "In Progress"
    ) || null

  const completedCount = history.filter(
    (quiz) => quiz.status === "Completed"
  ).length

  const stats = {
    totalQuizzes: quizzes.length,
    completed: completedCount,
    remaining: quizzes.length - completedCount,
    bestScore:
      history.length > 0
        ? `${Math.max(
            ...history.map(
              (quiz) => quiz.percentage || 0
            )
          )}%`
        : "--",
  }

  const filteredQuizzes = useMemo(() => {
    return quizzes.filter((quiz) => {
      const matchesSearch = quiz.title
        .toLowerCase()
        .includes(search.toLowerCase())

      if (!matchesSearch) return false

      switch (selectedFilter) {
        case "completed":
          return quiz.completed

        case "notAttempted":
          return !quiz.completed

        case "inProgress":
          return quiz.inProgress

        case "all":
          return true

        default:
          return quiz.category === selectedFilter
      }
    })
  }, [quizzes, search, selectedFilter])

  // Hide dashboard cards while searching/filtering
  const isFiltering =
    selectedFilter !== "all" ||
    search.trim() !== ""

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0b1326] text-xl text-white">
        Loading quizzes...
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-[#0b1326] text-white">
      <QuizHero />

      <QuizSearchFilter
        search={search}
        setSearch={setSearch}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
        quizzes={quizzes}
      />

      {!isFiltering && (
        <>
          <section className="px-6 py-8 lg:px-10">
            <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                {featuredQuiz && (
                  <FeaturedQuiz quiz={featuredQuiz} />
                )}
              </div>

              <QuizSummary stats={stats} />
            </div>
          </section>

          {continueQuiz && (
            <ContinueLearning
              quiz={continueQuiz}
            />
          )}
        </>
      )}

      <section className="px-6 pb-10 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-6 text-3xl font-bold text-white">
            {isFiltering
              ? `${filteredQuizzes.length} ${
                  filteredQuizzes.length === 1
                    ? "Quiz"
                    : "Quizzes"
                } Found`
              : "All Quizzes"}
          </h2>

          <QuizGrid quizzes={filteredQuizzes} />
        </div>
      </section>
    </main>
  )
}

export default QuizCenterPage