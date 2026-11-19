
import { Bell } from "lucide-react"

const NotificationPreview = ({ type, title, message }) => {
  return (
    <div className="relative flex flex-col gap-2 rounded-xl bg-[#060e20] p-4 shadow-2xl">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded-md bg-[#1e40af]">
            <Bell size={13} className="text-[#b8c4ff]" />
          </div>

          <span className="text-xs font-semibold text-[#c4c5d5]">
            Learn2Survive
          </span>

          <span className="text-[#444653]">•</span>

          <span className="text-xs text-[#b8c4ff]">
            {type || "Notification"}
          </span>
        </div>

        <span className="text-[11px] text-[#8e909f]">
          Just now
        </span>
      </div>

      <div className="flex flex-col gap-1 pt-1">
        <h3 className="break-words text-base font-bold tracking-tight text-[#dae2fd]">
          {title.trim() || "(Untitled notification)"}
        </h3>

        <p className="break-words text-sm leading-relaxed text-[#c4c5d5]">
          {message.trim() || "(No message body provided)"}
        </p>
      </div>
    </div>
  )
}

export default NotificationPreview
