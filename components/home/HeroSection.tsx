"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8 }
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" }
}

export function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden bg-background">
      <motion.div 
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-40 -translate-y-1/2 translate-x-1/4"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl opacity-40 translate-y-1/2 -translate-x-1/4"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.5, 0.4],
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col items-center justify-center min-h-[90vh] text-center">
        <motion.div
          {...scaleIn}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Badge 
            variant="secondary" 
            className="mb-8 px-5 py-2.5 text-sm gap-2 shadow-[0_4px_20px_-4px] shadow-primary/20"
          >
            <Sparkles className="w-4 h-4" />
            <span>{t('badge')}</span>
          </Badge>
        </motion.div>

        <motion.h1 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]"
          {...fadeInUp}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          {t('title')}
          <motion.span 
            className="block mt-2 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            {t('titleHighlight')}
          </motion.span>
        </motion.h1>

        <motion.p 
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed font-light"
          {...fadeInUp}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          {t('description')}
          <span className="block mt-2">{t('descriptionSecondary')}</span>
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0"
          {...fadeInUp}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto"
          >
            <Button 
              asChild 
              size="lg" 
              className="group w-full shadow-[0_8px_30px_-6px] shadow-primary/30 hover:shadow-primary/40 transition-shadow duration-300"
            >
              <Link href="/panorama" className="flex items-center justify-center gap-2">
                {t('ctaVirtualTours')}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto"
          >
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="group w-full shadow-[0_8px_30px_-6px] shadow-black/10 hover:shadow-black/20 transition-shadow duration-300"
            >
              <Link href="/faq" className="flex items-center justify-center gap-2">
                {t('ctaFaq')}
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
