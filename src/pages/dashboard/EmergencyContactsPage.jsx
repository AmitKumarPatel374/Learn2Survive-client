import { useEffect, useMemo, useState } from "react"
import { toast } from "react-toastify"
import apiInstance from "../../config/apiInstance"

import HeroSection from "../../components/emergency/HeroSection"
import SearchFilterBar from "../../components/emergency/SearchFilterBar"
import QuickEmergencyCards from "../../components/emergency/QuickEmergencyCards"
import EmergencyServicesGrid from "../../components/emergency/EmergencyServicesGrid"
import NationalHelplineList from "../../components/emergency/NationalHelplineList"
import SOSCard from "../../components/emergency/SOSCard"

const EmergencyContactsPage = () => {
  const [search, setSearch] = useState("")

  const [selectedState, setSelectedState] = useState("")
  const [selectedDistrict, setSelectedDistrict] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")

  const [states, setStates] = useState([])
  const [districts, setDistricts] = useState([])
  const [categories, setCategories] = useState([])

  const [nationalContacts, setNationalContacts] = useState([])
  const [stateContacts, setStateContacts] = useState([])
  const [districtContacts, setDistrictContacts] = useState([])

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchStates()
    fetchCategories()
    fetchNationalContacts()
  }, [])

  const fetchStates = async () => {
    try {
      const { data } = await apiInstance.get("/emergency/states")
      setStates(data.data || [])
    } catch (error) {
      toast.error("Failed to load states")
    }
  }

  const fetchCategories = async () => {
    try {
      const { data } = await apiInstance.get("/emergency/categories")
      setCategories(data.data || [])
    } catch (error) {
      toast.error("Failed to load categories")
    }
  }

  const fetchNationalContacts = async () => {
    try {
      const { data } = await apiInstance.get("/emergency/national")
      setNationalContacts(data.data || [])
    } catch (error) {
      toast.error("Failed to load contacts")
    }
  }

  const handleStateChange = async (stateCode) => {
    setSelectedState(stateCode)
    setSelectedDistrict("")
    setDistricts([])
    setStateContacts([])
    setDistrictContacts([])

    if (!stateCode) {
      return
    }

    try {
      setLoading(true)

      const districtRes = await apiInstance.get(`/emergency/districts/${stateCode}`)

      setDistricts(districtRes.data.data || [])

      const stateRes = await apiInstance.get(`/emergency/state/${stateCode}`)

      setStateContacts(stateRes.data.data || [])
    } catch (error) {
      toast.error("Failed to load state contacts")
    } finally {
      setLoading(false)
    }
  }

  const handleDistrictChange = async (district) => {
    setSelectedDistrict(district)

    if (!district) return

    try {
      setLoading(true)

      const { data } = await apiInstance.get(`/emergency/district/${selectedState}/${district}`)

      setDistrictContacts(data.data || [])
    } catch (error) {
      toast.error("Failed to load district contacts")
    } finally {
      setLoading(false)
    }
  }

  const isFiltering = search.trim() || selectedState || selectedDistrict || selectedCategory

  const contactsToShow = useMemo(() => {
    if (selectedDistrict) return districtContacts

    if (selectedState) return stateContacts

    return nationalContacts
  }, [nationalContacts, stateContacts, districtContacts, selectedState, selectedDistrict])

  return (
    <main className="min-h-screen text-white">
      <HeroSection />

      <SearchFilterBar
        search={search}
        setSearch={setSearch}
        states={states}
        selectedState={selectedState}
        setSelectedState={handleStateChange}
        districts={districts}
        selectedDistrict={selectedDistrict}
        setSelectedDistrict={handleDistrictChange}
      />

      {!isFiltering && (
        <>
          <QuickEmergencyCards contacts={nationalContacts} />

          <EmergencyServicesGrid
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </>
      )}

      <NationalHelplineList
        contacts={contactsToShow}
        search={search}
        selectedCategory={selectedCategory}
        loading={loading}
      />

      {!isFiltering && <SOSCard />}
    </main>
  )
}

export default EmergencyContactsPage
