import { useParams } from "react-router-dom"
import DisasterHero from "../../components/disasterDetail/DisasterHero"
import DisasterOverview from "../../components/disasterDetail/DisasterOverview"
import DosDonts from "../../components/disasterDetail/DosDonts"
import EducationalResources from "../../components/disasterDetail/EducationalResources"
import EmergencyKit from "../../components/disasterDetail/EmergencyKit"
import FAQSection from "../../components/disasterDetail/FAQSection"
import PreparednessPhases from "../../components/disasterDetail/PreparednessPhases"
import BottomCTA from "../../components/disasterDetail/BottomCTA"
import { useEffect, useState } from "react"
import apiInstance from "../../config/apiInstance"

const DisasterDetailsPage = () => {
  const { slug } = useParams()
  const [disaster, setDisaster] = useState(null)
  const [loading, setLoading] = useState(false)
  const [completedSections, setCompletedSections] = useState([])

  const getDisaster = async () => {
    try {
      setLoading(true)

      const response = await apiInstance.get(`/disasters/${slug}`)
      console.log(response)

      if (response.data.success) {
        setDisaster(response.data.data)
      }
    } catch (error) {
      console.log(error)

      setDisaster(null)
    } finally {
      setLoading(false)
    }
  }

  const toggleSection = async (section) => {
    const isCompleted = completedSections.includes(section)

    try {
      const response = await apiInstance.patch("/disasters/progress", {
        disasterSlug: slug,
        section,
        completed: !isCompleted,
      })

      if (response.data.success) {
        setCompletedSections(response.data.data.completedSections)
      }
    } catch (error) {
      console.error("Learning progress update error:", error)
    }
  }

  const getProgress = async () => {
  try {
    const response = await apiInstance.get(
      `/disasters/progress/${slug}`
    )

    if (response.data.success) {
      setCompletedSections(
        response.data.data.completedSections || []
      )
    }
  } catch (error) {
    console.error("Get learning progress error:", error)
    setCompletedSections([])
  }
}

  useEffect(() => {
  getDisaster()
  getProgress()
}, [slug])


  return (
    <main className="min-h-screen bg-[#0b1326] text-white">
      <DisasterHero disaster={disaster} />

      <DisasterOverview
        disaster={disaster}
        completed={completedSections.includes("overview")}
        onToggle={() => toggleSection("overview")}
      />
      <PreparednessPhases
        disaster={disaster}
        completed={completedSections.includes("preparedness")}
        onToggle={() => toggleSection("preparedness")}
      />

      <DosDonts
        disaster={disaster}
        completed={completedSections.includes("dosDonts")}
        onToggle={() => toggleSection("dosDonts")}
      />

      <EmergencyKit
        disaster={disaster}
        completed={completedSections.includes("emergencyKit")}
        onToggle={() => toggleSection("emergencyKit")}
      />

      <EducationalResources
        disaster={disaster}
        completed={completedSections.includes("resources")}
        onToggle={() => toggleSection("resources")}
      />

      <FAQSection
        disaster={disaster}
        completed={completedSections.includes("faq")}
        onToggle={() => toggleSection("faq")}
      />

      <BottomCTA disaster={disaster} />
    </main>
  )
}

export default DisasterDetailsPage
