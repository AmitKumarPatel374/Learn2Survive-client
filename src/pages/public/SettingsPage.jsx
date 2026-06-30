import AboutSettings from "../../components/settings/AboutSettings"
import AppearanceSettings from "../../components/settings/AppearanceSettings"
import LanguageSettings from "../../components/settings/LanguageSettings"
import NotificationSettings from "../../components/settings/NotificationSettings"
import SecuritySettings from "../../components/settings/SecuritySettings"
import SettingsActions from "../../components/settings/SettingsActions"
import SettingsHeader from "../../components/settings/SettingsHeader"

const SettingsPage = () => {
  return (
    <main className="min-h-screen bg-[#0b1326] text-white">
      <SettingsHeader />

      <LanguageSettings />

      <AppearanceSettings />

      <NotificationSettings />

      <SecuritySettings />

      <AboutSettings />

      <SettingsActions />
    </main>
  )
}

export default SettingsPage
