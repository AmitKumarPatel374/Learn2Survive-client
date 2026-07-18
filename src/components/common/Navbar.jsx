import { Shield, Search, Bell, Sun, Moon, ChevronDown, Menu } from "lucide-react"
import apiInstance from "../../config/apiInstance"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useAuth } from "../../context/AuthContext"
import { useTheme } from "../../context/ThemeContext"

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const { user, setUser } = useAuth()
  const { theme, toggleTheme } = useTheme()

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

  const avatarLetter =
    user?.fullName?.trim()?.charAt(0)?.toUpperCase() ||
    user?.email?.trim()?.charAt(0)?.toUpperCase() ||
    "U"
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 w-full border-b border-white/5 bg-[#0b1326]/80 backdrop-blur-xl ">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6">
        {/* Left */}

        <div className="flex flex-shrink-0 items-center gap-3">
          <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1e40af] text-[#b8c4ff] transition active:scale-95">
            <Shield
              size={22}
              fill="currentColor"
            />
          </button>

          {/* Desktop Logo */}

          <h1 className="hidden font-bold tracking-tight text-[#b8c4ff] md:block md:text-3xl">
            Learn2Survive
          </h1>

          {/* Mobile */}

          <h1 className="text-2xl font-bold text-[#b8c4ff] md:hidden">DP</h1>
        </div>

        {/* Search */}

        <div className="mx-10 hidden flex-1 lg:block">
          <div className="relative group">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8e909f]"
            />

            <input
              type="text"
              placeholder="Search disasters, quizzes, videos..."
              className="h-11 w-full rounded-full border border-white/10 bg-[#2d3449]/40 pl-12 pr-4 text-[#dae2fd] placeholder:text-[#8e909f] outline-none transition focus:border-[#b8c4ff] focus:ring-2 focus:ring-[#b8c4ff]/20"
            />
          </div>
        </div>

        {/* Right */}

        <div className="flex items-center gap-3">
          {/* Mobile Search */}

          <button className="rounded-lg p-2 text-[#c4c5d5] transition hover:bg-white/5 sm:hidden">
            <Search size={20} />
          </button>

          {/* Notifications */}

          <button className="relative rounded-lg p-2 text-[#c4c5d5] transition hover:bg-white/5 active:scale-95">
            <Bell size={20} />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full border border-[#0b1326] bg-red-500" />
          </button>

          {/* Theme Toggle */}

          <button
            onClick={toggleTheme}
            className="rounded-lg p-2 text-[#c4c5d5] transition hover:bg-white/5 active:scale-95"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Profile */}
          {user ? (
            // Profile Dropdown
            <div className="group relative">
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 rounded-full border border-transparent p-1 pr-2 transition hover:border-white/10 hover:bg-white/5 active:scale-95"
              >
                {user?.profileImage?.url ? (
                  <img
                    src={user.profileImage.url}
                    alt={user.fullName}
                    className="h-9 w-9 rounded-full border border-[#b8c4ff]/20 object-cover"
                  />
                ) : (
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#b8c4ff]/20 bg-[#1e40af] font-bold text-white">
                    {avatarLetter}
                  </div>
                )}

                <ChevronDown
                  size={16}
                  className="text-[#8e909f] transition group-hover:text-[#b8c4ff]"
                />
              </button>
              {/* Profile Dropdown */}

              <div
                className={`absolute right-0 top-full mt-2 w-56 rounded-xl
    border border-white/10 bg-[#171f33]/90 py-2 shadow-2xl
    backdrop-blur-xl transition-all duration-300
    ${open ? "visible opacity-100 translate-y-0" : "invisible opacity-0 translate-y-2"}`}
              >
                <div className="mb-2 border-b border-white/5 px-4 py-3">
                  <h4 className="font-semibold text-[#dae2fd]">{user?.fullName}</h4>

                  <p className="mt-1 text-xs uppercase tracking-wider text-[#8e909f]">
                    {user?.role ? user.role.charAt(0).toUpperCase() + user.role.slice(1) : "Guest"}
                  </p>
                </div>

                <button
                  onClick={() => navigate("/user/my-profile")}
                  className="flex w-full items-center gap-3 px-4 py-2 text-left text-[#dae2fd] transition hover:bg-[#1e40af]/10"
                >
                  <span className="material-symbols-outlined text-[#b8c4ff]">person</span>
                  My Profile
                </button>

                <button
                  onClick={() => navigate("/user/edit-profile")}
                  className="flex w-full items-center gap-3 px-4 py-2 text-left text-[#dae2fd] transition hover:bg-[#1e40af]/10"
                >
                  <span className="material-symbols-outlined text-[#b8c4ff]">edit</span>
                  Edit Profile
                </button>

                <button
                  onClick={() => navigate("/user/settings")}
                  className="flex w-full items-center gap-3 px-4 py-2 text-left text-[#dae2fd] transition hover:bg-[#1e40af]/10"
                >
                  <span className="material-symbols-outlined text-[#b8c4ff]">settings</span>
                  Settings
                </button>

                <div className="my-2 border-t border-white/5" />

                <button
                  onClick={logoutHandler}
                  className="flex w-full items-center gap-3 px-4 py-2 text-left text-red-400 transition hover:bg-red-500/10"
                >
                  <span className="material-symbols-outlined">logout</span>
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate("/auth/login")}
              className="rounded-lg bg-[#b8c4ff] px-5 py-2
        font-semibold text-[#002584]
        hover:bg-[#d6deff]"
            >
              Login
            </button>
          )}

          {/* Mobile Menu */}

          <button className="rounded-lg p-2 text-[#c4c5d5] transition hover:bg-white/5 md:hidden">
            <Menu size={22} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
