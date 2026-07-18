import { useEffect, useState } from "react"
import ContinueLearning from "../../components/LearningCenter/ContinueLearning"
import DisasterModules from "../../components/LearningCenter/DisasterModules"
import LearningHero from "../../components/LearningCenter/LearningHero"
import RecommendedSection from "../../components/LearningCenter/RecommendedSection"
import SearchAndFilters from "../../components/LearningCenter/SearchAndFilters"
import useDebounce from "../../hooks/useDebounce"

const LearningCenterPage = () => {
  const [search, setSearch] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("all")

  const debouncedSearch = useDebounce(search, 500)

  const isSearching = debouncedSearch.trim() !== "" || selectedFilter !== "all"

  return (
    <main className="min-h-screen bg-[#0b1326] text-white">
      <LearningHero />

      <SearchAndFilters
        search={search}
        setSearch={setSearch}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />

      {isSearching ? (
        <DisasterModules
          search={debouncedSearch}
          selectedFilter={selectedFilter}
        />
      ) : (
        <>
          <RecommendedSection />

          <ContinueLearning />

          <DisasterModules
            search=""
            selectedFilter="all"
          />
        </>
      )}
    </main>
  )
}

export default LearningCenterPage
