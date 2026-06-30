import EmergencyInfo from "../../components/profile/myProfile/EmergencyInfo"
import LearningStats from "../../components/profile/myProfile/LearningStats"
import LocationEducation from "../../components/profile/myProfile/LocationEducation"
import ProfileHeader from "../../components/profile/myProfile/ProfileHeader"
import ProfileOverview from "../../components/profile/myProfile/ProfileOverview"
import QuickActions from "../../components/profile/myProfile/QuickActions"
import RecentActivity from "../../components/profile/myProfile/RecentActivity"

const ProfilePage = () => {
  return (
    <main className="min-h-screen bg-[#0b1326] text-white">
      <ProfileHeader />

      <ProfileOverview />

      <LocationEducation />

      <EmergencyInfo />

      <LearningStats />

      <RecentActivity />

      <QuickActions />
    </main>
  )
}

export default ProfilePage
