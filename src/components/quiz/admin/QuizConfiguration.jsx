import { Lightbulb, Settings2 } from "lucide-react"

const QuizConfiguration = ({
  formData,
  errors,
  onChange,
}) => {
  const duration = Number(formData.duration) || 0
  const questions = Number(formData.totalQuestions) || 0

  const timePerQuestion =
    duration > 0 && questions > 0
      ? Math.round((duration * 60) / questions)
      : "--"

  return (
    <div className="flex h-full flex-col justify-between space-y-6">

      <div className="space-y-6">

        {/* Header */}

        <div className="flex items-center justify-between border-b border-white/10 pb-3">

          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-indigo-500" />

            <h2 className="text-lg font-bold tracking-tight text-white">
              Quiz Configuration
            </h2>
          </div>

          <span className="text-xs font-medium text-slate-500">
            Parameters
          </span>

        </div>

        {/* Duration */}

        <div>
          <label className="mb-1.5 block text-sm font-semibold text-slate-200">
            Duration{" "}
            <span className="text-rose-400">*</span>
          </label>

          <div className="relative">

            <input
              type="number"
              min="1"
              value={formData.duration}
              onChange={(e) =>
                onChange("duration", e.target.value)
              }
              className="w-full rounded-xl border border-white/10 bg-[#0b1326]/85 px-4 py-3 pr-24 font-mono text-sm text-slate-200 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />

            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold uppercase tracking-wider text-slate-400">
              minutes
            </span>

          </div>

          <div className="mt-1.5 flex justify-between">
            <span className="text-xs text-slate-400">
              Minimum: 1 minute
            </span>

            <span className="font-mono text-xs text-slate-500">
              Default: 10 mins
            </span>
          </div>

          {errors.duration && (
            <p className="mt-1.5 text-xs font-medium text-rose-400">
              {errors.duration}
            </p>
          )}
        </div>

        {/* Questions */}

        <div>
          <label className="mb-1.5 block text-sm font-semibold text-slate-200">
            Number of Questions{" "}
            <span className="text-rose-400">*</span>
          </label>

          <div className="relative">

            <input
              type="number"
              min="1"
              max="50"
              value={formData.totalQuestions}
              onChange={(e) =>
                onChange(
                  "totalQuestions",
                  e.target.value
                )
              }
              className="w-full rounded-xl border border-white/10 bg-[#0b1326]/85 px-4 py-3 pr-24 font-mono text-sm text-slate-200 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />

            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold uppercase tracking-wider text-slate-400">
              questions
            </span>

          </div>

          <div className="mt-1.5 flex justify-between">
            <span className="text-xs text-slate-400">
              Range: 1 – 50
            </span>

            <span className="font-mono text-xs text-slate-500">
              Default: 15 questions
            </span>
          </div>

          {errors.totalQuestions && (
            <p className="mt-1.5 text-xs font-medium text-rose-400">
              {errors.totalQuestions}
            </p>
          )}
        </div>

        {/* Profile */}

        <div className="space-y-2 rounded-xl border border-white/5 bg-slate-900/60 p-4">

          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300">
            <Settings2
              size={15}
              className="text-blue-400"
            />

            Quiz Profile Breakdown
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1 text-xs text-slate-400">

            <ProfileItem
              label="Est. Time / Question"
              value={
                timePerQuestion === "--"
                  ? "--"
                  : `${timePerQuestion} sec`
              }
            />

            <ProfileItem
              label="Passing Score"
              value="70%"
              valueClass="text-emerald-400"
            />

            <ProfileItem
              label="Target Format"
              value="MCQ (4 options)"
            />

            <ProfileItem
              label="Validation"
              value="Gemini Safety"
            />

          </div>
        </div>

      </div>

      {/* Tip */}

      <div className="mt-4 flex items-start gap-3 rounded-xl border border-blue-500/15 bg-blue-500/5 p-3.5">

        <Lightbulb
          size={18}
          className="mt-0.5 shrink-0 text-blue-400"
        />

        <p className="text-xs leading-relaxed text-slate-300">
          Gemini balances safety principles, local
          geography considerations, and age-appropriate
          triage questions based on difficulty.
        </p>

      </div>

    </div>
  )
}

const ProfileItem = ({
  label,
  value,
  valueClass = "text-slate-200",
}) => (
  <div className="flex justify-between gap-2 border-b border-white/5 py-1">
    <span>{label}:</span>

    <span className={`font-mono ${valueClass}`}>
      {value}
    </span>
  </div>
)

export default QuizConfiguration