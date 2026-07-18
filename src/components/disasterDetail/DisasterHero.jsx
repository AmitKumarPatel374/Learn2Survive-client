const DisasterHero = ({ disaster }) => {
  return (
    <section className="px-6 pt-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl min-h-[480px] lg:min-h-[520px]">
          {/* Background Image */}

          <img
            src={disaster?.bannerImage || disaster?.thumbnail}
            alt={disaster?.name}
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1326] via-[#0b1326]/45 to-transparent" />

          {/* Content */}

          <div className="relative z-10 flex min-h-[480px] flex-col justify-end p-8 lg:min-h-[520px] lg:p-12">
            <span className="mb-4 w-fit rounded-full bg-[#1e40af]/90 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-white">
              {disaster?.type} • {disaster?.category}
            </span>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white lg:text-6xl">
              {disaster?.name}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-gray-300 lg:text-lg">
              {disaster?.shortDescription}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white">
                {disaster?.difficulty}
              </span>

              <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white">
                {disaster?.estimatedTime} min
              </span>

              <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white">
                {disaster?.lessons} Lessons
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DisasterHero
