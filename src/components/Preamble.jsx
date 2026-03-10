const Preamble = () => {
  return (
    <section id="preamble" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-green-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-50 rounded-full translate-x-1/2 translate-y-1/2 opacity-50" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#2c4360] mb-4">
            Preamble
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-teal-500 mx-auto rounded-full" />
        </div>

        <div className="prose prose-lg max-w-none text-[#2c4360] leading-relaxed">
          <p className="text-lg md:text-xl mb-6 text-justify first-letter:text-5xl first-letter:font-display first-letter:font-bold first-letter:text-green-600 first-letter:mr-2 first-letter:float-left">
            In the face of the growing challenges posed by climate change and
            the urgent need to preserve our environment, the necessity to
            rethink our development models is more pressing than ever, alongside
            the development of innovative solutions for a sustainable future.
            The Oriental region, rich in its unique biodiversity, is confronted
            with significant environmental issues and stands at the forefront of
            this struggle while seeking to ensure equitable and nature-respecting
            economic development.
          </p>

          <p className="text-lg mb-6 text-justify">
            Following the successes of the five previous editions of this
            scientific & environmental event held annually by the{' '}
            <span className="text-green-600 font-semibold">YES GREEN MAROC</span>{' '}
            association, we aim to provide a space for reflection & exchange on
            concrete ways to adapt our practices, protect our resources, &
            engage the community in genuine change. Thus, we are pleased to
            officially announce the sixth edition of the "
            <span className="text-red-500 font-semibold">O</span>
            <span className="font-semibold">riental </span>
            <span className="text-green-600 font-semibold">D</span>
            <span className="font-handwritten text-lg">ays </span>
            <span className="font-handwritten text-lg italic">for the </span>
            <span className="text-yellow-600 font-semibold">E</span>
            <span className="font-semibold">nvironment</span>" (
            <span className="text-red-500 font-bold">O</span>
            <span className="text-green-600 font-bold">D</span>
            <span className="text-yellow-600 font-bold">E</span>
            <span className="font-bold">6</span>) / (
            <span className="text-red-500 font-bold">J</span>
            <span className="text-green-600 font-bold">O</span>
            <span className="text-yellow-600 font-bold">E</span>
            <span className="font-bold">6</span>) under the title "
            <span className="text-green-600 font-semibold">
              Green Lab. Solutions
            </span>{' '}
            <span className="font-handwritten text-lg italic">for</span>{' '}
            <span className="text-red-500 font-semibold">
              Sustainable Development
            </span>
            ", scheduled in Hybrid form{' '}
            <span className="font-handwritten text-lg italic">for</span>{' '}
            <span className="text-red-500 font-semibold">
              February 21-23, 2026
            </span>
            , at{' '}
            <span className="text-green-600 font-semibold">
              ISPITS-Oujda, Morocco
            </span>
            .
          </p>

          <p className="text-lg mb-8 text-justify">
            This edition is designed around five themes, covering a wide range
            of relevant topics, from natural resource management to artificial
            intelligence applied to the environment, as well as the importance
            of environmental education in mobilizing citizens.
          </p>

          {/* Call to Action Box */}
          <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-8 border border-green-100 my-10">
            <p className="text-lg mb-4 text-justify">
              This edition of{' '}
              <span className="text-red-500 font-bold">J</span>
              <span className="text-green-600 font-bold">O</span>
              <span className="text-yellow-600 font-bold">E</span>
              <span className="font-bold">6</span> is designed as a call to
              action. In light of the complex challenges of adapting to climate
              change and the need to ensure sustainable development for the
              Oriental region, it brings together diverse perspectives to
              propose practical and innovative solutions.
            </p>
            <p className="text-lg text-justify">
              By uniting scientists, researchers, policymakers, entrepreneurs,
              and citizens, it aims to build a bridge between science and
              concrete action, creating a collective dynamic capable of
              transforming our practices for a sustainable and equitable future.
            </p>
          </div>

          <p className="text-lg mb-6 text-justify">
            Under the visionary leadership of{' '}
            <span className="text-yellow-600 font-semibold">
              His Majesty King Mohammed VI
            </span>
            , Morocco is committed to a sustainable and ecologically sound
            future. This{' '}
            <span className="text-red-500 font-bold">J</span>
            <span className="text-green-600 font-bold">O</span>
            <span className="text-yellow-600 font-bold">E</span> event serves as
            a collaborative platform for researchers, experts, governmental
            bodies, and civil society to converge and devise tangible solutions
            to the environmental challenges confronting our nation.
          </p>

          <p className="text-lg mb-8 text-justify">
            The event will feature enlightening plenary sessions, engaging panel
            discussions, and insightful presentations from esteemed speakers,
            illuminating scientific breakthroughs and strategies essential for
            cultivating a sustainable future. In alignment with our commitment
            to recognizing exemplary efforts, the event will honor outstanding
            solutions in each theme.
          </p>

          {/* Invitation Box */}
          <div className="text-center bg-[#2c4360] text-white rounded-2xl p-8 mt-10">
            <p className="text-lg mb-4">
              We extend a heartfelt invitation to scientists, researchers,
              policymakers, environmental advocates, and all stakeholders to
              join us on{' '}
              <span className="text-green-300 font-semibold">
                February 21-23, 2026
              </span>
              , as we collectively champion:
            </p>
            <p className="text-2xl font-display italic text-green-300 mb-4">
              "Innovative Solutions for Sustainable Environmental Practices"
            </p>
            <p className="text-lg text-teal-200">
              Together, let us contribute to shaping a greener, more sustainable
              Morocco, fostering harmony between human endeavors and the
              environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Preamble
