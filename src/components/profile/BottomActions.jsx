import { ArrowRight, ShieldCheck } from "lucide-react"
import { useNavigate } from "react-router-dom"

const BottomActions = ({ mode }) => {
  const navigate = useNavigate()
  return (
    <div className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-8 lg:mt-12 lg:flex-row lg:items-center lg:justify-between">
      {/* Left */}

      <div className="flex items-start gap-4 sm:items-center">
        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#00a572]/15">
          <ShieldCheck
            size={22}
            className="text-[#4edea3]"
          />
        </div>

        <div>
          <h4 className="text-base font-semibold text-[#dde1ff]">Your information is secure</h4>

          <p className="mt-1 text-sm leading-6 text-[#c4c5d5]">
            Your data is encrypted using GuardianLink security protocols.
          </p>
        </div>
      </div>

      {/* Right */}

      <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="w-full rounded-xl border border-white/10 bg-[#131b2e] px-6 py-3 font-semibold text-white transition hover:bg-[#1b2742] sm:w-auto"
        >
          {mode === "create" ? "Skip For Now" : "Cancel"}
        </button>

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#b8c4ff] px-8 py-3 font-bold text-[#002584] transition hover:bg-[#d9e0ff] active:scale-[0.98] sm:w-auto"
        >
          {mode === "create" ? "Complete Profile" : "Save Changes"}
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  )
}

export default BottomActions
