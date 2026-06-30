import { Info, ExternalLink } from "lucide-react"
import { useNavigate } from "react-router-dom"

const AboutSettings = () => {
  const navigate = useNavigate();
  return (
    <section className="px-6 py-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl border border-white/10 bg-[#171f33]/40 p-7 backdrop-blur-xl">
          {/* Header */}

          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1e40af]/10">
              <Info
                size={24}
                className="text-[#b8c4ff]"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">About</h2>

              <p className="mt-1 text-sm text-[#8e909f]">
                Application information and useful resources.
              </p>
            </div>
          </div>

          {/* Version */}

          <div className="mb-5 flex items-center justify-between rounded-2xl border border-white/10 bg-[#0f1729] px-6 py-5">
            <div>
              <p className="text-sm text-[#8e909f]">Application Version</p>

              <h3 className="mt-1 text-xl font-bold text-white">v2.4.0</h3>
            </div>

            <span className="rounded-full bg-[#4edea3]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#4edea3]">
              Latest
            </span>
          </div>

          {/* Links */}

          <div  className="space-y-3">
            <button onClick={()=>navigate('/privacy-policy')} className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-[#0f1729] px-6 py-5 transition-all duration-300 hover:border-[#b8c4ff]/30 hover:bg-[#171f33]">
              <span className="font-medium text-white">Privacy Policy</span>

              <ExternalLink
                size={18}
                className="text-[#b8c4ff]"
              />
            </button>

            <button onClick={()=>navigate('/terms-conditions')} className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-[#0f1729] px-6 py-5 transition-all duration-300 hover:border-[#b8c4ff]/30 hover:bg-[#171f33]">
              <span className="font-medium text-white">Terms & Conditions</span>

              <ExternalLink
                size={18}
                className="text-[#b8c4ff]"
              />
            </button>

            <button onClick={()=>navigate('/about')} className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-[#0f1729] px-6 py-5 transition-all duration-300 hover:border-[#b8c4ff]/30 hover:bg-[#171f33]">
              <span className="font-medium text-white">About Us</span>

              <ExternalLink
                size={18}
                className="text-[#b8c4ff]"
              />
            </button>

            <button onClick={()=>navigate('/contact-support')} className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-[#0f1729] px-6 py-5 transition-all duration-300 hover:border-[#b8c4ff]/30 hover:bg-[#171f33]">
              <span className="font-medium text-white">Contact Support</span>

              <ExternalLink
                size={18}
                className="text-[#b8c4ff]"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSettings
