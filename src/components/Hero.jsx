const Hero = () => {
  const partners = [
    { name: 'Fondation Hanns Seidel', color: '#2c4360' },
    { name: 'UN Environment', color: '#00a1e0' },
    { name: 'YES Green Maroc', color: '#22c55e' },
    { name: 'ISPITSO', color: '#b14b3a' },
  ]

  return (
    <section id="home" className="relative min-h-screen pt-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#2c4360]/90 via-[#2c4360]/70 to-green-600/80" />
        <div className="absolute inset-0 pattern-bg" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Partner Logos */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-md"
            >
              <span
                className="text-sm font-semibold"
                style={{ color: partner.color }}
              >
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="text-center text-white">
          <p className="text-lg md:text-xl mb-4 opacity-90">
            YES Green Maroc Organizes in collaboration with
          </p>
          <p className="text-base md:text-lg mb-2 opacity-80">
            Higher Institute of Nursing Professions and Health Technologies -
            Oujda (ISPITSO)
          </p>
          <p className="text-base md:text-lg mb-8 opacity-80">
            & Seidel Foundation - Morocco (HSF)
          </p>

          <div className="mb-6">
            <p className="text-xl md:text-2xl font-light italic mb-2">
              The 6<sup>th</sup> International Conference
            </p>
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
              Oriental Days <span className="font-handwritten text-green-300">for the</span> Environment
            </h1>
          </div>

          {/* JOE6 Logo */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl px-12 py-8 border border-white/20">
              <h2 className="text-6xl md:text-8xl font-bold tracking-wider">
                <span className="text-red-400">J</span>
                <span className="text-green-400">O</span>
                <span className="text-yellow-400">E</span>
                <sup className="text-3xl md:text-4xl text-white">6</sup>
              </h2>
            </div>
          </div>

          {/* Conference Theme */}
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-lg md:text-xl italic mb-2 opacity-90">
              Under the title
            </p>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
              "<span className="text-green-300">Green Lab. Solutions</span>{' '}
              <span className="font-handwritten text-yellow-300">for</span>{' '}
              <span className="text-teal-300">Sustainable Development</span>"
            </h3>
          </div>

          {/* Date and Location */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/10 backdrop-blur-md rounded-full px-8 py-4 border border-white/20">
            <div className="flex items-center gap-2">
              <svg
                className="w-6 h-6 text-green-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="text-lg font-semibold">
                February 21-23, 2026
              </span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30" />
            <div className="flex items-center gap-2">
              <svg
                className="w-6 h-6 text-green-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-lg font-semibold">
                ISPITS-Oujda, Morocco
              </span>
            </div>
          </div>

          {/* Hybrid Badge */}
          <div className="mt-6">
            <span className="inline-block bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
              Hybrid Form - In-Person & Online
            </span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-8 h-8 text-white/70"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero
