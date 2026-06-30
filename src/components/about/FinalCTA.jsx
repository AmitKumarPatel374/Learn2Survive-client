const FinalCTA = () => {
  return (
    <section className="px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[32px] border border-[#b8c4ff]/20 bg-[#171f33]/50 px-8 py-20 backdrop-blur-xl lg:px-16">
          {/* Background Glow */}

          <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#1e40af]/15 blur-[100px]" />

          <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#4edea3]/10 blur-[100px]" />

          {/* Content */}

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-bold leading-tight text-white lg:text-6xl">
              Start Your
              <br />
              Preparedness Journey
              <br />
              Today
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#c4c5d5]">
              Don't wait for an emergency to learn how to respond. Join thousands of learners
              building safer communities through interactive disaster education and AI-powered
              preparedness.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">
              <button
                onClick={() => navigate("/dashboard/home")}
                className="rounded-xl bg-[#b8c4ff] px-10 py-4 font-bold text-[#002584] shadow-xl transition-all duration-300 hover:brightness-110 active:scale-95"
              >
                Get Started
              </button>

              <button
                onClick={() => navigate("/dashboard/home")}
                className="rounded-xl border border-[#b8c4ff]/30 px-10 py-4 font-bold text-[#b8c4ff] transition-all duration-300 hover:bg-[#b8c4ff]/10 active:scale-95"
              >
                Go to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
