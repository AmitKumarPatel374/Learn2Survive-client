import { Mail, Phone, MapPin, Clock } from "lucide-react"

const ContactSupport = () => {
  return (
    <main className="min-h-screen bg-white px-6 py-12">
      <div className="mx-auto max-w-5xl">
        {/* Header */}

        <div className="border-b pb-8">
          <h1 className="text-4xl font-bold text-gray-900">
            Contact Support
          </h1>

          <p className="mt-3 text-gray-600">
            We're here to help. Reach out to our support team for assistance,
            feedback, or questions regarding Learn2Survive.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* Contact Information */}

          <div className="space-y-6">
            <div className="rounded-2xl border p-6">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-blue-100 p-3">
                  <Mail className="text-blue-600" size={22} />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    Email Support
                  </h3>

                  <p className="mt-1 text-gray-600">
                    support@learn2survive.com
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border p-6">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-green-100 p-3">
                  <Phone className="text-green-600" size={22} />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    Phone
                  </h3>

                  <p className="mt-1 text-gray-600">
                    +91 XXXXX XXXXX
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border p-6">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-orange-100 p-3">
                  <MapPin className="text-orange-600" size={22} />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    Office Address
                  </h3>

                  <p className="mt-1 text-gray-600">
                    Learn2Survive Headquarters
                    <br />
                    Bhopal, Madhya Pradesh
                    <br />
                    India
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border p-6">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-purple-100 p-3">
                  <Clock className="text-purple-600" size={22} />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    Support Hours
                  </h3>

                  <p className="mt-1 text-gray-600">
                    Monday - Friday
                    <br />
                    9:00 AM - 6:00 PM (IST)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}

          <div className="rounded-2xl border p-8">
            <h2 className="text-2xl font-semibold text-gray-900">
              Send us a Message
            </h2>

            <p className="mt-2 text-gray-600">
              Fill out the form below and our team will get back to you as soon
              as possible.
            </p>

            <form className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Describe your issue..."
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ContactSupport