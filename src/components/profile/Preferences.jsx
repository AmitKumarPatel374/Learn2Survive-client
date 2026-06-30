import { Languages, Bell, CloudRain, School, ShieldAlert } from "lucide-react"
import { useFormContext } from "react-hook-form"

const Preferences = () => {
  const { watch, setValue } = useFormContext()

  const language = watch("preferences.language")

  const notifications = watch("preferences") || {
    language: "English",
    governmentAlerts: true,
    weatherReports: true,
    schoolBroadcasts: true,
    emergencyDrills: false,
  }

  const changeLanguage = (lang) => {
    setValue("preferences.language", lang, {
      shouldDirty: true,
      shouldValidate: true,
    })
  }

  const toggleNotification = (key) => {
    setValue(`preferences.${key}`, !notifications[key], {
      shouldDirty: true,
      shouldValidate: true,
    })
  }

  return (
    <section className="rounded-2xl border border-white/10 bg-[#171f33]/70 backdrop-blur-xl p-5 sm:p-6 lg:p-8">
      {/* Heading */}

      <div className="mb-6 flex items-center gap-3">
        <Languages
          size={28}
          className="text-[#b8c4ff]"
        />

        <h2 className="text-2xl font-semibold text-[#dde1ff] sm:text-3xl">Preferences</h2>
      </div>

      {/* Language */}

      <div>
        <label className="mb-4 block text-xs uppercase tracking-[0.18em] text-[#c4c5d5]">
          App Language
        </label>

        <div className="flex flex-wrap gap-3">
          {["English", "Hindi", "Marathi", "Bengali"].map((lang) => (
            <button
              key={lang}
              type="button"
              onClick={() => changeLanguage(lang)}
              className={`rounded-xl px-4 py-3 text-sm font-semibold transition sm:px-5
                ${
                  language === lang
                    ? "bg-[#b8c4ff] text-[#002584]"
                    : "bg-[#2d3449] text-white hover:bg-[#39425c]"
                }`}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>

      {/* Notification Heading */}

      <div className="mt-10">
        <label className="mb-5 block text-xs uppercase tracking-[0.18em] text-[#c4c5d5]">
          Notification Settings
        </label>

        <div className="space-y-4">
          <NotificationToggle
            icon={<Bell size={18} />}
            title="Government Alerts"
            checked={notifications.governmentAlerts}
            onClick={() => toggleNotification("governmentAlerts")}
          />

          <NotificationToggle
            icon={<CloudRain size={18} />}
            title="Weather Reports"
            checked={notifications.weatherReports}
            onClick={() => toggleNotification("weatherReports")}
          />

          <NotificationToggle
            icon={<School size={18} />}
            title="School Broadcasts"
            checked={notifications.schoolBroadcasts}
            onClick={() => toggleNotification("schoolBroadcasts")}
          />

          <NotificationToggle
            icon={<ShieldAlert size={18} />}
            title="Emergency Drills"
            checked={notifications.emergencyDrills}
            onClick={() => toggleNotification("emergencyDrills")}
          />
        </div>
      </div>
    </section>
  )
}

const NotificationToggle = ({ icon, title, checked, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-[#131b2e] p-4 transition hover:border-[#b8c4ff]/30 hover:bg-[#1b2742]"
    >
      <div className="flex items-center gap-3">
        <div className="text-[#b8c4ff]">{icon}</div>

        <span className="text-left text-sm font-medium text-[#dde1ff] sm:text-base">{title}</span>
      </div>

      <div
        className={`relative h-7 w-12 rounded-full transition-all duration-300 ${
          checked ? "bg-[#00a572]" : "bg-[#2d3449]"
        }`}
      >
        <div
          className={`absolute top-1 h-5 w-5 rounded-full bg-white transition-all duration-300 ${
            checked ? "left-6" : "left-1"
          }`}
        />
      </div>
    </button>
  )
}

export default Preferences
