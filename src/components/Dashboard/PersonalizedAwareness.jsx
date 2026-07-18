import { ArrowRight } from "lucide-react"

const cards = [
  {
    title: "Heatwave\nPreparedness",
    tag: "Climate",
    tagClass: "bg-[#ffb95f] text-[#472a00]",
    border: "hover:border-[#ffb95f]/30",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCoiRL872eODWdQvu4hTzfJtANgmGmRf_EHkPxunGqp1y9iOdxwJAu_dx_S9nMg2pwqmfMPE-77zPFcBqFN-Hif6l_rGzzgoz7o6Wquaws03khU-oMOFaDrKzjC_k7Jhrzv0yHBW_DfmIhhhS5ATj5ozENLkTllzZSMigFmGohQTnLuXGJa7kSVDLsmitiovRDZI8elhldQjBtRnXOHykTpcJxbsxLykcBfTL2E-ES_PmD_RPwovk8cf7fhb9_nYNmU0pqv-mjmue0",
    description:
      "Learn how to stay hydrated, avoid heatstroke and protect yourself during extreme summer temperatures.",
  },
  {
    title: "Fire\nSafety",
    tag: "Safety",
    tagClass: "bg-red-500 text-white",
    border: "hover:border-red-400/30",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuADzaOrmIKTc34tsTZxw7Gqz2GIcb1CjdXqWa6aYtDzL1Xxz1saDbpq4ijN3AlehCqVBc4DsJ2oPtYYxLfqmYq6WGyiBPZzpyorKaG6AODt_nmx0gRvGTwLfDVNYexof754XxpPJ6DAvOInfunuAaKPhaKXAmrf4RLd7WG_O68xzGyfKyFg8pyqraxXchaSTkBek98hYT6e8wBOQ6Bs8L1WEcRE4ERIzIGqN1zXREQjoX_wHxYaElH6IyH_1rXdoY9S2YAJ9z-LSBo",
    description:
      "Understand escape planning, extinguisher usage and emergency evacuation procedures.",
  },
  {
    title: "Electrical\nHazards",
    tag: "Utility",
    tagClass: "bg-[#1e40af] text-white",
    border: "hover:border-[#b8c4ff]/30",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCZMOWJEPNkDLxUaNtWkZc4PBqw4dFJz4xrRci3zKjwB-iuFRcv2zwb7R77GAlrIboAZIf0fJ6eHpbfhFd6a3bGfOCRhp7MMOmznXqcRZTm3TT9uJk6NBnJdBblkcW4E2-5492BsBdgrKCLGSZOJ83BZpQ9_4oZaJgUL1KqdfoWSV6mCzvcuO9MTMubVfxz2phaF-ZG4nyPnzMnzI_mNMwnDVFCRc57PsI9oWlcoxT_Bua2u8iqrdiP6gMJ9GokfZWgRZOUTthKemo",
    description:
      "Learn how to stay safe around damaged power lines, flooded electrical systems and storm-related electrical risks.",
  },
]

const PersonalizedAwareness = () => {
  return (
    <section className="px-6 py-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <h2 className="text-[32px] font-bold text-white">Personalized Awareness</h2>

          <p className="mt-1 text-sm text-[#8e909f]">
            Recommended safety topics based on your location and current environmental risks.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`group overflow-hidden rounded-3xl border border-white/10 bg-[#171f33]/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${card.border}`}
            >
              {/* Image */}

              <div className="relative h-40 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <span
                  className={`absolute right-3 top-3 rounded-full px-3 py-1 text-[11px] font-semibold ${card.tagClass}`}
                >
                  {card.tag}
                </span>
              </div>

              {/* Content */}

              <div className="p-5">
                <h3 className="whitespace-pre-line text-xl font-semibold leading-7 text-white">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#c4c5d5] line-clamp-3">
                  {card.description}
                </p>

                <button className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#b8c4ff] transition-all hover:gap-3">
                  Learn More
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PersonalizedAwareness
