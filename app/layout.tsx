/**
 * Root Layout Component
 * 
 * Wraps all pages with:
 * - Global metadata for SEO and social sharing
 * - Persistent header (navigation) and footer
 * - Global styles and font configuration
 * 
 * Layout Structure:
 * - Header: Fixed glass-style navbar with active route tracking
 * - Main: Page content (children)
 * - Footer: Site footer with links and branding
 */

import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

/**
 * Global metadata configuration
 * Applied to all pages unless overridden
 */
export const metadata: Metadata = {
  title: 'MUJ International - International Student Platform',
  description: 'Your comprehensive guide to navigating life as an international student at Manipal University Jaipur. Access campus maps, virtual tours, FAQs, and essential resources.',
  keywords: 'Manipal University Jaipur, international students, campus map, virtual tours, student support, MUJ',
  authors: [{ name: 'MUJ International Team' }],
  generator: 'Next.js',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'MUJ International - International Student Platform',
    description: 'Your comprehensive guide to navigating life as an international student at Manipal University Jaipur',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MUJ International - International Student Platform',
    description: 'Your comprehensive guide to navigating life as an international student at Manipal University Jaipur',
  },
}

/**
 * Root layout component
 * Provides consistent structure across all pages
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth font-sans">
      <body className="min-h-screen bg-background font-sans antialiased">
        {/* Flex container to ensure footer stays at bottom */}
        <div className="flex min-h-screen flex-col">
          {/* Global header - appears on all pages */}
          <Header />
          
          {/* Main content area - grows to fill available space */}
          <main className="flex-1">
            {children}
          </main>

          {/* Global footer - appears on all pages */}
          <Footer />
        </div>
      </body>
    </html>
  )
}
