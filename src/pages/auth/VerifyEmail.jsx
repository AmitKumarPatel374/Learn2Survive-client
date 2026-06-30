import { useEffect, useRef, useState } from "react"
import { ArrowLeft, MailCheck, AtSign, Clock3, BadgeCheck, Pencil } from "lucide-react"
import apiInstance from "../../config/apiInstance"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"

const VerifyEmail = () => {
  const inputRefs = useRef([])
  const { email } = useParams()

  const [otp, setOtp] = useState(["", "", "", "", "", ""])

  const [expireTimer, setExpireTimer] = useState(300)
  const [resendTimer, setResendTimer] = useState(30)
  const [loading, setLoading] = useState(false)
  const [verified, setVerified] = useState(false)

  const navigate = useNavigate();

  // Expire Timer

  useEffect(() => {
    if (expireTimer <= 0) return

    const interval = setInterval(() => {
      setExpireTimer((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [expireTimer])

  // Resend Timer

  useEffect(() => {
    if (resendTimer <= 0) return

    const interval = setInterval(() => {
      setResendTimer((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [resendTimer])

  const formatTime = (time) => {
    const min = String(Math.floor(time / 60)).padStart(2, "0")
    const sec = String(time % 60).padStart(2, "0")
    return `${min}:${sec}`
  }

  // OTP Change
  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)
    if (value && index < 5) {
      inputRefs.current[index + 1].focus()
    }
  }

  // Backspace

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus()
    }
  }

  // Paste

  const handlePaste = (e) => {
    e.preventDefault()

    const data = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6).split("")

    const arr = ["", "", "", "", "", ""]

    data.forEach((item, i) => {
      arr[i] = item
    })

    setOtp(arr)

    if (data.length) {
      inputRefs.current[Math.min(data.length, 5)].focus()
    }
  }

  const handleVerify = async () => {
    try {
      setLoading(true)
      console.log(email, otp.join(""))
      const response = await apiInstance.post("/auth/verify-otp", { email, otp:otp.join("") })
      if (response) {
        toast.success(response?.data?.message)
        setLoading(false)
      }

      navigate("/user/profileSetup")
    } catch (error) {
      toast.error(error?.response?.data?.message || "Registration failed.")
      setLoading(false)
    }
  }

  const resendOTPHandler=async()=>{
    try {
      const res = await apiInstance.post("/auth/resend-otp",{email});
      if (res) {
        toast.success(res?.data?.message)
        setResendTimer(30)
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Registration failed.")
    }
  }

  return (
    <main className="min-h-screen bg-[#0b1326] flex justify-center items-center px-4 py-10">
      <div className="w-full max-w-md">
        {/* Back */}

        <button className="mb-8 flex items-center gap-2 text-[#c4c5d5] hover:text-[#b8c4ff] transition">
          <ArrowLeft size={18} />

          <span>Back to Sign Up</span>
        </button>

        {/* Card */}

        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#171f33]/70 backdrop-blur-xl p-8 shadow-2xl">
          <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#1e40af]/10 blur-3xl" />

          <div className="relative z-10">
            {/* Icon */}

            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#1e40af]/30 text-[#b8c4ff]">
              <MailCheck size={34} />
            </div>

            {/* Heading */}

            <h1 className="text-center text-4xl font-bold text-[#dde1ff]">Verify Your Email</h1>

            <p className="mx-auto mt-4 max-w-sm text-center leading-7 text-[#c4c5d5]">
              We've sent a 6-digit verification code to your registered email address. Enter the
              code below to verify your account.
            </p>

            {/* Email */}

            <div className="mt-8 flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-[#222a3d]/60 py-4">
              <AtSign
                size={18}
                className="text-[#b8c4ff]"
              />

              <span className="font-mono text-[#b8c4ff]">{email}</span>
            </div>

            {/* OTP */}

            <div className="mt-8 grid grid-cols-6 gap-3">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  value={digit}
                  maxLength={1}
                  onPaste={handlePaste}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onChange={(e) => handleChange(e.target.value, index)}
                  className="aspect-square w-full rounded-xl border border-white/10 bg-[#2d3449] text-center text-2xl font-bold text-[#b8c4ff] outline-none transition focus:border-[#b8c4ff] focus:ring-2 focus:ring-[#b8c4ff]/30"
                />
              ))}
            </div>

            {/* Timer */}

            <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
              <div className="flex items-center gap-2 text-[#c4c5d5]">
                <Clock3
                  size={16}
                  className="text-[#4edea3]"
                />

                <span>
                  Code expires in{" "}
                  <span className="font-semibold text-white">{formatTime(expireTimer)}</span>
                </span>
              </div>

              {resendTimer > 0 ? (
                <button
                  type="button"
                  disabled
                  className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4edea3] opacity-70"
                >
                  Resend OTP in {formatTime(resendTimer)}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={resendOTPHandler}
                  className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4edea3] hover:underline"
                >
                  Resend OTP
                </button>
              )}
            </div>

            {/* Verify Button */}

            <div className="mt-8">
              <button
                type="button"
                disabled={loading || otp.join("").length < 6}
                onClick={handleVerify}
                className={`flex h-14 w-full items-center justify-center gap-2 rounded-xl font-bold transition-all duration-300 active:scale-[0.98]
                  ${
                    verified
                      ? "bg-[#4edea3] text-[#003824]"
                      : "bg-[#b8c4ff] text-[#002584] hover:bg-[#d9e0ff]"
                  }
                  disabled:cursor-not-allowed disabled:opacity-50`}
              >
                {loading ? (
                  <>
                    <svg
                      className="h-5 w-5 animate-spin"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeOpacity=".25"
                      />
                      <path
                        d="M22 12a10 10 0 0 1-10 10"
                        stroke="currentColor"
                        strokeWidth="3"
                      />
                    </svg>
                    Verifying...
                  </>
                ) : verified ? (
                  <>
                    Verified Successfully
                    <BadgeCheck size={20} />
                  </>
                ) : (
                  <>
                    Verify Email
                    <BadgeCheck size={20} />
                  </>
                )}
              </button>
            </div>

            {/* Change Email */}

            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={()=>navigate('/auth/register')}
                className="inline-flex items-center gap-2 text-[#c4c5d5] transition hover:text-[#b8c4ff]"
              >
                <Pencil size={16} />
                Change Email Address
              </button>
            </div>
          </div>
        </div>

        {/* Trust Badge */}

        <div className="mt-10 flex flex-wrap items-center justify-center gap-5 text-[10px] uppercase tracking-[0.22em] text-white/40">
          <div className="flex items-center gap-2">
            <BadgeCheck size={14} />
            End-To-End Encryption
          </div>

          <div className="h-1 w-1 rounded-full bg-white/20" />

          <div className="flex items-center gap-2">
            <BadgeCheck size={14} />
            Protocol 94-A Ready
          </div>
        </div>
      </div>
    </main>
  )
}

export default VerifyEmail
