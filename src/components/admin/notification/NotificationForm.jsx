
import {
  ChevronDown,
  AlertCircle,
  Send,
  LoaderCircle,
} from "lucide-react"

const NOTIFICATION_TYPES = [
  "🌧 Weather Alert",
  "🚨 Emergency Alert",
  "🏛 Government Alert",
  "📢 General Announcement",
  "📚 Quiz / Learning",
  "🏫 School Announcement",
  "🚨 Mock Drill",
]

const NotificationForm = ({
  form,
  errors,
  isSending,
  onChange,
  onSubmit,
  onReset,
}) => {
  return (
    <form
      id="notificationForm"
      onSubmit={onSubmit}
      noValidate
      className="relative z-10 flex flex-col gap-5"
    >
      {/* Notification Type */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="notifType"
          className="flex items-center gap-1 text-sm font-medium text-[#dae2fd]"
        >
          Notification Type
          <span className="text-[#ffb4ab]">*</span>
        </label>

        <div className="relative">
          <select
            id="notifType"
            value={form.type}
            onChange={(e) => onChange("type", e.target.value)}
            className="w-full appearance-none rounded-xl bg-[#171f33] px-4 py-3 pr-11 text-sm text-[#dae2fd] outline-none transition-colors focus:bg-[#222a3d] focus:ring-2 focus:ring-[#b8c4ff]/30"
          >
            {NOTIFICATION_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>

          <ChevronDown
            size={20}
            className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#8e909f]"
          />
        </div>

        {errors.type && <FieldError message={errors.type} />}
      </div>

      {/* Title */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="notifTitle"
          className="flex items-center gap-1 text-sm font-medium text-[#dae2fd]"
        >
          Title
          <span className="text-[#ffb4ab]">*</span>
        </label>

        <input
          id="notifTitle"
          type="text"
          value={form.title}
          onChange={(e) => onChange("title", e.target.value)}
          placeholder="Enter notification title"
          className="w-full rounded-xl bg-[#171f33] px-4 py-3 text-sm text-[#dae2fd] outline-none transition-colors placeholder:text-[#8e909f] focus:bg-[#222a3d] focus:ring-2 focus:ring-[#b8c4ff]/30"
        />

        {errors.title && <FieldError message={errors.title} />}
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between gap-2">
          <label
            htmlFor="notifMessage"
            className="flex items-center gap-1 text-sm font-medium text-[#dae2fd]"
          >
            Message
            <span className="text-[#ffb4ab]">*</span>
          </label>

          <span
            className={`text-xs ${
              form.message.length >= 280
                ? "text-[#ffb95f]"
                : "text-[#8e909f]"
            }`}
          >
            {form.message.length}/300
          </span>
        </div>

        <textarea
          id="notifMessage"
          rows={3}
          maxLength={300}
          value={form.message}
          onChange={(e) => onChange("message", e.target.value)}
          placeholder="Write your notification message..."
          className="w-full resize-none rounded-xl bg-[#171f33] px-4 py-3 text-sm leading-relaxed text-[#dae2fd] outline-none transition-colors placeholder:text-[#8e909f] focus:bg-[#222a3d] focus:ring-2 focus:ring-[#b8c4ff]/30"
        />

        <div className="flex items-start justify-between gap-3">
          {errors.message ? (
            <FieldError message={errors.message} />
          ) : (
            <span />
          )}

          <p className="text-right text-xs leading-5 text-[#8e909f]">
            Keep messages concise and actionable during emergency warnings.
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-end gap-3 pt-2">
        <button
          type="button"
          onClick={onReset}
          disabled={isSending}
          className="rounded-xl px-5 py-2.5 text-sm text-[#c4c5d5] transition-colors hover:bg-[#222a3d] hover:text-white disabled:opacity-50"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={isSending}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#1e40af] to-[#3755c3] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:brightness-110 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSending ? (
            <>
              <LoaderCircle size={17} className="animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send size={17} />
              Send Notification
            </>
          )}
        </button>
      </div>
    </form>
  )
}

const FieldError = ({ message }) => (
  <p className="mt-0.5 flex items-center gap-1 text-sm text-[#ffb4ab]">
    <AlertCircle size={14} className="shrink-0" />
    {message}
  </p>
)

export default NotificationForm
