"use client"

import Link from 'next/link'
import { ArrowRight, Cpu, Zap, Brain, Shield } from 'lucide-react'

const features = [
  {
    icon: Cpu,
    title: 'Vibe Coding',
    description: 'Transform ideas into intelligent systems through our proprietary development methodology.',
  },
  {
    icon: Zap,
    title: 'Agentic Ops',
    description: 'Deploy autonomous agents that execute complex workflows without human intervention.',
  },
  {
    icon: Brain,
    title: 'Brain Replication',
    description: 'Capture and digitize human expertise into scalable AI-powered decision engines.',
  },
  {
    icon: Shield,
    title: 'Governance',
    description: 'Enterprise-grade oversight ensuring AI systems operate within defined boundaries.',
  },
]

const stats = [
  { value: '99.9%', label: 'Uptime' },
  { value: '50M+', label: 'Decisions/Day' },
  { value: '7', label: 'Elite Architects' },
  { value: '24/7', label: 'Autonomous Ops' },
]

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#008080]/10 border border-[#008080]/30 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#008080] animate-pulse" />
            <span className="text-[#008080] text-sm font-medium">Autonomous Systems Active</span>
          </div>
          
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-balance">
            <span className="text-[#F0F0F0]">We Don&apos;t Just Prompt.</span>
            <br />
            <span className="gradient-text">We Replicate Human Intelligence.</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-[#A0A0A0] max-w-3xl mx-auto mb-10 leading-relaxed text-pretty">
            The Prompt Authority: Architects of the Autonomous Agency. We build AI systems that think, decide, and execute — transforming your operations into self-governing ecosystems.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group flex items-center gap-2 px-8 py-4 bg-[#008080] text-[#F0F0F0] font-semibold rounded-xl hover:bg-[#008080]/80 transition-all duration-300 hover:glow-teal"
            >
              Request an Architect
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/aether-mind"
              className="flex items-center gap-2 px-8 py-4 bg-transparent text-[#F0F0F0] font-semibold rounded-xl border border-[#008080]/50 hover:border-[#008080] hover:bg-[#008080]/10 transition-all duration-300"
            >
              Explore Aether-Mind
            </Link>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-[#A0A0A0] text-sm">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-[#008080]/50 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-[#008080] rounded-full animate-pulse" />
          </div>
        </div>
      </section>
      
      {/* Flywheel Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#F0F0F0]">
              The Authority <span className="text-[#008080]">Flywheel</span>
            </h2>
            <p className="text-[#A0A0A0] text-lg max-w-2xl mx-auto">
              Our integrated methodology creates a self-reinforcing cycle of intelligence amplification.
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group glass-card p-6 hover:border-[#008080]/60 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#008080]/20 flex items-center justify-center mb-4 group-hover:bg-[#008080]/30 transition-colors">
                  <feature.icon className="w-6 h-6 text-[#008080]" />
                </div>
                <h3 className="text-xl font-semibold text-[#F0F0F0] mb-2">{feature.title}</h3>
                <p className="text-[#A0A0A0] text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="glass-card p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#008080] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-[#A0A0A0] text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-[#F0F0F0]">
            Ready to <span className="text-[#FFBF00]">Automate</span> Your Intelligence?
          </h2>
          <p className="text-[#A0A0A0] text-lg mb-10 max-w-2xl mx-auto">
            Join the elite organizations that have transcended traditional operations. Your autonomous future begins with a single conversation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-[#FFBF00] text-[#050505] font-bold rounded-xl hover:bg-[#FFBF00]/90 transition-all duration-300 hover:glow-amber"
          >
            Initialize Contact Protocol
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
