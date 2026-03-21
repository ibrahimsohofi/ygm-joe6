const ImportantDates = () => {
  const dates = [
    {
      event: 'Abstracts submission',
      date: 'Jan. 17, 2026',
      color: 'bg-red-500',
      isPast: false,
    },
    {
      event: 'Authors notification',
      date: 'Feb. 04, 2026',
      color: 'bg-blue-500',
      isPast: false,
    },
    {
      event: 'Final program diffusion',
      date: 'Feb. 12, 2026',
      color: 'bg-green-500',
      isPast: false,
    },
    {
      event: 'First full papers submission',
      date: 'Feb. 22, 2026',
      color: 'bg-orange-500',
      isPast: false,
    },
    {
      event: 'Peer-review notification',
      date: 'Mar. 07, 2026',
      color: 'bg-purple-500',
      isPast: false,
    },
    {
      event: "Final paper's submission",
      date: 'Mar. 14, 2026',
      color: 'bg-teal-500',
      isPast: false,
    },
  ]

  return (
    <section id="dates" className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Call for Communications */}
          <div>
            <div className="mb-8">
              <span className="text-green-600 font-bold text-lg">
                &gt;&gt;&gt;
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#2c4360] mt-2">
                Call for Communications
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mt-4" />
            </div>

            <div className="space-y-4">
              {dates.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className={`w-3 h-3 rounded-full ${item.color}`} />
                  <span className="flex-1 text-[#2c4360] font-medium">
                    {item.event}
                  </span>
                  <span
                    className={`font-semibold ${
                      item.event === 'Abstracts submission'
                        ? 'text-red-500'
                        : 'text-[#2c4360]'
                    }`}
                  >
                    {item.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Event Info */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="font-display text-2xl font-bold text-[#2c4360] mb-4">
                Date & Venue
              </h3>
              <div className="text-4xl font-bold text-green-600 mb-2">
                February 21-23, 2026
              </div>
              <p className="text-gray-600">
                Higher Institute of Nursing Professions and Health Techniques -{' '}
                <span className="text-green-600 font-semibold">(ISPITS-Oujda)</span>
              </p>
            </div>

            <div className="border-t border-gray-100 pt-6">
              <p className="text-gray-600 text-sm text-center mb-4">
                In the exceptional circumstances, plenary conferences,
                communication sessions, workshops and seminars will be held
                online.
              </p>
              <div className="flex justify-center gap-4">
                <span className="inline-flex items-center gap-1 text-sm text-gray-500">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                  Hybrid Event
                </span>
                <span className="inline-flex items-center gap-1 text-sm text-red-500">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
                  </svg>
                  LIVE
                </span>
              </div>
            </div>

            {/* Indexing badges */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex flex-wrap justify-center gap-3">
                {['ELSEVIER', 'MDPI', 'Web of Science', 'Scopus'].map(
                  (badge, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold text-gray-600"
                    >
                      {badge}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImportantDates
