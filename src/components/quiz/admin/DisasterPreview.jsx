import {
  CheckCircle2,
  Database,
  Verified,
} from "lucide-react"

const DisasterPreview = ({
  selectedDisaster,
  onChangeDisaster,
}) => {
  if (!selectedDisaster) {
    return (
      <div className="mb-6 rounded-2xl border border-dashed border-white/15 bg-[rgba(19,27,46,0.6)] p-6 text-center">

        <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-slate-500">
          <Database size={20} />
        </div>

        <p className="text-sm font-medium text-slate-400">
          No disaster selected
        </p>

        <p className="mt-1 text-xs text-slate-500">
          Please select a disaster from the dropdown to
          preview metadata and initialize question prompts.
        </p>

      </div>
    )
  }

  return (
    <div className="mb-6 rounded-2xl border border-white/10 bg-[rgba(19,27,46,0.75)] p-5 backdrop-blur-xl">

      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

        {/* Disaster Info */}

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/30 bg-blue-500/15 text-3xl shadow-inner">
            {selectedDisaster.icon}
          </div>

          <div>

            <div className="flex items-center gap-2">

              <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                Selected Disaster
              </span>

              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

              <span className="text-[11px] font-medium text-emerald-400">
                Ready for Generation
              </span>

            </div>

            <h3 className="mt-0.5 text-xl font-bold text-white">
              {selectedDisaster.name}
            </h3>

            <p className="mt-0.5 flex items-center gap-1.5 font-mono text-xs text-slate-400">

              <span className="text-slate-500">
                Slug:
              </span>

              <span className="rounded border border-white/5 bg-white/5 px-2 py-0.5 text-blue-300">
                {selectedDisaster.slug}
              </span>

            </p>

          </div>

        </div>

        {/* Status */}

        <div className="flex items-center gap-3 self-end sm:self-center">

          <div className="hidden text-right sm:block">

            <span className="block text-xs text-slate-400">
              Dataset Mapping
            </span>

            <span className="flex items-center justify-end gap-1 text-xs font-medium text-emerald-400">

              <Verified size={13} />

              Standard Protocol Linked

            </span>

          </div>

          <button
            type="button"
            onClick={onChangeDisaster}
            className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
          >
            Change
          </button>

        </div>

      </div>

    </div>
  )
}

export default DisasterPreview