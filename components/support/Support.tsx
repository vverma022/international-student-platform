/**
 * Support Component with Framer Motion
 * 
 * Enhanced support page with:
 * - Smooth animations for all elements
 * - Support request form with validation
 * - Contact information cards with hover effects
 * - Case tracking with status badges
 * - Tabbed interface for organization
 * - Fully responsive design
 * 
 * Animation Strategy:
 * - Stagger animations for cards
 * - Smooth tab transitions
 * - Interactive hover effects
 * - Form feedback animations
 */

"use client"

import type React from "react"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { LifeBuoy, MessageSquare, Phone, Mail, Clock, CheckCircle2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

/**
 * Animation variants for stagger effects
 */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function Support() {
  const t = useTranslations('support')
  const [supportCategory, setSupportCategory] = useState("visa")
  const [supportMessage, setSupportMessage] = useState("")
  const [supportEmail, setSupportEmail] = useState("")
  const [supportSubmitted, setSupportSubmitted] = useState(false)

  const handleSubmitSupport = (e: React.FormEvent) => {
    e.preventDefault()
    if (supportMessage && supportEmail) {
      // In a real app, this would send the support request to a backend
      setSupportSubmitted(true)
      setTimeout(() => {
        setSupportSubmitted(false)
        setSupportMessage("")
        setSupportEmail("")
      }, 3000)
    }
  }

  const supportCategories = [
    { id: "visa", name: t('categories.visa'), icon: <LifeBuoy className="h-4 w-4 md:h-5 md:w-5" /> },
    { id: "academic", name: t('categories.academic'), icon: <MessageSquare className="h-4 w-4 md:h-5 md:w-5" /> },
    { id: "accommodation", name: t('categories.accommodation'), icon: <MessageSquare className="h-4 w-4 md:h-5 md:w-5" /> },
    { id: "financial", name: t('categories.financial'), icon: <MessageSquare className="h-4 w-4 md:h-5 md:w-5" /> },
    { id: "health", name: t('categories.health'), icon: <MessageSquare className="h-4 w-4 md:h-5 md:w-5" /> },
    { id: "cultural", name: t('categories.cultural'), icon: <MessageSquare className="h-4 w-4 md:h-5 md:w-5" /> },
    { id: "other", name: t('categories.other'), icon: <MessageSquare className="h-4 w-4 md:h-5 md:w-5" /> },
  ]

  const supportContacts = [
    {
      id: "admissions-office",
      title: t('contacts.admissions.title'),
      description: t('contacts.admissions.description'),
      email: t('contacts.admissions.email'),
      phone: t('contacts.admissions.phone'),
      hours: t('contacts.admissions.hours'),
    },
    {
      id: "chief-warden-office",
      title: t('contacts.warden.title'),
      description: t('contacts.warden.description'),
      email: t('contacts.warden.email'),
      phone: t('contacts.warden.phone'),
      hours: t('contacts.warden.hours'),
    },
    {
      id: "finance",
      title: t('contacts.finance.title'),
      description: t('contacts.finance.description'),
      email: t('contacts.finance.email'),
      phone: t('contacts.finance.phone'),
      hours: t('contacts.finance.hours'),
    },
    {
      id: "doic",
      title: t('contacts.doic.title'),
      description: t('contacts.doic.description'),
      email: t('contacts.doic.email'),
      phone: t('contacts.doic.phone'),
      hours: t('contacts.doic.hours'),
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-10 max-w-7xl">
        {/* Header with animation */}
        <motion.div 
          className="mb-6 md:mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-foreground">{t('title')}</h1>
          <p className="text-sm md:text-base text-muted-foreground">{t('subtitle')}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Tabs defaultValue="request" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-2 mx-auto h-auto">
              <TabsTrigger value="request" className="text-xs md:text-sm py-2">{t('tabs.request')}</TabsTrigger>
              <TabsTrigger value="contacts" className="text-xs md:text-sm py-2">{t('tabs.contacts')}</TabsTrigger>
            </TabsList>

            <TabsContent value="request" className="mt-6">
              <motion.div 
                className="grid lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={itemVariants} className="lg:col-span-1">
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-lg md:text-xl">{t('form.categoryTitle')}</CardTitle>
                      <CardDescription className="text-xs md:text-sm">{t('form.categoryDescription')}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {supportCategories.map((category) => (
                          <motion.div
                            key={category.id}
                            whileHover={{ x: 4 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Button
                              variant={supportCategory === category.id ? "default" : "outline"}
                              className="w-full justify-start h-auto py-2.5 text-xs md:text-sm"
                              onClick={() => setSupportCategory(category.id)}
                            >
                              <div className="flex items-center gap-2">
                                {category.icon}
                                <span className="truncate">{category.name}</span>
                              </div>
                            </Button>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={itemVariants} className="lg:col-span-2">
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-lg md:text-xl">{t('form.submitTitle')}</CardTitle>
                      <CardDescription className="text-xs md:text-sm">{t('form.submitDescription')}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmitSupport} className="space-y-4">
                        <div className="space-y-2">
                          <label htmlFor="category" className="text-xs md:text-sm font-medium text-foreground">
                            {t('form.categoryLabel')}
                          </label>
                          <Select value={supportCategory} onValueChange={setSupportCategory}>
                            <SelectTrigger className="h-10 md:h-11">
                              <SelectValue placeholder={t('form.categoryPlaceholder')} />
                            </SelectTrigger>
                            <SelectContent>
                              {supportCategories.map((category) => (
                                <SelectItem key={category.id} value={category.id}>
                                  {category.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="email" className="text-xs md:text-sm font-medium text-foreground">
                            {t('form.emailLabel')}
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder={t('form.emailPlaceholder')}
                            value={supportEmail}
                            onChange={(e) => setSupportEmail(e.target.value)}
                            required
                            className="h-10 md:h-11"
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="message" className="text-xs md:text-sm font-medium text-foreground">
                            {t('form.messageLabel')}
                          </label>
                          <Textarea
                            id="message"
                            placeholder={t('form.messagePlaceholder')}
                            rows={5}
                            value={supportMessage}
                            onChange={(e) => setSupportMessage(e.target.value)}
                            required
                            className="resize-none"
                          />
                        </div>

                        <div className="flex justify-end">
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button type="submit" disabled={supportSubmitted} className="shadow-lg shadow-primary/20">
                              <AnimatePresence mode="wait">
                                {supportSubmitted ? (
                                  <motion.span 
                                    key="submitted"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    className="flex items-center gap-2"
                                  >
                                    <CheckCircle2 className="h-4 w-4" />
                                    {t('form.submittedButton')}
                                  </motion.span>
                                ) : (
                                  <motion.span
                                    key="submit"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                  >
                                    {t('form.submitButton')}
                                  </motion.span>
                                )}
                              </AnimatePresence>
                            </Button>
                          </motion.div>
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </TabsContent>

            <TabsContent value="contacts" className="mt-6">
              <motion.div 
                className="grid sm:grid-cols-2 gap-5 md:gap-7 max-w-5xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {supportContacts.map((contact, index) => (
                  <motion.div
                    key={contact.id}
                    variants={itemVariants}
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <Card className="h-full flex flex-col overflow-hidden border-2 hover:border-primary/50 shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-background to-muted/20">
                      {/* Header with gradient accent */}
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent" />
                        <CardHeader className="relative pb-4">
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center ring-4 ring-primary/5">
                              <LifeBuoy className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <CardTitle className="text-lg md:text-xl font-bold mb-1.5 text-foreground">
                                {contact.title}
                              </CardTitle>
                              <CardDescription className="text-xs md:text-sm font-medium">
                                {contact.description}
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                      </div>

                      {/* Content with improved spacing */}
                      <CardContent className="flex-1 pt-2 pb-6">
                        <div className="space-y-4">
                          {/* Email */}
                          <div className="group">
                            <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/40 hover:bg-muted/60 transition-colors duration-200">
                              <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <Mail className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-xs font-semibold text-muted-foreground mb-0.5">{t('contactLabels.email')}</p>
                                <p className="text-xs md:text-sm font-medium text-foreground break-all leading-relaxed">
                                  {contact.email}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Phone */}
                          <div className="group">
                            <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/40 hover:bg-muted/60 transition-colors duration-200">
                              <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <Phone className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-xs font-semibold text-muted-foreground mb-0.5">{t('contactLabels.phone')}</p>
                                <p className="text-xs md:text-sm font-medium text-foreground leading-relaxed">
                                  {contact.phone}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Hours */}
                          <div className="group">
                            <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/40 hover:bg-muted/60 transition-colors duration-200">
                              <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <Clock className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-xs font-semibold text-muted-foreground mb-0.5">{t('contactLabels.officeHours')}</p>
                                <p className="text-xs md:text-sm font-medium text-foreground leading-relaxed">
                                  {contact.hours}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>

                      {/* Footer with improved buttons */}
                      <CardFooter className="border-t-2 border-border/50 bg-gradient-to-br from-muted/30 to-muted/50 backdrop-blur-sm pt-4 pb-4">
                        <div className="flex gap-3 w-full">
                          <motion.div 
                            whileHover={{ scale: 1.03 }} 
                            whileTap={{ scale: 0.97 }} 
                            className="flex-1"
                          >
                            <Button 
                              variant="outline" 
                              className="w-full text-xs md:text-sm h-10 gap-2 font-semibold border-2 hover:bg-background hover:border-primary/50 transition-all shadow-sm"
                              asChild
                            >
                              <a href={`tel:${contact.phone.replace(/[^0-9+]/g, '')}`}>
                                <Phone className="h-4 w-4" />
                                {t('contactLabels.callNow')}
                              </a>
                            </Button>
                          </motion.div>
                          <motion.div 
                            whileHover={{ scale: 1.03 }} 
                            whileTap={{ scale: 0.97 }} 
                            className="flex-1"
                          >
                            <Button 
                              className="w-full text-xs md:text-sm h-10 gap-2 font-semibold bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all"
                              asChild
                            >
                              <a href={`mailto:${contact.email}`}>
                                <Mail className="h-4 w-4" />
                                {t('contactLabels.sendEmail')}
                              </a>
                            </Button>
                          </motion.div>
                        </div>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  )
}
