import { FormProvider, useForm } from "react-hook-form"
import BottomActions from "../../components/profile/BottomActions"
import EducationDetails from "../../components/profile/EducationDetails"
import EmergencyInfo from "../../components/profile/EmergencyInfo"
import LocationDetails from "../../components/profile/LocationDetails"
import PersonalInfo from "../../components/profile/PersonalInfo"
import Preferences from "../../components/profile/Preferences"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import apiInstance from "../../config/apiInstance"
import { useAuth } from "../../context/AuthContext"
import { useEffect } from "react"
import buildProfileFormData from "../../utils/buildProfileFormData"
import profileDefaultValues from "../../constants/profileDefaultValues"
import mapUserToProfileForm from "../../utils/mapUserToProfileForm"

const ProfileForm = ({ mode = "create" }) => {
  const { user, getCurrentUser } = useAuth()

  const navigate = useNavigate()
  const methods = useForm({
    mode: "onChange",
    defaultValues: profileDefaultValues,
  })

  useEffect(() => {
    if (mode === "edit" && user) {
      methods.reset(mapUserToProfileForm(user))
    }
  }, [mode, user])

  const onSubmit = async (data) => {
    const formData = buildProfileFormData(data)

    if (data.profileImage?.[0]) {
      formData.append("profileImage", data.profileImage[0])
    }

    for (const [key, value] of formData.entries()) {
      console.log(key, value)
    }
    try {
      const response = await apiInstance.put("/auth/update-profile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      await getCurrentUser()
      console.log(response)
      if (response) {
        toast.success(response?.data?.message)
      }

      // navigate("/")
    } catch (error) {
      toast.error(error?.response?.data?.message || "Registration failed.")
      console.log(error)
    }
  }

  return (
    <main className="min-h-screen bg-[#0b1326] px-4 py-10 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}

        <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="inline-flex rounded-full border border-[#1e40af]/30 bg-[#1e40af]/20 px-4 py-1 text-xs font-semibold tracking-[0.2em] text-[#b8c4ff]">
              ONBOARDING PHASE
            </span>

            <h1 className="mt-5 text-5xl font-bold text-[#dde1ff]">
              {mode === "create" ? "Complete Your Profile" : "Edit Profile"}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-7 text-[#c4c5d5]">
              {mode === "create"
                ? "Help us personalize your disaster preparedness experience based on your profile and location."
                : "Update your personal information, preferences, and emergency details."}
            </p>
          </div>

          {/* Progress */}

          {mode === "create" && (
            <div className="w-full lg:w-56">
              <div className="mb-3 flex justify-between text-xs font-semibold uppercase tracking-[0.18em]">
                <span className="text-[#8e909f]">Step 02</span>

                <span className="text-[#b8c4ff]">Final Step</span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-[#2d3449]">
                <div className="h-full w-full rounded-full bg-[#b8c4ff]" />
              </div>
            </div>
          )}
        </div>

        {/* Layout */}
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="grid gap-8 lg:grid-cols-12">
              {/* Left */}

              <div className="space-y-8 lg:col-span-8">
                <PersonalInfo />

                <LocationDetails />

                <EducationDetails />
              </div>

              {/* Right */}

              <div className="space-y-8 lg:col-span-4">
                <EmergencyInfo />

                <Preferences />
              </div>
            </div>

            {/* Bottom */}

            <BottomActions mode={mode} />
          </form>
        </FormProvider>
      </div>
    </main>
  )
}

export default ProfileForm
