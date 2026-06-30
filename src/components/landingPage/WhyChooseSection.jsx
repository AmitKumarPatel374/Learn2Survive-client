import {
  BookOpen,
  GraduationCap,
  PhoneCall,
} from "lucide-react";

const WhyChooseSection = () => {
  return (
    <section className="px-6 py-24 lg:px-10">

      <div className="mx-auto max-w-[1280px]">

        {/* Heading */}

        <div className="mb-16 text-center">

          <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.3em] text-[#b8c4ff]">
            Key Advantages
          </span>

          <h2 className="text-4xl font-bold text-white lg:text-6xl">
            Why Choose Our Platform?
          </h2>

        </div>

        {/* Cards */}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {/* ===================== */}
          {/* Learn */}
          {/* ===================== */}

          <div className="group rounded-3xl border border-white/10 bg-[#171f33]/40 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#b8c4ff]/30 hover:bg-[#171f33]/60">

            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1e40af]/15">

              <BookOpen
                size={34}
                className="text-[#b8c4ff]"
              />

            </div>

            <h3 className="mb-4 text-3xl font-semibold text-white">
              Learn
            </h3>

            <p className="leading-7 text-[#c4c5d5]">
              Gain practical knowledge about different
              disasters through easy-to-understand
              articles, videos, and guides.
            </p>

          </div>

          {/* ===================== */}
          {/* Prepare */}
          {/* ===================== */}

          <div className="group rounded-3xl border border-white/10 bg-[#171f33]/40 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#4edea3]/30 hover:bg-[#171f33]/60">

            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#4edea3]/10">

              <GraduationCap
                size={34}
                className="text-[#4edea3]"
              />

            </div>

            <h3 className="mb-4 text-3xl font-semibold text-white">
              Prepare
            </h3>

            <p className="leading-7 text-[#c4c5d5]">
              Build disaster preparedness skills by
              completing quizzes, learning safety
              procedures, and participating in
              interactive activities.
            </p>

          </div>
                    {/* ===================== */}
          {/* Stay Connected */}
          {/* ===================== */}

          <div className="group rounded-3xl border border-white/10 bg-[#171f33]/40 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#ffb95f]/30 hover:bg-[#171f33]/60">

            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#ffb95f]/10">

              <PhoneCall
                size={34}
                className="text-[#ffb95f]"
              />

            </div>

            <h3 className="mb-4 text-3xl font-semibold text-white">
              Stay Connected
            </h3>

            <p className="leading-7 text-[#c4c5d5]">
              Receive important updates, access emergency
              contacts, and use AI assistance whenever you
              need guidance.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default WhyChooseSection;