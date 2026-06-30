import { Pencil, LockKeyhole, BadgeCheck, LogOut } from "lucide-react"
import { useNavigate } from "react-router-dom"
import apiInstance from "../../../config/apiInstance"
import { toast } from "react-toastify"
import { useAuth } from "../../../context/AuthContext"

const QuickActions = () => {
  const navigate = useNavigate()
  const {setUser}=useAuth()

  const logoutHandler = async () => {
    try {
      const response = await apiInstance.delete("/auth/logout")
      console.log(response)

      if (response) {
        toast.success(response?.data?.message)
      }
      setUser(null)
      navigate("/auth/login")
    } catch (error) {
      toast.error(error?.response?.data?.message || "Registration failed.")
      console.log(error?.response)
    }
  }
  return (
    <section className="px-6 py-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap gap-4 border-t border-white/10 pt-8">
          {/* Edit Profile */}

          <button
            onClick={() => navigate("/user/edit-profile")}
            className="flex items-center gap-3 rounded-xl bg-[#b8c4ff] px-6 py-3 font-semibold text-[#002584] shadow-lg transition-all duration-300 hover:brightness-110 active:scale-95"
          >
            <Pencil size={20} />
            Edit Profile
          </button>

          {/* Change Password */}

          <button
            onClick={() => navigate("/auth/forgotPassword")}
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#171f33]/50 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-white/5 active:scale-95"
          >
            <LockKeyhole size={20} />
            Change Password
          </button>

          {/* Certificates */}

          <button className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#171f33]/50 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-white/5 active:scale-95">
            <BadgeCheck size={20} />
            View Certificates
          </button>

          {/* Logout */}

          <button
            onClick={logoutHandler}
            className="ml-auto flex items-center gap-3 rounded-xl border border-red-500/20 bg-red-500/10 px-6 py-3 font-semibold text-red-400 transition-all duration-300 hover:bg-red-500/20 active:scale-95"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </div>
    </section>
  )
}

export default QuickActions
