import { ShieldCheck } from "lucide-react"

const MissionSection = () => {
  return (
    <section className="border-y border-white/5 bg-[#131b2e]/50 px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-4xl text-center">
        {/* Icon */}

        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-[#4edea3]/20 bg-[#4edea3]/10">
          <ShieldCheck
            size={40}
            className="text-[#4edea3]"
          />
        </div>

        {/* Heading */}

        <h2 className="text-4xl font-bold text-white lg:text-5xl">Our Mission</h2>

        {/* Divider */}

        <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-[#4edea3]" />

        {/* Quote */}

        <p className="mx-auto mt-10 max-w-3xl text-xl italic leading-10 text-[#c4c5d5] lg:text-2xl">
          "Our mission is to make disaster preparedness simple and accessible for everyone by
          providing educational resources, interactive learning, emergency guidance, and
          preparedness tools in one intelligent platform."
        </p>

        {/* Bottom Text */}

        <p className="mt-10 text-sm uppercase tracking-[0.35em] text-[#8e909f]">
          Learn • Prepare • Respond • Protect
        </p>
      </div>
    </section>
  )
}

export default MissionSection
