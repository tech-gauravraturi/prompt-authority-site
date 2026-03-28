"use client"

import { create } from 'zustand'

export type PageKey = 'home' | 'services' | 'taskforce' | 'aether-mind' | 'contact'

interface CameraState {
  cameraPosition: [number, number, number]
  cameraTarget: [number, number, number]
  corePosition: [number, number, number]
  coreScale: number
  currentPage: PageKey
  isTransitioning: boolean
}

interface CameraActions {
  setPage: (page: PageKey) => void
  setTransitioning: (transitioning: boolean) => void
}

// Camera configurations per page
const pageConfigs: Record<PageKey, Omit<CameraState, 'currentPage' | 'isTransitioning'>> = {
  home: {
    cameraPosition: [0, 2, 8],
    cameraTarget: [0, 0, 0],
    corePosition: [0, 0, 0],
    coreScale: 1,
  },
  services: {
    cameraPosition: [3, 2, 7],
    cameraTarget: [2, 1, 0],
    corePosition: [4, 3, -2],
    coreScale: 0.6,
  },
  taskforce: {
    cameraPosition: [-3, 2, 7],
    cameraTarget: [-2, 1, 0],
    corePosition: [-4, 3, -2],
    coreScale: 0.6,
  },
  'aether-mind': {
    cameraPosition: [0, 1, 4],
    cameraTarget: [0, 0, 0],
    corePosition: [0, 0, 0],
    coreScale: 1.5,
  },
  contact: {
    cameraPosition: [0, 3, 10],
    cameraTarget: [0, 0, 0],
    corePosition: [3, -2, -3],
    coreScale: 0.4,
  },
}

export const useCameraStore = create<CameraState & CameraActions>((set) => ({
  ...pageConfigs.home,
  currentPage: 'home',
  isTransitioning: false,
  
  setPage: (page: PageKey) => {
    const config = pageConfigs[page]
    set({
      ...config,
      currentPage: page,
      isTransitioning: true,
    })
    // Auto-reset transitioning after animation completes
    setTimeout(() => {
      set({ isTransitioning: false })
    }, 1200)
  },
  
  setTransitioning: (transitioning: boolean) => set({ isTransitioning: transitioning }),
}))
