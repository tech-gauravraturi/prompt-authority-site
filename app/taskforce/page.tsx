"use client"

import { useState } from 'react'
import { X, Shield, Award, Fingerprint } from 'lucide-react'

interface TeamMember {
  id: string
  name: string
  role: string
  specialty: string
  experience: string
  aetherSignature: string
  level: 'visionary' | 'senior' | 'specialist' | 'analyst'
}

const teamMembers: TeamMember[] = [
  {
    id: 'founder-001',
    name: 'Himanshu Bhatt',
    role: 'Founder & Automation Architect',
    specialty: 'Founder, Strategy Lead & AI Automation Architect',
    experience: 'Expert in autonomous systems and AI strategy',
    aetherSignature: 'AE-HB01-ALPHA',
    level: 'visionary',
  },
  {
    id: 'eng-001',
    name: 'Shradheya Gairola',
    role: 'AI Automation Engineer',
    specialty: 'Workflow Automation Specialist',
    experience: 'Specialized in AI-driven workflow optimization',
    aetherSignature: 'AE-SG02-GAMMA',
    level: 'senior',
  },
  {
    id: 'eng-002',
    name: 'Mohit',
    role: 'AI Systems & Integration Engineer',
    specialty: 'AI Applications & Backend Engineer',
    experience: 'Focused on AI backend systems and integrations',
    aetherSignature: 'AE-MO03-DELTA',
    level: 'senior',
  },
  {
    id: 'dev-001',
    name: 'Aman Bisht',
    role: 'Frontend & Internal Tools Developer',
    specialty: 'Dashboard & Client Tools Developer',
    experience: 'Expert in frontend development and internal tooling',
    aetherSignature: 'AE-AB04-SIGMA',
    level: 'senior',
  },
  {
    id: 'analyst-001',
    name: 'Gaurav Raturi',
    role: 'Workflow Analyst',
    specialty: 'Business Process & Automation Consultant',
    experience: 'Skilled in business process analysis and automation',
    aetherSignature: 'AE-GR05-THETA',
    level: 'analyst',
  },
  {
    id: 'pm-001',
    name: 'Rishabh Purohit',
    role: 'Client Success & Project Manager',
    specialty: 'Client Delivery & Retainer Manager',
    experience: 'Dedicated to client success and project management',
    aetherSignature: 'AE-RP06-OMEGA',
    level: 'specialist',
  },
  {
    id: 'growth-001',
    name: 'Tarun Rawat',
    role: 'Growth & Authority Lead',
    specialty: 'Marketing, Content & Brand Strategy',
    experience: 'Leader in marketing and brand strategy',
    aetherSignature: 'AE-TR07-PRIME',
    level: 'specialist',
  },
  {
    id: 'revenue-001',
    name: 'Shubham Nautiyal',
    role: 'Revenue & Partnerships Lead',
    specialty: 'Sales, Deals & Strategic Growth',
    experience: 'Expert in sales and strategic partnerships',
    aetherSignature: 'AE-SN08-NOVA',
    level: 'specialist',
  },
]

const levelColors = {
  visionary: { bg: 'bg-[#FFBF00]/20', border: 'border-[#FFBF00]/50', text: 'text-[#FFBF00]' },
  senior: { bg: 'bg-[#008080]/20', border: 'border-[#008080]/50', text: 'text-[#008080]' },
  specialist: { bg: 'bg-[#00a0a0]/20', border: 'border-[#00a0a0]/50', text: 'text-[#00a0a0]' },
  analyst: { bg: 'bg-[#9370DB]/20', border: 'border-[#9370DB]/50', text: 'text-[#9370DB]' },
}

function generateAvatarPattern(id: string): string {
  // Generate a consistent pattern based on ID
  const hash = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
  const hue = (hash * 37) % 360
  return `linear-gradient(${hash % 180}deg, hsl(${hue}, 50%, 30%), hsl(${(hue + 60) % 360}, 50%, 20%))`
}

