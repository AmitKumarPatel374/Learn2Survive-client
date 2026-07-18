import { useMemo, useState } from "react"
import QuizHero from "../../components/quiz/QuizHero"
import QuizSearchFilter from "../../components/quiz/QuizSearchFilter"
import FeaturedQuiz from "../../components/quiz/QuizFeatured"
import QuizSummary from "../../components/quiz/QuizSummary"
import QuizGrid from "../../components/quiz/QuizGrid"
import ContinueLearning from "../../components/quiz/ContinueLearning"


const QuizCenterPage = () => {
  const [search, setSearch] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("all")

  const quizzes = [
    {
      _id: "1",
      title: "Flood Awareness Quiz",
      thumbnail:
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1200",
      difficulty: "Easy",
      duration: 10,
      totalQuestions: 15,
      description:
        "Learn how to stay safe before, during and after floods.",
      completed: true,
      score: 92,
      category: "Natural",
    },
    {
      _id: "2",
      title: "Earthquake Safety Quiz",
      thumbnail:
        "https://images.unsplash.com/photo-1527489377706-5bf97e608852?w=1200",
      difficulty: "Medium",
      duration: 15,
      totalQuestions: 20,
      description:
        "Test your earthquake preparedness and response knowledge.",
      completed: false,
      category: "Natural",
    },
    {
      _id: "3",
      title: "Chemical Spill Quiz",
      thumbnail:
        "https://images.unsplash.com/photo-1581093588401-12aa8652c7db?w=1200",
      difficulty: "Hard",
      duration: 20,
      totalQuestions: 25,
      description:
        "Assess your understanding of hazardous chemical emergencies.",
      completed: false,
      category: "Man-Made",
    },
  ]

  const featuredQuiz = quizzes[0]

  const continueQuiz = {
    title: "Earthquake Safety Quiz",
    progress: 65,
    description:
      "Continue from where you left off and complete the remaining questions.",
  }

  const stats = {
    totalQuizzes: quizzes.length,
    completed: quizzes.filter((q) => q.completed).length,
    remaining: quizzes.filter((q) => !q.completed).length,
    bestScore: "92%",
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

        case "Natural":
          return quiz.category === "Natural"

        case "Man-Made":
          return quiz.category === "Man-Made"

        default:
          return true
      }
    })
  }, [quizzes, search, selectedFilter])

  return (
    <main className="min-h-screen bg-[#0b1326] text-white">
      <QuizHero />

      <QuizSearchFilter
        search={search}
        setSearch={setSearch}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />

      <section className="px-6 py-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <FeaturedQuiz quiz={featuredQuiz} />
          </div>

          <QuizSummary stats={stats} />
        </div>
      </section>

      <ContinueLearning quiz={continueQuiz} />

      <QuizGrid quizzes={filteredQuizzes} />
    </main>
  )
}

export default QuizCenterPage