import { Bell, CloudRain, Save, School, ShieldAlert } from "lucide-react"
import { useAuth } from "../../context/AuthContext"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import apiInstance from "../../config/apiInstance"
import buildProfileFormData from "../../utils/buildProfileFormData"

const NotificationSettings = () => {
  const { user, getCurrentUser } = useAuth()

  const [preferences, setPreferences] = useState({
    governmentAlerts: false,
    weatherReports: false,
    schoolBroadcasts: false,
    emergencyDrills: false,
  })


  useEffect(() => {
    if (user?.preferences?.notifications) {
      setPreferences(user.preferences.notifications)
    }
  }, [user])

  const toggleNotification = (key) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const saveNotificationSettings = async () => {
    try {
      const updatedUser = {
        ...user,
        preferences: {
          language: user.preferences.language,
          notifications: preferences,
        },
      }

      const formData = buildProfileFormData(updatedUser)

      await apiInstance.put("/auth/update-profile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })

      await getCurrentUser()
      toast.success("Notification settings updated.")
    } catch (error) {
      toast.error(error?.response?.data?.message || "Unable to update settings.")
    }
  }

  return (
    <section className="px-6 py-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl border border-white/10 bg-[#171f33]/40 p-7 backdrop-blur-xl">
          {/* Header */}

          <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1e40af]/10">
                <Bell
                  size={24}
                  className="text-[#b8c4ff]"
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">Notifications</h2>

                <p className="mt-1 text-sm text-[#8e909f]">
                  Control which emergency alerts you receive.
                </p>
              </div>
            </div>

            <span className="rounded-full border border-[#4edea3]/20 bg-[#4edea3]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#4edea3]">
              All Active
            </span>
          </div>

          <div className="space-y-5">
            {/* Government Alerts */}

            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#0f1729] p-5 transition-all duration-300 hover:border-red-400/20">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10">
                  <ShieldAlert
                    size={28}
                    className="text-red-400"
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-white">Government Alerts</h3>

                  <p className="mt-1 text-sm text-[#8e909f]">
                    Receive national and regional emergency broadcasts instantly.
                  </p>
                </div>
              </div>

              <button
                onClick={() => toggleNotification("governmentAlerts")}
                className={`relative h-7 w-14 rounded-full transition-all ${
                  preferences.governmentAlerts ? "bg-[#4edea3]" : "bg-[#2d3449]"
                }`}
              >
                <span
                  className={`absolute top-1 h-5 w-5 rounded-full bg-white transition-all ${
                    preferences.governmentAlerts ? "right-1" : "left-1"
                  }`}
                />
              </button>
            </div>

            {/* Weather Reports */}

            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#0f1729] p-5 transition-all duration-300 hover:border-[#b8c4ff]/20">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1e40af]/10">
                  <CloudRain
                    size={28}
                    className="text-[#b8c4ff]"
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-white">Weather Reports</h3>

                  <p className="mt-1 text-sm text-[#8e909f]">
                    Stay updated with severe weather forecasts and local conditions.
                  </p>
                </div>
              </div>

              <button
                onClick={() => toggleNotification("weatherReports")}
                className={`relative h-7 w-14 rounded-full transition-all ${
                  preferences.weatherReports ? "bg-[#4edea3]" : "bg-[#2d3449]"
                }`}
              >
                <span
                  className={`absolute top-1 h-5 w-5 rounded-full bg-white transition-all ${
                    preferences.weatherReports ? "right-1" : "left-1"
                  }`}
                />
              </button>
            </div>
            {/* School Broadcasts */}

            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#0f1729] p-5 transition-all duration-300 hover:border-[#ffb95f]/20">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ffb95f]/10">
                  <School
                    size={28}
                    className="text-[#ffb95f]"
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-white">School Broadcasts</h3>

                  <p className="mt-1 text-sm text-[#8e909f]">
                    Receive announcements, safety notices and updates from your educational
                    institution.
                  </p>
                </div>
              </div>

              {/* OFF */}

              <button
                onClick={() => toggleNotification("schoolBroadcasts")}
                className={`relative h-7 w-14 rounded-full transition-all ${
                  preferences.schoolBroadcasts ? "bg-[#4edea3]" : "bg-[#2d3449]"
                }`}
              >
                <span
                  className={`absolute top-1 h-5 w-5 rounded-full bg-white transition-all ${
                    preferences.schoolBroadcasts ? "right-1" : "left-1"
                  }`}
                />
              </button>
            </div>

            {/* Emergency Drills */}

            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#0f1729] p-5 transition-all duration-300 hover:border-[#4edea3]/20">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4edea3]/10">
                  <Bell
                    size={28}
                    className="text-[#4edea3]"
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-white">Emergency Drills</h3>

                  <p className="mt-1 text-sm text-[#8e909f]">
                    Receive reminders for scheduled mock drills, preparedness activities and
                    practice exercises.
                  </p>
                </div>
              </div>

              {/* ON */}

              <button
                onClick={() => toggleNotification("emergencyDrills")}
                className={`relative h-7 w-14 rounded-full transition-all ${
                  preferences.emergencyDrills ? "bg-[#4edea3]" : "bg-[#2d3449]"
                }`}
              >
                <span
                  className={`absolute top-1 h-5 w-5 rounded-full bg-white transition-all ${
                    preferences.emergencyDrills ? "right-1" : "left-1"
                  }`}
                />
              </button>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                onClick={saveNotificationSettings}
                className="flex items-center gap-2 rounded-xl bg-[#b8c4ff] px-6 py-3 font-semibold text-[#002584] transition hover:bg-[#d7deff]"
              >
                <Save size={18} />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NotificationSettings
