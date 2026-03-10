const ProgramPage = () => {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80"
          alt="Conference"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2c4360]/90 to-green-700/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              <span className="text-red-400">J</span>
              <span className="text-green-400">O</span>
              <span className="text-yellow-400">E</span>
              <sup className="text-2xl">6</sup> Program
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto px-4">
              Conference schedule and proceedings
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Conference Program Overview */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-[#2c4360] to-green-700 p-6">
            <h2 className="text-2xl font-bold text-white">Conference Program Overview</h2>
          </div>
          <div className="p-8">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { day: 'Day 1', date: 'February 21, 2026', events: ['Opening Ceremony', 'Keynote Speeches', 'Plenary Session 1'] },
                { day: 'Day 2', date: 'February 22, 2026', events: ['Parallel Sessions', 'Poster Presentations', 'Workshop Sessions'] },
                { day: 'Day 3', date: 'February 23, 2026', events: ['GIP2026 Finals', 'Closing Ceremony', 'Awards Presentation'] },
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border border-green-100">
                  <div className="text-green-600 font-bold text-lg mb-1">{item.day}</div>
                  <div className="text-[#2c4360] font-semibold mb-4">{item.date}</div>
                  <ul className="space-y-2">
                    {item.events.map((event, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-600">
                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {event}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Conference Flyer */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-[#2c4360] to-green-700 p-6">
            <h2 className="text-2xl font-bold text-white">Conference Flyer</h2>
          </div>
          <div className="p-8">
            <div className="bg-gradient-to-br from-sky-100 to-green-100 rounded-xl p-8 text-center">
              {/* Conference Flyer Preview */}
              <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6">
                <div className="flex justify-center gap-4 mb-4 flex-wrap">
                  <span className="text-sm font-semibold text-gray-600">Fondation Hanns Seidel</span>
                  <span className="text-sm font-semibold text-green-600">YES Green Maroc</span>
                  <span className="text-sm font-semibold text-blue-600">ISPITSO</span>
                </div>
                <h3 className="text-green-600 font-bold text-2xl mb-2">YES Green Maroc</h3>
                <p className="text-sm text-gray-600 mb-4">Organizes, in collaboration with</p>
                <p className="text-sm text-gray-700 mb-4">
                  The Higher Institute of Nursing Professions and Health Techniques (ISPITS-Oujda)<br />
                  The Hanns Seidel Foundation (HSF)
                </p>
                <p className="italic text-lg mb-2">The 6<sup>th</sup> International Conference:</p>
                <h2 className="font-display text-2xl font-bold text-[#2c4360] mb-4">
                  Oriental Days for the Environment
                </h2>
                <div className="text-4xl font-bold mb-4">
                  <span className="text-red-500">J</span>
                  <span className="text-green-500">O</span>
                  <span className="text-yellow-500">E</span>
                  <sup className="text-xl">6</sup>
                </div>
                <p className="text-gray-600 mb-2">Under the title</p>
                <p className="text-xl font-semibold">
                  <span className="text-green-600">Green Lab. Solutions</span>
                  <span className="italic text-gray-500"> for </span>
                  <span className="text-red-500">Sustainable Development</span>
                </p>
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <p className="text-lg font-bold text-green-700">February 21-23, 2026</p>
                  <p className="text-sm text-gray-600">ISPITS-Oujda, Morocco</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Proceedings Download */}
        <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-10 text-center text-white">
          <svg className="w-16 h-16 mx-auto mb-4 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <h2 className="text-3xl font-bold mb-4">Conference Proceedings</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            The detailed conference program and proceedings will be available for download after the event.
          </p>
          <button
            disabled
            className="inline-flex items-center px-8 py-4 bg-white/20 text-white font-bold rounded-lg cursor-not-allowed"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Coming Soon
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProgramPage
