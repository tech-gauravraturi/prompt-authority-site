"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/taskforce', label: 'Taskforce' },
  { href: '/aether-mind', label: 'Aether-Mind' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])
  
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-header py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-[#008080]/20 border border-[#008080]/50 flex items-center justify-center group-hover:glow-teal transition-all duration-300">
              <span className={`font-bold text-xl ${isScrolled ? 'text-white' : 'text-[#008080]'}`}>P</span>
            </div>
            <span className={`font-semibold text-lg tracking-wide hidden sm:block ${isScrolled ? 'text-white' : 'text-[#F0F0F0]'}`}>
              Prompt <span className="text-[#008080]">Authority</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                    pathname === item.href
                      ? 'text-[#008080]'
                      : `${isScrolled ? 'text-white hover:text-white' : 'text-[#A0A0A0] hover:text-[#F0F0F0]'}`
                  }`}
                >
                  {item.label}
                  {pathname === item.href && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-[#008080] rounded-full shadow-[0_0_10px_#008080]" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
          
          {/* CTA Button */}
          <Link
            href="/contact"
            className={`hidden md:block px-5 py-2.5 bg-[#008080] text-sm font-medium rounded-lg hover:bg-[#008080]/80 transition-all duration-300 hover:glow-teal ${isScrolled ? 'text-white' : 'text-[#F0F0F0]'}`}
          >
            Request an Architect
          </Link>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-3 bg-[#2a2a2a]/80 border-2 border-solid border-[#2a2a2a] rounded-lg hover:bg-[#2a2a2a]/90 hover:border-[#00F2FF]/50 transition-all duration-300 hover:glow-neon-teal"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X 
                size={20} 
                className="text-[#00F2FF] drop-shadow-[0_0_8px_rgba(0,242,255,0.8)]" 
                style={{ strokeWidth: '3px' }}
              />
            ) : (
              <Menu 
                size={20} 
                className="text-[#00F2FF] drop-shadow-[0_0_8px_rgba(0,242,255,0.8)]" 
                style={{ strokeWidth: '3px' }}
              />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div 
            className="md:hidden mt-4 pb-4 border-t border-[#008080]/20 bg-[#050505] rounded-lg z-[60]"
            style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
          >
            <ul className="flex flex-col gap-2 mt-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                      pathname === item.href
                        ? 'bg-[#008080]/20 text-white border-l-2 border-[#008080]'
                        : 'text-white hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <Link
                  href="/contact"
                  className="block px-4 py-3 bg-[#008080] text-white text-center rounded-lg font-medium"
                >
                  Request an Architect
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
