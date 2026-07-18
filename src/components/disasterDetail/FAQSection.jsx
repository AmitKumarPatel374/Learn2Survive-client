import { HelpCircle } from "lucide-react"

const FAQSection = ({ disaster }) => {
  const faqs = disaster?.faqs || []

  if (faqs.length === 0) return null

  return (
    <section className="px-6 py-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}

        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1e40af]/15">
            <HelpCircle
              size={24}
              className="text-[#b8c4ff]"
            />
          </div>

          <div>
            <h2 className="text-[32px] font-bold text-white">Frequently Asked Questions</h2>

            <p className="mt-1 text-[#8e909f]">
              Find answers to common disaster preparedness questions.
            </p>
          </div>
        </div>

        {/* FAQ */}

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group rounded-2xl border border-white/10 bg-[#171f33]/40 backdrop-blur-xl"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-5">
                <span className="text-lg font-semibold text-white">{faq.question}</span>

                <span className="text-2xl font-light text-[#b8c4ff] transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>

              <div className="border-t border-white/10 px-6 py-5">
                <p className="leading-8 text-[#c4c5d5]">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
