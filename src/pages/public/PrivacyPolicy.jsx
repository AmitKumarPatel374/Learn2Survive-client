const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-white py-12 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Header */}

        <div className="border-b pb-8">
          <h1 className="text-4xl font-bold text-gray-900">
            Privacy Policy
          </h1>

          <p className="mt-3 text-gray-600">
            Last Updated: June 2026
          </p>
        </div>

        {/* Content */}

        <div className="mt-10 space-y-10 text-gray-700 leading-8">

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">
              1. Introduction
            </h2>

            <p>
              Learn2Survive values your privacy and is committed to protecting
              your personal information. This Privacy Policy explains how we
              collect, use, store, and protect your information while you use
              our platform.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">
              2. Information We Collect
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Personal information such as your name and email address.</li>
              <li>Profile information including educational details.</li>
              <li>Emergency contact information.</li>
              <li>Location information for disaster alerts.</li>
              <li>Application preferences and notification settings.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">
              3. How We Use Your Information
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Provide personalized disaster preparedness content.</li>
              <li>Send emergency alerts and important notifications.</li>
              <li>Improve platform performance and user experience.</li>
              <li>Secure your account and prevent unauthorized access.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">
              4. Data Security
            </h2>

            <p>
              We implement industry-standard security practices to protect your
              information against unauthorized access, disclosure, alteration,
              or destruction.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">
              5. Sharing Information
            </h2>

            <p>
              We do not sell or rent your personal information. Information may
              only be shared when required by law or to provide essential
              services related to disaster management and emergency response.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">
              6. Your Rights
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Access your personal information.</li>
              <li>Update or correct your profile.</li>
              <li>Request deletion of your account.</li>
              <li>Manage your notification preferences.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">
              7. Cookies
            </h2>

            <p>
              We may use cookies and similar technologies to improve your
              browsing experience, remember your preferences, and analyze site
              usage.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">
              8. Changes to This Policy
            </h2>

            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with the revised update date.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">
              9. Contact Us
            </h2>

            <p>
              If you have any questions regarding this Privacy Policy, please
              contact us at:
            </p>

            <div className="mt-4 rounded-xl border bg-gray-50 p-5">
              <p className="font-semibold text-gray-900">
                Learn2Survive Support
              </p>

              <p>Email: learn2suvive@gmail.com</p>

              <p>Phone: +91 9753005051</p>
            </div>
          </section>

        </div>
      </div>
    </main>
  )
}

export default PrivacyPolicy