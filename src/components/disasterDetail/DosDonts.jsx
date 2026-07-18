import { CheckCircle2, XCircle } from "lucide-react"

const DosDonts = ({ disaster }) => {
  const dos = disaster?.dosDonts?.dos
  const donts = disaster?.dosDonts?.donts

  const doList = dos?.items || []
  const dontList = donts?.items || []

  return (
    <section className="px-6 py-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h2 className="text-[32px] font-bold text-white">
            Safety Guidelines
          </h2>

          <p className="mt-2 text-[#8e909f]">
            Follow these essential do's and don'ts to minimize risks during a disaster.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* DO'S */}

          <div className="rounded-3xl border border-emerald-500/20 bg-[#171f33]/40 p-7 backdrop-blur-xl">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/15">
                <CheckCircle2
                  size={24}
                  className="text-emerald-400"
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">
                  {dos?.title || "Things You Should Do"}
                </h3>

                {dos?.description && (
                  <p className="mt-1 text-sm text-[#8e909f]">
                    {dos.description}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-4">
              {doList.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-2xl bg-[#0f1729] p-4"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-emerald-400"
                  />

                  <p className="text-[15px] leading-7 text-[#c4c5d5]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* DON'TS */}

          <div className="rounded-3xl border border-red-500/20 bg-[#171f33]/40 p-7 backdrop-blur-xl">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/15">
                <XCircle
                  size={24}
                  className="text-red-400"
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">
                  {donts?.title || "Things You Should Avoid"}
                </h3>

                {donts?.description && (
                  <p className="mt-1 text-sm text-[#8e909f]">
                    {donts.description}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-4">
              {dontList.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-2xl bg-[#0f1729] p-4"
                >
                  <XCircle
                    size={18}
                    className="mt-0.5 shrink-0 text-red-400"
                  />

                  <p className="text-[15px] leading-7 text-[#c4c5d5]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DosDonts