"use client"

import Link from 'next/link'
import { Github, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[#008080]/20 bg-[#050505]/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#008080]/20 border border-[#008080]/50 flex items-center justify-center">
                <span className="text-[#008080] font-bold">P</span>
              </div>
              <span className="text-[#F0F0F0] font-semibold">
                Prompt <span className="text-[#008080]">Authority</span>
              </span>
            </Link>
            <p className="text-[#A0A0A0] text-sm">
              Architects of the Autonomous Agency
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="p-2 rounded-lg bg-white/5 text-[#A0A0A0] hover:text-[#008080] hover:bg-[#008080]/10 transition-all duration-300"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg bg-white/5 text-[#A0A0A0] hover:text-[#008080] hover:bg-[#008080]/10 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg bg-white/5 text-[#A0A0A0] hover:text-[#008080] hover:bg-[#008080]/10 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-[#A0A0A0] text-sm">
            &copy; {new Date().getFullYear()} The Prompt Authority — Architects of the Autonomous Agency.
          </p>
        </div>
      </div>
    </footer>
  )
}
