export default function Footer() {
  return (
    <footer id="contact" className="bg-primary text-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
          <div className="flex items-center gap-3">
            <span className="text-accent text-xl">📍</span>
            <span>Orleans, MA</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-accent text-xl">📞</span>
            <span>(646) 369-9323</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-accent text-xl">✉️</span>
            <span>laras@slachtalaw.com</span>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-white/20">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Slachta Law. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}