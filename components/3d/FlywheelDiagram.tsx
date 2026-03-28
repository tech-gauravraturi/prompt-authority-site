"use client"

import { useState } from 'react'

interface FlywheelSegmentProps {
  label: string
  angle: number
  index: number
  isHovered: boolean
  onHover: (hovered: boolean) => void
}

function FlywheelSegment({ label, angle, index, isHovered, onHover }: FlywheelSegmentProps) {
  const radius = 120
  const x = Math.cos(angle) * radius
  const y = Math.sin(angle) * radius
  
  return (
    <div
      className="absolute transition-all duration-300 cursor-pointer"
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        transform: `translate(-50%, -50%) rotate(${angle * (180 / Math.PI) + 90}deg) scale(${isHovered ? 1.1 : 1})`,
      }}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      <div
        className={`
          px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap
          transition-all duration-300 backdrop-blur-sm
          ${isHovered 
            ? 'bg-[#FFBF00]/90 text-[#050505] shadow-lg shadow-[#FFBF00]/30' 
            : 'bg-[#008080]/80 text-[#F0F0F0] border border-[#008080]/50'
          }
        `}
        style={{
          transform: `rotate(${-(angle * (180 / Math.PI) + 90)}deg)`,
        }}
      >
        {label}
      </div>
    </div>
  )
}

export default function FlywheelDiagram() {
  const [hoveredSegment, setHoveredSegment] = useState<number | null>(null)
  const [isAnimating, setIsAnimating] = useState(true)
  
  const segments = [
    'Vibe Coding',
    'Agentic Ops',
    'Brain Replication',
    'Governance',
  ]
  
  return (
    <div 
      className="relative w-[300px] h-[300px]"
      onMouseEnter={() => setIsAnimating(false)}
      onMouseLeave={() => setIsAnimating(true)}
    >
      {/* Rotating container */}
      <div 
        className={`absolute inset-0 ${isAnimating ? 'animate-[spin_20s_linear_infinite]' : ''}`}
        style={{ animationPlayState: isAnimating ? 'running' : 'paused' }}
      >
        {/* Central ring */}
        <div 
          className="absolute inset-[25%] rounded-full border-2 border-[#008080]/60"
          style={{
            boxShadow: '0 0 20px rgba(0, 128, 128, 0.4), inset 0 0 20px rgba(0, 128, 128, 0.2)',
          }}
        />
        
        {/* Outer ring */}
        <div 
          className="absolute inset-[10%] rounded-full border border-[#008080]/30"
        />
        
        {/* Connecting lines to center */}
        {segments.map((_, index) => {
          const angle = (index / segments.length) * Math.PI * 2 - Math.PI / 2
          return (
            <div
              key={`line-${index}`}
              className="absolute w-[60px] h-[2px] bg-gradient-to-r from-[#008080]/50 to-[#008080]/20"
              style={{
                left: '50%',
                top: '50%',
                transformOrigin: 'left center',
                transform: `rotate(${angle * (180 / Math.PI)}deg)`,
              }}
            />
          )
        })}
        
        {/* Segments */}
        {segments.map((label, index) => {
          const angle = (index / segments.length) * Math.PI * 2 - Math.PI / 2
          return (
            <FlywheelSegment
              key={label}
              label={label}
              angle={angle}
              index={index}
              isHovered={hoveredSegment === index}
              onHover={(hovered) => setHoveredSegment(hovered ? index : null)}
            />
          )
        })}
        
        {/* Center dot */}
        <div 
          className="absolute left-1/2 top-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#008080]"
          style={{
            boxShadow: '0 0 15px rgba(0, 128, 128, 0.8), 0 0 30px rgba(0, 128, 128, 0.4)',
          }}
        />
      </div>
    </div>
  )
}
