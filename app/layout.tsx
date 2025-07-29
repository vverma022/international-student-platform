import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MUJ International - International Student Platform',
  description: 'Your comprehensive guide to navigating life as an international student at Manipal University Jaipur',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
