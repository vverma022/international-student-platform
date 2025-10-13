"use client"

import { useTranslations } from "next-intl"
import { Book, HelpCircle, LifeBuoy, FileText } from "lucide-react"
import { FeatureCard } from "./FeatureCards"
import { motion } from "framer-motion"

export function FeaturesSection() {
  const t = useTranslations('features');
  const features = [
    {
      icon: <Book className="h-10 w-10 text-foreground" />,
      title: t('virtualTours.title'),
      description: t('virtualTours.description'),
      content: t('virtualTours.content'),
      link: "/panorama",
      linkText: t('virtualTours.linkText')
    },
    {
      icon: <HelpCircle className="h-10 w-10 text-foreground" />,
      title: t('faq.title'),
      description: t('faq.description'),
      content: t('faq.content'),
      link: "/faq",
      linkText: t('faq.linkText')
    },
    {
      icon: <LifeBuoy className="h-10 w-10 text-foreground" />,
      title: t('support.title'),
      description: t('support.description'),
      content: t('support.content'),
      link: "/support",
      linkText: t('support.linkText')
    },
    {
      icon: <FileText className="h-10 w-10 text-foreground" />,
      title: t('documents.title'),
      description: t('documents.description'),
      content: t('documents.content'),
      link: "/documents",
      linkText: t('documents.linkText')
    }
  ];
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-muted/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
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
              {t('sectionTitle')}
            </motion.h2>
            <motion.p 
              className="mx-auto max-w-[800px] text-muted-foreground md:text-xl lg:text-2xl font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t('sectionDescription')}
            </motion.p>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
