import { useNavigate } from "react-router-dom"

const AboutHero = () => {
  const navigate = useNavigate()
  return (
    <section className="relative overflow-hidden px-6 py-24 lg:px-10">
      {/* Background Glow */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,64,175,0.15),transparent_70%)]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2">
        {/* Left Content */}

        <div>
          <span className="inline-block rounded-full border border-[#b8c4ff]/20 bg-[#1e40af]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#b8c4ff]">
            System Overview
          </span>

          <h1 className="mt-6 text-5xl font-black leading-tight text-white lg:text-7xl">
            About Disaster
            <br />
            Learn2Survive
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-[#c4c5d5]">
            Empowering individuals with the knowledge, skills, and practical tools required to
            prepare for emergencies, respond confidently, and build resilient communities through
            structured, technology-driven learning.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-5">
            {/* Get Started */}

            <button
              onClick={() => navigate("/dashboard/home")}
              className="rounded-xl bg-[#b8c4ff] px-8 py-3 font-semibold text-[#002584] shadow-lg transition-all duration-300 hover:brightness-110 active:scale-95"
            >
              Get Started
            </button>

            {/* View Framework */}

            <button className="rounded-xl border border-white/10 bg-[#171f33]/40 px-8 py-3 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/5 active:scale-95">
              View Framework
            </button>
          </div>
        </div>

        {/* Right Side */}

        <div className="relative">
          {/* Decorative Glow */}

          <div className="absolute -right-12 -top-12 h-72 w-72 rounded-full bg-[#4edea3]/10 blur-[90px]" />

          <div className="absolute -bottom-12 -left-12 h-56 w-56 rounded-full bg-[#1e40af]/15 blur-[70px]" />

          {/* Image Card */}

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#171f33]/40 p-2 backdrop-blur-xl shadow-2xl">
            <img
              src="https://ik.imagekit.io/amit374/learn2Survive/unnamed_cU2PI5FNd.png"
              alt="Disaster Preparedness"
              className="w-full rounded-2xl object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero
