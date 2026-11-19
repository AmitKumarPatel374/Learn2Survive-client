
import { CheckCircle2, X } from "lucide-react"

const NotificationSuccess = ({ visible, onClose }) => {
  if (!visible) return null

  return (
    <div
      role="status"
      className="flex items-start gap-3 rounded-xl border border-[#00a572]/30 bg-[#00a572]/10 p-4 shadow-lg"
    >
      <CheckCircle2
        size={23}
        className="mt-0.5 shrink-0 text-[#4edea3]"
      />

      <div className="flex-1">
        <h3 className="text-base font-bold text-[#4edea3]">
          Notification Broadcast Dispatched
        </h3>

        <p className="mt-1 text-sm leading-5 text-[#dae2fd]">
          The demo sending operation completed successfully.
          Connect your backend to confirm actual delivery to users.
        </p>
      </div>

      <button
        type="button"
        onClick={onClose}
        aria-label="Dismiss alert"
        className="rounded p-1 text-[#8e909f] transition-colors hover:text-white"
      >
        <X size={18} />
      </button>
    </div>
  )
}

export default NotificationSuccess
