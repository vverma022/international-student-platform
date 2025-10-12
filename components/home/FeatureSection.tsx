/**
 * Features Section Component with Framer Motion
 * 
 * Enhanced grid of feature cards with:
 * - Staggered animations for cards appearing in sequence
 * - Responsive grid layout (1 col mobile, 2 col tablet, 3 col desktop)
 * - Section header with fade-in animation
 * - Smooth scroll-triggered animations
 * 
 * Animation Strategy:
 * - Section header fades in first
 * - Cards appear in staggered sequence
 * - Uses IntersectionObserver via whileInView
 */

"use client"

import { Book, HelpCircle, LifeBuoy, FileText } from "lucide-react"
import { FeatureCard } from "./FeatureCards"
import { motion } from "framer-motion"

/**
 * Feature data configuration
 * Each feature includes icon, title, description, content, and navigation link
 */
const features = [
  {
    icon: <Book className="h-10 w-10 text-foreground" />,
    title: "Virtual Campus Tours",
    description: "Experience before arrival",
    content: "Immersive virtual tours of buildings and facilities, allowing you to familiarize yourself with the campus environment.",
    link: "/panorama",
    linkText: "Take a Tour"
  },
  {
    icon: <HelpCircle className="h-10 w-10 text-foreground" />,
    title: "Comprehensive FAQ",
    description: "Find answers instantly",
    content: "Extensive knowledge base with searchable questions and answers covering all aspects of international student life.",
    link: "/faq",
    linkText: "View FAQs"
  },
  {
    icon: <LifeBuoy className="h-10 w-10 text-foreground" />,
    title: "Specialized Support",
    description: "Help for unique situations",
    content: "Dedicated support service to assist students with non-standard situations and complex challenges.",
    link: "/support",
    linkText: "Get Support"
  },
  {
    icon: <FileText className="h-10 w-10 text-foreground" />,
    title: "Documentation Guides",
    description: "Step-by-step assistance",
    content: "Detailed instructions and checklists for obtaining required documents, certificates, and completing formalities.",
    link: "/documents",
    linkText: "View Guides"
  }
]

/**
 * Features Section Component
 * Displays all platform features in a responsive grid
 */
export function FeaturesSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-muted/50 relative overflow-hidden">
      {/* Subtle background pattern for depth */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section header with animation */}
        <motion.div 
          className="flex flex-col items-center justify-center space-y-6 text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="space-y-4">
            <motion.h2 
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-balance text-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Everything You Need
            </motion.h2>
            <motion.p 
              className="mx-auto max-w-[800px] text-muted-foreground md:text-xl lg:text-2xl font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Comprehensive tools and resources to make your transition to MUJ smooth and successful
            </motion.p>
          </div>
        </motion.div>

        {/* Feature cards grid with responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
