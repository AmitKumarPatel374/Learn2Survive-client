import { GraduationCap, School } from "lucide-react"
import { useFormContext } from "react-hook-form"

const EducationDetails = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <section className="rounded-2xl border border-white/10 bg-[#171f33]/70 backdrop-blur-xl p-5 sm:p-6 lg:p-8">
      {/* Heading */}

      <div className="mb-6 flex items-center gap-3">
        <GraduationCap
          size={28}
          className="text-[#b8c4ff]"
        />

        <h2 className="text-2xl font-semibold text-[#dde1ff] sm:text-3xl">Educational Details</h2>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* School */}

        <div>
          <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-[#c4c5d5]">
            institution
          </label>

          <div className="relative">
            <School
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8e909f]"
            />

            <input
              type="text"
              placeholder="Institution Name"
              className="h-12 sm:h-14 w-full rounded-xl border border-white/10 bg-[#131b2e] pl-12 pr-4 text-white placeholder:text-[#8e909f] outline-none transition focus:border-[#b8c4ff] focus:ring-2 focus:ring-[#b8c4ff]/20"
              {...register("education.institution", {
                required: "School / College is required",
              })}
            />
          </div>

          {errors.education?.institution && (
            <p className="mt-2 text-sm text-red-400">{errors.education.institution.message}</p>
          )}
        </div>

        {/* Student ID */}

        <div>
          <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-[#c4c5d5]">
            Student ID
          </label>

          <input
            type="text"
            placeholder="Optional ID"
            className="h-12 sm:h-14 w-full rounded-xl border border-white/10 bg-[#131b2e] px-4 text-white placeholder:text-[#8e909f] outline-none transition focus:border-[#b8c4ff] focus:ring-2 focus:ring-[#b8c4ff]/20"
            {...register("education.studentId")}
          />
        </div>

        {/* Class */}

        <div>
          <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-[#c4c5d5]">
            classGrade
          </label>

          <input
            type="text"
            placeholder="e.g. 10th or Year 2"
            className="h-12 sm:h-14 w-full rounded-xl border border-white/10 bg-[#131b2e] px-4 text-white placeholder:text-[#8e909f] outline-none transition focus:border-[#b8c4ff] focus:ring-2 focus:ring-[#b8c4ff]/20"
            {...register("education.classGrade", {
              required: "Class / Grade is required",
            })}
          />

          {errors.education?.classGrade && (
            <p className="mt-2 text-sm text-red-400">{errors.education.classGrade.message}</p>
          )}
        </div>

        {/* Course */}

        <div>
          <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-[#c4c5d5]">
            Course / Stream
          </label>

          <input
            type="text"
            placeholder="e.g. Science, Arts, B.Tech"
            className="h-12 sm:h-14 w-full rounded-xl border border-white/10 bg-[#131b2e] px-4 text-white placeholder:text-[#8e909f] outline-none transition focus:border-[#b8c4ff] focus:ring-2 focus:ring-[#b8c4ff]/20"
            {...register("education.course", {
              required: "Course / Stream is required",
            })}
          />

          {errors.education?.course && (
            <p className="mt-2 text-sm text-red-400">{errors.education.course.message}</p>
          )}
        </div>
      </div>

      {/* Information Card */}

      <div className="mt-8 rounded-xl border border-[#4edea3]/20 bg-[#4edea3]/10 p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <GraduationCap
            size={20}
            className="mt-1 text-[#4edea3]"
          />

          <div>
            <h4 className="font-semibold text-[#dde1ff]">Educational Information</h4>

            <p className="mt-2 text-sm leading-6 text-[#c4c5d5]">
              Your educational details help us recommend disaster awareness content, school-based
              preparedness programs, and training materials relevant to your level of study.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationDetails
