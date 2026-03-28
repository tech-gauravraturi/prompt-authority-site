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
              <span className="text-[#008080] font-bold text-xl">P</span>
            </div>
            <span className="text-[#F0F0F0] font-semibold text-lg tracking-wide hidden sm:block">
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
                      : 'text-[#A0A0A0] hover:text-[#F0F0F0]'
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
            className="hidden md:block px-5 py-2.5 bg-[#008080] text-[#F0F0F0] text-sm font-medium rounded-lg hover:bg-[#008080]/80 transition-all duration-300 hover:glow-teal"
          >
            Request an Architect
          </Link>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#F0F0F0] hover:text-[#008080] transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[#008080]/20">
            <ul className="flex flex-col gap-2 mt-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                      pathname === item.href
                        ? 'bg-[#008080]/20 text-[#008080] border-l-2 border-[#008080]'
                        : 'text-[#A0A0A0] hover:text-[#F0F0F0] hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <Link
                  href="/contact"
                  className="block px-4 py-3 bg-[#008080] text-[#F0F0F0] text-center rounded-lg font-medium"
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
