"use client"

import { Mic, GitBranch, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    id: 'voice-agents',
    icon: Mic,
    title: 'AI Receptionists & Voice Agents',
    subtitle: 'Always-On Intelligent Communication',
    description: 'Deploy autonomous voice agents that handle calls, schedule appointments, and manage customer interactions with human-like precision. Our agents understand context, emotion, and intent.',
    features: [
      '24/7 intelligent call handling',
      'Natural language understanding',
      'Multi-language support',
      'Seamless CRM integration',
      'Real-time sentiment analysis',
      'Automatic escalation protocols',
    ],
    visual: 'voice',
  },
  {
    id: 'agentic-ops',
    icon: GitBranch,
    title: 'Agentic Operations',
    subtitle: 'Autonomous Workflow Orchestration',
    description: 'Transform your business processes with self-governing agent networks that execute, monitor, and optimize complex workflows without human oversight.',
    features: [
      'Autonomous task execution',
      'Intelligent decision routing',
      'Cross-system orchestration',
      'Self-healing workflows',
      'Predictive bottleneck prevention',
      'Real-time performance optimization',
    ],
    visual: 'data',
  },
  {
    id: 'vibe-coded',
    icon: Sparkles,
    title: 'Vibe-Coded Solutions',
    subtitle: 'Rapid Intelligent Development',
    description: 'Our proprietary development methodology transforms concepts into production-ready AI applications at unprecedented speed. Think it, describe it, deploy it.',
    features: [
      'Natural language to code',
      'Iterative rapid prototyping',
      'AI-assisted architecture design',
      'Automated testing & validation',
      'Continuous intelligence updates',
      'Zero-friction deployment',
    ],
    visual: 'morph',
  },
]

function ServiceVisual({ type }: { type: string }) {
  return (
    <div className="relative w-full h-64 md:h-80 flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-radial from-[#008080]/20 via-transparent to-transparent" />
      
      {type === 'voice' && (
        <div className="relative">
          {/* Central sphere */}
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#008080]/30 to-[#008080]/10 border border-[#008080]/50 flex items-center justify-center animate-pulse-glow">
            <div className="w-20 h-20 rounded-full bg-[#008080]/20 flex items-center justify-center">
              <Mic className="w-10 h-10 text-[#008080]" />
            </div>
          </div>
          {/* Orbiting rings */}
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#008080]/30"
              style={{
                width: `${100 + i * 40}px`,
                height: `${100 + i * 40}px`,
                animation: `spin ${10 + i * 5}s linear infinite${i % 2 === 0 ? ' reverse' : ''}`,
              }}
            />
          ))}
        </div>
      )}
      
      {type === 'data' && (
        <div className="relative w-full max-w-xs">
          {/* Cube representation */}
          <div className="relative w-32 h-32 mx-auto" style={{ perspective: '500px' }}>
            <div 
              className="w-full h-full border-2 border-[#008080]/50 bg-[#008080]/10"
              style={{ transform: 'rotateX(15deg) rotateY(-15deg)' }}
            >
              {/* Data streams */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-0.5 bg-gradient-to-t from-transparent via-[#008080] to-transparent"
                    style={{
                      left: `${20 + i * 15}%`,
                      height: '200%',
                      animation: `dataStream ${2 + i * 0.5}s linear infinite`,
                      animationDelay: `${i * 0.3}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
          <style jsx>{`
            @keyframes dataStream {
              0% { transform: translateY(100%); }
              100% { transform: translateY(-100%); }
            }
          `}</style>
        </div>
      )}
      
      {type === 'morph' && (
        <div className="relative">
          {/* Morphing shape placeholder */}
          <div className="w-32 h-32 relative">
            <div 
              className="absolute inset-0 bg-gradient-to-br from-[#008080] to-[#FFBF00] opacity-30"
              style={{
                clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
                animation: 'morph 8s ease-in-out infinite',
              }}
            />
            <div 
              className="absolute inset-2 bg-gradient-to-br from-[#FFBF00] to-[#008080] opacity-50"
              style={{
                clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
                animation: 'morph 8s ease-in-out infinite reverse',
              }}
            />
            <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-[#FFBF00]" />
          </div>
          <style jsx>{`
            @keyframes morph {
              0%, 100% { 
                clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
                transform: rotate(0deg);
              }
              25% { 
                clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
                transform: rotate(60deg);
              }
              50% { 
                clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
                transform: rotate(0deg);
              }
              75% { 
                clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
                transform: rotate(-60deg);
              }
            }
          `}</style>
        </div>
      )}
    </div>
  )
}

export default function ServicesPage() {
  return (
    <div className="relative pt-24 pb-16">
      {/* Hero */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#008080]/10 border border-[#008080]/30 mb-6">
            <span className="text-[#008080] text-sm font-medium">Workforce Solutions</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-[#F0F0F0]">
            The <span className="text-[#008080]">Autonomous</span> Workforce
          </h1>
          <p className="text-lg text-[#A0A0A0] max-w-2xl mx-auto">
            Deploy intelligent systems that work alongside your team, handling complex tasks with precision and adapting to your unique business requirements.
          </p>
        </div>
      </section>
      
      {/* Services */}
      <section className="px-4">
        <div className="max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 lg:gap-16 items-center py-16 ${
                index !== services.length - 1 ? 'border-b border-[#008080]/20' : ''
              }`}
            >
              {/* Visual */}
              <div className="w-full lg:w-1/2">
                <div className="glass-card p-8 overflow-hidden">
                  <ServiceVisual type={service.visual} />
                </div>
              </div>
              
              {/* Content */}
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#008080]/20 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-[#008080]" />
                  </div>
                  <span className="text-[#FFBF00] text-sm font-medium uppercase tracking-wider">
                    {service.subtitle}
                  </span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-bold text-[#F0F0F0] mb-4">
                  {service.title}
                </h2>
                
                <p className="text-[#A0A0A0] text-lg mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-[#F0F0F0]">
                      <CheckCircle2 className="w-5 h-5 text-[#008080] flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#008080] text-[#F0F0F0] font-medium rounded-lg hover:bg-[#008080]/80 transition-all duration-300"
                >
                  Deploy This Solution
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* CTA */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 text-center border-[#FFBF00]/30">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F0F0F0] mb-4">
              Custom Solution Required?
            </h2>
            <p className="text-[#A0A0A0] text-lg mb-8 max-w-2xl mx-auto">
              Our architects specialize in crafting bespoke autonomous systems tailored to your exact specifications.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#FFBF00] text-[#050505] font-bold rounded-xl hover:bg-[#FFBF00]/90 transition-all duration-300"
            >
              Schedule Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
