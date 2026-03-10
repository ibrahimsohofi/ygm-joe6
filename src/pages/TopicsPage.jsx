import { useState } from 'react'

const TopicsPage = () => {
  const [expandedTopic, setExpandedTopic] = useState(null)

  const topics = [
    {
      number: 1,
      title: 'Natural Resources, Earth & Environmental Studies',
      abbreviation: 'NREES',
      color: 'from-blue-400 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-400',
      subtopics: [
        'Water Resources, Irrigation & Drainage',
        'Biodiversity, Forestry ecosystems, Highlands ecosystems',
        'Minerals valuation',
        'Ecological/Environmental modeling',
        'Seeds, Crop & Agricultural lands',
        'Ornamental Horticulture',
        'Plant Genetic Resources',
        'Grasslands & Forage',
        'Plant Breeding',
        'Plant Growth Regulator',
        'Agricultural Entomology',
        'Aromatic & Medicinal Plants',
        'Medical & Veterinary Entomology',
        'Medical & Veterinary Mycology',
        'Plant Pathology',
        'Rural Development',
        'Soils Natural fertilizers',
        'Geomaterials',
      ],
    },
    {
      number: 2,
      title: 'AI in Environmental Pollution & Health Risks Management',
      abbreviation: 'AI-EPHRM',
      color: 'from-gray-400 to-gray-600',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-400',
      subtopics: [
        'Pollution Kinetics',
        'Pollution modelling, Simulation & Monitoring',
        'Air Quality Control/Air Pollution',
        'Groundwater Contamination and Vulnerability',
        'Water resources Pollution and Management',
        'Coastal pollution',
        'Environmental Geochemistry',
        'Trace Elements & Heavy Metals',
        'Petroleum pollution & Radioactivity',
        'Solid pollution, Hazardous Wastes & Landfills',
        'Waste Management',
        'Emerging contaminants',
        'Hazardous wastes investigation and remediation',
        'Eco toxicity & Contaminant Dispersion',
        'Botanical Pesticides impact',
        'Global Health, Human & Environmental Health',
        'Transboundary pollution',
        'Climate change and Water shortages',
        'Cultures invasive infections',
        'Atmospheric, meteorological, & climatological hazards',
        'Sea, ocean & coastal hazards',
        'Environmental dynamics (coastal erosion, sea level rise)',
        'Sedimentation and aquatic balance',
        'Hydrological hazards',
        'Landslides & debris flow hazards',
        'Disasters: Wildfires, floods, earthquakes / Tsunami or tidal waves / Volcanic hazards',
        'Risk assessment, mitigation, and adaptation strategies',
        'Biotechnology',
        'Databases: Early warning systems, Monitoring technologies',
        'Environmental assessment tools, policy & management',
        'Remote Sensing and GIS',
        'Green technologies',
      ],
    },
    {
      number: 3,
      title: 'Innovative & Eco-Materials for Green Production',
      abbreviation: 'IEMGP',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-500',
      subtopics: [
        'Refuse-derived fuel & Energy recovery',
        'Sustainable development & Circular economy',
        'Innovative processes, tools & methodologies applied to materials recycling',
        'The economics of recycling',
        'Environmental and social impact of recycling',
        'Zero Waste processing technologies',
        'Geotechnics',
        'Green buildings & green transportation',
        'New and renewable energy devices',
        'Green technology strategies for sustainable planning',
        'Novel forms of knowledge creation & increased eco-innovation',
        'Novel business models',
        'Clean energy technologies',
        'Green economy',
        'Sustainable development goals (SDGs)',
        'Sustainable investment',
        'Sustainability performance',
        'Environmental Management System (EMS)',
        'Waste and wastewater treatments and disposal technology',
        'Remediation technology of contaminated environments',
      ],
    },
    {
      number: 4,
      title: 'Renewable Energies & Circular Economy',
      abbreviation: 'RECE',
      color: 'from-emerald-500 to-green-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-500',
      subtopics: [
        'Energy and environment, sustainable transition',
        'Energy sources: Fossil; Nuclear; Geothermal; Hydro; Wind; Solar, etc.',
        'Bioenergy',
        'Energy storage and applications',
        'Energy Fundamentals & conversion',
        'Energy and buildings: Smart cities and urban management; Phase change materials for energy storage',
        'Diagnostics and prognostics of energy conversion chains',
        'Artificial intelligence in energy systems design & control',
        'Monitoring and control systems',
        'Green chemical energy',
        'Energy use in industry, economics, and policy',
      ],
    },
    {
      number: 5,
      title: 'Environmental Education & Eco-Citizenship',
      abbreviation: 'EEEC',
      color: 'from-teal-500 to-cyan-600',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-500',
      subtopics: [
        'Economic & Societal Dimensions of Environmental Citizenship',
        'Environmental Citizenship and Youth Activism',
        'Environmental Citizenship in Primary Formal Education',
        'The Pedagogical Approach',
        'Eco delegation',
        'Global citizenship education',
        'Civic participation',
        'Civic engagement',
        'Dissemination, education, outreach, and teaching',
        'Education for environmental citizenship',
        'Sustainability education',
        'Environmental and collective behavior',
        'Sustainable development goals',
        'NGOs volunteering policies, Awareness for action',
        'Popularization of science',
        'Transformative education',
        'Case studies: eco-citizen participation',
      ],
    },
  ]

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=1920&q=80"
          alt="Nature landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2c4360]/90 to-green-700/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Topics
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto px-4">
              Five interconnected themes covering the most pressing environmental challenges
            </p>
          </div>
        </div>
      </div>

      {/* Topics List */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-4">
          {topics.map((topic) => (
            <div
              key={topic.number}
              className={`bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 ${
                expandedTopic === topic.number ? 'shadow-xl' : ''
              }`}
            >
              {/* Topic Header */}
              <button
                onClick={() => setExpandedTopic(expandedTopic === topic.number ? null : topic.number)}
                className={`w-full p-6 flex items-center gap-4 bg-gradient-to-r ${topic.color} text-white transition-all hover:brightness-110`}
              >
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <span className="text-2xl font-bold">0{topic.number}</span>
                </div>
                <div className="flex-1 text-left">
                  <div className="text-sm opacity-80 mb-1">Topic {topic.number}</div>
                  <h3 className="text-xl md:text-2xl font-bold">{topic.title}</h3>
                  <span className="text-sm opacity-80">({topic.abbreviation})</span>
                </div>
                <svg
                  className={`w-8 h-8 transition-transform duration-300 ${
                    expandedTopic === topic.number ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Subtopics (Expandable) */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  expandedTopic === topic.number ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className={`p-6 ${topic.bgColor}`}>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {topic.subtopics.map((subtopic, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${topic.color} mt-2 flex-shrink-0`} />
                        <span className="text-gray-700">{subtopic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-10 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Submit Your Research?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Submit your abstract or full paper to contribute to the scientific discourse on environmental sustainability.
          </p>
          <a
            href="/authors-guidelines"
            className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Authors Guidelines
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default TopicsPage
