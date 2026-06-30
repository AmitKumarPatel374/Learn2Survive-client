import { ArrowLeft, Pencil } from "lucide-react"
import { useNavigate } from "react-router-dom"

const ProfileHeader = () => {
  const navigate = useNavigate()
  return (
    <section className="px-6 pt-10 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
        {/* Left */}

        <div className="flex items-center gap-5">
          <button
            onClick={() => navigate(-1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#171f33]/40 transition-all duration-300 hover:bg-white/5"
          >
            <ArrowLeft
              size={20}
              className="text-[#c4c5d5]"
            />
          </button>

          <div>
            <h1 className="text-4xl font-bold text-white">My Profile</h1>

            <p className="mt-2 text-[#c4c5d5]">
              Manage and view your personal, educational and emergency information.
            </p>
          </div>
        </div>

        {/* Right */}

        <button
          onClick={() => navigate("/user/edit-profile")}
          className="flex items-center justify-center gap-3 rounded-xl bg-[#b8c4ff] px-6 py-3 font-semibold text-[#002584] shadow-xl transition-all duration-300 hover:brightness-110 active:scale-95"
        >
          <Pencil size={18} />
          Edit Profile
        </button>
      </div>
    </section>
  )
}

export default ProfileHeader
