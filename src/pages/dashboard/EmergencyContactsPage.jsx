import {
  AlertTriangle,
  Ambulance,
  Flame,
  Phone,
  Shield,
  HeartPulse,
  Search,
  MapPin,
  Navigation,
  ChevronDown,
  Hospital,
  Building2,
  Users,
  Siren,
  PhoneCall,
} from "lucide-react"

const EmergencyContactsPage = () => {
  const quickActions = [
    {
      title: "National Emergency",
      number: "112",
      icon: PhoneCall,
      color: "bg-red-500/20 text-red-400",
    },
    {
      title: "Ambulance",
      number: "108",
      icon: Ambulance,
      color: "bg-green-500/20 text-green-400",
    },
    {
      title: "Fire Brigade",
      number: "101",
      icon: Flame,
      color: "bg-orange-500/20 text-orange-400",
    },
    {
      title: "Police",
      number: "100",
      icon: Shield,
      color: "bg-blue-500/20 text-blue-400",
    },
  ]

  const categories = [
    {
      title: "Medical",
      icon: HeartPulse,
      desc: "Hospitals & Ambulance",
    },
    {
      title: "Fire",
      icon: Flame,
      desc: "Fire Rescue Services",
    },
    {
      title: "Police",
      icon: Shield,
      desc: "Police Stations",
    },
    {
      title: "Disaster Response",
      icon: AlertTriangle,
      desc: "NDRF / SDRF",
    },
    {
      title: "Hospitals",
      icon: Hospital,
      desc: "Nearby Hospitals",
    },
    {
      title: "Control Room",
      icon: Building2,
      desc: "District Emergency",
    },
  ]

  const helplines = [
    {
      name: "National Emergency",
      number: "112",
    },
    {
      name: "Police",
      number: "100",
    },
    {
      name: "Fire Brigade",
      number: "101",
    },
    {
      name: "Ambulance",
      number: "108",
    },
    {
      name: "Disaster Management",
      number: "1078",
    },
    {
      name: "Women Helpline",
      number: "1091",
    },
    {
      name: "Child Helpline",
      number: "1098",
    },
    {
      name: "Mental Health",
      number: "14416",
    },
  ]

  return (
    <main className="min-h-screen bg-[#081120] text-white">

      {/* HERO */}

      <section className="relative overflow-hidden border-b border-white/10">

        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-red-500/10 blur-[130px]" />

        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-[140px]" />

        <div className="mx-auto max-w-7xl px-6 py-16">

          <div className="flex flex-col items-center text-center">

            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-red-500/20">

              <Phone size={42} className="text-red-400" />

            </div>

            <h1 className="text-5xl font-bold">

              Emergency Contacts

            </h1>

            <p className="mt-5 max-w-2xl text-lg text-slate-300">

              Instantly access verified emergency helplines,
              hospitals, disaster response teams and rescue
              services whenever you need them.

            </p>

            <div className="mt-10 flex w-full max-w-3xl gap-4">

              <div className="relative flex-1">

                <Search
                  className="absolute left-4 top-4 text-slate-500"
                  size={20}
                />

                <input
                  placeholder="Search emergency service..."
                  className="w-full rounded-xl border border-white/10 bg-white/5 py-4 pl-12 pr-4 outline-none transition focus:border-indigo-500"
                />

              </div>

              <button className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6">

                All States

                <ChevronDown size={18} />

              </button>

            </div>

          </div>

        </div>

      </section>

      {/* QUICK ACTIONS */}

      <section className="mx-auto mt-12 max-w-7xl px-6">

        <div className="mb-8 flex items-center gap-3">

          <Siren className="text-red-400" />

          <h2 className="text-3xl font-bold">

            Emergency Numbers

          </h2>

        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {quickActions.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-2 hover:border-red-500/40"
              >
                <div
                  className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl ${item.color}`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="text-xl font-semibold">

                  {item.title}

                </h3>

                <p className="mt-3 text-4xl font-bold text-red-400">

                  {item.number}

                </p>

                <button className="mt-6 w-full rounded-xl bg-red-600 py-3 font-semibold transition hover:bg-red-700">

                  Call Now

                </button>

              </div>
            )
          })}

        </div>

      </section>
            {/* EMERGENCY CATEGORIES */}

      <section className="mx-auto mt-20 max-w-7xl px-6">

        <div className="mb-8 flex items-center gap-3">

          <AlertTriangle className="text-yellow-400" />

          <h2 className="text-3xl font-bold">

            Emergency Services

          </h2>

        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {categories.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-indigo-500 hover:bg-white/10"
              >

                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/20">

                  <Icon
                    size={30}
                    className="text-indigo-300"
                  />

                </div>

                <h3 className="text-2xl font-semibold">

                  {item.title}

                </h3>

                <p className="mt-3 text-slate-400">

                  {item.desc}

                </p>

                <button className="mt-6 rounded-xl bg-indigo-600 px-5 py-3 font-semibold transition hover:bg-indigo-700">

                  View Details

                </button>

              </div>
            )
          })}

        </div>

      </section>

      {/* NATIONAL HELPLINES */}

      <section className="mx-auto mt-20 max-w-7xl px-6">

        <div className="mb-8 flex items-center gap-3">

          <Phone className="text-green-400" />

          <h2 className="text-3xl font-bold">

            National Emergency Helplines

          </h2>

        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">

          {helplines.map((item, index) => (

            <div
              key={item.number}
              className={`flex items-center justify-between px-8 py-6 ${
                index !== helplines.length - 1
                  ? "border-b border-white/10"
                  : ""
              }`}
            >

              <div>

                <h3 className="text-xl font-semibold">

                  {item.name}

                </h3>

                <p className="mt-2 text-slate-400">

                  Available 24 × 7

                </p>

              </div>

              <div className="flex items-center gap-4">

                <span className="text-3xl font-bold text-red-400">

                  {item.number}

                </span>

                <button className="rounded-xl bg-red-600 px-5 py-3 font-semibold transition hover:bg-red-700">

                  Call

                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* STATE CONTACTS */}

      <section className="mx-auto mt-20 max-w-7xl px-6">

        <div className="mb-8 flex items-center gap-3">

          <MapPin className="text-cyan-400" />

          <h2 className="text-3xl font-bold">

            State & District Emergency Contacts

          </h2>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <div className="grid gap-6 md:grid-cols-2">

            <div>

              <label className="mb-3 block font-medium">

                Select State

              </label>

              <button className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-[#0f1729] px-5 py-4">

                Madhya Pradesh

                <ChevronDown size={18} />

              </button>

            </div>

            <div>

              <label className="mb-3 block font-medium">

                Select District

              </label>

              <button className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-[#0f1729] px-5 py-4">

                Bhopal

                <ChevronDown size={18} />

              </button>

            </div>

          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">

            <div className="rounded-2xl bg-[#0f1729] p-6">

              <h3 className="font-semibold">

                District Control Room

              </h3>

              <p className="mt-3 text-3xl font-bold text-cyan-400">

                1077

              </p>

            </div>

            <div className="rounded-2xl bg-[#0f1729] p-6">

              <h3 className="font-semibold">

                SDRF Office

              </h3>

              <p className="mt-3 text-3xl font-bold text-cyan-400">

                +91 755 111111

              </p>

            </div>

            <div className="rounded-2xl bg-[#0f1729] p-6">

              <h3 className="font-semibold">

                Collector Office

              </h3>

              <p className="mt-3 text-3xl font-bold text-cyan-400">

                +91 755 222222

              </p>

            </div>

            <div className="rounded-2xl bg-[#0f1729] p-6">

              <h3 className="font-semibold">

                Emergency Operations Center

              </h3>

              <p className="mt-3 text-3xl font-bold text-cyan-400">

                +91 755 333333

              </p>

            </div>

          </div>

        </div>

      </section>
            {/* NEARBY EMERGENCY SERVICES */}

      <section className="mx-auto mt-20 max-w-7xl px-6">

        <div className="mb-8 flex items-center gap-3">

          <Navigation className="text-emerald-400" />

          <h2 className="text-3xl font-bold">

            Nearby Emergency Services

          </h2>

        </div>

        <div className="grid gap-6 lg:grid-cols-3">

          {[
            {
              title: "City Hospital",
              distance: "2.1 km",
              type: "Hospital",
            },
            {
              title: "Police Station",
              distance: "1.3 km",
              type: "Police",
            },
            {
              title: "Fire Station",
              distance: "3.6 km",
              type: "Fire Brigade",
            },
          ].map((item) => (

            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-emerald-500"
            >

              <MapPin className="mb-5 text-emerald-400" size={32} />

              <h3 className="text-xl font-semibold">

                {item.title}

              </h3>

              <p className="mt-2 text-slate-400">

                {item.type}

              </p>

              <p className="mt-4 text-2xl font-bold text-emerald-400">

                {item.distance}

              </p>

              <button className="mt-6 w-full rounded-xl bg-emerald-600 py-3 font-semibold transition hover:bg-emerald-700">

                Navigate

              </button>

            </div>

          ))}

        </div>

      </section>

      {/* SOS CARD */}

      <section className="mx-auto mt-20 max-w-7xl px-6">

        <div className="overflow-hidden rounded-[32px] border border-red-500/30 bg-gradient-to-r from-red-500/20 via-red-600/10 to-orange-500/20 p-10">

          <div className="flex flex-col items-center text-center">

            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-red-500/20">

              <AlertTriangle
                size={48}
                className="text-red-400"
              />

            </div>

            <h2 className="text-4xl font-bold">

              SOS Emergency

            </h2>

            <p className="mt-5 max-w-2xl text-lg text-slate-300">

              If you are in immediate danger or witnessing an emergency,
              contact the National Emergency Response Service immediately.

            </p>

            <button className="mt-10 rounded-2xl bg-red-600 px-12 py-5 text-xl font-bold transition hover:bg-red-700">

              📞 CALL 112

            </button>

          </div>

        </div>

      </section>

      {/* SAFETY TIPS */}

      <section className="mx-auto mt-20 max-w-7xl px-6">

        <div className="mb-8 flex items-center gap-3">

          <Users className="text-yellow-400" />

          <h2 className="text-3xl font-bold">

            Emergency Tips

          </h2>

        </div>

        <div className="grid gap-6 lg:grid-cols-3">

          {[
            {
              title: "Flood",
              tip: "Keep emergency contacts saved offline and move to higher ground immediately.",
            },
            {
              title: "Fire",
              tip: "Call the Fire Brigade before attempting to extinguish large fires.",
            },
            {
              title: "Earthquake",
              tip: "Drop, Cover and Hold. Call emergency services only after reaching a safe place.",
            },
          ].map((item) => (

            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-7"
            >

              <h3 className="text-2xl font-bold text-yellow-400">

                {item.title}

              </h3>

              <p className="mt-5 leading-8 text-slate-300">

                {item.tip}

              </p>

            </div>

          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="mx-auto mt-20 max-w-5xl px-6 pb-20">

        <div className="rounded-[32px] border border-indigo-500/20 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 p-10 text-center">

          <h2 className="text-4xl font-bold">

            Stay Prepared. Stay Safe.

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">

            Save emergency numbers, prepare an emergency kit,
            and learn disaster response techniques before an emergency occurs.

          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <button className="rounded-xl bg-indigo-600 px-8 py-4 font-semibold transition hover:bg-indigo-700">

              Learn Preparedness

            </button>

            <button className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold transition hover:bg-white/10">

              View Disaster Guides

            </button>

          </div>

        </div>

      </section>

    </main>
  )
}

export default EmergencyContactsPage