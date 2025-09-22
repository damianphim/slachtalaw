'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#1a1a2e]/95 backdrop-blur-sm shadow-lg' : 'bg-[#1a1a2e]'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="Slachta Law Logo"
              width={64}
              height={64}
              className="h-16 w-auto object-contain"
              priority
            />
          </div>
          
          {/* Navigation */}
          <nav className="flex space-x-8">
            <a 
              href="#about" 
              className="text-white hover:text-[#bfa760] transition-colors font-medium relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#bfa760] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#team" 
              className="text-white hover:text-[#bfa760] transition-colors font-medium relative group"
            >
              Team
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#bfa760] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#contact" 
              className="text-white hover:text-[#bfa760] transition-colors font-medium relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#bfa760] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}