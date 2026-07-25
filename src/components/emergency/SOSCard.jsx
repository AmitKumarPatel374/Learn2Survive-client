import { AlertTriangle, PhoneCall } from "lucide-react"

const SOSCard = () => {
  const handleCall = () => {
    window.location.href = "tel:112"
  }

  return (
    <section className="mx-auto mt-16 max-w-7xl px-6 pb-16">
      <div className="overflow-hidden rounded-2xl border border-red-500/30 bg-gradient-to-r from-red-500/20 via-red-600/10 to-orange-500/20 p-8">

        <div className="flex flex-col items-center text-center">

          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-red-500/20">
            <AlertTriangle
              size={32}
              className="text-red-400"
            />
          </div>

          <h2 className="text-3xl font-bold">
            Emergency SOS
          </h2>

          <p className="mt-3 max-w-xl text-slate-300">
            If you are in immediate danger, call the National Emergency
            Response Service immediately.
          </p>

          <button
            onClick={handleCall}
            className="mt-6 flex items-center gap-2 rounded-xl bg-red-600 px-8 py-3 font-semibold transition hover:bg-red-700"
          >
            <PhoneCall size={20} />
            Call 112
          </button>

        </div>

      </div>
    </section>
  )
}

export default SOSCard