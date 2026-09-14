import {
  CheckCircle2,
  X,
} from "lucide-react"

const QuizSuccessToast = ({
  toast,
  onClose,
}) => {
  if (!toast) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[calc(100%-3rem)] max-w-md animate-in slide-in-from-bottom-4">

      <div className="rounded-2xl border border-emerald-500/30 bg-[#131b2e] p-4 shadow-2xl">

        <div className="flex items-start gap-3">

          {/* Icon */}

          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
            <CheckCircle2 size={20} />
          </div>

          {/* Content */}

          <div className="flex-1">

            <h4 className="text-sm font-bold text-white">
              Quiz Generation Initialized!
            </h4>

            <p className="mt-0.5 text-xs text-slate-300">
              Gemini AI is generating questions for{" "}
              <span className="font-semibold text-blue-300">
                {toast.disaster}
              </span>
              .
            </p>

            <div className="mt-2 overflow-x-auto rounded-lg border border-white/5 bg-black/40 p-2 font-mono text-[11px] text-slate-400">

              <pre className="whitespace-pre-wrap">
                {JSON.stringify(
                  {
                    title: toast.payload.title,
                    disaster: toast.payload.disaster,
                    disasterId:
                      toast.payload.disasterId,
                    category:
                      toast.payload.category,
                    totalQuestions:
                      toast.payload.totalQuestions,
                  },
                  null,
                  2
                )}
              </pre>

            </div>

          </div>

          {/* Close */}

          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 transition-colors hover:text-white"
          >
            <X size={16} />
          </button>

        </div>

      </div>

    </div>
  )
}

export default QuizSuccessToast