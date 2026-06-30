import { LockKeyhole, ChevronRight, LogOut } from "lucide-react"
import { useNavigate } from "react-router-dom"
import apiInstance from "../../config/apiInstance"
import { toast } from "react-toastify"

const SecuritySettings = () => {
  const navigate = useNavigate()

  const logoutHandler = async () => {
    try {
      const response = await apiInstance.delete("/auth/logout")
      console.log(response)

      if (response) {
        toast.success(response?.data?.message)
      }
      navigate("/user/settings")
    } catch (error) {
      toast.error(error?.response?.data?.message || "Registration failed.")
      console.log(error?.response)
    }
  }
  return (
    <section className="px-6 py-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl border border-white/10 bg-[#171f33]/40 p-7 backdrop-blur-xl">
          {/* Header */}

          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1e40af]/10">
              <LockKeyhole
                size={24}
                className="text-[#b8c4ff]"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">Account Security</h2>

              <p className="mt-1 text-sm text-[#8e909f]">
                Manage your password and account sessions.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {/* Change Password */}

            <button
              onClick={() => navigate("/auth/forgotPassword")}
              className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-[#0f1729] px-6 py-5 transition-all duration-300 hover:border-[#b8c4ff]/30 hover:bg-[#171f33]"
            >
              <div className="text-left">
                <h3 className="font-semibold text-white">Change Password</h3>

                <p className="mt-1 text-sm text-[#8e909f]">
                  Update your account password to keep your profile secure.
                </p>
              </div>

              <ChevronRight
                size={22}
                className="text-[#b8c4ff]"
              />
            </button>

            {/* Logout All Devices */}

            <button onClick={logoutHandler} className="flex w-full items-center justify-between rounded-2xl border border-red-500/20 bg-red-500/5 px-6 py-5 transition-all duration-300 hover:bg-red-500/10 hover:border-red-500/40">
              <div className="text-left">
                <h3 className="font-semibold text-red-400">Logout from All Devices</h3>

                <p className="mt-1 text-sm text-[#c4c5d5]">
                  Sign out from every device where your account is currently logged in.
                </p>
              </div>

              <LogOut
                size={22}
                className="text-red-400"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecuritySettings
