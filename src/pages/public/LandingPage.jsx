import AboutSection from "../../components/landingPage/AboutSection"
import CTASection from "../../components/landingPage/CTASection"
import HeroBanner from "../../components/landingPage/HeroBanner"
import HeroSection from "../../components/landingPage/HeroSection"
import WhyChooseSection from "../../components/landingPage/WhyChooseSection"

const LandingPage = () => {
  return (
    <main className="min-h-screen bg-[#0b1326]">
        <HeroBanner />
      <HeroSection />

      <AboutSection />

      <WhyChooseSection />

      <CTASection />
    </main>
  )
}

export default LandingPage
