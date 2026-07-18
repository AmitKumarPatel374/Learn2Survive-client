import { TypeAnimation } from "react-type-animation"
import { ArrowRight, Play, Sparkles } from "lucide-react"
import { useAuth } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"

const HeroBanner = () => {
  const navigate = useNavigate()
  return (
    <section className="relative overflow-hidden">
      {/* Background Glow */}

      <div className="absolute left-[-180px] top-20 h-[420px] w-[420px] rounded-full bg-[#1e40af]/20 blur-[140px]" />

      <div className="absolute right-[-150px] bottom-[-120px] h-[500px] w-[500px] rounded-full bg-[#4edea3]/10 blur-[180px]" />

      {/* Grid Pattern */}

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-20 lg:px-10">
        {/* Badge */}

        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#4edea3]/30 bg-[#4edea3]/10 px-5 py-2">
          <Sparkles
            size={16}
            className="text-[#4edea3]"
          />

          <span className="text-sm font-medium tracking-wide text-[#4edea3]">
            AI Powered Disaster Preparedness
          </span>
        </div>

        {/* Main Heading */}

        <h1 className="max-w-4xl text-5xl font-black leading-[1.05] text-white lg:text-7xl">
          Experience
          <br />
          <span className="text-[#b8c4ff]">Learn2Survive</span>
        </h1>

        {/* Typing Animation */}

        <div className="mt-8 h-12">
          <TypeAnimation
            sequence={[
              "Learn Before Disaster.",
              2000,
              "Prepare With AI.",
              2000,
              "Respond Faster.",
              2000,
              "Save Lives Together.",
              2000,
            ]}
            wrapper="span"
            speed={45}
            repeat={Infinity}
            className="text-3xl font-semibold text-[#4edea3]"
          />
        </div>

        {/* Description */}

        <p className="mt-8 max-w-2xl text-lg leading-8 text-[#c4c5d5]">
          Learn disaster preparedness through interactive simulations, AI guidance, emergency alerts
          and community-driven learning designed for students, organizations and citizens.
        </p>

        {/* Buttons */}

        <div className="mt-10 flex flex-wrap gap-5">
          {/* Get Started */}

          <button
            onClick={() => navigate("/dashboard/")}
            className="group flex items-center gap-3 rounded-xl bg-[#b8c4ff] px-8 py-4 font-semibold text-[#002584] shadow-[0_15px_40px_rgba(184,196,255,.25)] transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_50px_rgba(184,196,255,.4)]"
          >
            Get Started
            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>

          {/* Watch Demo */}

          <button className="group flex items-center gap-3 rounded-xl border border-white/10 bg-[#171f33]/40 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-[#4edea3]/40 hover:bg-[#171f33]/70">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4edea3]/15">
              <Play
                size={18}
                fill="currentColor"
                className="ml-1 text-[#4edea3]"
              />
            </div>
            Watch Demo
          </button>
        </div>

        {/* Hero Stats */}

        <div className="mt-20 grid max-w-5xl grid-cols-2 gap-5 lg:grid-cols-4">
          {/* Card 1 */}

          <div className="rounded-2xl border border-white/10 bg-[#171f33]/50 p-6 backdrop-blur-xl transition hover:border-[#b8c4ff]/30 hover:-translate-y-1">
            <h2 className="text-4xl font-black text-[#b8c4ff]">15K+</h2>

            <p className="mt-2 text-[#c4c5d5]">Active Learners</p>
          </div>

          {/* Card 2 */}

          <div className="rounded-2xl border border-white/10 bg-[#171f33]/50 p-6 backdrop-blur-xl transition hover:border-[#4edea3]/30 hover:-translate-y-1">
            <h2 className="text-4xl font-black text-[#4edea3]">250+</h2>

            <p className="mt-2 text-[#c4c5d5]">Interactive Quizzes</p>
          </div>

          {/* Card 3 */}

          <div className="rounded-2xl border border-white/10 bg-[#171f33]/50 p-6 backdrop-blur-xl transition hover:border-[#ffb95f]/30 hover:-translate-y-1">
            <h2 className="text-4xl font-black text-[#ffb95f]">40+</h2>

            <p className="mt-2 text-[#c4c5d5]">Disaster Simulations</p>
          </div>

          {/* Card 4 */}

          <div className="rounded-2xl border border-white/10 bg-[#171f33]/50 p-6 backdrop-blur-xl transition hover:border-[#b8c4ff]/30 hover:-translate-y-1">
            <h2 className="text-4xl font-black text-white">24/7</h2>

            <p className="mt-2 text-[#c4c5d5]">AI Assistant</p>
          </div>
        </div>
        {/* Bottom Area */}

        <div className="mt-24 flex flex-col items-center justify-between gap-10 lg:flex-row">
          {/* Left */}

          <div className="max-w-xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#4edea3]">
              SMART • SAFE • SECURE
            </p>

            <h3 className="text-3xl font-bold text-white lg:text-5xl">
              Preparedness Begins
              <br />
              Before Disaster.
            </h3>

            <p className="mt-6 leading-8 text-[#c4c5d5]">
              Learn essential safety practices, participate in real-time simulations, receive
              AI-powered recommendations and become ready for every emergency situation.
            </p>
          </div>

          {/* Right Illustration */}

          <div className="relative">
            {/* Glow */}

            <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1e40af]/20 blur-[120px]" />

            {/* Main Card */}

            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#171f33]/50 p-4 backdrop-blur-xl shadow-2xl">
              <img
                src="https://ik.imagekit.io/amit374/learn2Survive/unnamed%20(1).png"
                alt="AI Disaster"
                className="h-[420px] w-[520px] rounded-2xl object-cover"
              />

              {/* Floating Card */}

              <div className="absolute -left-8 bottom-10 rounded-2xl border border-white/10 bg-[#171f33]/90 p-5 backdrop-blur-xl shadow-xl">
                <p className="text-xs uppercase tracking-[0.25em] text-[#4edea3]">AI Prediction</p>

                <h4 className="mt-2 text-3xl font-bold text-white">98.6%</h4>

                <p className="mt-1 text-sm text-[#c4c5d5]">Early Warning Accuracy</p>
              </div>

              {/* Floating Card */}

              <div className="absolute -right-8 top-10 rounded-2xl border border-white/10 bg-[#171f33]/90 p-5 backdrop-blur-xl shadow-xl">
                <p className="text-xs uppercase tracking-[0.25em] text-[#ffb95f]">Emergency</p>

                <h4 className="mt-2 text-3xl font-bold text-white">24/7</h4>

                <p className="mt-1 text-sm text-[#c4c5d5]">Instant Assistance</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down */}

        <div className="mt-20 flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.4em] text-[#8e909f]">
            Scroll To Explore
          </span>

          <div className="mt-5 flex h-12 w-7 justify-center rounded-full border border-white/20">
            <div className="mt-2 h-3 w-3 animate-bounce rounded-full bg-[#4edea3]" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner
