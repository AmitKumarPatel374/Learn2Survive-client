import { PlayCircle, FileText, Globe, Download, ArrowUpRight } from "lucide-react"

const iconMap = {
  video: {
    icon: PlayCircle,
    color: "text-red-400",
    bg: "bg-red-500/10",
  },
  document: {
    icon: FileText,
    color: "text-sky-400",
    bg: "bg-sky-500/10",
  },
  website: {
    icon: Globe,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
}

const EducationalResources = ({ disaster }) => {
  const resources = disaster?.resources || []

  return (
    <section className="px-6 py-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}

        <div className="mb-8">
          <h2 className="text-[32px] font-bold text-white">Educational Resources</h2>

          <p className="mt-2 text-[#8e909f]">
            Learn through official documents, videos and trusted government resources.
          </p>
        </div>

        {/* Resources */}

        <div className="grid gap-6 lg:grid-cols-3">
          {resources.map((item, index) => {
            const config = iconMap[item.type] || iconMap.website
            const Icon = config.icon

            return (
              <div
                key={index}
                className="group rounded-3xl border border-white/10 bg-[#171f33]/40 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#b8c4ff]/30"
              >
                <div
                  className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${config.bg}`}
                >
                  <Icon
                    size={28}
                    className={config.color}
                  />
                </div>

                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>

                <p className="mt-3 text-sm leading-7 text-[#8e909f]">{item.description}</p>

                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#b8c4ff] transition-all hover:gap-3"
                >
                  {item.buttonText}

                  <ArrowUpRight size={16} />
                </a>
              </div>
            )
          })}
        </div>

        {/* Download Guide */}

        {disaster?.handbook && (
          <div className="mt-8 rounded-3xl border border-[#4edea3]/20 bg-gradient-to-r from-[#1a2a44] to-[#171f33]/60 p-6 backdrop-blur-xl">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white">{disaster.handbook.title}</h3>

                <p className="mt-2 text-[#8e909f]">{disaster.handbook.description}</p>
              </div>

              <a
                href={disaster.handbook.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#4edea3] px-6 py-3 font-semibold text-[#003824] transition hover:brightness-110"
              >
                <Download size={18} />
                Download PDF
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default EducationalResources
