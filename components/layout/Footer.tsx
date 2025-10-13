"use client"

import Link from "next/link"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { LanguageSwitcher } from "@/components/LanguageSwitcher"


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const
    }
  }
}

export function Footer() {
  const params = useParams()
  const locale = params.locale as string
  const t = useTranslations('footer');

  const footerLinks = [
    { href: `/${locale}/terms`, label: t('terms') },
    { href: `/${locale}/privacy`, label: t('privacy') },
    { href: `/${locale}/contact`, label: t('contact') }
  ]

  return (
    <motion.footer 
      className="w-full border-t border-border bg-muted py-8 md:py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:justify-between">
          <motion.div 
            className="flex items-center gap-3"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Image 
                src="/logo.png" 
                alt="MUJ Logo" 
                width={40} 
                height={40}
                className="rounded-lg shadow-sm" 
              />
            </motion.div>
            <div>
              <p className="text-sm font-medium text-foreground">{t('university')}</p>
              <p className="text-xs text-muted-foreground">{t('platform')}</p>
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-wrap gap-4 md:gap-6 justify-center items-center"
            variants={itemVariants}
          >
            {footerLinks.map((link, index) => (
              <motion.div
                key={link.href}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Link 
                  href={link.href} 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium relative group"
                >
                  {link.label}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-0.5 bg-primary"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              </motion.div>
            ))}
            <div className="border-l border-border pl-4 md:pl-6">
              <LanguageSwitcher />
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-border text-center"
          variants={itemVariants}
        >
          <p className="text-xs md:text-sm text-muted-foreground">
            © {new Date().getFullYear()} {t('copyright')}
          </p>
        </motion.div>
      </div>
    </motion.footer>
  )
}
