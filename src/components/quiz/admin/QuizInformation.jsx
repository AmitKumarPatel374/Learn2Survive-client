import { Info, AlertCircle } from "lucide-react"

const QuizInformation = ({
  formData,
  errors,
  disasters,
  loadingDisasters,
  onChange,
  onDisasterChange,
}) => {
  return (
    <div className="space-y-6">

      {/* Section Header */}

      <div className="flex items-center justify-between border-b border-white/10 pb-3">

        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-blue-500" />

          <h2 className="text-lg font-bold tracking-tight text-white">
            Quiz Information
          </h2>
        </div>

        <span className="text-xs font-medium text-slate-500">
          Step 1 of 2
        </span>

      </div>

      {/* Disaster */}

      <div>
        <label
          htmlFor="disasterSelect"
          className="mb-1.5 block text-sm font-semibold text-slate-200"
        >
          Select Disaster{" "}
          <span className="text-rose-400">*</span>
        </label>

        <select
          id="disasterSelect"
          value={formData.disaster}
          disabled={loadingDisasters}
          onChange={(e) =>
            onDisasterChange(e.target.value)
          }
          className="w-full cursor-pointer rounded-xl border border-white/10 bg-[#0b1326]/85 px-4 py-3 pr-10 text-sm text-slate-200 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <option value="">
            {loadingDisasters
              ? "Loading disasters..."
              : "Choose a disaster"}
          </option>

          {!loadingDisasters &&
            disasters.map((disaster) => (
              <option
                key={disaster._id}
                value={disaster.slug}
              >
                {disaster.name}
              </option>
            ))}
        </select>

        <p className="mt-1.5 flex items-center gap-1 text-xs text-slate-400">
          <Info
            size={13}
            className="text-slate-500"
          />

          Select the disaster this quiz will cover.
        </p>

        {errors.disaster && (
          <ErrorMessage message={errors.disaster} />
        )}
      </div>

      {/* Title */}

      <div>
        <label
          htmlFor="quizTitle"
          className="mb-1.5 block text-sm font-semibold text-slate-200"
        >
          Quiz Title{" "}
          <span className="text-rose-400">*</span>
        </label>

        <input
          id="quizTitle"
          type="text"
          value={formData.title}
          onChange={(e) =>
            onChange("title", e.target.value)
          }
          placeholder="e.g. Flood Preparedness Quiz"
          className="w-full rounded-xl border border-white/10 bg-[#0b1326]/85 px-4 py-3 text-sm text-slate-200 outline-none placeholder:text-slate-500 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
        />

        {errors.title && (
          <ErrorMessage message={errors.title} />
        )}
      </div>

      {/* Description */}

      <div>
        <label
          htmlFor="quizDescription"
          className="mb-1.5 block text-sm font-semibold text-slate-200"
        >
          Description{" "}
          <span className="text-rose-400">*</span>
        </label>

        <textarea
          id="quizDescription"
          rows={4}
          value={formData.description}
          onChange={(e) =>
            onChange("description", e.target.value)
          }
          placeholder="Describe what students will learn or be tested on."
          className="w-full resize-none rounded-xl border border-white/10 bg-[#0b1326]/85 px-4 py-3 text-sm leading-relaxed text-slate-200 outline-none placeholder:text-slate-500 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
        />

        {errors.description && (
          <ErrorMessage message={errors.description} />
        )}
      </div>

      {/* Category + Difficulty */}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

        {/* Category */}

        <div>
          <label
            htmlFor="quizCategory"
            className="mb-1.5 block text-sm font-semibold text-slate-200"
          >
            Category{" "}
            <span className="text-rose-400">*</span>
          </label>

          <select
            id="quizCategory"
            value={formData.category}
            onChange={(e) =>
              onChange(
                "category",
                e.target.value
              )
            }
            className="w-full cursor-pointer rounded-xl border border-white/10 bg-[#0b1326]/85 px-4 py-3 text-sm text-slate-200 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          >
            <option value="Preparedness">
              Preparedness
            </option>

            <option value="Safety">
              Safety
            </option>

            <option value="Emergency Response">
              Emergency Response
            </option>

            <option value="Recovery">
              Recovery
            </option>

            <option value="Awareness">
              Awareness
            </option>
            <option value="General">
              General
            </option>
          </select>

          {errors.category && (
            <ErrorMessage
              message={errors.category}
            />
          )}
        </div>

        {/* Difficulty */}

        <div>
          <label
            htmlFor="quizDifficulty"
            className="mb-1.5 block text-sm font-semibold text-slate-200"
          >
            Difficulty{" "}
            <span className="text-rose-400">*</span>
          </label>

          <select
            id="quizDifficulty"
            value={formData.difficulty}
            onChange={(e) =>
              onChange(
                "difficulty",
                e.target.value
              )
            }
            className="w-full cursor-pointer rounded-xl border border-white/10 bg-[#0b1326]/85 px-4 py-3 text-sm text-slate-200 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          >
            <option value="Easy">
              Easy
            </option>

            <option value="Medium">
              Medium
            </option>

            <option value="Hard">
              Hard
            </option>
          </select>

          {errors.difficulty && (
            <ErrorMessage
              message={errors.difficulty}
            />
          )}
        </div>

      </div>
    </div>
  )
}

const ErrorMessage = ({ message }) => (
  <p className="mt-1.5 flex items-center gap-1 text-xs font-medium text-rose-400">
    <AlertCircle size={13} />
    {message}
  </p>
)

export default QuizInformation