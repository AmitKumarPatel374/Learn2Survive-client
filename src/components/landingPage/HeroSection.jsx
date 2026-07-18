import { useNavigate } from "react-router-dom"

const HeroSection = () => {
    const navigate = useNavigate()
  return (
    <section className="px-6 lg:px-10 py-12">
      <div className="mx-auto max-w-[1280px]">
        {/* Hero Heading */}

        <div className="mb-14 text-center lg:text-left">
          <h1 className="mb-5 text-5xl font-bold leading-tight text-white lg:text-6xl">
            Experience Resilient Safety
          </h1>

          <p className="max-w-2xl text-lg leading-8 text-[#c4c5d5] lg:text-xl">
            A comprehensive ecosystem for disaster education, rapid response coordination, and
            AI-driven preparedness strategies.
          </p>
        </div>

        {/* Action Cards */}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {/* ========================= */}
          {/* Get Started */}
          {/* ========================= */}

          <div className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#171f33]/40 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#b8c4ff]/30 hover:bg-[#171f33]/60 hover:shadow-2xl">
            <div className="mb-6 aspect-square overflow-hidden rounded-xl bg-[#222a3d]">
              <img
                src="https://ik.imagekit.io/amit374/learn2Survive/unnamed%20(2).png"
                alt="Get Started"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <h3 className="mb-4 text-3xl font-semibold text-white">Get Started</h3>

            <p className="mb-6 flex-1 leading-7 text-[#c4c5d5]">
              Create your account and begin your journey toward disaster preparedness with
              personalized learning and safety resources.
            </p>

            <button onClick={() => navigate("/auth/register")} className="rounded-xl bg-[#b8c4ff] py-3 font-bold text-[#002584] transition hover:brightness-110 active:scale-95">
              Create Account
            </button>
          </div>
          {/* ========================= */}
          {/* Sign In */}
          {/* ========================= */}

          <div className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#171f33]/40 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#b8c4ff]/30 hover:bg-[#171f33]/60 hover:shadow-2xl">
            <div className="mb-6 aspect-square overflow-hidden rounded-xl bg-[#222a3d]">
              <img
                src="https://ik.imagekit.io/amit374/learn2Survive/unnamed.png"
                alt="Sign In"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <h3 className="mb-4 text-3xl font-semibold text-white">Sign In</h3>

            <p className="mb-6 flex-1 leading-7 text-[#c4c5d5]">
              Already have an account? Sign in to continue learning, track your progress, and access
              your personalized dashboard.
            </p>

            <button onClick={() => navigate("/auth/login")} className="rounded-xl border border-white/20 py-3 font-bold text-white transition hover:bg-white/5 active:scale-95">
              Sign In
            </button>
          </div>

          {/* ========================= */}
          {/* Go To Dashboard */}
          {/* ========================= */}

          <div className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#171f33]/40 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#4edea3]/30 hover:bg-[#171f33]/60 hover:shadow-2xl">
            <div className="mb-6 aspect-square overflow-hidden rounded-xl bg-[#222a3d]">
              <img
                src="https://ik.imagekit.io/amit374/learn2Survive/photo-1516321318423-f06f85e504b3.avif"
                alt="Sign In"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <h3 className="mb-4 text-3xl font-semibold text-white">Go to Dashboard</h3>

            <p className="mb-6 flex-1 leading-7 text-[#c4c5d5]">
              Access your personalized dashboard to view your learning progress, recent activities,
              and recommended disaster awareness content.
            </p>

            <button onClick={() => navigate("/dashboard/")} className="rounded-xl bg-[#4edea3] py-3 font-bold text-[#003824] transition hover:brightness-110 active:scale-95">
              Go to Dashboard
            </button>
          </div>
          {/* ========================= */}
          {/* Explore More */}
          {/* ========================= */}

          <div className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#171f33]/40 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#ffb95f]/30 hover:bg-[#171f33]/60 hover:shadow-2xl">
            <div className="mb-6 aspect-square overflow-hidden rounded-xl bg-[#222a3d]">
              <img
                src="https://ik.imagekit.io/amit374/learn2Survive/unnamed%20(1).png"
                alt="Explore Platform"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <h3 className="mb-4 text-3xl font-semibold text-white">Explore More</h3>

            <p className="mb-6 flex-1 leading-7 text-[#c4c5d5]">
              Discover how the platform helps students prepare for disasters through interactive
              learning, simulations, and AI-powered assistance.
            </p>

            <button onClick={() => navigate("/dashboard/")} className="rounded-xl border border-white/20 py-3 font-bold text-white transition hover:bg-white/5 active:scale-95">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
