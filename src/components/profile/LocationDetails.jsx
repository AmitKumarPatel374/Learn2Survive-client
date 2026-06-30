import { MapPin, Globe } from "lucide-react"
import { useFormContext } from "react-hook-form"

const LocationDetails = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <section className="rounded-2xl border border-white/10 bg-[#171f33]/70 backdrop-blur-xl p-5 sm:p-6 lg:p-8">
      {/* Heading */}

      <div className="mb-6 flex items-center gap-3">
        <MapPin
          size={28}
          className="text-[#b8c4ff]"
        />

        <h2 className="text-2xl font-semibold text-[#dde1ff] sm:text-3xl">Location Details</h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {/* Country */}

        <div>
          <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-[#c4c5d5]">
            Country
          </label>

          <div className="relative">
            <Globe
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8e909f]"
            />

            <input
              value="India"
              disabled
              className="h-12 sm:h-14 w-full rounded-xl border border-white/10 bg-[#10192d] pl-12 pr-4 text-[#8e909f] cursor-not-allowed"
            />

            <input
              type="hidden"
              value="India"
              {...register("location.country")}
            />
          </div>
        </div>

        {/* State */}

        <div>
          <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-[#c4c5d5]">
            State
          </label>

          <select
            className="h-12 sm:h-14 w-full rounded-xl border border-white/10 bg-[#131b2e] px-4 text-white outline-none transition focus:border-[#b8c4ff] focus:ring-2 focus:ring-[#b8c4ff]/20"
            {...register("location.state", {
              required: "State is required",
            })}
          >
            <option value="">Select State</option>

            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Delhi">Delhi</option>
            <option value="Karnataka">Karnataka</option>
          </select>

          {errors.location?.state && (
            <p className="mt-2 text-sm text-red-400">{errors.location.state.message}</p>
          )}
        </div>

        {/* District */}

        <div>
          <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-[#c4c5d5]">
            District
          </label>

          <input
            type="text"
            placeholder="District Name"
            className="h-12 sm:h-14 w-full rounded-xl border border-white/10 bg-[#131b2e] px-4 text-white placeholder:text-[#8e909f] outline-none transition focus:border-[#b8c4ff] focus:ring-2 focus:ring-[#b8c4ff]/20"
            {...register("location.district", {
              required: "District is required",
            })}
          />

          {errors.location?.district && (
            <p className="mt-2 text-sm text-red-400">{errors.location.district.message}</p>
          )}
        </div>

        {/* City */}

        <div className="md:col-span-2">
          <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-[#c4c5d5]">
            City / Village
          </label>

          <input
            type="text"
            placeholder="Enter locality"
            className="h-12 sm:h-14 w-full rounded-xl border border-white/10 bg-[#131b2e] px-4 text-white placeholder:text-[#8e909f] outline-none transition focus:border-[#b8c4ff] focus:ring-2 focus:ring-[#b8c4ff]/20"
            {...register("location.city", {
              required: "City is required",
            })}
          />

          {errors.location?.city && (
            <p className="mt-2 text-sm text-red-400">{errors.location.city.message}</p>
          )}
        </div>

        {/* PIN Code */}

        <div>
          <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-[#c4c5d5]">
            PIN Code
          </label>

          <input
            type="text"
            maxLength={6}
            placeholder="######"
            className="h-12 sm:h-14 w-full rounded-xl border border-white/10 bg-[#131b2e] px-4 text-white placeholder:text-[#8e909f] outline-none transition focus:border-[#b8c4ff] focus:ring-2 focus:ring-[#b8c4ff]/20"
            {...register("location.pinCode", {
              required: "PIN Code is required",
              pattern: {
                value: /^[1-9][0-9]{5}$/,
                message: "Enter a valid PIN Code",
              },
            })}
          />

          {errors.location?.pinCode && (
            <p className="mt-2 text-sm text-red-400">{errors.location.pinCode.message}</p>
          )}
        </div>
      </div>

      {/* Information Card */}

      <div className="mt-8 rounded-xl border border-[#b8c4ff]/20 bg-[#1e40af]/10 p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <MapPin
            size={20}
            className="mt-1 text-[#b8c4ff]"
          />

          <div>
            <h4 className="font-semibold text-[#dde1ff]">Why do we need your location?</h4>

            <p className="mt-2 text-sm leading-6 text-[#c4c5d5]">
              Your location helps us deliver region-specific disaster alerts, weather warnings,
              evacuation routes, nearby shelters, and emergency resources during critical
              situations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationDetails
