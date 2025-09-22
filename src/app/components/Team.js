'use client'
import Image from 'next/image'

const founder = {
  name: 'Lara Slachta',
  title: 'Founder & Lead Attorney',
  image: '/lara.jpg',
  linkedin: 'https://www.linkedin.com/in/laraslachta',
  bio: 'Experienced fund formation and investment management attorney with a proven track record of success.',
  highlights: [
    'Represents fund managers in complex transactions',
    'Executive Team Leader with extensive experience',
    'Advisor to Texture Capital',
    'Former CEO and CCO with operational expertise',
    'FINRA licensed Series 7, 63, 79, 82, and 24 professional',
  ]
}

export default function Team() {
  const handleLinkedInClick = (linkedinUrl) => {
    window.open(linkedinUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="team" className="bg-[#f9f9f9] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Founder Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#1a1a2e] font-serif">Meet the Founder</h2>
        </div>
        <div className="max-w-3xl mx-auto mb-24">
          <button
            onClick={() => handleLinkedInClick(founder.linkedin)}
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] w-full group cursor-pointer text-left focus:outline-none/30"
          >
            <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <Image
                src={founder.image}
                alt={`${founder.name} - ${founder.title}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="128px"
              />
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#1a1a2e] mb-2 font-serif group-hover:text-[#0077b5] transition-colors duration-300">
                {founder.name}
              </h3>
              <p className="text-[#bfa760] font-semibold uppercase tracking-wider text-sm mb-4">
                {founder.title}
              </p>
              <p className="text-[#4a5568] mb-4 leading-relaxed">{founder.bio}</p>
              <ul className="text-left text-sm text-[#4a5568] space-y-2">
                {founder.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-[#bfa760] mr-2">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-[#0077b5] text-sm font-medium">Click to view LinkedIn profile →</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}
