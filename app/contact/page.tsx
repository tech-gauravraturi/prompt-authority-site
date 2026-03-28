"use client"

import { useState } from 'react'
import { Send, CheckCircle2, MapPin, Mail, Phone } from 'lucide-react'

const projectScopes = [
  { value: '', label: 'Select Project Scope' },
  { value: 'agentic-workforce', label: 'Agentic Workforce' },
  { value: 'vibe-coded', label: 'Vibe-Coded Solution' },
  { value: 'consultation', label: 'Strategic Consultation' },
  { value: 'custom', label: 'Custom Project' },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    agency: '',
    email: '',
    scope: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }
  
  if (isSubmitted) {
    return (
      <div className="relative pt-24 pb-16 min-h-screen flex items-center justify-center px-4">
        <div className="glass-card p-8 md:p-12 max-w-md text-center border-[#008080]/50">
          <div className="w-20 h-20 rounded-full bg-[#008080]/20 flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
            <CheckCircle2 className="w-10 h-10 text-[#008080]" />
          </div>
          <h2 className="text-2xl font-bold text-[#F0F0F0] mb-4">
            Transmission Received
          </h2>
          <p className="text-[#A0A0A0] mb-6">
            Your request has been logged in our system. An architect will establish contact within 24 hours.
          </p>
          <div className="p-4 rounded-lg bg-[#008080]/10 border border-[#008080]/30">
            <p className="text-[#008080] text-sm font-mono">
              Reference: AE-{Date.now().toString(36).toUpperCase()}
            </p>
          </div>
        </div>
      </div>
    )
  }
  
  return (
    <div className="relative pt-24 pb-16">
      {/* Hero */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#008080]/10 border border-[#008080]/30 mb-6">
            <span className="text-[#008080] text-sm font-medium">Command Access</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-[#F0F0F0]">
            Initialize <span className="text-[#008080]">Contact</span>
          </h1>
          <p className="text-lg text-[#A0A0A0] max-w-2xl mx-auto">
            Ready to architect your autonomous future? Complete the form below to establish a secure channel with our team.
          </p>
        </div>
      </section>
      
      {/* Form Section */}
      <section className="px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="glass-card p-6 sticky top-24">
                <h3 className="text-xl font-semibold text-[#F0F0F0] mb-6">Direct Channels</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#008080]/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#008080]" />
                    </div>
                    <div>
                      <p className="text-[#A0A0A0] text-sm mb-1">Headquarters</p>
                      <p className="text-[#F0F0F0]">San Francisco, CA</p>
                      <p className="text-[#A0A0A0] text-sm">Distributed Operations Worldwide</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#008080]/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#008080]" />
                    </div>
                    <div>
                      <p className="text-[#A0A0A0] text-sm mb-1">Email</p>
                      <p className="text-[#F0F0F0]">architects@promptauthority.ai</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#008080]/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[#008080]" />
                    </div>
                    <div>
                      <p className="text-[#A0A0A0] text-sm mb-1">Response Time</p>
                      <p className="text-[#F0F0F0]">Within 24 hours</p>
                      <p className="text-[#A0A0A0] text-sm">Priority requests expedited</p>
                    </div>
                  </div>
                </div>
                
                {/* Status indicator */}
                <div className="mt-8 p-4 rounded-lg bg-[#008080]/10 border border-[#008080]/30">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#008080] animate-pulse" />
                    <span className="text-[#008080] text-sm font-medium">Systems Online</span>
                  </div>
                  <p className="text-[#A0A0A0] text-xs mt-2">All architects available for consultation</p>
                </div>
              </div>
            </div>
            
            {/* Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 border-[#008080]/30">
                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#F0F0F0] mb-2">
                      Full Name <span className="text-[#008080]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 bg-[#0a0a0a] border rounded-lg text-[#F0F0F0] placeholder-[#A0A0A0]/50 outline-none transition-all duration-300 ${
                        focusedField === 'name' 
                          ? 'border-[#008080] shadow-[0_0_10px_rgba(0,128,128,0.3)]' 
                          : 'border-[#008080]/30 hover:border-[#008080]/50'
                      }`}
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  {/* Agency */}
                  <div>
                    <label htmlFor="agency" className="block text-sm font-medium text-[#F0F0F0] mb-2">
                      Organization / Agency
                    </label>
                    <input
                      type="text"
                      id="agency"
                      name="agency"
                      value={formData.agency}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('agency')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 bg-[#0a0a0a] border rounded-lg text-[#F0F0F0] placeholder-[#A0A0A0]/50 outline-none transition-all duration-300 ${
                        focusedField === 'agency' 
                          ? 'border-[#008080] shadow-[0_0_10px_rgba(0,128,128,0.3)]' 
                          : 'border-[#008080]/30 hover:border-[#008080]/50'
                      }`}
                      placeholder="Your organization name"
                    />
                  </div>
                  
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#F0F0F0] mb-2">
                      Email Address <span className="text-[#008080]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 bg-[#0a0a0a] border rounded-lg text-[#F0F0F0] placeholder-[#A0A0A0]/50 outline-none transition-all duration-300 ${
                        focusedField === 'email' 
                          ? 'border-[#008080] shadow-[0_0_10px_rgba(0,128,128,0.3)]' 
                          : 'border-[#008080]/30 hover:border-[#008080]/50'
                      }`}
                      placeholder="you@example.com"
                    />
                  </div>
                  
                  {/* Project Scope */}
                  <div>
                    <label htmlFor="scope" className="block text-sm font-medium text-[#F0F0F0] mb-2">
                      Project Scope <span className="text-[#008080]">*</span>
                    </label>
                    <select
                      id="scope"
                      name="scope"
                      required
                      value={formData.scope}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('scope')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 bg-[#0a0a0a] border rounded-lg text-[#F0F0F0] outline-none transition-all duration-300 ${
                        focusedField === 'scope' 
                          ? 'border-[#008080] shadow-[0_0_10px_rgba(0,128,128,0.3)]' 
                          : 'border-[#008080]/30 hover:border-[#008080]/50'
                      }`}
                    >
                      {projectScopes.map(option => (
                        <option key={option.value} value={option.value} className="bg-[#0a0a0a]">
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#F0F0F0] mb-2">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 bg-[#0a0a0a] border rounded-lg text-[#F0F0F0] placeholder-[#A0A0A0]/50 outline-none transition-all duration-300 resize-none ${
                        focusedField === 'message' 
                          ? 'border-[#008080] shadow-[0_0_10px_rgba(0,128,128,0.3)]' 
                          : 'border-[#008080]/30 hover:border-[#008080]/50'
                      }`}
                      placeholder="Describe your project requirements, timeline, and any specific challenges you're facing..."
                    />
                  </div>
                  
                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#008080] text-[#F0F0F0] font-semibold rounded-lg transition-all duration-300 ${
                      isSubmitting 
                        ? 'opacity-70 cursor-not-allowed' 
                        : 'hover:bg-[#008080]/80 hover:glow-teal'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-[#F0F0F0]/30 border-t-[#F0F0F0] rounded-full animate-spin" />
                        Transmitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Initialize Contact Protocol
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
