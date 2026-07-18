import {
  Timer,
  ListChecks,
  RotateCcw,
  Play,
  CheckCircle2,
} from "lucide-react"
import { useNavigate } from "react-router-dom"

const difficultyColors = {
  Easy: "bg-blue-500/10 text-blue-300",
  Medium: "bg-amber-500/10 text-amber-300",
  Hard: "bg-red-500/10 text-red-300",
}

const QuizCard = ({ quiz }) => {
  const navigate = useNavigate();
  return (
    <div className="group overflow-hidden rounded-3xl border border-white/10 bg-[#171f33]/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#3755c3]/40">
      {/* Thumbnail */}

      <div className="relative h-52 overflow-hidden">
        <img
          src={quiz.thumbnail}
          alt={quiz.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Status Badge */}

        {quiz.completed ? (
          <span className="absolute right-4 top-4 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white">
            COMPLETED
          </span>
        ) : (
          <span className="absolute right-4 top-4 rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold text-black">
            NEW
          </span>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1326] via-transparent to-transparent" />
      </div>

      {/* Body */}

      <div className="space-y-5 p-6">
        <div>
          <h3 className="text-2xl font-bold text-white transition group-hover:text-[#b8c4ff]">
            {quiz.title}
          </h3>

          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
            <span
              className={`rounded-full px-3 py-1 font-medium ${
                difficultyColors[quiz.difficulty]
              }`}
            >
              {quiz.difficulty}
            </span>

            <div className="flex items-center gap-1 text-[#8e909f]">
              <Timer size={15} />

              <span>{quiz.duration} Min</span>
            </div>

            <div className="flex items-center gap-1 text-[#8e909f]">
              <ListChecks size={15} />

              <span>{quiz.totalQuestions} Q</span>
            </div>
          </div>
        </div>

        {!quiz.completed ? (
          <p className="line-clamp-2 text-sm leading-6 text-[#8e909f]">
            {quiz.description}
          </p>
        ) : (
          <div className="flex items-center justify-between rounded-xl bg-[#222a3d] px-4 py-3">
            <span className="text-sm text-[#8e909f]">
              Last Score
            </span>

            <span className="font-semibold text-emerald-400">
              {quiz.score}%
            </span>
          </div>
        )}

        {/* Button */}

        {quiz.completed ? (
          <button onClick={()=>navigate('/dashboard/quizzes/start')} className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#3755c3]/40 py-3 font-semibold text-[#b8c4ff] transition hover:bg-[#1e40af] hover:text-white">
            <RotateCcw size={18} />

            Retake Quiz
          </button>
        ) : (
          <button onClick={()=>navigate('/dashboard/quizzes/start')} className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#1e40af] py-3 font-semibold text-white transition hover:bg-[#3755c3]">
            <Play size={18} />

            Start Quiz
          </button>
        )}
      </div>
    </div>
  )
}

export default QuizCard