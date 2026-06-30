import { ArrowLeft } from "lucide-react"

const SettingsHeader = () => {
  return (
    <section className="px-6 pt-10 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Back Button */}

        <button className="group mb-6 flex items-center gap-2 text-[#b8c4ff] transition-all duration-300 hover:gap-3">
          <ArrowLeft
            size={18}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />

          <span className="text-xs font-bold uppercase tracking-[0.3em]">Back to Dashboard</span>
        </button>

        {/* Heading */}

        <h1 className="text-4xl font-bold text-white lg:text-5xl">Settings</h1>

        <p className="mt-4 max-w-3xl leading-8 text-[#c4c5d5]">
          Customize your application preferences, notification settings and account options to
          receive the most relevant information during emergencies.
        </p>
      </div>
    </section>
  )
}

export default SettingsHeader
