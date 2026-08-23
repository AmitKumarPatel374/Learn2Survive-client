import { ArrowLeft, Hammer } from "lucide-react"
import { useNavigate } from "react-router-dom"

const UnderConstruction = () => {
  const navigate = useNavigate()

  return (
    <main className="min-h-screen bg-[#0b1326] flex items-center justify-center px-6">
      <div className="w-full max-w-xl text-center">
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400">
          <Hammer size={40} />
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-white sm:text-4xl">Page Under Construction</h1>

        {/* Description */}
        <p className="mt-4 text-base leading-7 text-slate-400">
          We’re currently working on this page to make it better for you. Please check back soon!
        </p>

        {/* Status */}
        <div className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm text-slate-300">
          <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-400" />
          Work in progress
        </div>

        {/* Back Button */}
        <div className="mt-8">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-600"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>
      </div>
    </main>
  )
}

export default UnderConstruction
