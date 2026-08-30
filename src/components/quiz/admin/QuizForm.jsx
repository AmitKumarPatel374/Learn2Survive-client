import QuizInformation from "./QuizInformation"
import QuizConfiguration from "./QuizConfiguration"
import DisasterPreview from "./DisasterPreview"
import AIGenerationInfo from "./AIGenerationInfo"

const QuizForm = ({
  formData,
  errors,
  selectedDisaster,
  disasters,
  loadingDisasters,
  isGenerating,
  onChange,
  onDisasterChange,
  onGenerate,
  onCancel,
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onGenerate()
      }}
    >
      {/* Main Form */}

      <div className="mb-6 rounded-2xl border border-white/[0.07] bg-[rgba(19,27,46,0.75)] p-6 shadow-2xl backdrop-blur-2xl sm:p-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">

          {/* Quiz Information */}

          <div className="lg:col-span-7">
            <QuizInformation
              formData={formData}
              errors={errors}
              disasters={disasters}
              loadingDisasters={loadingDisasters}
              onChange={onChange}
              onDisasterChange={onDisasterChange}
            />
          </div>

          {/* Quiz Configuration */}

          <div className="lg:col-span-5">
            <QuizConfiguration
              formData={formData}
              errors={errors}
              onChange={onChange}
            />
          </div>

        </div>
      </div>

      {/* Disaster Preview */}

      <DisasterPreview
        selectedDisaster={selectedDisaster}
        onChangeDisaster={() => {
          document
            .getElementById("disasterSelect")
            ?.focus()
        }}
      />

      {/* AI Information */}

      <AIGenerationInfo />

      {/* Actions */}

      <div className="flex flex-col-reverse items-center justify-end gap-3.5 border-t border-white/10 pb-12 pt-6 sm:flex-row">

        <button
          type="button"
          onClick={onCancel}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-300 transition-all hover:bg-white/10 hover:text-white active:scale-95 sm:w-auto"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={isGenerating || loadingDisasters}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-blue-400/30 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition-all duration-200 hover:from-blue-500 hover:to-indigo-500 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {isGenerating ? (
            <>
              <svg
                className="h-4 w-4 animate-spin"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  className="opacity-25"
                />

                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>

              Generating Quiz...
            </>
          ) : (
            <>
              <span>✨</span>
              Generate Quiz
            </>
          )}
        </button>

      </div>
    </form>
  )
}

export default QuizForm