import { BadgeCheck, CalendarDays, Mail, Phone, User } from "lucide-react"
import { useAuth } from "../../../context/AuthContext"
import { formatDate } from "../../../utils/dateFormatter"

const ProfileOverview = () => {
  const { user } = useAuth()
  console.log(user)

  return (
    <section className="px-6 py-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#171f33]/40 p-8 backdrop-blur-xl">
          {/* Glow */}

          <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full bg-[#1e40af]/20 blur-[120px]" />

          <div className="relative flex flex-col items-center gap-8 md:flex-row">
            {/* Profile Image */}

            <div className="relative shrink-0">
              <img
                src={user?.profileImage?.url}
                className="h-36 w-36 rounded-full border-4 border-[#b8c4ff] object-cover shadow-2xl"
              />

              <div className="absolute bottom-2 right-2 flex h-10 w-10 items-center justify-center rounded-full border-4 border-[#171f33] bg-[#4edea3]">
                <BadgeCheck
                  size={20}
                  className="text-[#003824]"
                />
              </div>
            </div>

            {/* Content */}

            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
                <h2 className="text-5xl font-bold text-white">{user?.fullName}</h2>

                <span className="inline-flex items-center justify-center rounded-full border border-[#4edea3]/20 bg-[#4edea3]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#4edea3]">
                  Verified Student
                </span>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-6 md:justify-start">
                {/* Email */}

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1e40af]/10">
                    <Mail
                      size={18}
                      className="text-[#b8c4ff]"
                    />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#8e909f]">Email</p>

                    <p className="font-medium text-white">{user?.email}</p>
                  </div>
                </div>

                {/* Phone */}

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4edea3]/10">
                    <Phone
                      size={18}
                      className="text-[#4edea3]"
                    />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#8e909f]">Phone</p>

                    <p className="font-medium text-white">+91 {user?.mobileNumber}</p>
                  </div>
                </div>

                {/* Member Since */}

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ffb95f]/10">
                    <CalendarDays
                      size={18}
                      className="text-[#ffb95f]"
                    />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#8e909f]">
                      Member Since
                    </p>

                    <p className="font-medium text-white">{formatDate(user?.createdAt)}</p>
                  </div>
                </div>

                {/* Date of Birth */}

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7c3aed]/10">
                    <CalendarDays
                      size={18}
                      className="text-[#c4b5fd]"
                    />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#8e909f]">
                      Date of Birth
                    </p>

                    <p className="font-medium text-white">{formatDate(user?.dateOfBirth)}</p>
                  </div>
                </div>

                {/* Gender */}

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#06b6d4]/10">
                    <User
                      size={18}
                      className="text-[#67e8f9]"
                    />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#8e909f]">Gender</p>

                    <p className="font-medium text-white">{user?.gender || "-"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfileOverview
