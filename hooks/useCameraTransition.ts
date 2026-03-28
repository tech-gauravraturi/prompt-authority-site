"use client"

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useCameraStore, PageKey } from '@/stores/cameraStore'

const pathToPage: Record<string, PageKey> = {
  '/': 'home',
  '/services': 'services',
  '/taskforce': 'taskforce',
  '/aether-mind': 'aether-mind',
  '/contact': 'contact',
}

export function useCameraTransition() {
  const pathname = usePathname()
  const setPage = useCameraStore((state) => state.setPage)
  const currentPage = useCameraStore((state) => state.currentPage)
  
  useEffect(() => {
    const page = pathToPage[pathname] || 'home'
    if (page !== currentPage) {
      setPage(page)
    }
  }, [pathname, currentPage, setPage])
  
  return currentPage
}
