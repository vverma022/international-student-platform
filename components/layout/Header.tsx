"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname, useParams } from "next/navigation"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"


const menuVariants = {
  closed: {
    x: "100%",
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 40
    }
  },
  open: {
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 40
    }
  }
}

const menuItemVariants = {
  closed: { opacity: 0, x: 20 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4
    }
  })
}

export function Header() {
  const pathname = usePathname()
  const params = useParams()
  const locale = params.locale as string
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const t = useTranslations('header');

  const navigationLinks = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/panorama`, label: t('virtualTours') },
    { href: `/${locale}/faq`, label: t('faq') },
    { href: `/${locale}/support`, label: t('support') },
    { href: `/${locale}/documents`, label: t('documents') }
  ]

  const isActive = (href: string) => {
    if (href === `/${locale}`) return pathname === `/${locale}`
    return pathname.startsWith(href)
  }

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.header 
        className="sticky top-0 z-50 w-full border-b border-border/20 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 shadow-lg"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4 md:px-6">
          <Link href={`/${locale}`} className="flex items-center gap-2 md:gap-3 group">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Image 
                src="/logo.png" 
                alt="MUJ Logo" 
                width={50} 
                height={50}
                className="w-10 h-10 md:w-[60px] md:h-[60px] transition-transform duration-200" 
              />
            </motion.div>
            <span className="text-lg md:text-2xl font-semibold text-foreground tracking-tight">
              {t('branding')}
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navigationLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm lg:text-base font-medium transition-all duration-200 ease-in-out relative group",
                    isActive(link.href)
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                  <motion.span 
                    className="absolute -bottom-1 left-0 h-0.5 bg-primary"
                    initial={{ width: isActive(link.href) ? "100%" : 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button 
              variant="ghost" 
              size="icon"
              className="md:hidden"
              aria-label="Menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </motion.div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              className="fixed top-16 right-0 bottom-0 w-[280px] bg-background border-l border-border shadow-2xl z-50 md:hidden overflow-y-auto"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <nav className="flex flex-col p-6 space-y-2">
                {navigationLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    custom={index}
                    variants={menuItemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    <Link
                      href={link.href}
                      onClick={handleLinkClick}
                      className={cn(
                        "flex items-center px-4 py-3 rounded-lg font-medium transition-all duration-200",
                        isActive(link.href)
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "text-foreground hover:bg-accent"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-6 border-t border-border bg-muted/30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-sm text-muted-foreground text-center">
                  © {new Date().getFullYear()} {t('branding')}
                </p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
