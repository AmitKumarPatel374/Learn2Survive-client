import { useEffect, useMemo, useState } from "react"
import {
  ArrowLeft,
  HelpCircle,
  ShieldCheck,
  Eye,
  EyeOff,
  CheckCircle2,
  Circle,
  Lock,
} from "lucide-react"
import { useNavigate, useParams } from "react-router-dom"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import apiInstance from "../../config/apiInstance"

const ResetPassword = () => {
  const { token } = useParams()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const navigate = useNavigate()

  const password = watch("password", "")
  const confirmPassword = watch("confirmPassword", "")

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(true)
  const [tokenValid, setTokenValid] = useState(false)
  const [error, setError] = useState("")

  const requirements = useMemo(
    () => ({
      length: password.length >= 8,
      upper: /[A-Z]/.test(password),
      lower: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[!@#$%^&*]/.test(password),
    }),
    [password]
  )

  const score = Object.values(requirements).filter(Boolean).length

  const strength = useMemo(() => {
    if (score === 0)
      return {
        label: "None",
        color: "bg-[#2d3449]",
      }

    if (score <= 2)
      return {
        label: "Weak",
        color: "bg-red-500",
      }

    if (score === 3)
      return {
        label: "Moderate",
        color: "bg-orange-400",
      }

    if (score === 4)
      return {
        label: "Strong",
        color: "bg-[#b8c4ff]",
      }

    return {
      label: "Secure",
      color: "bg-[#4edea3]",
    }
  }, [score])

  const passwordsMatch = confirmPassword && password === confirmPassword

  const canSubmit = passwordsMatch && score === 5

  useEffect(() => {
    console.log(token);
    
    verifyToken()
  }, [])

  const verifyToken = async () => {
    try {
      const response = await apiInstance.get(`/auth/verify-reset-token/${token}`)
      console.log(response);
      if (response.data.valid) {
        setTokenValid(true)
      }
    } catch (err) {
      setError(err.response?.data?.message || "Invalid Link")
      console.log(err);
    } finally {
      setLoading(false)
    }
  }

  const onSubmit = async (data) => {
    try {
      const response = await apiInstance.post("/auth/update-password", {
        password: data.password,
        confirmPassword: data.confirmPassword,
        token,
      })
      if (response) {
        toast.success(response?.data?.message)
      }
      navigate("/auth/login")
    } catch (err) {
      toast.error(error?.response?.data?.message || "Registration failed.")
      console.log(error?.response)
    }
  }

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  if (!tokenValid) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div>
          <h1>Invalid Reset Link</h1>

          <p>{error}</p>
        </div>
      </div>
    )
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0b1326]">
      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(30,64,175,0.12),transparent_70%)]" />

      {/* Content */}

      <section className="flex min-h-screen items-center justify-center px-4 py-28">
        <div className="w-full max-w-[520px] rounded-2xl border border-white/10 bg-[#171f33]/70 p-8 shadow-2xl backdrop-blur-xl md:p-10">
          {/* Icon */}

          <div className="mb-8 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1e40af]/20">
              <ShieldCheck
                size={34}
                className="text-[#b8c4ff]"
              />
            </div>
          </div>

          {/* Heading */}

          <div className="mb-8 text-center">
            <h2 className="text-5xl font-bold text-[#dde1ff]">Create New Password</h2>

            <p className="mt-4 text-[#c4c5d5]">
              Choose a strong password to secure your account and critical emergency data.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            {/* New Password */}

            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-[#c4c5d5]">
                New Password
              </label>

              <div className="relative">
                <Lock
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8e909f]"
                />

                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password required",

                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/,

                      message: "Password is not strong",
                    },
                  })}
                  placeholder="Enter your new password"
                  className="h-14 w-full rounded-xl border border-white/10 bg-[#060e20] pl-12 pr-14 text-white placeholder:text-[#8e909f] outline-none transition focus:border-[#b8c4ff] focus:ring-2 focus:ring-[#b8c4ff]/20"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8e909f] hover:text-[#dde1ff]"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Strength */}

            <div>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.18em] text-[#c4c5d5]">
                  Security Level
                </span>

                <span
                  className={`text-sm font-semibold ${
                    score <= 2
                      ? "text-red-400"
                      : score === 3
                        ? "text-orange-400"
                        : score === 4
                          ? "text-[#b8c4ff]"
                          : "text-[#4edea3]"
                  }`}
                >
                  {strength.label}
                </span>
              </div>

              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((bar) => (
                  <div
                    key={bar}
                    className={`h-1 rounded-full ${score >= bar ? strength.color : "bg-[#2d3449]"}`}
                  />
                ))}
              </div>
            </div>

            {/* Requirements */}

            <div className="rounded-xl border border-white/10 bg-[#1d2438] p-5">
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#dde1ff]">
                Requirements
              </h4>

              <div className="grid grid-cols-2 gap-4">
                {[
                  ["8+ Characters", requirements.length],
                  ["Uppercase Letter", requirements.upper],
                  ["Lowercase Letter", requirements.lower],
                  ["Number", requirements.number],
                  ["Special Character", requirements.special],
                ].map(([title, valid]) => (
                  <div
                    key={title}
                    className="flex items-center gap-2"
                  >
                    {valid ? (
                      <CheckCircle2
                        size={18}
                        className="text-[#4edea3]"
                      />
                    ) : (
                      <Circle
                        size={18}
                        className="text-[#8e909f]"
                      />
                    )}

                    <span className={`text-sm ${valid ? "text-[#dde1ff]" : "text-[#8e909f]"}`}>
                      {title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* Confirm Password */}

            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-[#c4c5d5]">
                Confirm New Password
              </label>

              <div className="relative">
                <Lock
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8e909f]"
                />

                <input
                  type={showConfirmPassword ? "text" : "password"}
                  {...register("confirmPassword", {
                    required: "Confirm Password required",

                    validate: (value) => value === password || "Passwords do not match",
                  })}
                  placeholder="Repeat your password"
                  className={`h-14 w-full rounded-xl border bg-[#060e20] pl-12 pr-14 text-white placeholder:text-[#8e909f] outline-none transition
                    ${
                      confirmPassword.length === 0
                        ? "border-white/10"
                        : passwordsMatch
                          ? "border-[#4edea3]"
                          : "border-red-400"
                    }`}
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8e909f] hover:text-[#dde1ff]"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {confirmPassword.length > 0 && (
                <p className={`mt-2 text-sm ${passwordsMatch ? "text-[#4edea3]" : "text-red-400"}`}>
                  {passwordsMatch ? "✓ Passwords match" : "Passwords do not match"}
                </p>
              )}
            </div>

            {/* Update Button */}

            <button
              type="submit"
              disabled={!canSubmit}
              className={`flex h-14 w-full items-center justify-center gap-2 rounded-xl font-bold transition-all duration-300
                ${
                  canSubmit
                    ? "bg-[#b8c4ff] text-[#002584] hover:bg-[#d9e0ff]"
                    : "cursor-not-allowed bg-[#233a88] text-white/40"
                }`}
            >
              <ShieldCheck size={20} />
              Update Password
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}

export default ResetPassword
