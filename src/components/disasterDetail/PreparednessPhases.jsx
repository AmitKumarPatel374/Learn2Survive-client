import { ShieldCheck, TriangleAlert, HeartHandshake } from "lucide-react"

const PreparednessPhases = ({ disaster }) => {
  const preparedness = disaster?.preparedness

  const phases = [
    {
      title: preparedness?.before?.title,
      description: preparedness?.before?.description,
      icon: ShieldCheck,
      color: "emerald",
      steps: preparedness?.before?.steps || [],
    },
    {
      title: preparedness?.during?.title,
      description: preparedness?.during?.description,
      icon: TriangleAlert,
      color: "red",
      steps: preparedness?.during?.steps || [],
    },
    {
      title: preparedness?.after?.title,
      description: preparedness?.after?.description,
      icon: HeartHandshake,
      color: "yellow",
      steps: preparedness?.after?.steps || [],
    },
  ]

  return (
    <section className="px-6 py-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}

        <div className="mb-8">
          <h2 className="text-[32px] font-bold text-white">Disaster Preparedness</h2>

          <p className="mt-2 text-[#8e909f]">
            Learn what you should do before, during and after a disaster.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-6 lg:grid-cols-3">
          {phases.map((phase, index) => {
            const Icon = phase.icon

            const borderColor =
              phase.color === "emerald"
                ? "border-emerald-500/20 hover:border-emerald-400"
                : phase.color === "red"
                  ? "border-red-500/20 hover:border-red-400"
                  : "border-yellow-500/20 hover:border-yellow-400"

            const bgColor =
              phase.color === "emerald"
                ? "bg-emerald-500/15"
                : phase.color === "red"
                  ? "bg-red-500/15"
                  : "bg-yellow-500/15"

            const textColor =
              phase.color === "emerald"
                ? "text-emerald-400"
                : phase.color === "red"
                  ? "text-red-400"
                  : "text-yellow-400"

            return (
              <div
                key={index}
                className={`group rounded-3xl border bg-[#171f33]/40 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${borderColor}`}
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${bgColor}`}
                >
                  <Icon
                    size={28}
                    className={textColor}
                  />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">{phase.title}</h3>

                <p className="mt-3 text-sm leading-7 text-[#8e909f]">{phase.description}</p>

                <ul className="mt-5 space-y-3 text-[15px] leading-7 text-[#c4c5d5]">
                  {phase.steps.map((step, stepIndex) => (
                    <li key={stepIndex}>• {step}</li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PreparednessPhases
