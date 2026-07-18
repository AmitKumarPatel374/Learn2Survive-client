import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ArrowRight, Clock3, BookOpen } from "lucide-react"
import apiInstance from "../../config/apiInstance"

const RecommendedSection = () => {
  const navigate = useNavigate()

  const [modules, setModules] = useState([])
  const [loading, setLoading] = useState(true)

  const getRecommendedDisasters = async () => {
    try {
      const { data } = await apiInstance.get("/disasters/recommended")

      if (data.success) {
        setModules(data.data)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getRecommendedDisasters()
  }, [])

  if (loading) {
    return (
      <section className="px-6 py-8 lg:px-10">
        <div className="mx-auto max-w-7xl text-center text-[#8e909f]">
          Loading recommended modules...
        </div>
      </section>
    )
  }

  return (
    <section className="px-6 py-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}

        <div className="mb-7 flex items-center justify-between">
          <div>
            <h2 className="text-[32px] font-bold text-white">
              Recommended For You
            </h2>

            <p className="mt-2 text-[#8e909f]">
              Continue learning with our most engaging disaster awareness
              modules.
            </p>
          </div>

          <button className="hidden rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-[#b8c4ff] transition hover:border-[#b8c4ff]/40 lg:block">
            View All
          </button>
        </div>

        {/* Cards */}

        <div className="grid gap-6 lg:grid-cols-2">
          {modules.map((module) => (
            <div
              key={module._id}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-[#171f33]/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#b8c4ff]/30"
            >
              {/* Image */}

              <div className="relative h-64 overflow-hidden">
                <img
                  src={
                    module.thumbnail ||
                    "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=900&auto=format&fit=crop&q=80"
                  }
                  alt={module.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1326] via-transparent to-transparent" />

                <span className="absolute left-5 top-5 rounded-full bg-[#1e40af] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                  Recommended
                </span>
              </div>

              {/* Content */}

              <div className="p-6">
                <div className="mb-3 flex items-center gap-5 text-sm text-[#8e909f]">
                  <div className="flex items-center gap-2">
                    <Clock3 size={15} />
                    {module.estimatedTime} min
                  </div>

                  <div className="flex items-center gap-2">
                    <BookOpen size={15} />
                    {module.lessons} Lessons
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {module.name}
                </h3>

                <p className="mt-3 leading-7 text-[#c4c5d5]">
                  {module.shortDescription}
                </p>

                <button
                  onClick={() =>
                    navigate(`/dashboard/disaster/${module.slug}`)
                  }
                  className="mt-6 flex items-center gap-2 rounded-xl bg-[#1e40af] px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-[#2952d1]"
                >
                  Start Learning
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

export default RecommendedSection