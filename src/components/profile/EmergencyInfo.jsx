import { HeartPulse, Phone, UserRound } from "lucide-react"
import { useFormContext } from "react-hook-form"

const EmergencyInfo = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <section className="rounded-2xl border border-red-400/10 bg-[#171f33]/70 backdrop-blur-xl p-5 sm:p-6 lg:p-8">
      {/* Heading */}

      <div className="mb-6 flex items-center gap-3">
        <HeartPulse
          size={28}
          className="text-[#ffb4ab]"
        />

        <h2 className="text-2xl font-semibold text-[#ffb4ab] sm:text-3xl">Emergency Information</h2>
      </div>

      <div className="space-y-6">
        {/* Contact Name */}

        <div>
          <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-[#c4c5d5]">
            Contact Name
          </label>

          <div className="relative">
            <UserRound
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8e909f]"
            />

            <input
              type="text"
              placeholder="Primary Contact"
              className="h-12 sm:h-14 w-full rounded-xl border border-white/10 bg-[#131b2e] pl-12 pr-4 text-white placeholder:text-[#8e909f] outline-none transition focus:border-[#b8c4ff] focus:ring-2 focus:ring-[#b8c4ff]/20"
              {...register("emergencyContact.contactName", {
                required: "Contact name is required",
              })}
            />
          </div>

          {errors.emergencyContact?.contactName && (
            <p className="mt-2 text-sm text-red-400">
              {errors.emergencyContact.contactName.message}
            </p>
          )}
        </div>

        {/* Relationship + Blood Group */}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Relationship */}

          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-[#c4c5d5]">
              Relationship
            </label>

            <input
              type="text"
              placeholder="e.g. Parent"
              className="h-12 sm:h-14 w-full rounded-xl border border-white/10 bg-[#131b2e] px-4 text-white placeholder:text-[#8e909f] outline-none transition focus:border-[#b8c4ff] focus:ring-2 focus:ring-[#b8c4ff]/20"
              {...register("emergencyContact.relationship", {
                required: "Relationship is required",
              })}
            />

            {errors.emergencyContact?.relationship && (
              <p className="mt-2 text-sm text-red-400">
                {errors.emergencyContact.relationship.message}
              </p>
            )}
          </div>

          {/* Blood Group */}

          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-[#c4c5d5]">
              Blood Group
            </label>

            <select
              defaultValue=""
              className="h-12 sm:h-14 w-full rounded-xl border border-white/10 bg-[#131b2e] px-4 text-white outline-none transition focus:border-[#b8c4ff] focus:ring-2 focus:ring-[#b8c4ff]/20"
              {...register("emergencyContact.bloodGroup", {
                required: "Blood group is required",
              })}
            >
              <option value="">Select Blood Group</option>

              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>

            {errors.emergencyContact?.bloodGroup && (
              <p className="mt-2 text-sm text-red-400">
                {errors.emergencyContact.bloodGroup.message}
              </p>
            )}
          </div>
        </div>

        {/* Emergency Number */}

        <div>
          <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-[#c4c5d5]">
            Emergency Number
          </label>

          <div className="relative">
            <Phone
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8e909f]"
            />

            <input
              type="tel"
              placeholder="+91 9876543210"
              className="h-12 sm:h-14 w-full rounded-xl border border-white/10 bg-[#131b2e] pl-12 pr-4 text-white placeholder:text-[#8e909f] outline-none transition focus:border-[#b8c4ff] focus:ring-2 focus:ring-[#b8c4ff]/20"
              {...register("emergencyContact.emergencyNumber", {
                required: "Emergency number is required",
                pattern: {
                  value: /^[6-9]\d{9}$/,
                  message: "Enter a valid mobile number",
                },
              })}
            />
          </div>

          {errors.emergencyContact?.emergencyNumber && (
            <p className="mt-2 text-sm text-red-400">
              {errors.emergencyContact.emergencyNumber.message}
            </p>
          )}
        </div>

        {/* Medical Conditions */}

        <div>
          <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-[#c4c5d5]">
            Medical Conditions
          </label>

          <textarea
            rows={4}
            placeholder="Allergies, chronic conditions, medications..."
            className="w-full rounded-xl border border-white/10 bg-[#131b2e] px-4 py-4 text-white placeholder:text-[#8e909f] outline-none resize-none transition focus:border-[#b8c4ff] focus:ring-2 focus:ring-[#b8c4ff]/20"
            {...register("emergencyContact.medicalConditions")}
          />

          <p className="mt-2 text-xs text-[#8e909f]">
            This information will only be used during emergencies.
          </p>
        </div>

        {/* Information Card */}

        <div className="rounded-xl border border-red-400/20 bg-red-500/5 p-4">
          <div className="flex items-start gap-3">
            <HeartPulse
              size={18}
              className="mt-0.5 text-[#ffb4ab]"
            />

            <div>
              <h4 className="font-semibold text-[#ffb4ab]">Emergency Information</h4>

              <p className="mt-1 text-sm leading-6 text-[#c4c5d5]">
                Your emergency contact details help first responders and authorities reach your
                trusted contact quickly during disaster situations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EmergencyInfo
