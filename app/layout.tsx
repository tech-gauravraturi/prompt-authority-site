import type { Metadata, Viewport } from 'next'
import { Inter, Syne, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import ClientCanvasWrapper from '@/components/ClientCanvasWrapper'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageTransitionWrapper from '@/components/PageTransitionWrapper'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'The Prompt Authority | Architects of the Autonomous Agency',
  description: 'We don\'t just prompt. We replicate human intelligence. The Prompt Authority: Architects of the Autonomous Agency delivering AI Receptionists, Agentic Operations, and Vibe-Coded Solutions.',
  keywords: ['AI', 'Autonomous Agency', 'Prompt Engineering', 'Agentic Operations', 'Vibe Coding', 'Brain Replication'],
  authors: [{ name: 'The Prompt Authority' }],
  openGraph: {
    title: 'The Prompt Authority | Architects of the Autonomous Agency',
    description: 'We don\'t just prompt. We replicate human intelligence.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#008080',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-[#050505] text-[#F0F0F0] overflow-x-hidden">
        {/* Persistent 3D Canvas - mounts once, never unmounts */}
        <ClientCanvasWrapper />
        
        {/* Header */}
        <Header />
        
        {/* Main Content */}
        <PageTransitionWrapper>
          <main className="page-content min-h-screen">
            {children}
          </main>
        </PageTransitionWrapper>
        
        {/* Footer */}
        <Footer />
        
        <Analytics />
      </body>
    </html>
  )
}
