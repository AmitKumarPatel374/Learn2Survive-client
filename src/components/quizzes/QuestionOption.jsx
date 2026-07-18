import { Check } from "lucide-react"

const QuestionOption = ({
  option,
  index,
  selected,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group flex w-full items-center rounded-2xl border p-4 text-left transition-all duration-200 ${
        selected
          ? "border-2 border-[#4edea3] bg-[#00a572]/10 shadow-[0_0_20px_rgba(78,222,163,0.15)]"
          : "border-[#444653] bg-[#131b2e]/40 hover:border-[#b8c4ff]/30 hover:bg-[#b8c4ff]/5"
      }`}
    >
      {/* Radio Circle */}

      <div
        className={`mr-5 flex h-6 w-6 items-center justify-center rounded-full border-2 transition-all ${
          selected
            ? "border-[#4edea3] bg-[#4edea3]/10"
            : "border-[#8e909f]"
        }`}
      >
        {selected && (
          <div className="flex h-3 w-3 items-center justify-center rounded-full bg-[#4edea3]">
            <Check
              size={10}
              strokeWidth={4}
              className="text-[#003824]"
            />
          </div>
        )}
      </div>

      {/* Option Label */}

      <div className="flex flex-1 items-center justify-between">
        <div>
          <p
            className={`text-lg transition-colors ${
              selected
                ? "font-semibold text-white"
                : "text-[#c4c5d5]"
            }`}
          >
            {option}
          </p>
        </div>

        <div
          className={`ml-6 flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold transition-all ${
            selected
              ? "bg-[#4edea3] text-[#003824]"
              : "bg-[#2d3449] text-[#b8c4ff]"
          }`}
        >
          {String.fromCharCode(65 + index)}
        </div>
      </div>
    </button>
  )
}

export default QuestionOption