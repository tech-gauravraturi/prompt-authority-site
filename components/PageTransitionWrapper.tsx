"use client"

import { ReactNode } from 'react'
import { useCameraTransition } from '@/hooks/useCameraTransition'

interface PageTransitionWrapperProps {
  children: ReactNode
}

export default function PageTransitionWrapper({ children }: PageTransitionWrapperProps) {
  // This hook triggers camera transitions based on pathname
  useCameraTransition()
  
  return <>{children}</>
}