function MemberCard({ member, onClick }: { member: TeamMember; onClick: () => void }) {
  const colors = levelColors[member.level]
  
  return (
    <button
      onClick={onClick}
      className={`glass-card p-6 text-left transition-all duration-300 hover:-translate-y-2 hover:border-[#FFBF00]/50 hover:shadow-xl hover:shadow-[#008080]/30 group w-full`}
    >
      {/* Avatar */}
      <div 
        className="w-16 h-16 rounded-xl mb-4 flex items-center justify-center text-2xl font-bold text-[#F0F0F0] border border-[#008080]/30"
        style={{ background: generateAvatarPattern(member.id) }}
      >
        {member.name.split(' ').map(n => n[0]).join('')}
      </div>
      
      {/* Info */}
      <h3 className="text-xl font-semibold text-[#F0F0F0] mb-1 group-hover:text-[#008080] transition-colors">
        {member.name}
      </h3>
      <p className="text-[#A0A0A0] text-sm mb-3">{member.role}</p>
      
      {/* Badge */}
      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${colors.bg} ${colors.border} border`}>
        <Shield className={`w-4 h-4 ${colors.text}`} />
        <span className={`text-xs font-medium ${colors.text}`}>{member.specialty}</span>
      </div>
    </button>
  )
}

function AetherIDModal({ member, onClose }: { member: TeamMember; onClose: () => void }) {
  const colors = levelColors[member.level]
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#050505]/90 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-md glass-card border-[#008080]/50 overflow-hidden animate-in fade-in zoom-in duration-300">
        {/* Header Pattern */}
        <div 
          className="h-24 relative"
          style={{ background: generateAvatarPattern(member.id) }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg bg-[#050505]/50 text-[#F0F0F0] hover:bg-[#050505]/80 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6 -mt-8 relative">
          {/* Avatar */}
          <div 
            className="w-20 h-20 rounded-xl mb-4 flex items-center justify-center text-3xl font-bold text-[#F0F0F0] border-2 border-[#008080] shadow-lg"
            style={{ background: generateAvatarPattern(member.id) }}
          >
            {member.name.split(' ').map(n => n[0]).join('')}
          </div>
          
          <h2 className="text-2xl font-bold text-[#F0F0F0] mb-1">{member.name}</h2>
          <p className="text-[#008080] font-medium mb-4">{member.role}</p>
          
          {/* Details */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Award className="w-5 h-5 text-[#FFBF00] mt-0.5" />
              <div>
                <p className="text-xs text-[#A0A0A0] uppercase tracking-wider">Agentic Specialty</p>
                <p className="text-[#F0F0F0] font-medium">{member.specialty}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-[#008080] mt-0.5" />
              <div>
                <p className="text-xs text-[#A0A0A0] uppercase tracking-wider">Experience</p>
                <p className="text-[#F0F0F0] font-medium">{member.experience}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Fingerprint className="w-5 h-5 text-[#00a0a0] mt-0.5" />
              <div>
                <p className="text-xs text-[#A0A0A0] uppercase tracking-wider">Aether Signature</p>
                <p className="text-[#F0F0F0] font-mono font-medium tracking-wider">{member.aetherSignature}</p>
              </div>
            </div>
          </div>
          
          {/* Level Badge */}
          <div className={`mt-6 p-4 rounded-lg ${colors.bg} ${colors.border} border`}>
            <div className="flex items-center justify-between">
              <span className={`text-sm font-medium ${colors.text}`}>Clearance Level</span>
              <span className={`text-lg font-bold ${colors.text} uppercase`}>{member.level}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function TaskforcePage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  
  return (
    <div className="relative pt-24 pb-16">
      {/* Hero */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#008080]/10 border border-[#008080]/30 mb-6">
            <span className="text-[#008080] text-sm font-medium">The Taskforce</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-[#F0F0F0]">
            The <span className="text-[#008080]">Taskforce</span>
          </h1>
          <p className="text-lg text-[#A0A0A0] max-w-2xl mx-auto">
            Meet the architects behind the autonomous revolution. Each member brings specialized expertise in building the next generation of intelligent systems.
          </p>
        </div>
      </section>
      
      {/* Team Composition Summary */}
      <section className="px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Visionary', count: 1, color: levelColors.visionary },
                { label: 'Senior Developers', count: 3, color: levelColors.senior },
                { label: 'Strategists', count: 3, color: levelColors.specialist },
                { label: 'AI Analyst', count: 1, color: levelColors.analyst },
              ].map((item) => (
                <div key={item.label} className={`p-4 rounded-lg ${item.color.bg} ${item.color.border} border text-center`}>
                  <div className={`text-3xl font-bold ${item.color.text}`}>{item.count}</div>
                  <div className="text-[#A0A0A0] text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Command Grid */}
      <section className="px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <MemberCard
                key={member.id}
                member={member}
                onClick={() => setSelectedMember(member)}
              />
            ))}
            
            {/* Empty slot placeholder */}
            <div className="glass-card p-6 flex flex-col items-center justify-center text-center min-h-[200px] border-dashed opacity-50">
              <div className="w-16 h-16 rounded-xl bg-[#008080]/10 border border-[#008080]/30 mb-4 flex items-center justify-center">
                <span className="text-[#008080] text-2xl">+</span>
              </div>
              <p className="text-[#A0A0A0] text-sm">Position Open</p>
              <p className="text-[#A0A0A0] text-xs mt-1">Join the Taskforce</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Modal */}
      {selectedMember && (
        <AetherIDModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </div>
  )
}
