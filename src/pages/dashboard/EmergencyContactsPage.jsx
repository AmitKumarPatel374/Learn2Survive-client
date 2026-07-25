import { useState } from "react"
import HeroSection from "../../components/emergency/HeroSection"
import SearchFilterBar from "../../components/emergency/SearchFilterBar"
import QuickEmergencyCards from "../../components/emergency/QuickEmergencyCards"
import EmergencyServicesGrid from "../../components/emergency/EmergencyServicesGrid"
import NationalHelplineList from "../../components/emergency/NationalHelplineList"
import StateDistrictSection from "../../components/emergency/StateDistrictSection"
import SOSCard from "../../components/emergency/SOSCard"

const EmergencyContactsPage = () => {
  // Search
  const [search, setSearch] = useState("")

  // Filters
  const [selectedState, setSelectedState] = useState("")
  const [selectedDistrict, setSelectedDistrict] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")

  // Data
  const [states, setStates] = useState([])
  const [districts, setDistricts] = useState([])
  const [categories, setCategories] = useState([])
  const [nationalContacts, setNationalContacts] = useState([])
  const [stateContacts, setStateContacts] = useState([])
  const [districtContacts, setDistrictContacts] = useState([])

  const [loading, setLoading] = useState(false)

  return (
    <main className="min-h-screen text-white">
      <HeroSection />

      {/* Next Components */}
      <SearchFilterBar
        search={search}
        setSearch={setSearch}
        states={states}
        selectedState={selectedState}
        setSelectedState={setSelectedState}
        districts={districts}
        selectedDistrict={selectedDistrict}
        setSelectedDistrict={setSelectedDistrict}
      />

      <QuickEmergencyCards />
      <EmergencyServicesGrid />
      <NationalHelplineList />
      <StateDistrictSection />
      <SOSCard />
    </main>
  )
}

export default EmergencyContactsPage
