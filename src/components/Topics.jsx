const Topics = () => {
  const topics = [
    {
      number: 1,
      title: 'Natural Resources, Earth & Environmental Studies',
      abbreviation: 'NREES',
      description:
        'This theme will delve into innovative conservation strategies tailored to the unique ecosystems of the Oriental region, addressing the specific environmental challenges faced by vulnerable areas. It will emphasize the integration of ecological sustainability with economic development, ensuring that both can thrive in harmony.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
    },
    {
      number: 2,
      title: 'AI in Environmental Pollution & Health Risks Management',
      abbreviation: 'AI-EPHRM',
      description:
        'This theme will explore the transformative potential of artificial intelligence in tackling pressing environmental and energy issues. It will highlight case studies demonstrating how AI can enhance resource management and promote sustainable practices. Additionally, it will address the critical intersection of environmental pollution and public health, proposing actionable strategies to mitigate health risks linked to environmental degradation.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-50',
    },
    {
      number: 3,
      title: 'Innovative & Eco-Materials for Green Production',
      abbreviation: 'IEMGP',
      description:
        'This theme will focus on the latest advancements in clean technologies and the adoption of sustainable materials in industrial processes. It will promote innovative practices that lead to significant waste reduction and lower CO2 emissions, showcasing successful examples of eco-friendly production methods.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      color: 'from-orange-500 to-amber-600',
      bgColor: 'bg-orange-50',
    },
    {
      number: 4,
      title: 'Renewable Energies & Circular Economy',
      abbreviation: 'RECE',
      description:
        'This theme will present cutting-edge innovations in renewable energy technologies while emphasizing the principles of the circular economy. It will explore how these principles can be applied to enhance resource efficiency and sustainability, fostering a more resilient economic model that minimizes waste and maximizes resource use.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-50',
    },
    {
      number: 5,
      title: 'Environmental Education & Eco-Citizenship',
      abbreviation: 'EEEC',
      description:
        'This theme will underscore the vital role of environmental education in fostering eco-citizenship and community engagement. It will highlight successful initiatives that mobilize local populations to participate in collective environmental actions, reinforcing the idea that informed citizens are essential for driving sustainable change.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'bg-purple-50',
    },
  ]

  return (
    <section id="topics" className="py-20 gradient-section relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-green-200 rounded-full" />
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-teal-200 rounded-full" />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 border-2 border-green-100 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#2c4360] mb-4">
            Conference Topics
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Five interconnected themes covering the most pressing environmental challenges and solutions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-teal-500 mx-auto rounded-full mt-6" />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic, index) => (
            <div
              key={index}
              className={`topic-card p-6 shadow-lg card-hover ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${topic.color} flex items-center justify-center text-white shadow-lg`}
                >
                  {topic.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${topic.bgColor} text-[#2c4360]`}>
                      Topic {topic.number}
                    </span>
                    <span className="text-xs font-semibold text-gray-500">
                      ({topic.abbreviation})
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#2c4360] leading-tight">
                    {topic.title}
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed italic">
                {topic.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Topics
