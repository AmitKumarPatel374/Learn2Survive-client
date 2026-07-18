import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ArrowRight, Clock3, BarChart3 } from "lucide-react"
import apiInstance from "../../config/apiInstance"

const DisasterModules = ({ search, selectedFilter }) => {
  const navigate = useNavigate()

  const [modules, setModules] = useState([])
  const [loading, setLoading] = useState(true)

  const getDisasters = async () => {
    try {
      let url = "/disasters"

      if (search.trim()) {
        url = `/disasters/search?q=${search}`
      }

      const { data } = await apiInstance.get(url)

      if (data.success) {
        let disasters = data.data

        if (selectedFilter !== "all") {
          disasters = disasters.filter((item) => item.type === selectedFilter)
        }

        setModules(disasters)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getDisasters()
  }, [search, selectedFilter])

  if (loading) {
    return (
      <section className="px-6 py-8 lg:px-10">
        <div className="mx-auto max-w-7xl text-center text-[#8e909f]">
          Loading disaster modules...
        </div>
      </section>
    )
  }

  return (
    <section className="px-6 py-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}

        <div className="mb-8">
          <h2 className="text-[32px] font-bold text-white">Explore All Modules</h2>

          <p className="mt-2 text-[#8e909f]">
            Browse our complete collection of disaster preparedness learning modules.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {modules.map((module) => (
            <div
              key={module._id}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-[#171f33]/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#b8c4ff]/30"
            >
              {/* Image */}

              <div className="relative h-52 overflow-hidden">
                <img
                  src={
                    module.thumbnail ||
                    "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=900&auto=format&fit=crop&q=80"
                  }
                  alt={module.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white">{module.name}</h3>

                <p className="mt-3 text-sm leading-7 text-[#8e909f]">{module.shortDescription}</p>

                {/* Meta */}

                <div className="mt-5 flex items-center gap-5 text-sm text-[#8e909f]">
                  <div className="flex items-center gap-2">
                    <Clock3 size={15} />
                    {module.estimatedTime} min
                  </div>

                  <div className="flex items-center gap-2">
                    <BarChart3 size={15} />
                    {module.difficulty}
                  </div>
                </div>

                <button
                  onClick={() => navigate(`/dashboard/disaster/${module.slug}`)}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#1e40af] py-3 font-semibold text-white transition hover:bg-[#2952d1]"
                >
                  Start Learning
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DisasterModules
