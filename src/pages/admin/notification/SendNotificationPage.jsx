
import { useState } from "react"
import {
  Shield,
  Bell,
  UserRound,
  CheckCircle2,
  X,
  Send,
  ChevronDown,
  Globe,
  Eye,
  AlertCircle,
  LayoutDashboard,
  Sparkles,
  Users,
  Settings,
  LoaderCircle,
} from "lucide-react"

import NotificationForm from "../../../components/admin/notification/NotificationForm"
import NotificationPreview from "../../../components/admin/notification/NotificationPreview"
import NotificationSuccess from "../../../components/admin/notification/NotificationSuccess"

const DEFAULT_FORM = {
  type: "🌧 Weather Alert",
  title: "Heavy Rainfall Alert",
  message:
    "Heavy rainfall is expected today. Please stay indoors and follow official safety instructions.",
}

const NAV_ITEMS = [
  { label: "Overview", icon: LayoutDashboard },
  { label: "Quizzes", icon: CheckCircle2 },
  { label: "Disasters", icon: AlertCircle },
  { label: "Students", icon: Users },
  { label: "AI Settings", icon: Settings },
  { label: "Notifications", icon: Bell },
]

const SendNotificationPage = () => {
  const [form, setForm] = useState(DEFAULT_FORM)
  const [errors, setErrors] = useState({})
  const [isSending, setIsSending] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))

    if (field === "title" || field === "message") {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const validate = () => {
    const nextErrors = {}

    if (!form.type) {
      nextErrors.type = "Please select a notification type."
    }

    if (!form.title.trim()) {
      nextErrors.title = "Title is required."
    }

    if (!form.message.trim()) {
      nextErrors.message = "Message text cannot be empty."
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSend = async (event) => {
    event.preventDefault()

    if (isSending || !validate()) return

    // Demo behavior: replace this timeout with your backend API.
    setIsSending(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 900))
      setShowSuccess(true)
      window.scrollTo({ top: 0, behavior: "smooth" })
    } finally {
      setIsSending(false)
    }
  }

  const handleReset = () => {
    setForm(DEFAULT_FORM)
    setErrors({})
    setShowSuccess(false)
  }

  const notificationType = form.type.replace(/^[^\s]+\s/, "")

  return (
    <div className="min-h-screen bg-[#0b1326] font-sans text-[#dae2fd]">
      {/* Admin navigation */}
      <header className="fixed inset-x-0 top-0 z-50 bg-[#0b1326]/90 shadow-[0_1px_8px_rgba(0,0,0,0.4)] backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1e40af]">
                <Shield size={19} className="text-[#b8c4ff]" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                Learn2Survive
              </span>
            </div>

            <span className="rounded bg-[#2d3449] px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide text-[#c4c5d5]">
              Admin
            </span>
          </div>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map(({ label, icon: Icon }) => (
              <button
                key={label}
                type="button"
                onClick={() => {
                  if (label === "Notifications") return
                  // Connect other navigation items to your routes.
                }}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors ${
                  label === "Notifications"
                    ? "bg-[#1e40af] text-[#b8c4ff]"
                    : "text-[#c4c5d5] hover:bg-[#222a3d] hover:text-white"
                }`}
              >
                <Icon size={15} />
                {label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Notifications"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-[#c4c5d5] hover:bg-[#222a3d]"
            >
              <Bell size={19} />
            </button>

            <div className="flex items-center gap-2 border-l border-white/10 pl-3">
              <div className="hidden text-right sm:block">
                <p className="text-sm font-medium text-white">Admin Portal</p>
                <p className="text-[11px] text-[#8e909f]">Superuser</p>
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b8c4ff] text-[#002584]">
                <UserRound size={17} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="min-h-screen w-full pt-16">
        <div className="mx-auto max-w-[1280px] px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
          <div className="mx-auto flex w-full max-w-2xl flex-col gap-8">
            <NotificationSuccess
              visible={showSuccess}
              onClose={() => setShowSuccess(false)}
            />

            {/* Page heading */}
            <section>
              <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-wider text-[#8e909f]">
                <span>Admin</span>
                <span>/</span>
                <span className="font-semibold text-[#b8c4ff]">
                  Notifications
                </span>
              </div>

              <h1 className="text-3xl font-bold tracking-tight text-white">
                Send Notification
              </h1>

              <p className="mt-2 text-sm leading-6 text-[#c4c5d5]">
                Send an important message to all Learn2Survive users.
              </p>
            </section>

            {/* Notification form card */}
            <section className="relative flex flex-col gap-6 overflow-hidden rounded-2xl bg-[#131b2e] p-5 shadow-xl sm:p-8">
              <div className="pointer-events-none absolute -right-24 -top-24 h-60 w-60 rounded-full bg-[#b8c4ff]/10 blur-3xl" />

              <div className="relative z-10 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1e40af]/40">
                  <Bell size={24} className="text-[#b8c4ff]" />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-white">
                    Create Notification
                  </h2>
                  <p className="mt-1 text-sm text-[#c4c5d5]">
                    This notification will be sent to all Learn2Survive users.
                  </p>
                </div>
              </div>

              <NotificationForm
                form={form}
                errors={errors}
                isSending={isSending}
                onChange={updateField}
                onSubmit={handleSend}
                onReset={handleReset}
              />

              {/* Recipient count */}
              <section className="relative z-10 flex flex-col gap-2">
                <label className="text-sm font-medium text-[#dae2fd]">
                  Send To
                </label>

                <div className="flex items-center justify-between gap-3 rounded-xl bg-[#171f33] p-4">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2d3449]">
                      <Globe size={21} className="text-[#b8c4ff]" />
                      <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-[#4edea3] ring-2 ring-[#131b2e]" />
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-white">
                        All Learn2Survive Users
                      </p>
                      <p className="text-xs text-[#8e909f]">
                        All registered users
                      </p>
                    </div>
                  </div>

                  <span className="shrink-0 rounded-full bg-[#00a572]/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-[#4edea3] sm:text-xs">
                    12,480 Users
                  </span>
                </div>
              </section>

              {/* Live preview */}
              <section className="relative z-10 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#8e909f]">
                  <Eye size={16} />
                  Live Device Preview
                </div>

                <NotificationPreview
                  type={notificationType}
                  title={form.title}
                  message={form.message}
                />
              </section>

              {/* Actions */}
              <div className="relative z-10 flex flex-col-reverse justify-end gap-3 border-t border-white/10 pt-5 sm:flex-row">
                <button
                  type="button"
                  onClick={handleReset}
                  disabled={isSending}
                  className="rounded-xl px-5 py-3 text-sm text-[#c4c5d5] transition-colors hover:bg-[#222a3d] hover:text-white disabled:opacity-50"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={handleSend}
                  disabled={isSending}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#1e40af] via-[#1e40af] to-[#3755c3] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-950/40 transition-all hover:brightness-110 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSending ? (
                    <>
                      <LoaderCircle size={18} className="animate-spin" />
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
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#131b2e] shadow-[0_-1px_8px_rgba(0,0,0,0.4)]">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-[#8e909f] sm:flex-row sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span>© 2025 Learn2Survive Platform.</span>
            <span>•</span>
            <span>Emergency Preparedness &amp; Response</span>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <span className="uppercase tracking-wide">
              System Status: Normal
            </span>
            <span className="uppercase tracking-wide">
              Security Policy
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default SendNotificationPage
