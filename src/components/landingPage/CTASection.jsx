import { useNavigate } from "react-router-dom";

const CTASection = () => {
    const navigate = useNavigate()
  return (
    <section className="mb-24 px-6 lg:px-10">

      <div className="mx-auto max-w-[1280px]">

        <div className="relative overflow-hidden rounded-[32px] bg-[#1e40af] px-8 py-16 shadow-2xl lg:px-16">

          {/* Background Glow */}

          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/5 blur-[120px]" />

          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-black/10 blur-[90px]" />

          {/* Content */}

          <div className="relative z-10 text-center">

            <h2 className="mb-6 text-4xl font-bold leading-tight text-white lg:text-6xl">
              Ready to Start Your
              <br />
              Learning Journey?
            </h2>

            <p className="mx-auto mb-10 max-w-3xl text-lg leading-8 text-[#a8b8ff]">
              Join thousands of learners preparing for
              emergencies through smart, interactive
              education, AI-powered guidance, disaster
              simulations, and real-world preparedness
              resources.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">

              <button onClick={() => navigate("/dashboard/home")} className="rounded-xl bg-white px-10 py-4 font-bold text-[#1e40af] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#dae2fd] active:scale-95">
                Get Started
              </button>

              <button onClick={() => navigate("/auth/login")} className="rounded-xl border-2 border-white/30 px-10 py-4 font-bold text-white transition-all duration-300 hover:bg-white/10 hover:scale-105 active:scale-95">
                Sign In
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CTASection;