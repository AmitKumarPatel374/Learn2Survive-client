import QuestionOption from "./QuestionOption"

const QuestionCard = ({
  question,
  questionNumber,
  selectedAnswer,
  onSelectOption,
}) => {
  return (
    <div className="glass-card w-full rounded-[32px] border border-white/10 bg-[#171f33]/60  shadow-2xl backdrop-blur-xl lg:p-8">
      {/* Question Number */}
      <div className="mb-4">
        <span className="rounded-full border border-[#b8c4ff]/20 bg-[#1e40af]/20 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#b8c4ff]">
          Question {String(questionNumber).padStart(2, "0")}
        </span>

        <h2 className="mt-4 text-3xl font-bold leading-relaxed text-white">
          {question.question}
        </h2>
      </div>

      {/* Options */}

      <div className="space-y-4">
        {question.options.map((option, index) => (
          <QuestionOption
            key={index}
            option={option}
            index={index}
            selected={selectedAnswer === index}
            onClick={() => onSelectOption(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default QuestionCard