import type { Metadata } from 'next'
import './globals.css'

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-background font-geist antialiased">
        {children}
      </body>
    </html>
  )
}
