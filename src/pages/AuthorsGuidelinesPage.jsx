import { Link } from 'react-router-dom'

const AuthorsGuidelinesPage = () => {
  const guidelines = [
    {
      title: 'Abstract Submission',
      description: 'Submit your research abstract for review by our scientific committee. Follow the template and formatting guidelines.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      color: 'from-blue-500 to-cyan-500',
      buttonText: 'Submit Abstract',
      link: '#abstract-submission',
    },
    {
      title: 'Paper Submission',
      description: 'Submit your full paper after abstract acceptance. Papers will undergo peer review for publication.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: 'from-orange-500 to-amber-500',
      buttonText: 'Submit Paper',
      link: '#paper-submission',
    },
    {
      title: 'Registration Fees',
      description: 'View registration fees for different categories of participants and payment methods.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      color: 'from-green-500 to-emerald-500',
      buttonText: 'Register Now',
      link: '#registration',
    },
  ]

  const submissionSteps = [
    { step: 1, title: 'Plagiarism Check', description: 'All submissions undergo plagiarism verification' },
    { step: 2, title: 'Proof Reading', description: 'Review for language and formatting' },
    { step: 3, title: 'Ensuring Citations Accuracy', description: 'Verification of all references' },
    { step: 4, title: 'Grammar Review', description: 'Professional grammar and style check' },
    { step: 5, title: 'Maintaining Consistency in Concepts', description: 'Ensuring coherent presentation' },
    { step: 6, title: 'Adhering to Formatting Guidelines', description: 'Following JOE6 template requirements' },
  ]

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-400 via-cyan-400 to-teal-500" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Authors Guidelines
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Submit your abstracts & papers to JOE<sup>6</sup>
            </p>
          </div>
        </div>
      </div>

      {/* Submission Process */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-[#2c4360] mb-8 text-center">
            Submission Quality Assurance Process
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {submissionSteps.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {item.step}
                </div>
                <h4 className="font-semibold text-[#2c4360] text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Guidelines Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {guidelines.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${item.color}`} />
              <div className="p-8 text-center">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#2c4360] mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-6">{item.description}</p>
                <a
                  href={item.link}
                  className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${item.color} text-white font-semibold rounded-lg hover:shadow-lg transition-shadow`}
                >
                  {item.buttonText}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Important Dates Reminder */}
        <div className="bg-gradient-to-r from-[#2c4360] to-green-700 rounded-2xl p-10 text-white mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Important Submission Dates</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { event: 'Abstracts submission', date: 'Jan. 17, 2026', highlight: true },
              { event: 'Authors notification', date: 'Feb. 04, 2026', highlight: false },
              { event: 'Full papers submission', date: 'Feb. 22, 2026', highlight: false },
              { event: 'Peer-review notification', date: 'Mar. 07, 2026', highlight: false },
              { event: 'Final paper submission', date: 'Mar. 14, 2026', highlight: false },
              { event: 'Conference dates', date: 'Feb. 21-23, 2026', highlight: true },
            ].map((item, index) => (
              <div key={index} className={`p-4 rounded-lg ${item.highlight ? 'bg-white/20' : 'bg-white/10'}`}>
                <div className="text-white/80 text-sm mb-1">{item.event}</div>
                <div className={`font-bold text-lg ${item.highlight ? 'text-yellow-300' : 'text-white'}`}>
                  {item.date}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Publication Info */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-[#2c4360] mb-6">Publication & Indexing</h2>
          <p className="text-gray-600 mb-6">
            Accepted papers will be considered for publication in indexed journals and conference proceedings.
            Our publication partners include:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['ELSEVIER', 'MDPI', 'Web of Science', 'Scopus'].map((partner, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-gray-100 rounded-full text-gray-700 font-semibold"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-green-50 to-teal-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#2c4360] mb-4">Need Help with Your Submission?</h2>
          <p className="text-gray-600 mb-8">
            Contact us for any questions about the submission process
          </p>
          <a
            href="mailto:ygm.joe6@gmail.com"
            className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Support
          </a>
        </div>
      </div>
    </div>
  )
}

export default AuthorsGuidelinesPage
