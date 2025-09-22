export default function About() {
  return (
    <section id="about" className="bg-white py-20 px-6 relative">
      {/* Top accent line */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-accent rounded-full"></div>
      
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-8 text-primary font-serif">Who We Are</h2>
        <p className="text-lg text-text-gray leading-relaxed max-w-3xl mx-auto">
          At Slachta Law, we form private funds from venture capital to hedge funds and private equity vehicles, from initial structuring through regulatory compliance and investor relations. Leveraging deep expertise in federal securities laws and holding Series 7, 24, 63, 79. and 82 licenses, we provide comprehensive guidance on private placements regulatory compliance, and investment advisory matters. We connect from institutional investors to family offices with vetted investment opportunities, serving as trusted intermediaries in private market transactions. Expert guidance through the Investment Company Act, Investment Advisers Act, Securities Act of 1933, and Securities Exchange Act of 1934, ensuring your investments and structures remain compliant in an evolving regulatory landscape.
        </p>
      </div>
    </section>
  )
}