const VenuePage = () => {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=1920&q=80"
          alt="Morocco architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2c4360]/90 to-green-700/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Venue
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto px-4">
              ISPITS-Oujda, Morocco
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Venue Info */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#2c4360] mb-4">
                Higher Institute of Nursing Professions and Health Techniques
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                <span className="font-semibold text-green-600">ISPITS-Oujda</span>
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                The conference will be held at the Higher Institute of Nursing Professions
                and Health Techniques (ISPITS) in Oujda, Morocco. This modern facility
                provides an ideal setting for scientific discussions and networking.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[#2c4360]">Location</p>
                    <p className="text-gray-600">Oujda, Oriental Region, Morocco</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[#2c4360]">Date</p>
                    <p className="text-gray-600">February 21-23, 2026</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[#2c4360]">Format</p>
                    <p className="text-gray-600">Hybrid (In-Person & Online)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80"
                alt="Morocco landscape"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-[#2c4360] mb-6">Location Map</h2>
          <div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.0947762044946!2d-1.9188456!3d34.6877743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd786c8e26ba3d9b%3A0x8c3d3e7f0c2f8a0!2sOujda%2C%20Morocco!5e0!3m2!1sen!2sus!4v1679900000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ISPITS-Oujda Location"
              className="rounded-xl"
            />
          </div>
        </div>

        {/* About Oujda */}
        <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-[#2c4360] mb-6">About Oujda</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Oujda is the largest city in eastern Morocco, serving as the capital of the
                Oriental region. Known as the "City of a Thousand Years," Oujda boasts a
                rich history and vibrant culture.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                The city is renowned for its unique blend of Moroccan and Mediterranean
                influences, with beautiful architecture, warm hospitality, and delicious
                local cuisine.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The Oriental region is also known for its unique biodiversity and is at the
                forefront of environmental conservation efforts in Morocco, making it the
                perfect location for JOE6.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <h3 className="font-semibold text-[#2c4360] mb-2">Getting There</h3>
                <p className="text-gray-600 text-sm">
                  Oujda-Angads Airport (OUD) serves the city with domestic and international flights.
                  The city is also accessible by train and bus from major Moroccan cities.
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <h3 className="font-semibold text-[#2c4360] mb-2">Accommodation</h3>
                <p className="text-gray-600 text-sm">
                  Various hotels are available in Oujda, ranging from budget-friendly options to
                  luxury accommodations. More details will be provided to registered participants.
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <h3 className="font-semibold text-[#2c4360] mb-2">Climate</h3>
                <p className="text-gray-600 text-sm">
                  February in Oujda features mild Mediterranean weather, with average temperatures
                  around 12-18°C (54-64°F), perfect for the conference.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hybrid Event Notice */}
        <div className="bg-[#2c4360] rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Hybrid Event Format</h2>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            JOE6 will be held in hybrid format, allowing participants from around the world
            to join both in-person and online. In exceptional circumstances, plenary conferences,
            communication sessions, workshops and seminars will be held online.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
              In-Person Attendance
            </span>
            <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
              </svg>
              Live Online Streaming
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VenuePage
