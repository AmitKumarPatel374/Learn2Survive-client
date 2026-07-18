import { Info, TriangleAlert } from "lucide-react"

const DisasterOverview = ({ disaster }) => {
  const overview = disaster?.overview

  return (
    <section className="px-6 py-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl border border-white/10 bg-[#171f33]/40 p-8 backdrop-blur-xl">
          {/* Heading */}

          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4edea3]/10">
              <Info
                size={24}
                className="text-[#4edea3]"
              />
            </div>

            <h2 className="text-3xl font-bold text-white">
              {overview?.title || "About This Disaster"}
            </h2>
          </div>

          {/* Description */}

          <p className="leading-8 text-[#c4c5d5]">{overview?.description}</p>

          {/* Disaster Types */}

          {overview?.types?.length > 0 && (
            <>
              <h3 className="mt-10 text-2xl font-semibold text-white">Types</h3>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                {overview.types.map((type, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-white/10 bg-[#0f1729] p-5"
                  >
                    <h4 className="text-xl font-semibold text-[#b8c4ff]">{type.title}</h4>

                    <p className="mt-3 text-sm leading-7 text-[#8e909f]">{type.description}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Causes & Warning Signs */}

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {/* Causes */}

            <div className="rounded-2xl border border-white/10 bg-[#0f1729] p-6">
              <h3 className="mb-5 text-xl font-semibold text-white">Common Causes</h3>

              <div className="space-y-3">
                {overview?.causes?.map((cause, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-2 h-2 w-2 rounded-full bg-[#4edea3]" />

                    <p className="text-[#c4c5d5]">{cause}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Warning Signs */}

            <div className="rounded-2xl border border-yellow-500/20 bg-[#0f1729] p-6">
              <div className="mb-5 flex items-center gap-2">
                <TriangleAlert
                  className="text-yellow-400"
                  size={22}
                />

                <h3 className="text-xl font-semibold text-white">Warning Signs</h3>
              </div>

              <div className="space-y-3">
                {(overview?.warningSigns || overview?.symptoms)?.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-2 h-2 w-2 rounded-full bg-yellow-400" />

                    <p className="text-[#c4c5d5]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DisasterOverview
