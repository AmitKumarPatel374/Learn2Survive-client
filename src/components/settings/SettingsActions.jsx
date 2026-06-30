import { RotateCcw, Save } from "lucide-react"

const SettingsActions = () => {
  return (
    <section className="px-6 py-10 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col-reverse gap-4 border-t border-white/10 pt-8 sm:flex-row sm:justify-end">
          {/* Reset Button */}

          <button className="flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-[#171f33]/40 px-8 py-4 font-semibold text-[#c4c5d5] backdrop-blur-xl transition-all duration-300 hover:border-[#b8c4ff]/30 hover:bg-[#171f33] active:scale-95">
            <RotateCcw size={20} />
            Reset to Default
          </button>

          {/* Save Button */}

          <button className="flex items-center justify-center gap-3 rounded-xl bg-[#1e40af] px-10 py-4 font-semibold text-white shadow-[0_12px_35px_rgba(30,64,175,.35)] transition-all duration-300 hover:bg-[#2952d1] hover:shadow-[0_18px_45px_rgba(30,64,175,.45)] active:scale-95">
            <Save size={20} />
            Save Changes
          </button>
        </div>
      </div>
    </section>
  )
}

export default SettingsActions
