import { CheckCircle } from "lucide-react"

const WhyPlatform = () => {
  return (
    <section className="bg-[#222a3d]/20 px-6 py-24 lg:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 lg:grid-cols-2">
        {/* Left Side */}

        <div className="relative">
          <div className="grid grid-cols-2 gap-5">
            {/* Left Column */}

            <div className="space-y-5">
              {/* Image 1 */}

              <div className="h-56 overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="https://ik.imagekit.io/amit374/learn2Survive/unnamed%20(1)_KVxXGrHy7.png"
                  alt="Emergency Kit"
                  className="h-full w-full object-cover transition duration-500 hover:scale-110"
                />
              </div>

              {/* Image 2 */}

              <div className="h-72 overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="https://ik.imagekit.io/amit374/learn2Survive/unnamed%20(3)_hm8OduMme.png"
                  alt="Community Response"
                  className="h-full w-full object-cover transition duration-500 hover:scale-110"
                />
              </div>
            </div>

            {/* Right Column */}

            <div className="space-y-5 pt-12">
              {/* Image 3 */}

              <div className="h-72 overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="https://ik.imagekit.io/amit374/learn2Survive/unnamed%20(2)_UwImTElp8.png"
                  alt="Safe Shelter"
                  className="h-full w-full object-cover transition duration-500 hover:scale-110"
                />
              </div>

              {/* Image 4 */}

              <div className="h-56 overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="https://ik.imagekit.io/amit374/learn2Survive/unnamed%20(4)_9yyZC0sUr.png"
                  alt="Digital Protection"
                  className="h-full w-full object-cover transition duration-500 hover:scale-110"
                />
              </div>
            </div>
          </div>

          {/* Floating Badge */}
          <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <div className="rounded-2xl border border-[#b8c4ff]/20 bg-[#171f33]/90 p-6 text-center shadow-2xl backdrop-blur-xl">
              <h3 className="text-5xl font-black text-[#b8c4ff]">99%</h3>

              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#8e909f]">
                Reliability Score
              </p>
            </div>
          </div>
        </div>

        {/* Right Content */}

        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#4edea3]">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-white lg:text-5xl">
            Why
            <br />
            Learn2Survive HQ?
          </h2>

          <div className="mt-12 space-y-8">
            {/* Benefit 1 */}

            <div className="flex items-start gap-4">
              <CheckCircle
                size={26}
                className="mt-1 shrink-0 text-[#4edea3]"
              />

              <div>
                <h4 className="text-xl font-semibold text-white">Easy-to-understand Content</h4>

                <p className="mt-2 leading-7 text-[#c4c5d5]">
                  Complex disaster preparedness concepts are explained in a simple, practical and
                  beginner-friendly way so anyone can learn quickly.
                </p>
              </div>
            </div>

            {/* Benefit 2 */}

            <div className="flex items-start gap-4">
              <CheckCircle
                size={26}
                className="mt-1 shrink-0 text-[#4edea3]"
              />

              <div>
                <h4 className="text-xl font-semibold text-white">Student-Friendly Experience</h4>

                <p className="mt-2 leading-7 text-[#c4c5d5]">
                  Designed with interactive lessons, quizzes and visual content that make learning
                  disaster preparedness engaging and easy.
                </p>
              </div>
            </div>
            {/* Benefit 3 */}

            <div className="flex items-start gap-4">
              <CheckCircle
                size={26}
                className="mt-1 shrink-0 text-[#4edea3]"
              />

              <div>
                <h4 className="text-xl font-semibold text-white">Personalized Recommendations</h4>

                <p className="mt-2 leading-7 text-[#c4c5d5]">
                  Receive AI-powered recommendations based on your location, learning progress and
                  disaster risk profile to help you stay prepared for real-world emergencies.
                </p>
              </div>
            </div>

            {/* Benefit 4 */}

            <div className="flex items-start gap-4">
              <CheckCircle
                size={26}
                className="mt-1 shrink-0 text-[#4edea3]"
              />

              <div>
                <h4 className="text-xl font-semibold text-white">
                  Emergency Preparedness Resources
                </h4>

                <p className="mt-2 leading-7 text-[#c4c5d5]">
                  Access emergency contacts, printable safety checklists, disaster guides,
                  evacuation plans and essential preparedness resources whenever you need them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyPlatform
