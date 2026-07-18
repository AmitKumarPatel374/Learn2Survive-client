import {
  BookOpen,
  Bot,
  BrainCircuit,
  CircleHelp,
  PhoneCall,
  MapPinned,
} from "lucide-react";

const ResponseHub = () => {
  return (
    <section className="px-6 py-8 lg:px-10">

      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <div className="mb-8 flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1e40af]/10">

            <BookOpen
              size={24}
              className="text-[#b8c4ff]"
            />

          </div>

          <div>

            <h2 className="text-3xl font-bold text-white">
              Response Hub
            </h2>

            <p className="mt-1 text-[#8e909f]">
              Quick access to the most important emergency
              preparedness tools.
            </p>

          </div>

        </div>

        {/* Cards */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {/* Learn About Disasters */}

          <button className="group rounded-3xl border border-white/10 bg-[#171f33]/40 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#b8c4ff]/30">

            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1e40af]/10 transition-transform duration-300 group-hover:scale-110">

              <BookOpen
                size={34}
                className="text-[#b8c4ff]"
              />

            </div>

            <h3 className="text-xl font-semibold text-white">
              Learn About
              <br />
              Disasters
            </h3>

          </button>

          {/* AI Assistant */}

          <button className="group rounded-3xl border border-white/10 bg-[#171f33]/40 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#4edea3]/30">

            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#4edea3]/10 transition-transform duration-300 group-hover:scale-110">

              <Bot
                size={34}
                className="text-[#4edea3]"
              />

            </div>

            <h3 className="text-xl font-semibold text-white">
              AI
              <br />
              Assistant
            </h3>

          </button>

          {/* Disaster Simulations */}

          <button className="group rounded-3xl border border-white/10 bg-[#171f33]/40 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#ffb95f]/30">

            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#ffb95f]/10 transition-transform duration-300 group-hover:scale-110">

              <BrainCircuit
                size={34}
                className="text-[#ffb95f]"
              />

            </div>

            <h3 className="text-xl font-semibold text-white">
              Disaster
              <br />
              Simulations
            </h3>

          </button>
                    {/* Quizzes */}

          <button className="group rounded-3xl border border-white/10 bg-[#171f33]/40 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#b8c4ff]/30">

            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#b8c4ff]/10 transition-transform duration-300 group-hover:scale-110">

              <CircleHelp
                size={34}
                className="text-[#b8c4ff]"
              />

            </div>

            <h3 className="text-xl font-semibold text-white">
              Disaster
              <br />
              Quizzes
            </h3>

          </button>

          {/* Emergency Contacts */}

          <button className="group rounded-3xl border border-red-500/20 bg-[#171f33]/40 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-red-400">

            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/10 transition-transform duration-300 group-hover:scale-110">

              <PhoneCall
                size={34}
                className="text-red-400"
              />

            </div>

            <h3 className="text-xl font-semibold text-white">
              Emergency
              <br />
              Contacts
            </h3>

          </button>

          {/* Nearby Shelters */}

          <button className="group rounded-3xl border border-white/10 bg-[#171f33]/40 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#4edea3]/30">

            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#4edea3]/10 transition-transform duration-300 group-hover:scale-110">

              <MapPinned
                size={34}
                className="text-[#4edea3]"
              />

            </div>

            <h3 className="text-xl font-semibold text-white">
              Nearby
              <br />
              Shelters
            </h3>

          </button>

        </div>

      </div>

    </section>
  );
};

export default ResponseHub;