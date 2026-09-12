import { useEffect, useState } from "react"
import { ArrowRight, Clock3, BookOpen } from "lucide-react"
import { useNavigate } from "react-router-dom"

import apiInstance from "../../config/apiInstance"

const PersonalizedAwareness = () => {
  const navigate = useNavigate()

  const [disasters, setDisasters] = useState([])
  const [loading, setLoading] = useState(true)

  const getPersonalizedAwareness = async () => {
    try {
      // 1. Get recommended disasters based on user's state
      const recommendationResponse = await apiInstance.get(
        "/disasters/disaster-recommendation"
      )

      if (!recommendationResponse.data.success) {
        return
      }

      const recommendations =
        recommendationResponse.data.data || []

      // 2. Fetch actual disaster data
      const disasterPromises = recommendations
        .slice(0, 3)
        .map(async (item) => {
          try {
            const response = await apiInstance.get(
              `/disasters/${item.disaster}`
            )

            if (response.data.success) {
              return response.data.data
            }

            return null
          } catch (error) {
            console.error(
              `Failed to fetch disaster: ${item.disaster}`,
              error
            )

            return null
          }
        })

      const disasterResults = await Promise.all(
        disasterPromises
      )

      setDisasters(disasterResults.filter(Boolean))
    } catch (error) {
      console.error(
        "Failed to fetch personalized awareness:",
        error
      )
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getPersonalizedAwareness()
  }, [])

  if (loading) {
    return (
      <section className="px-6 py-6 lg:px-10">
        <div className="mx-auto max-w-7xl text-center text-[#8e909f]">
          Loading personalized awareness...
        </div>
      </section>
    )
  }

  if (!disasters.length) {
    return null
  }

  return (
    <section className="px-6 py-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <h2 className="text-[32px] font-bold text-white">
            Personalized Awareness
          </h2>

          <p className="mt-1 text-sm text-[#8e909f]">
            Recommended safety topics based on your location and current environmental risks.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {disasters.map((disaster) => (
            <div
              key={disaster._id}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-[#171f33]/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#b8c4ff]/30"
            >
              {/* Image */}

              <div className="relative h-40 overflow-hidden">
                <img
                  src={
                    disaster.thumbnail ||
                    "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=900&auto=format&fit=crop&q=80"
                  }
                  alt={disaster.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <span className="absolute right-3 top-3 rounded-full bg-[#1e40af] px-3 py-1 text-[11px] font-semibold text-white">
                  {disaster.category}
                </span>
              </div>

              {/* Content */}

              <div className="p-5">
                <h3 className="text-xl font-semibold leading-7 text-white">
                  {disaster.name}
                </h3>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#c4c5d5]">
                  {disaster.shortDescription}
                </p>

                <div className="mt-4 flex items-center gap-4 text-xs text-[#8e909f]">
                  {disaster.estimatedTime && (
                    <div className="flex items-center gap-1.5">
                      <Clock3 size={14} />
                      {disaster.estimatedTime} min
                    </div>
                  )}

                  {disaster.lessons && (
                    <div className="flex items-center gap-1.5">
                      <BookOpen size={14} />
                      {disaster.lessons} Lessons
                    </div>
                  )}
                </div>

                <button
                  onClick={() =>
                    navigate(
                      `/dashboard/disaster/${disaster.slug}`
                    )
                  }
                  className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#b8c4ff] transition-all hover:gap-3"
                >
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