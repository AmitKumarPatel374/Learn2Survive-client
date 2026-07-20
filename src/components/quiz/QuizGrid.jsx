import { BookOpen } from "lucide-react"
import QuizCard from "./QuizCard"

const QuizGrid = ({ quizzes = [] }) => {
  return (
    <section className="px-6 py-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-[32px] font-bold text-white">
            All Quizzes
          </h2>

          <span className="text-[#8e909f]">
            {quizzes.length} Available Quizzes
          </span>
        </div>

        {quizzes.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 bg-[#171f33]/40 py-20 text-center">
            <BookOpen
              size={60}
              className="text-[#3755c3]"
            />

            <h3 className="mt-6 text-2xl font-semibold text-white">
              No Quizzes Found
            </h3>

            <p className="mt-3 max-w-md text-[#8e909f]">
              Try changing your search keyword or filter.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {quizzes.map((quiz) => (
              <QuizCard
                key={quiz._id}
                quiz={quiz}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default QuizGrid