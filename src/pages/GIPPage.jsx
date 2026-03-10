const GIPPage = () => {
  const topics = [
    { number: 1, title: 'Natural Resources, Earth & Environmental Studies', abbreviation: 'NREES', color: 'bg-blue-500' },
    { number: 2, title: 'AI in Environmental Pollution & Health Risks Management', abbreviation: 'AI-EPHRM', color: 'bg-gray-500' },
    { number: 3, title: 'Innovative & Eco-Materials for Green Production', abbreviation: 'IEMGP', color: 'bg-green-500' },
    { number: 4, title: 'Renewable Energies & Circular Economy', abbreviation: 'RECE', color: 'bg-emerald-500' },
    { number: 5, title: 'Environmental Education & Eco-Citizenship', abbreviation: 'EEEC', color: 'bg-teal-500' },
  ]

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=1920&q=80"
          alt="Earth"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2c4360]/90 to-green-700/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              <span className="text-green-300">G</span>
              <span className="text-yellow-300">I</span>
              <span className="text-red-300">P</span>
              <sup className="text-2xl">2026</sup>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto px-4">
              Green Innovation Prize - Application Process
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-[#2c4360] mb-6">About GIP<sup>2026</sup></h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            This edition will award the six best Green Innovative Solutions with the 
            <span className="font-semibold text-green-600"> Green Innovation Prize (GIP<sup>2026</sup>)</span>, 
            each in one of the 5 conference themes.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The GIP recognizes outstanding research and innovations that demonstrate practical applications 
            for environmental sustainability and can be transitioned into real-world eco-industrial solutions.
          </p>
        </div>

        {/* Topics Section */}
        <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-[#2c4360] mb-6 text-center">
            Topics Eligible for GIP<sup>2026</sup>
          </h2>
          <div className="space-y-4">
            {topics.map((topic) => (
              <div key={topic.number} className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-4">
                <div className={`w-10 h-10 ${topic.color} rounded-full flex items-center justify-center text-white font-bold`}>
                  {topic.number}
                </div>
                <div>
                  <span className="text-gray-500 text-sm">Topic {topic.number}:</span>
                  <h3 className="font-semibold text-[#2c4360]">{topic.title}</h3>
                  <span className="text-sm text-gray-500">({topic.abbreviation})</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rules Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-[#2c4360] mb-6">Rules & Selection Process</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="font-bold text-[#2c4360] mb-2">Eligibility</h3>
              <p className="text-gray-600">
                All JOE<sup>6</sup> entries, including oral and poster presentations, plenary lectures, etc., 
                will be examined by a specialised and anonymous jury.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="font-bold text-[#2c4360] mb-2">Step 1: Initial Selection</h3>
              <p className="text-gray-600">
                A selection will determine the 15 best scientific works presented in the form of "Oral/Poster" 
                communications, as well as 3 best lectures, giving a total pre-selected number of 18 works 
                susceptible to an eco-industrial transition.
              </p>
            </div>

            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="font-bold text-[#2c4360] mb-2">Step 2: Final Presentation</h3>
              <p className="text-gray-600">
                These finalist works will be represented publicly after achieving all enhancement 
                "Technical GIP<sup>2026</sup> Standards" at the last hour of the event to be judged by digital voting, 
                allowing the announcement of the best participation, each in one of the 5 topics.
              </p>
            </div>
          </div>
        </div>

        {/* GIP Diagram */}
        <div className="bg-gradient-to-br from-[#2c4360] to-green-700 rounded-2xl p-10 text-white text-center mb-12">
          <h2 className="text-3xl font-bold mb-8">Green Innovation Prize</h2>
          
          <div className="relative max-w-md mx-auto">
            {/* Central Logo */}
            <div className="w-32 h-32 mx-auto bg-white rounded-full flex items-center justify-center shadow-xl mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold">
                  <span className="text-green-600">X</span>
                  <span className="text-yellow-600">G</span>
                </div>
                <div className="text-xs text-gray-600 font-semibold">YES GREEN</div>
                <div className="text-xs text-gray-500">MAROC</div>
              </div>
            </div>

            {/* Categories around */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { name: 'Natural Resources Conservation', icon: '🌱' },
                { name: 'AI in Environment & Health', icon: '🤖' },
                { name: 'Innovative & Eco-Materials', icon: '♻️' },
                { name: 'Renewable Energy', icon: '⚡' },
                { name: 'Environmental Education', icon: '📚' },
                { name: 'Green Innovation', icon: '🏆' },
              ].map((item, index) => (
                <div key={index} className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="text-sm font-medium">{item.name}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <p className="text-lg font-semibold text-green-300">
              GIP<sup>2026</sup> - Recognizing Excellence in Environmental Innovation
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#2c4360] mb-4">
            Ready to Compete for the Green Innovation Prize?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Submit your innovative research and solutions to be considered for GIP<sup>2026</sup>
          </p>
          <a
            href="/authors-guidelines"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 text-white font-bold rounded-lg hover:shadow-lg transition-shadow"
          >
            Submit Your Research
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default GIPPage
