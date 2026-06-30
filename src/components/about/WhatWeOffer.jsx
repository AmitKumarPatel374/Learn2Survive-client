import { TriangleAlert, ClipboardCheck, BrainCircuit, Bot } from "lucide-react"

const WhatWeOffer = () => {
  return (
    <section className="px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}

        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#b8c4ff]">
              Capabilities
            </span>

            <h2 className="mt-3 text-4xl font-bold text-white lg:text-5xl">What We Offer</h2>
          </div>

          <p className="max-w-md text-[#c4c5d5] md:text-right">
            Our platform integrates multiple learning experiences to help users understand, prepare
            and respond confidently during emergency situations.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {/* Card 1 */}

          <div className="group rounded-2xl border border-white/10 bg-[#171f33]/40 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#b8c4ff]/30">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#1e40af]/10">
              <TriangleAlert
                size={30}
                className="text-[#b8c4ff]"
              />
            </div>

            <h3 className="mb-4 text-2xl font-semibold text-white">Disaster Awareness</h3>

            <p className="leading-7 text-[#c4c5d5]">
              Learn about floods, earthquakes, wildfires and many other disasters through
              easy-to-understand educational resources.
            </p>
          </div>

          {/* Card 2 */}

          <div className="group rounded-2xl border border-white/10 bg-[#171f33]/40 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#4edea3]/30">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#4edea3]/10">
              <ClipboardCheck
                size={30}
                className="text-[#4edea3]"
              />
            </div>

            <h3 className="mb-4 text-2xl font-semibold text-white">Interactive Quizzes</h3>

            <p className="leading-7 text-[#c4c5d5]">
              Assess your preparedness using engaging quizzes and monitor your learning progress
              over time.
            </p>
          </div>
          {/* Card 3 */}

          <div className="group rounded-2xl border border-white/10 bg-[#171f33]/40 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#ffb95f]/30">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#ffb95f]/10">
              <BrainCircuit
                size={30}
                className="text-[#ffb95f]"
              />
            </div>

            <h3 className="mb-4 text-2xl font-semibold text-white">Disaster Simulations</h3>

            <p className="leading-7 text-[#c4c5d5]">
              Experience realistic emergency scenarios that help you practice decision making,
              evacuation planning and crisis response without real-world risks.
            </p>
          </div>

          {/* Card 4 */}

          <div className="group rounded-2xl border border-white/10 bg-[#171f33]/40 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#b8c4ff]/30">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#1e40af]/10">
              <Bot
                size={30}
                className="text-[#b8c4ff]"
              />
            </div>

            <h3 className="mb-4 text-2xl font-semibold text-white">AI Assistance</h3>

            <p className="leading-7 text-[#c4c5d5]">
              Receive intelligent guidance, emergency recommendations and personalized safety tips
              anytime through our AI-powered assistant.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatWeOffer
