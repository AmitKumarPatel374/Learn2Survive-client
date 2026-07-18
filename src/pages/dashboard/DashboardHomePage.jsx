import ActivitySection from "../../components/Dashboard/ActivitySection"
import AlertBanner from "../../components/Dashboard/AlertBanner"
import DailySafetyTip from "../../components/Dashboard/DailySafetyTip"
import DashboardGreeting from "../../components/Dashboard/DashboardGreeting"
import LatestAchievement from "../../components/Dashboard/LatestAchievement"
import LearningProgress from "../../components/Dashboard/LearningProgress"
import PersonalizedAwareness from "../../components/Dashboard/PersonalizedAwareness"
import ResponseHub from "../../components/Dashboard/ResponseHub"

const DashboardHomePage = () => {
  return (
    <main>
      <DashboardGreeting />

      <AlertBanner />

      <div className="grid grid-cols-12 gap-6">
        {/* LEFT */}

        <div className="col-span-8">
          <ResponseHub />

          <PersonalizedAwareness />

          <ActivitySection />
        </div>

        {/* RIGHT */}

        <div className="col-span-4">
          <LearningProgress />

          <DailySafetyTip />

          <LatestAchievement />
        </div>
      </div>
    </main>
  )
}

export default DashboardHomePage
