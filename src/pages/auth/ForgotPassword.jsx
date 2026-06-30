import { useState } from "react"
import { ArrowLeft, HelpCircle, Mail, Send, CheckCircle2, Loader2, KeyRound } from "lucide-react"
import { useNavigate } from "react-router-dom"
import apiInstance from "../../config/apiInstance"
import { toast } from "react-toastify"

const ForgotPassword = () => {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)
      const response = await apiInstance.post("/auth/forgot-Password",{email})
      if (response) {
        toast.success(response?.data?.message)
      }
      setLoading(false)
    } catch (error) {
      toast.error(error?.response?.data?.message || "Registration failed.")
      console.log(error?.response)
      setLoading(false)
    }
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0b1326] px-4 py-20">
      {/* Background Glow */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(55,85,195,0.15),transparent_70%)]" />

      {/* Card */}

      <div className="relative z-10 w-full max-w-[480px] rounded-2xl border border-white/10 bg-[#171f33]/70 p-8 shadow-2xl backdrop-blur-xl md:p-12">
        {/* Icon */}

        <div className="mb-8 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#b8c4ff]/20 bg-[#1e40af]/10">
            <KeyRound
              size={34}
              className="text-[#b8c4ff]"
            />
          </div>
        </div>

        {/* Heading */}

        <div className="mb-8 text-center">
          <h1 className="text-5xl font-bold text-[#dde1ff]">Forgot Password?</h1>

          <p className="mx-auto mt-4 max-w-sm leading-7 text-[#c4c5d5]">
            Don't worry! Enter your registered email address and we'll send you a password reset
            link.
          </p>
        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-[#c4c5d5]">
              Email Address
            </label>

            <div className="relative">
              <Mail
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8e909f]"
              />

              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. commander@guardian.net"
                className="h-14 w-full rounded-xl border border-white/10 bg-[#060e20] pl-12 pr-4 text-white placeholder:text-[#8e909f] outline-none transition focus:border-[#b8c4ff] focus:ring-2 focus:ring-[#b8c4ff]/20"
              />
            </div>
          </div>
          {/* Submit Button */}

          <button
            type="submit"
            disabled={loading}
            className={`flex h-14 w-full items-center justify-center gap-2 rounded-xl font-bold transition-all duration-300 active:scale-[0.98]
              ${
                success
                  ? "bg-[#00a572] text-[#003824]"
                  : "bg-[#b8c4ff] text-[#002584] hover:bg-[#d7deff]"
              }
              ${loading && "cursor-not-allowed opacity-90"}
            `}
          >
            {loading ? (
              <>
                <Loader2
                  size={20}
                  className="animate-spin"
                />
                Processing...
              </>
            ) : success ? (
              <>
                <CheckCircle2 size={20} />
                Reset Link Sent
              </>
            ) : (
              <>
                <Send size={20} />
                Send Reset Link
              </>
            )}
          </button>
        </form>

        {/* Bottom */}

        <div className="mt-8 text-center">
          <p className="text-[#c4c5d5]">
            Remember your password?
            <button
              type="button"
              onClick={() => navigate("/auth/login")}
              className="ml-2 font-semibold text-[#b8c4ff] transition hover:underline"
            >
              Back to Sign In
            </button>
          </p>
        </div>
      </div>

      {/* Decorative Shield */}

      <div className="pointer-events-none absolute -bottom-24 -right-24 hidden opacity-5 md:block">
        <svg
          width="280"
          height="280"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          className="text-[#b8c4ff]"
        >
          <path d="M12 2l7 3v6c0 5-3.5 9.5-7 11-3.5-1.5-7-6-7-11V5l7-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      </div>
    </main>
  )
}

export default ForgotPassword
