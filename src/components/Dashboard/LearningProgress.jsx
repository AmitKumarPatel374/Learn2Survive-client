const LearningProgress = () => {
  return (
    <section className="px-6 py-5 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl border border-white/10 bg-[#171f33]/40 p-6 backdrop-blur-xl">
          {/* Header */}

          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4edea3]/10">
              <svg
                className="h-5 w-5 text-[#4edea3]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M3 17L9 11L13 15L21 7" />
              </svg>
            </div>

            <div>
              <h2 className="text-[28px] font-bold text-white">Learning Progress</h2>

              <p className="text-sm text-[#8e909f]">Track your preparedness journey.</p>
            </div>
          </div>

          {/* Circular Progress */}

          <div className="mb-7 flex items-center justify-around">
            {/* Safety */}

            <div className="text-center">
              <div className="relative h-24 w-24">
                <svg
                  className="-rotate-90"
                  width="96"
                  height="96"
                >
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="#2d3449"
                    strokeWidth="6"
                    fill="none"
                  />

                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="#4edea3"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="251"
                    strokeDashoffset="38"
                  />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h3 className="text-xl font-bold text-white">85%</h3>

                  <span className="text-[9px] uppercase tracking-[0.18em] text-[#8e909f]">
                    Safety
                  </span>
                </div>
              </div>
            </div>

            {/* Quiz */}

            <div className="text-center">
              <div className="relative h-24 w-24">
                <svg
                  className="-rotate-90"
                  width="96"
                  height="96"
                >
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="#2d3449"
                    strokeWidth="6"
                    fill="none"
                  />

                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="#b8c4ff"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="251"
                    strokeDashoffset="95"
                  />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h3 className="text-xl font-bold text-white">12/20</h3>

                  <span className="text-[9px] uppercase tracking-[0.18em] text-[#8e909f]">
                    Quizzes
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Bars */}

          <div className="space-y-5">
            {/* Simulation */}

            <div>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm text-[#c4c5d5]">Simulations Played</span>

                <span className="text-sm font-semibold text-white">4 / 5</span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-[#2d3449]">
                <div className="h-full w-[80%] rounded-full bg-[#b8c4ff]" />
              </div>
            </div>

            {/* Certificate */}

            <div>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm text-[#c4c5d5]">Certificates Earned</span>

                <span className="text-sm font-semibold text-white">2 / 10</span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-[#2d3449]">
                <div className="h-full w-[20%] rounded-full bg-[#ffb95f]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LearningProgress
