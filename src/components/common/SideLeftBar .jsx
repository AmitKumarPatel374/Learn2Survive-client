import {
  Shield,
  Home,
  BookOpen,
  Brain,
  Bell,
  User,
  Phone,
  Bot,
  Settings,
  LogOut,
} from "lucide-react"
import { useAuth } from "../../context/AuthContext"
import { useNavigate, NavLink } from "react-router-dom"

const SideLeftBar = () => {
  const { user, setUser } = useAuth()
  const navigate = useNavigate()

  const avatarLetter =
    user?.fullName?.trim()?.charAt(0)?.toUpperCase() ||
    user?.email?.trim()?.charAt(0)?.toUpperCase() ||
    "U"

  const menuItems = [
    {
      title: "Dashboard",
      icon: Home,
      path: "/dashboard",
    },
    {
      title: "Learning Center",
      icon: BookOpen,
      path: "/dashboard/learning-center",
    },
    {
      title: "Quizzes",
      icon: Brain,
      path: "/dashboard/quizzes",
    },
    {
      title: "Simulations",
      icon: Bot,
      path: "/dashboard/simulations",
    },
    {
      title: "Emergency Contacts",
      icon: Phone,
      path: "/dashboard/emergency-contact",
    },
  ]

  return (
    <aside className="fixed left-0 top-16 z-50 flex h-[calc(100vh-4rem)] w-72 flex-col border-r border-white/5 bg-[#171f33]/80 p-6 backdrop-blur-xl">
      {/* Profile */}

      <div className="mb-6 rounded-xl border border-white/10 bg-[#171f33]/70 p-3">
        <div className="flex items-center gap-4">
          <div className="relative">
            {user?.profileImage?.url ? (
              <img
                src={user.profileImage.url}
                alt={user.fullName}
                className="h-12 w-12 rounded-full border-2 border-[#1e40af] object-cover"
              />
            ) : (
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#1e40af] bg-[#1e40af] text-lg font-bold text-white">
                {avatarLetter}
              </div>
            )}

            <span className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-[#171f33] bg-[#4edea3]" />
          </div>

          <div>
            <h2 className="text-base font-semibold text-[#dae2fd]">
              {user?.fullName || "Guest User"}
            </h2>

            <p className="text-[10px] uppercase tracking-[0.2em] text-[#b8c4ff]">
              {user?.role ? user.role.charAt(0).toUpperCase() + user.role.slice(1) : "Guest"}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto hide-scrollbar scroll-smooth">
        <nav className="flex flex-col gap-2">
          {menuItems.map((item) => {
            const Icon = item.icon

            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/dashboard"}
                className={({ isActive }) =>
                  `group flex items-center gap-4 rounded-xl px-4 py-3 transition ${
                    isActive
                      ? "bg-[#1e40af] font-semibold text-[#dde1ff]"
                      : "text-[#c4c5d5] hover:bg-[#2d3449]/50 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon
                      size={20}
                      fill={isActive ? "currentColor" : "none"}
                    />
                    <span>{item.title}</span>
                  </>
                )}
              </NavLink>
            )
          })}
        </nav>
      </div>

      <div className="mt-6 rounded-2xl border border-[#1e40af]/30 bg-gradient-to-br from-[#1e40af]/20 to-[#171f33] p-4 ">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1e40af]">
            <Bot
              size={20}
              className="text-[#ffb95f]"
            />
          </div>

          <div>
            <h3 className="font-semibold text-[#dae2fd]">AI Assistant</h3>

            <p className="text-xs text-[#8e909f]">Ask anything about disasters.</p>
          </div>
        </div>

        <button className="mt-4 w-full rounded-xl bg-[#1e40af] py-2 text-sm font-medium text-white transition hover:bg-[#2856db]">
          Open Assistant
        </button>
      </div>
    </aside>
  )
}

export default SideLeftBar
