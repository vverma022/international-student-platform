/**
 * Home Page
 * 
 * Main landing page for the MUJ International Student Platform.
 * Uses organized component structure for better maintainability.
 * 
 * Components:
 * - HeroSection: Main welcome section with modern design
 * - FeaturesSection: Platform features grid
 * 
 * Note: Header and Footer are in the root layout (layout.tsx)
 */

import type { Metadata } from 'next'
import { HeroSection } from "@/components/home/HeroSection"
import { FeaturesSection } from "@/components/home/FeatureSection"

/**
 * Page metadata for SEO and social sharing
 * Overrides default metadata from layout.tsx
 */
export const metadata: Metadata = {
  title: 'MUJ International - Your Gateway to Student Success',
  description: 'Navigate your international student journey at Manipal University Jaipur with confidence. Access campus maps, virtual tours, FAQs, and essential support services.',
  keywords: ['Manipal University Jaipur', 'MUJ', 'international students', 'campus resources', 'student platform'],
  openGraph: {
    title: 'MUJ International Student Platform',
    description: 'Everything you need for your journey at Manipal University Jaipur',
    type: 'website',
  },
}

/**
 * Home page component
 * Renders the complete landing page with all sections
 */
export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
    </>
  )
}
