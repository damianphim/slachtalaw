export default function Services() {
  const services = [
    {
      title: "Business Law",
      icon: (
        <svg className="w-16 h-16 text-[#bfa760]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      description: "We can help you protect your business, minimize risk, and ensure compliance with state and federal regulations, throughout each phase of the business life cycle."
    },
    {
      title: "General Practice", 
      icon: (
        <svg className="w-16 h-16 text-[#bfa760]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      description: "We offer versatile legal representation, deliver effective solutions to protect your interests, and navigate diverse legal landscapes to provude favorable outcomes."
    }
  ]

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#1a1a2e] font-serif mb-4">Legal Services</h2>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="text-center group hover:bg-[#f9f9f9] p-8 rounded-xl transition-all duration-300 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-3xl font-bold text-[#1a1a2e] font-serif mb-6">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-[#4a5568] leading-relaxed text-lg">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}