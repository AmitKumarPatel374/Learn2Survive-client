import { useState } from "react"
import { Eye, EyeOff, Mail, Lock, LogIn } from "lucide-react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import apiInstance from "../../config/apiInstance"
import { toast } from "react-toastify"
import { useAuth } from "../../context/AuthContext"

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  })

  const navigate = useNavigate()
  const { setUser, loading } = useAuth()

  const onSubmit = async (data) => {
    console.log(data)
    try {
      const response = await apiInstance.post("/auth/login", data)
      if (response) {
        toast.success(response?.data?.message)
      }
      setUser(response.data.user)
      navigate("/")
    } catch (error) {
      toast.error(error?.response?.data?.message || "Registration failed.")
      console.log(error?.response)
    }
  }

  const handleGoogleLogin = () => {
    const googleAuthUrl = `${import.meta.env.VITE_SERVER_URL}/auth/google`
    window.location.href = googleAuthUrl
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0b1326] bg-[radial-gradient(circle_at_top_left,rgba(30,64,175,0.15),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(0,165,114,0.12),transparent_35%)] px-4 py-10">
      <div className="w-full max-w-[480px]">
        <div className="rounded-2xl border border-white/10 bg-[#131b2e]/80 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          {/* Heading */}

          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-[#dde1ff]">Welcome Back</h1>

            <p className="mt-3 text-[#c4c5d5] text-base leading-7">
              Sign in to continue your disaster preparedness journey.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
          >
            {/* Email */}
            <div>
              <label className="block mb-2 text-xs tracking-[0.15em] uppercase text-[#c4c5d5]">
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8e909f]"
                />

                <input
                  type="email"
                  placeholder="name@emergency.gov"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email",
                    },
                  })}
                  className="w-full rounded-xl border border-white/10 bg-[#222a3d] py-3.5 pl-12 pr-4 text-white placeholder:text-[#8e909f] outline-none transition focus:border-[#b8c4ff] focus:ring-2 focus:ring-[#b8c4ff]/20"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* Password */}

            <div>
              <label className="block mb-2 text-xs tracking-[0.15em] uppercase text-[#c4c5d5]">
                Password
              </label>

              <div className="relative">
                <Lock
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8e909f]"
                />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                  className="w-full rounded-xl border border-white/10 bg-[#222a3d] py-3.5 pl-12 pr-12 text-white placeholder:text-[#8e909f] outline-none transition focus:border-[#b8c4ff] focus:ring-2 focus:ring-[#b8c4ff]/20"
                />
                {errors.password && (
                  <p className="mt-2 text-sm text-red-400">{errors.password.message}</p>
                )}

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8e909f] hover:text-white transition"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Remember + Forgot */}

            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  {...register("rememberMe")}
                  className="h-4 w-4 rounded border-white/20 bg-[#171f33] text-[#b8c4ff] focus:ring-[#b8c4ff]/30"
                />

                <span className="text-sm text-[#c4c5d5]">Remember Me</span>
              </label>

              <button
                type="button"
                onClick={() => navigate("/auth/forgotPassword")}
                className="text-sm text-[#b8c4ff] hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            {/* Sign In */}

            <button
              type="submit"
              className="group mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#b8c4ff] py-4 font-bold text-[#002584] transition-all duration-300 hover:scale-[1.01] hover:bg-[#d6deff] active:scale-[0.98]"
            >
              <span>Sign In</span>

              <LogIn
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            {/* Error Message */}

            <div className="hidden rounded-xl border border-red-400/20 bg-red-500/10 p-4">
              <div className="flex items-start gap-3">
                <span className="text-red-400 text-lg">⚠</span>

                <p className="text-sm text-red-200">
                  Invalid credentials. Please verify your email and password before trying again.
                </p>
              </div>
            </div>

            {/* Divider */}

            <div className="flex items-center gap-4 py-2">
              <div className="h-px flex-1 bg-white/10"></div>

              <span className="text-xs tracking-[0.2em] text-[#8e909f]">OR</span>

              <div className="h-px flex-1 bg-white/10"></div>
            </div>

            {/* Google */}

            <button
              type="button"
              onClick={handleGoogleLogin}
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 py-3.5 font-semibold text-white transition-all hover:bg-white/10 active:scale-[0.98]"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09A6.96 6.96 0 0 1 5.49 12c0-.73.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.78.43 3.45 1.18 4.93l3.66-2.84z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15A10.92 10.92 0 0 0 12 1C7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </button>
          </form>

          {/* Footer */}

          <div className="mt-8 text-center">
            <p className="text-sm text-[#c4c5d5]">
              Don't have an account?
              <button
                type="button"
                onClick={() => navigate("/auth/register")}
                className="ml-2 font-bold text-[#4edea3] hover:underline"
              >
                Create Account
              </button>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Login
