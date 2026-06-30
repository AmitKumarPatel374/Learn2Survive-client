const AboutSection = () => {
  return (
    <section className="bg-[#131b2e]/50 py-24">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        {/* Left Content */}

        <div className="relative">
          {/* Background Glow */}

          <div className="absolute -left-12 -top-12 h-64 w-64 rounded-full bg-[#b8c4ff]/10 blur-[100px]" />

          <div className="relative z-10">
            <h2 className="mb-6 text-4xl font-bold leading-tight text-white lg:text-6xl">
              AI-Powered Disaster
              <br />
              Preparedness
              <br />
              Platform
            </h2>

            <p className="text-lg leading-9 text-[#c4c5d5]">
              Our platform is designed to help students and communities become disaster-ready
              through easy-to-understand educational content, interactive quizzes, disaster
              simulations, emergency resources, and AI-powered guidance. Whether preparing for
              floods, earthquakes, fires, or other emergencies, the platform provides the knowledge
              and tools needed to stay informed and stay safe.
            </p>
          </div>
        </div>

        {/* Right Image */}

        <div className="relative group">
          {/* Glow */}

          <div className="absolute left-1/2 top-1/2 -z-10 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b8c4ff]/20 blur-[120px]" />

          {/* Card */}

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#171f33]/40 p-2 backdrop-blur-xl shadow-2xl">
            <img
              src="https://ik.imagekit.io/amit374/learn2Survive/unnamed%20(4).png"
              alt="AI Disaster Platform"
              className="w-full rounded-2xl transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
