import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen text-white overflow-hidden">
      {/* Background gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1f1f1f] via-[#19192b] to-[#2d3561] z-0" />
      {/* Hero content container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 pt-32 pb-20">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif tracking-tight leading-tight">
              Slachta Law
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl">
              Dedicated legal counsel with integrity, strategy, and results. We provide strategic legal guidance tailored to your needs with deep roots in the legal community.
            </p>
          </div>

          {/* Right Side - Hero Image */}
          <div className="rounded-2xl overflow-hidden shadow-2xl max-w-md w-full mx-auto">
            <Image
              src="/IMG_5855.jpg"
              alt="Slachta Law - Professional Legal Services"
              width={500}
              height={600}
              className="object-cover w-full h-auto"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
