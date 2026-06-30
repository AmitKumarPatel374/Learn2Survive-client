import { MapPin, GraduationCap } from "lucide-react"
import { useAuth } from "../../../context/AuthContext"

const LocationEducation = () => {
    const {user}=useAuth();
  return (
    <section className="px-6 py-8 lg:px-10">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* ================================= */}
        {/* Location Details */}
        {/* ================================= */}

        <div className="rounded-3xl border border-white/10 bg-[#171f33]/40 p-7 backdrop-blur-xl">
          <div className="mb-8 flex items-center gap-3 border-b border-white/10 pb-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1e40af]/10">
              <MapPin
                size={22}
                className="text-[#b8c4ff]"
              />
            </div>

            <h3 className="text-lg font-semibold uppercase tracking-[0.2em] text-white">
              Location Details
            </h3>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {/* Country */}

            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.25em] text-[#8e909f]">Country</p>

              <p className="font-semibold text-white">{user?.location?.country}</p>
            </div>

            {/* State */}

            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.25em] text-[#8e909f]">State</p>

              <p className="font-semibold text-white">{user?.location?.state}</p>
            </div>

            {/* District */}

            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.25em] text-[#8e909f]">District</p>

              <p className="font-semibold text-white">{user?.location?.district}</p>
            </div>

            {/* City */}

            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.25em] text-[#8e909f]">
                City / Village
              </p>

              <p className="font-semibold text-white">{user?.location?.city}</p>
            </div>

            {/* PIN */}

            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.25em] text-[#8e909f]">PIN Code</p>

              <p className="font-semibold text-white">{user?.location?.pinCode}</p>
            </div>
          </div>
        </div>

        {/* ================================= */}
        {/* Educational Details */}
        {/* ================================= */}

        <div className="rounded-3xl border border-white/10 bg-[#171f33]/40 p-7 backdrop-blur-xl">
          <div className="mb-8 flex items-center gap-3 border-b border-white/10 pb-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#4edea3]/10">
              <GraduationCap
                size={22}
                className="text-[#4edea3]"
              />
            </div>

            <h3 className="text-lg font-semibold uppercase tracking-[0.2em] text-white">
              Educational Details
            </h3>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {/* School Name */}

            <div className="md:col-span-1">
              <p className="mb-2 text-xs uppercase tracking-[0.25em] text-[#8e909f]">School Name</p>

              <p className="font-semibold leading-7 text-white">
                {user?.education?.institution}
              </p>
            </div>

            {/* Student ID */}

            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.25em] text-[#8e909f]">Student ID</p>

              <p className="font-semibold text-white">{user?.education?.studentId}</p>
            </div>

            {/* Class */}

            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.25em] text-[#8e909f]">
                Class / Grade
              </p>

              <p className="font-semibold text-white">{user?.education?.classGrade}</p>
            </div>

            {/* Course */}

            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.25em] text-[#8e909f]">
                Course / Stream
              </p>

              <p className="font-semibold text-white">{user?.education?.course}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationEducation
