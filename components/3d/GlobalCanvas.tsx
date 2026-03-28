"use client"

import { useEffect, useRef, useState } from 'react'
import { useCameraStore } from '@/stores/cameraStore'

interface Star {
  x: number
  y: number
  z: number
  size: number
  opacity: number
}

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
}

const DEFAULT_POSITION: [number, number, number] = [0, 2, 8]

export default function GlobalCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)
  const cameraPosition = useCameraStore((state) => state.cameraPosition)
  const position = Array.isArray(cameraPosition) && cameraPosition.length >= 3 
    ? cameraPosition 
    : DEFAULT_POSITION
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  useEffect(() => {
    if (!mounted) return
    
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    // Set canvas size
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)
    
    // Generate stars
    const stars: Star[] = Array.from({ length: 200 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random() * 3 + 1,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.8 + 0.2,
    }))
    
    // Generate particles around the core
    const particles: Particle[] = Array.from({ length: 60 }, () => {
      const angle = Math.random() * Math.PI * 2
      const radius = Math.random() * 120 + 60
      return {
        x: canvas.width / 2 + Math.cos(angle) * radius,
        y: canvas.height / 2 + Math.sin(angle) * radius,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.6 + 0.2,
        color: Math.random() > 0.5 ? '#008080' : '#FFBF00',
      }
    })
    
    let time = 0
    let coreScale = 1
    const safeZ = position?.[2] ?? 8
    const targetScale = safeZ > 10 ? 0.6 : safeZ > 5 ? 1 : 1.2
    
    const animate = () => {
      time += 0.01
      coreScale += (targetScale - coreScale) * 0.02
      
      // Clear with trail effect
      ctx.fillStyle = 'rgba(5, 5, 5, 0.15)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Draw stars with parallax
      const posX = position?.[0] ?? 0
      const posY = position?.[1] ?? 2
      stars.forEach((star) => {
        const parallaxX = (posX * 5) / star.z
        const parallaxY = (posY * 5) / star.z
        
        const x = ((star.x - parallaxX) % canvas.width + canvas.width) % canvas.width
        const y = ((star.y - parallaxY) % canvas.height + canvas.height) % canvas.height
        
        const twinkle = Math.sin(time * 2 + star.x) * 0.3 + 0.7
        
        ctx.beginPath()
        ctx.arc(x, y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * twinkle})`
        ctx.fill()
      })
      
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      
      // Draw outer glow rings
      for (let i = 3; i >= 0; i--) {
        const ringRadius = (80 + i * 30) * coreScale
        const ringOpacity = 0.1 - i * 0.02
        const rotation = time * (0.2 + i * 0.1) * (i % 2 === 0 ? 1 : -1)
        
        ctx.beginPath()
        ctx.ellipse(
          centerX,
          centerY,
          ringRadius,
          ringRadius * 0.3,
          rotation,
          0,
          Math.PI * 2
        )
        ctx.strokeStyle = `rgba(0, 128, 128, ${ringOpacity})`
        ctx.lineWidth = 2
        ctx.stroke()
      }
      
      // Draw core gradient
      const coreRadius = 50 * coreScale
      const gradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, coreRadius * 2
      )
      gradient.addColorStop(0, 'rgba(0, 128, 128, 0.8)')
      gradient.addColorStop(0.3, 'rgba(0, 128, 128, 0.4)')
      gradient.addColorStop(0.6, 'rgba(255, 191, 0, 0.2)')
      gradient.addColorStop(1, 'rgba(5, 5, 5, 0)')
      
      ctx.beginPath()
      ctx.arc(centerX, centerY, coreRadius * 2, 0, Math.PI * 2)
      ctx.fillStyle = gradient
      ctx.fill()
      
      // Draw pulsing core
      const pulse = Math.sin(time * 2) * 0.2 + 1
      ctx.beginPath()
      ctx.arc(centerX, centerY, coreRadius * pulse, 0, Math.PI * 2)
      const coreGradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, coreRadius * pulse
      )
      coreGradient.addColorStop(0, 'rgba(255, 255, 255, 0.9)')
      coreGradient.addColorStop(0.2, 'rgba(0, 200, 200, 0.7)')
      coreGradient.addColorStop(0.5, 'rgba(0, 128, 128, 0.5)')
      coreGradient.addColorStop(1, 'rgba(0, 128, 128, 0)')
      ctx.fillStyle = coreGradient
      ctx.fill()
      
      // Draw inner structure
      for (let i = 0; i < 6; i++) {
        const angle = (time * 0.5) + (i * Math.PI / 3)
        const innerRadius = 20 * coreScale
        const x = centerX + Math.cos(angle) * innerRadius
        const y = centerY + Math.sin(angle) * innerRadius
        
        ctx.beginPath()
        ctx.arc(x, y, 4 * coreScale, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 191, 0, ${0.6 + Math.sin(time * 3 + i) * 0.3})`
        ctx.fill()
      }
      
      // Update and draw particles
      particles.forEach((p) => {
        // Orbit around center
        const dx = p.x - centerX
        const dy = p.y - centerY
        const dist = Math.sqrt(dx * dx + dy * dy)
        const angle = Math.atan2(dy, dx)
        
        // Add orbital motion
        const orbitSpeed = 0.002 / (dist / 100)
        const newAngle = angle + orbitSpeed
        
        p.x = centerX + Math.cos(newAngle) * dist + p.vx
        p.y = centerY + Math.sin(newAngle) * dist + p.vy
        
        // Keep particles in bounds around core
        if (dist > 200) {
          p.x = centerX + Math.cos(angle) * 60
          p.y = centerY + Math.sin(angle) * 60
        }
        if (dist < 40) {
          p.x = centerX + Math.cos(angle) * 100
          p.y = centerY + Math.sin(angle) * 100
        }
        
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * coreScale, 0, Math.PI * 2)
        ctx.fillStyle = p.color.replace(')', `, ${p.opacity})`).replace('rgb', 'rgba')
        ctx.fill()
        
        // Draw connection lines to nearby particles
        particles.forEach((other) => {
          const odx = p.x - other.x
          const ody = p.y - other.y
          const odist = Math.sqrt(odx * odx + ody * ody)
          if (odist < 50 && odist > 0) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = `rgba(0, 128, 128, ${0.1 * (1 - odist / 50)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })
      
      animationRef.current = requestAnimationFrame(animate)
    }
    
    animate()
    
    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationRef.current)
    }
  }, [mounted, position])
  
  if (!mounted) {
    return (
      <div className="canvas-container flex items-center justify-center">
        <div className="w-16 h-16 border-2 border-[#008080] border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }
  
  return (
    <div className="canvas-container">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ background: '#050505' }}
      />
    </div>
  )
}
