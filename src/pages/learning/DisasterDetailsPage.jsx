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

  const getDisaster = async () => {
    try {
      setLoading(true)

      const response = await apiInstance.get(`/disasters/${slug}`)
      console.log(response);
      

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

  useEffect(() => {
    getDisaster()
  }, [slug])

  return (
    <main className="min-h-screen bg-[#0b1326] text-white">
      <DisasterHero disaster={disaster} />

      <DisasterOverview disaster={disaster} />

      <PreparednessPhases disaster={disaster} />

      <DosDonts disaster={disaster} />

      <EmergencyKit disaster={disaster} />

      <EducationalResources disaster={disaster} />

      <FAQSection disaster={disaster} />

      <BottomCTA disaster={disaster} />
    </main>
  )
}

export default DisasterDetailsPage
