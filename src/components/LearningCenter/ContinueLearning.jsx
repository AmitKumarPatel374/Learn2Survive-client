import { useEffect, useState } from "react"
import { Play, Clock3, CheckCircle2 } from "lucide-react"
import { useNavigate } from "react-router-dom"
import apiInstance from "../../config/apiInstance"

const ContinueLearning = () => {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  const getLearningProgress = async () => {
    try {
      setLoading(true)

      const response = await apiInstance.get("/disasters/progress")

      if (response.data.success) {
        setCourses(response.data.data || [])
      }
    } catch (error) {
      console.error("Get learning progress error:", error)
      setCourses([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getLearningProgress()
  }, [])

  const formatLastSeen = (date) => {
    if (!date) return "Recently"

    const now = new Date()
    const lastSeen = new Date(date)

    const diffInSeconds = Math.floor(
      (now - lastSeen) / 1000
    )

    if (diffInSeconds < 60) {
      return "Just now"
    }

    const diffInMinutes = Math.floor(diffInSeconds / 60)

    if (diffInMinutes < 60) {
      return `${diffInMinutes} ${
        diffInMinutes === 1 ? "minute" : "minutes"
      } ago`
    }

    const diffInHours = Math.floor(diffInMinutes / 60)

    if (diffInHours < 24) {
      return `${diffInHours} ${
        diffInHours === 1 ? "hour" : "hours"
      } ago`
    }

    const diffInDays = Math.floor(diffInHours / 24)

    if (diffInDays === 1) {
      return "Yesterday"
    }

    if (diffInDays < 7) {
      return `${diffInDays} days ago`
    }

    return lastSeen.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
  }

  if (loading) {
    return (
      <section className="px-6 py-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7">
            <h2 className="text-[32px] font-bold text-white">
              Continue Learning
            </h2>

            <p className="mt-2 text-[#8e909f]">
              Pick up where you left off and continue improving your disaster preparedness.
            </p>
          </div>

          <p className="text-[#8e909f]">
            Loading your learning progress...
          </p>
        </div>
      </section>
    )
  }

  if (courses.length === 0) {
    return null
  }

  return (
    <section className="px-6 py-8 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <div className="mb-7">
          <h2 className="text-[32px] font-bold text-white">
            Continue Learning
          </h2>

          <p className="mt-2 text-[#8e909f]">
            Pick up where you left off and continue improving your disaster preparedness.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-5 lg:grid-cols-3">
          {courses.map((course) => {
            const disaster = course.disaster

            const isCompleted = course.progress === 100

            return (
              <div
                key={disaster._id}
                className="rounded-3xl border border-white/10 bg-[#171f33]/40 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#b8c4ff]/30"
              >

                {/* Top */}

                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold text-white">
                    {disaster.name}
                  </h3>

                  {isCompleted ? (
                    <CheckCircle2
                      size={22}
                      className="shrink-0 text-emerald-400"
                    />
                  ) : (
                    <div className="shrink-0 rounded-full bg-[#1e40af]/20 px-3 py-1 text-xs font-semibold text-[#b8c4ff]">
                      {course.progress}%
                    </div>
                  )}
                </div>

                {/* Lesson */}

                <p className="mt-3 text-sm text-[#8e909f]">
                  {course.completedSections.length} of{" "}
                  {course.totalSections} sections completed
                </p>

                {/* Progress */}

                <div className="mt-5">
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-[#8e909f]">
                      Progress
                    </span>

                    <span className="font-semibold text-white">
                      {course.progress}%
                    </span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-[#2d3449]">
                    <div
                      className="h-full rounded-full bg-[#1e40af]"
                      style={{
                        width: `${course.progress}%`,
                      }}
                    />
                  </div>
                </div>

                {/* Bottom */}

                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-[#8e909f]">
                    <Clock3 size={15} />

                    {formatLastSeen(course.lastSeenAt)}
                  </div>

                  {isCompleted ? (
                    <button
                      onClick={() =>
                        navigate(
                          `/dashboard/disasters/${disaster.slug}`
                        )
                      }
                      className="rounded-xl border border-emerald-500/20 px-4 py-2 text-sm font-semibold text-emerald-400 transition hover:bg-emerald-500/10"
                    >
                      Review
                    </button>
                  ) : (
                    <button
                      onClick={() =>
                        navigate(
                          `/dashboard/disaster/${disaster.slug}`
                        )
                      }
                      className="flex items-center gap-2 rounded-xl bg-[#1e40af] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#2952d1]"
                    >
                      <Play size={15} />
                      Resume
                    </button>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ContinueLearning