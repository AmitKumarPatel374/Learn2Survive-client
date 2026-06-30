import AboutHero from "../../components/about/AboutHero"
import FinalCTA from "../../components/about/FinalCTA"
import MissionSection from "../../components/about/MissionSection"
import WhatWeOffer from "../../components/about/WhatWeOffer"
import WhyPlatform from "../../components/about/WhyPlatform"

const About = () => {
  return (
    <main className="min-h-screen bg-[#0b1326] text-white">
      <AboutHero />

      <MissionSection />

      <WhatWeOffer />

      <WhyPlatform />

      <FinalCTA />
    </main>
  )
}

export default About
