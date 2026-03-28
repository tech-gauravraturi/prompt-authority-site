"use client"

import { Brain, Network, Cpu, Layers, ArrowRight, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const evolutionStages = [
  {
    year: '2020',
    title: 'Basic Prompts',
    description: 'Simple instruction-based interactions with language models.',
    status: 'completed',
  },
  {
    year: '2022',
    title: 'Chain-of-Thought',
    description: 'Multi-step reasoning and complex task decomposition.',
    status: 'completed',
  },
  {
    year: '2023',
    title: 'Agentic Workflows',
    description: 'Autonomous agents executing complex, multi-system operations.',
    status: 'completed',
  },
  {
    year: '2024',
    title: 'Brain Replication',
    description: 'Capturing human expertise and decision patterns in AI systems.',
    status: 'current',
  },
  {
    year: '2025',
    title: 'Full Autonomy',
    description: 'Self-governing systems that evolve and optimize independently.',
    status: 'upcoming',
  },
]

const capabilities = [
  {
    icon: Brain,
    title: 'Neural Pattern Mapping',
    description: 'We analyze and digitize human decision-making processes, creating AI models that think like your best experts.',
  },
  {
    icon: Network,
    title: 'Distributed Intelligence',
    description: 'Deploy interconnected agent networks that share knowledge and coordinate complex operations in real-time.',
  },
  {
    icon: Cpu,
    title: 'Adaptive Learning',
    description: 'Systems that continuously improve by learning from every interaction, decision, and outcome.',
  },
  {
    icon: Layers,
    title: 'Hierarchical Governance',
    description: 'Multi-layered oversight ensuring AI systems operate within defined ethical and operational boundaries.',
  },
]

const codeSnippet = `// Aether-Mind Core Initialization
const aetherCore = await AetherMind.init({
  mode: 'autonomous',
  governance: {
    ethicalBoundaries: true,
    humanOversight: 'escalation-only',
    decisionAudit: true
  },
  learning: {
    pattern: 'neural-replication',
    source: 'expert-knowledge-base',
    continuous: true
  }
});

// Deploy Agent Network
await aetherCore.deployAgents({
  count: 7,
  specializations: [
    'workflow-orchestration',
    'decision-synthesis',
    'pattern-recognition'
  ],
  coordination: 'distributed'
});

// Activate Autonomous Operations
aetherCore.activate();
// Status: OPERATIONAL`

export default function AetherMindPage() {
  return (
    <div className="relative pt-24 pb-16">
      {/* Hero */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#008080]/10 border border-[#008080]/30 mb-6">
            <span className="text-[#008080] text-sm font-medium">Innovation Lab</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-[#F0F0F0]">
            Project <span className="text-[#008080]">Aether-Mind</span>
          </h1>
          <p className="text-lg text-[#A0A0A0] max-w-2xl mx-auto">
            The culmination of our research into brain replication and autonomous intelligence. Aether-Mind represents the next evolution in human-AI collaboration.
          </p>
        </div>
      </section>
      
      {/* Brain Replication Visualization */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Human Neural Map */}
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  {/* Brain outline */}
                  <div className="absolute inset-0 rounded-full border-2 border-[#A0A0A0]/30" />
                  <div className="absolute inset-4 rounded-full border border-[#A0A0A0]/20" />
                  <div className="absolute inset-8 rounded-full border border-[#A0A0A0]/10" />
                  
                  {/* Neural connections */}
                  {[...Array(12)].map((_, i) => {
                    const angle = (i / 12) * Math.PI * 2
                    const x = 50 + Math.cos(angle) * 35
                    const y = 50 + Math.sin(angle) * 35
                    return (
                      <div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-[#A0A0A0]/50"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: 'translate(-50%, -50%)',
                        }}
                      />
                    )
                  })}
                  
                  {/* Center */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Brain className="w-16 h-16 text-[#A0A0A0]" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#F0F0F0] mb-2">Human Neural Map</h3>
                <p className="text-[#A0A0A0] text-sm">Expert knowledge patterns</p>
              </div>
              
              {/* Arrow/Transfer */}
              <div className="hidden md:flex flex-col items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 rounded-full bg-[#008080]"
                      style={{
                        animation: `pulse 1.5s ease-in-out infinite`,
                        animationDelay: `${i * 0.2}s`,
                      }}
                    />
                  ))}
                  <ChevronRight className="w-6 h-6 text-[#008080]" />
                </div>
              </div>
              
              {/* Aether-Mind Core */}
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  {/* Core rings */}
                  <div className="absolute inset-0 rounded-full border-2 border-[#008080]/50 animate-pulse" />
                  <div className="absolute inset-4 rounded-full border border-[#008080]/40" style={{ animation: 'spin 20s linear infinite' }} />
                  <div className="absolute inset-8 rounded-full border border-[#008080]/30" style={{ animation: 'spin 15s linear infinite reverse' }} />
                  
                  {/* Neural nodes */}
                  {[...Array(12)].map((_, i) => {
                    const angle = (i / 12) * Math.PI * 2
                    const x = 50 + Math.cos(angle) * 35
                    const y = 50 + Math.sin(angle) * 35
                    return (
                      <div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-[#008080] animate-pulse"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: 'translate(-50%, -50%)',
                          animationDelay: `${i * 0.1}s`,
                        }}
                      />
                    )
                  })}
                  
                  {/* Center */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#008080]/20 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-[#008080] flex items-center justify-center glow-teal">
                      <span className="text-[#F0F0F0] font-bold">AM</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#F0F0F0] mb-2">Aether-Mind Core</h3>
                <p className="text-[#008080] text-sm">Replicated intelligence</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Evolution Timeline */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#F0F0F0] text-center mb-12">
            Neural Pattern <span className="text-[#008080]">Evolution</span>
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#008080] via-[#008080] to-[#008080]/20" />
            
            {evolutionStages.map((stage, index) => (
              <div
                key={stage.year}
                className={`relative flex items-start gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-[#008080] bg-[#050505] z-10">
                  {stage.status === 'current' && (
                    <div className="absolute inset-0 rounded-full bg-[#008080] animate-pulse" />
                  )}
                </div>
                
                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className={`glass-card p-6 ${stage.status === 'current' ? 'border-[#008080]/60' : ''}`}>
                    <span className={`text-sm font-mono ${
                      stage.status === 'completed' ? 'text-[#A0A0A0]' :
                      stage.status === 'current' ? 'text-[#008080]' : 'text-[#A0A0A0]/50'
                    }`}>
                      {stage.year}
                    </span>
                    <h3 className={`text-xl font-semibold mb-2 ${
                      stage.status === 'upcoming' ? 'text-[#A0A0A0]' : 'text-[#F0F0F0]'
                    }`}>
                      {stage.title}
                    </h3>
                    <p className="text-[#A0A0A0] text-sm">{stage.description}</p>
                    {stage.status === 'current' && (
                      <span className="inline-block mt-3 px-3 py-1 rounded-full bg-[#008080]/20 text-[#008080] text-xs font-medium">
                        Current Focus
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Capabilities */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#F0F0F0] text-center mb-12">
            Core <span className="text-[#008080]">Capabilities</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((cap) => (
              <div key={cap.title} className="glass-card p-6 hover:border-[#008080]/60 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#008080]/20 flex items-center justify-center flex-shrink-0">
                    <cap.icon className="w-6 h-6 text-[#008080]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#F0F0F0] mb-2">{cap.title}</h3>
                    <p className="text-[#A0A0A0] text-sm leading-relaxed">{cap.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Technical Preview */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card overflow-hidden">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#0a0a0a] border-b border-[#008080]/20">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              <span className="ml-4 text-[#A0A0A0] text-sm font-mono">aether-mind-core.ts</span>
            </div>
            
            {/* Code content */}
            <pre className="p-6 overflow-x-auto">
              <code className="text-sm font-mono text-[#F0F0F0] leading-relaxed whitespace-pre">
                {codeSnippet}
              </code>
            </pre>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#F0F0F0] mb-4">
            Ready to Replicate <span className="text-[#FFBF00]">Intelligence</span>?
          </h2>
          <p className="text-[#A0A0A0] text-lg mb-8 max-w-2xl mx-auto">
            Begin your journey toward autonomous operations. Our architects will guide you through the process of capturing and deploying your organization&apos;s collective intelligence.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#008080] text-[#F0F0F0] font-semibold rounded-xl hover:bg-[#008080]/80 transition-all duration-300 hover:glow-teal"
          >
            Initialize Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
