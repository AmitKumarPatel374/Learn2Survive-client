import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import {
  ArrowLeft,
  Mail,
  Lock,
  Eye,
  EyeOff,
  LockKeyhole,
} from "lucide-react";
import apiInstance from "../../config/apiInstance";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });


  const password = watch("password");
  const confirmPassword = watch("confirmPassword");
  const terms = watch("terms");

  const passwordChecks = useMemo(() => {
    return {
      length: password?.length >= 8,
      upper: /[A-Z]/.test(password || ""),
      lower: /[a-z]/.test(password || ""),
      number: /\d/.test(password || ""),
      special: /[^A-Za-z0-9]/.test(password || ""),
    };
  }, [password]);

  const score = Object.values(passwordChecks).filter(Boolean).length;

  const strength = useMemo(() => {
    if (!password)
      return {
        text: "NONE",
        color: "bg-[#2d3449]",
      };

    if (score <= 2)
      return {
        text: "WEAK",
        color: "bg-red-400",
      };

    if (score <= 4)
      return {
        text: "MEDIUM",
        color: "bg-[#ffb95f]",
      };

    return {
      text: "STRONG",
      color: "bg-[#4edea3]",
    };
  }, [password, score]);

  const navigate = useNavigate();

  const onSubmit = async(data) => {
    try {
      const response = await apiInstance.post("/auth/register",data);
      console.log(response);
      if (response) {
        toast.success(response?.data?.message)
      }
      navigate(`/auth/verifyEmail/${data.email}`);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Registration failed.")
      console.log(error?.response);
    }
  };

  const handleGoogleLogin = () => {
    const googleAuthUrl = `${import.meta.env.VITE_SERVER_URL}/auth/google`
    window.location.href = googleAuthUrl
  }

  return (
    <main className="min-h-screen bg-[#0b1326] px-4 py-12 flex justify-center">
      <div className="w-full max-w-md">
        {/* Back */}
        <button className="mb-8 flex items-center gap-2 text-[#c4c5d5] hover:text-[#b8c4ff] transition">
          <ArrowLeft size={18} />
          <span onClick={()=>navigate("/")}>Back to Portal</span>
        </button>

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-[#dde1ff]">
            Create Your Account
          </h1>

          <p className="mt-3 text-[#c4c5d5] leading-7">
            Create your account to start learning and preparing for
            emergencies.
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-white/10 bg-[#171f33]/70 backdrop-blur-xl p-8 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email */}

            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-[#c4c5d5]">
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8e909f]"
                />

                <input
                  type="email"
                  placeholder="name@agency.gov"
                  className="w-full rounded-xl border border-white/10 bg-[#131b2e] py-3.5 pl-12 pr-4 text-white placeholder:text-[#8e909f] outline-none transition focus:border-[#b8c4ff] focus:ring-2 focus:ring-[#b8c4ff]/20"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "Invalid email",
                    },
                  })}
                />
              </div>

              {errors.email && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}

            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-[#c4c5d5]">
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
                  className="w-full rounded-xl border border-white/10 bg-[#131b2e] py-3.5 pl-12 pr-12 text-white placeholder:text-[#8e909f] outline-none transition focus:border-[#b8c4ff] focus:ring-2 focus:ring-[#b8c4ff]/20"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8e909f] hover:text-white"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {errors.password && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.password.message}
                </p>
              )}

              {/* Strength */}

              <div className="mt-3 grid grid-cols-4 gap-2">
                {[0, 1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className={`h-1 rounded-full ${
                      item <
                      (strength.text === "WEAK"
                        ? 1
                        : strength.text === "MEDIUM"
                        ? 2
                        : strength.text === "STRONG"
                        ? 4
                        : 0)
                        ? strength.color
                        : "bg-[#2d3449]"
                    }`}
                  />
                ))}
              </div>

              <p className="mt-2 text-right text-[11px] uppercase tracking-widest text-[#8e909f]">
                Password Strength : {strength.text}
              </p>
            </div>

            {/* Confirm Password */}

            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-[#c4c5d5]">
                Confirm Password
              </label>

              <div className="relative">
                <LockKeyhole
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8e909f]"
                />

                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-white/10 bg-[#131b2e] py-3.5 pl-12 pr-4 text-white placeholder:text-[#8e909f] outline-none transition focus:border-[#b8c4ff] focus:ring-2 focus:ring-[#b8c4ff]/20"
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                />
              </div>

              {errors.confirmPassword && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* Security Requirements */}

            <div className="rounded-xl border border-white/10 bg-[#131b2e]/60 p-4">
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#b8c4ff]">
                Security Requirements
              </h4>

              <div className="space-y-3">
                {[
                  {
                    label: "8+ Characters",
                    value: passwordChecks.length,
                  },
                  {
                    label: "Uppercase Letter",
                    value: passwordChecks.upper,
                  },
                  {
                    label: "Lowercase Letter",
                    value: passwordChecks.lower,
                  },
                  {
                    label: "Number",
                    value: passwordChecks.number,
                  },
                  {
                    label: "Special Character (!@#$%)",
                    value: passwordChecks.special,
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3"
                  >
                    <div
                      className={`h-3 w-3 rounded-full border ${
                        item.value
                          ? "border-[#4edea3] bg-[#4edea3]"
                          : "border-[#8e909f]"
                      }`}
                    />

                    <span
                      className={`text-sm ${
                        item.value ? "text-white" : "text-[#c4c5d5]"
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Terms */}

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="mt-1 h-5 w-5 rounded border-white/20 bg-[#131b2e]"
                {...register("terms", {
                  required: "Please accept Terms & Conditions",
                })}
              />

              <span className="text-sm text-[#c4c5d5]">
                I agree to the{" "}
                <button
                  type="button"
                  className="text-[#b8c4ff] hover:underline"
                >
                  Terms of Service
                </button>{" "}
                and{" "}
                <button
                  type="button"
                  className="text-[#b8c4ff] hover:underline"
                >
                  Privacy Policy
                </button>
              </span>
            </label>

            {errors.terms && (
              <p className="text-sm text-red-400">
                {errors.terms.message}
              </p>
            )}

            {/* Submit */}

            <button
              type="submit"
              disabled={
                !terms ||
                score < 5 ||
                password !== confirmPassword
              }
              className="w-full rounded-xl bg-[#b8c4ff] py-4 font-bold text-[#002584] transition hover:bg-[#d8dfff] disabled:cursor-not-allowed disabled:opacity-50"
            >
              Create Account
            </button>

            {/* Divider */}

            <div className="flex items-center gap-4 py-2">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-xs uppercase tracking-[0.2em] text-[#8e909f]">
                OR
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Google */}

            <button
              type="button"
              onClick={handleGoogleLogin}
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-[#131b2e] py-3.5 font-semibold text-white transition hover:bg-[#171f33]"
            >
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="Google"
                className="h-5 w-5"
              />
              Continue with Google
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-[#c4c5d5]">
              Already have an account?
              <button
                type="button"
                onClick={()=>navigate("/auth/login")}
                className="ml-2 font-semibold text-[#b8c4ff] hover:underline"
              >
                Sign In
              </button>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;