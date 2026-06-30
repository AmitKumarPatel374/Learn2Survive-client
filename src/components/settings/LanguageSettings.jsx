import { Languages } from "lucide-react"
import { useAuth } from "../../context/AuthContext"
import { useEffect, useState } from "react"
import buildProfileFormData from "../../utils/buildProfileFormData"
import apiInstance from "../../config/apiInstance"
import { toast } from "react-toastify"
const languages = ["English", "Hindi", "Marathi", "Bengali"]

const LanguageSettings = () => {
  const { user, getCurrentUser } = useAuth()

  const [selectedLanguage, setSelectedLanguage] = useState("English")

  useEffect(() => {
    if (user?.preferences?.language) {
      setSelectedLanguage(user.preferences.language)
    }
  }, [user])

  const changeLanguage = async (language) => {
    if (language === selectedLanguage) return

    try {
      const updatedUser = {
        ...user,
        preferences: {
          ...user.preferences,
          language,
        },
      }

      const formData = buildProfileFormData(updatedUser)

      await apiInstance.put("/auth/update-profile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })

      await getCurrentUser()

      setSelectedLanguage(language)

    } catch (error) {
      toast.error(error?.response?.data?.message || "Unable to update language.")
    }
  }

  return (
    <section className="px-6 py-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl border border-white/10 bg-[#171f33]/40 p-7 backdrop-blur-xl">
          {/* Header */}

          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1e40af]/10">
              <Languages
                size={24}
                className="text-[#b8c4ff]"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">App Language</h2>

              <p className="mt-1 text-sm text-[#8e909f]">Choose your preferred language.</p>
            </div>
          </div>

          {/* Languages */}

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {languages.map((language, index) => (
              <button
                key={language}
                onClick={() => changeLanguage(language)}
                className={`rounded-2xl border px-6 py-4 text-center font-semibold transition-all duration-300 ${
                  selectedLanguage === language
                    ? "border-[#1e40af] bg-[#1e40af] text-white shadow-lg"
                    : "border-white/10 bg-[#0f1729] text-[#c4c5d5] hover:border-[#b8c4ff]/30 hover:bg-[#171f33]"
                }`}
              >
                {language}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LanguageSettings
