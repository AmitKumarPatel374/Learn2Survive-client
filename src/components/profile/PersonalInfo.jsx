import { Camera, User } from "lucide-react"
import { useFormContext } from "react-hook-form"
import { useEffect, useState } from "react"
import { useAuth } from "../../context/AuthContext"

const PersonalInfo = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext()

  const { user } = useAuth()

  const [preview, setPreview] = useState(user?.profileImage?.url || null)
  const imageFile = watch("profileImage")

  useEffect(() => {
    if (user?.profileImage?.url) {
      setPreview(user.profileImage.url)
    }
  }, [user])

  useEffect(() => {
    if (imageFile && imageFile.length > 0) {
      const url = URL.createObjectURL(imageFile[0])
      setPreview(url)

      return () => URL.revokeObjectURL(url)
    }
  }, [imageFile])

  return (
    <section className="rounded-2xl border border-white/10 bg-[#171f33]/70 backdrop-blur-xl p-8">
      {/* Heading */}

      <div className="mb-8 flex items-center gap-3">
        <User
          className="text-[#dde1ff]"
          size={28}
        />

        <h2 className="text-4xl font-semibold text-[#dde1ff]">Personal Information</h2>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[310px_1fr]">
        {/* Upload */}

        <div>
          <label className="flex h-[280px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-white/10 bg-[#10192d] transition hover:border-[#b8c4ff] hover:bg-[#151f36]">
            <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border border-[#2b3652] bg-[#131b2e]">
              {preview ? (
                <img
                  src={preview}
                  alt="Profile Preview"
                  className="h-full w-full object-cover"
                />
              ) : (
                <Camera
                  size={40}
                  className="text-[#b8c4ff]"
                />
              )}
            </div>

            <p className="mt-6 text-lg font-medium text-[#dde1ff]">
              {preview ? "Photo Selected" : "Upload Photo (Optional)"}
            </p>

            {imageFile?.length > 0 && (
              <p className="mt-2 max-w-[220px] truncate text-xs text-green-400">
                {imageFile[0].name}
              </p>
            )}

            <span className="mt-2 text-xs uppercase tracking-widest text-[#8e909f]">
              JPG, PNG, MAX 2MB
            </span>

            <input
              type="file"
              hidden
              accept="image/*"
              {...register("profileImage")}
            />
          </label>
        </div>

        {/* Form */}

        <div className="space-y-6">
          {/* Full Name */}

          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-[#c4c5d5]">
              Full Name
            </label>

            <input
              type="text"
              placeholder="e.g. Rahul Sharma"
              className="h-14 w-full rounded-xl border border-white/10 bg-[#131b2e] px-4 text-white placeholder:text-[#8e909f] outline-none transition focus:border-[#b8c4ff] focus:ring-2 focus:ring-[#b8c4ff]/20"
              {...register("fullName", {
                required: "Full Name is required",
                minLength: {
                  value: 3,
                  message: "Minimum 3 characters required",
                },
              })}
            />

            {errors.fullName && (
              <p className="mt-2 text-sm text-red-400">{errors.fullName.message}</p>
            )}
          </div>

          {/* Mobile */}

          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-[#c4c5d5]">
              Mobile Number
            </label>

            <div className="flex overflow-hidden rounded-xl border border-white/10">
              <div className="flex w-24 items-center justify-center border-r border-white/10 bg-[#131b2e] text-[#c4c5d5]">
                +91
              </div>

              <input
                type="tel"
                placeholder="9876543210"
                className="h-14 flex-1 bg-[#131b2e] px-4 text-white placeholder:text-[#8e909f] outline-none"
                {...register("mobileNumber", {
                  required: "Mobile Number is required",
                  pattern: {
                    value: /^[6-9]\d{9}$/,
                    message: "Enter a valid 10-digit mobile number",
                  },
                })}
              />
            </div>

            {errors.mobileNumber && (
              <p className="mt-2 text-sm text-red-400">{errors.mobileNumber.message}</p>
            )}
          </div>

          {/* Date of Birth */}

          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-[#c4c5d5]">
              Date of Birth
            </label>

            <input
              type="date"
              className="h-14 w-full rounded-xl border border-white/10 bg-[#131b2e] px-4 text-white outline-none transition focus:border-[#b8c4ff] focus:ring-2 focus:ring-[#b8c4ff]/20"
              {...register("dateOfBirth", {
                required: "Date of Birth is required",
              })}
            />

            {errors.dateOfBirth && (
              <p className="mt-2 text-sm text-red-400">{errors.dateOfBirth.message}</p>
            )}
          </div>

          {/* Gender */}

          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-[#c4c5d5]">
              Gender
            </label>

            <select
              defaultValue=""
              className="h-14 w-full rounded-xl border border-white/10 bg-[#131b2e] px-4 text-white outline-none transition focus:border-[#b8c4ff] focus:ring-2 focus:ring-[#b8c4ff]/20"
              {...register("gender", {
                required: "Please select your gender",
              })}
            >
              <option
                value=""
                disabled
              >
                Select Gender
              </option>

              <option value="Male">Male</option>

              <option value="Female">Female</option>

              <option value="Other">Other</option>

              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>

            {errors.gender && <p className="mt-2 text-sm text-red-400">{errors.gender.message}</p>}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PersonalInfo
