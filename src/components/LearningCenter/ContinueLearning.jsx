import { Play, Clock3, CheckCircle2 } from "lucide-react"

const courses = [
  {
    id: 1,
    title: "Flood Preparedness",
    lesson: "Lesson 5 of 8",
    progress: 68,
    lastSeen: "2 hours ago",
    color: "bg-sky-500",
  },
  {
    id: 2,
    title: "Earthquake Safety",
    lesson: "Lesson 2 of 6",
    progress: 35,
    lastSeen: "Yesterday",
    color: "bg-orange-500",
  },
  {
    id: 3,
    title: "Fire Safety Basics",
    lesson: "Completed",
    progress: 100,
    lastSeen: "3 days ago",
    color: "bg-emerald-500",
  },
]

const ContinueLearning = () => {
  return (
    <section className="px-6 py-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}

        <div className="mb-7">
          <h2 className="text-[32px] font-bold text-white">Continue Learning</h2>

          <p className="mt-2 text-[#8e909f]">
            Pick up where you left off and continue improving your disaster preparedness.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-5 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.id}
              className="rounded-3xl border border-white/10 bg-[#171f33]/40 p-6 backdrop-blur-xl transition-all duration-300 hover:border-[#b8c4ff]/30 hover:-translate-y-1"
            >
              {/* Top */}

              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">{course.title}</h3>

                {course.progress === 100 ? (
                  <CheckCircle2
                    size={22}
                    className="text-emerald-400"
                  />
                ) : (
                  <div className="rounded-full bg-[#1e40af]/20 px-3 py-1 text-xs font-semibold text-[#b8c4ff]">
                    {course.progress}%
                  </div>
                )}
              </div>

              {/* Lesson */}

              <p className="mt-3 text-sm text-[#8e909f]">{course.lesson}</p>

              {/* Progress */}

              <div className="mt-5">
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-[#8e909f]">Progress</span>

                  <span className="font-semibold text-white">{course.progress}%</span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-[#2d3449]">
                  <div
                    className={`${course.color} h-full rounded-full`}
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>

              {/* Bottom */}

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-[#8e909f]">
                  <Clock3 size={15} />

                  {course.lastSeen}
                </div>

                {course.progress === 100 ? (
                  <button className="rounded-xl border border-emerald-500/20 px-4 py-2 text-sm font-semibold text-emerald-400 transition hover:bg-emerald-500/10">
                    Review
                  </button>
                ) : (
                  <button className="flex items-center gap-2 rounded-xl bg-[#1e40af] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#2952d1]">
                    <Play size={15} />
                    Resume
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContinueLearning
