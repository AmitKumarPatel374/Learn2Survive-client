import {
  Sparkles,
  CheckCircle2,
  ListChecks,
  BrainCircuit,
} from "lucide-react"

const AIGenerationInfo = () => {
  return (
    <div className="ai-glow mb-8 rounded-2xl border border-indigo-500/20 bg-gradient-to-r from-indigo-950/30 via-slate-900/40 to-blue-950/30 p-6 sm:p-7">

      <div className="flex items-start gap-4">

        {/* Icon */}

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 text-white shadow-lg shadow-indigo-500/25">
          <BrainCircuit size={24} />
        </div>

        <div className="flex-1">

          {/* Heading */}

          <div className="mb-1 flex flex-wrap items-center gap-2">

            <h3 className="text-base font-bold tracking-tight text-white sm:text-lg">
              AI-Powered Quiz Generation
            </h3>

            <span className="rounded-md border border-indigo-500/30 bg-indigo-500/20 px-2 py-0.5 text-[11px] font-semibold text-indigo-300">
              Gemini 1.5 Pro
            </span>

          </div>

          <p className="mb-4 text-xs leading-relaxed text-slate-300 sm:text-sm">
            Once you create the quiz, Gemini AI will generate
            the questions, answer options, correct answers,
            and explanations automatically.
          </p>

          {/* Features */}

          <div className="grid grid-cols-1 gap-3.5 md:grid-cols-3">

            <Feature
              icon={<Sparkles size={16} />}
              title="Automated Questions"
              description="Instant curriculum-aligned generation"
              iconClass="bg-indigo-500/20 text-indigo-400"
            />

            <Feature
              icon={<CheckCircle2 size={16} />}
              title="Explanations Included"
              description="Detailed rationale for each answer"
              iconClass="bg-emerald-500/20 text-emerald-400"
            />

            <Feature
              icon={<ListChecks size={16} />}
              title="Multiple-Choice Format"
              description="Interactive 4-option structured format"
              iconClass="bg-blue-500/20 text-blue-400"
            />

          </div>

        </div>

      </div>

    </div>
  )
}

const Feature = ({
  icon,
  title,
  description,
  iconClass,
}) => {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 p-3 transition-colors hover:border-indigo-500/20">

      <div
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${iconClass}`}
      >
        {icon}
      </div>

      <div>

        <p className="text-xs font-semibold text-slate-200">
          {title}
        </p>

        <p className="text-[11px] leading-tight text-slate-400">
          {description}
        </p>

      </div>

    </div>
  )
}

export default AIGenerationInfo