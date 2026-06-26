import React from "react";

const PageNotFound = () => {
  return (
    <main className="flex-grow pt-20 pb-10 px-4 md:px-10 max-w-7xl mx-auto w-full flex flex-col items-center">

      {/* Hero Section */}

      <section className="w-full flex flex-col items-center text-center mb-12">

        <div className="relative w-full max-w-2xl aspect-video mb-6 hero-pulse">

          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9pQjJRn_U7JpHR_5m1gkZldamGZu87PwYcShSNymuYsZvbiyDxmSaxtjZNZM-9DbwhkTNb61JgEYucgjVejcNs_yyOujQWcFnVOMknqwAtbv7rZMDtudBLaoTZ8aMBjTTTVZtEsbBwmCdTlLanY1hbw9wcW3K00qhIbKwQppksaz9LrvL6yLql2QnxHVePo3jF6X9Tjvy6sBKAMnDILDD2OWxkCqgIJn0WOoB_5ix2kILWeN8T3YRuw7VXmoRPSNtky1frKHwG88"
            alt="Broken Navigation Hero"
            className="w-full h-full object-contain"
          />

        </div>

        <h1 className="font-display-lg text-6xl md:text-[80px] leading-tight text-primary mb-2 tracking-tight">
          404
        </h1>

        <h2 className="font-headline-lg text-3xl text-on-surface mb-4">
          Oops! Page Not Found
        </h2>

        <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto mb-8">
          The page you're looking for doesn't exist, may have been moved,
          or the link is incorrect.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">

          <button className="bg-primary text-on-primary px-8 py-3 rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
            Go to Home
          </button>

          <button
            onClick={() => window.history.back()}
            className="glass-card text-primary px-8 py-3 rounded-xl font-bold hover:bg-white/5 transition-all"
          >
            Go Back
          </button>

        </div>

      </section>

            {/* Search Bar */}

      <div className="w-full max-w-xl mb-24">

        <div className="relative group">

          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">
            search
          </span>

          <input
            type="text"
            placeholder="Search for disasters, quizzes, or pages..."
            className="w-full bg-surface-container-low border border-outline-variant/30 rounded-full py-4 pl-12 pr-6 text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
          />

        </div>

      </div>

      {/* Navigation Cards */}

      <section className="w-full mb-24">

        <h3 className="font-label-caps text-label-caps text-outline uppercase mb-6 tracking-[0.2em]">
          You may be looking for:
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Home */}

          <a
            href="#"
            className="glass-card p-6 rounded-xl group hover:border-primary/50 transition-all"
          >

            <div className="w-12 h-12 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">

              <span className="material-symbols-outlined">
                home
              </span>

            </div>

            <span className="font-headline-lg-mobile text-headline-lg-mobile block mb-2">
              Home
            </span>

            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Return to your command center dashboard.
            </span>

          </a>

          {/* Learning Center */}

          <a
            href="#"
            className="glass-card p-6 rounded-xl group hover:border-primary/50 transition-all"
          >

            <div className="w-12 h-12 rounded-lg bg-tertiary-container/20 flex items-center justify-center text-tertiary mb-4 group-hover:scale-110 transition-transform">

              <span className="material-symbols-outlined">
                school
              </span>

            </div>

            <span className="font-headline-lg-mobile text-headline-lg-mobile block mb-2">
              Learning Center
            </span>

            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Access critical disaster preparedness guides.
            </span>

          </a>

          {/* Notifications */}

          <a
            href="#"
            className="glass-card p-6 rounded-xl group hover:border-primary/50 transition-all"
          >

            <div className="w-12 h-12 rounded-lg bg-secondary-container/20 flex items-center justify-center text-secondary mb-4 group-hover:scale-110 transition-transform">

              <span className="material-symbols-outlined">
                notifications
              </span>

            </div>

            <span className="font-headline-lg-mobile text-headline-lg-mobile block mb-2">
              Notifications
            </span>

            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Stay updated with real-time emergency alerts.
            </span>

          </a>

          {/* Profile */}

          <a
            href="#"
            className="glass-card p-6 rounded-xl group hover:border-primary/50 transition-all"
          >

            <div className="w-12 h-12 rounded-lg bg-outline-variant/20 flex items-center justify-center text-outline mb-4 group-hover:scale-110 transition-transform">

              <span className="material-symbols-outlined">
                account_circle
              </span>

            </div>

            <span className="font-headline-lg-mobile text-headline-lg-mobile block mb-2">
              My Profile
            </span>

            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Manage your response plans and personal data.
            </span>

          </a>

        </div>

      </section>

            {/* Help Card */}

      <div className="w-full max-w-2xl bg-surface-container-high border border-outline-variant/20 rounded-2xl p-6 flex items-start gap-4">

        <span
          className="material-symbols-outlined text-tertiary mt-1"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          lightbulb
        </span>

        <div>

          <h4 className="font-label-caps text-label-caps text-on-tertiary-container mb-2">
            Need Help?
          </h4>

          <p className="font-body-sm text-body-sm text-on-surface-variant">
            If you think this is a technical error, please{" "}
            <a
              href="#"
              className="text-primary underline hover:text-primary-fixed-dim transition-colors"
            >
              contact support
            </a>{" "}
            or return to the homepage to retry your navigation.
          </p>

        </div>

      </div>

    </main>
  );
};

export default PageNotFound;