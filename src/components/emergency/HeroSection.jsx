import { Phone } from "lucide-react"

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      {/* Background Blur */}
      <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-red-500/10 blur-[130px]" />

      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-500/20">
            <Phone
              size={36}
              className="text-red-400"
            />
          </div>

          <h1 className="text-4xl font-bold lg:text-5xl">
            Emergency Contacts
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 lg:text-lg">
            Access verified emergency helplines, disaster management authorities,
            hospitals, fire services and police contacts across India whenever
            you need them.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection