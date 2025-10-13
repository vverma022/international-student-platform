/**
 * FAQ Component with Framer Motion & Enhanced UX
 * 
 * Main FAQ page content with enhanced design:
 * - Animated search functionality with framer-motion
 * - Category filtering with smooth transitions
 * - Accordion-based Q&A display with animations
 * - Add new FAQ dialog
 * - Fully responsive design
 * - Loading states and empty states
 * 
 * Animation Strategy:
 * - Stagger animations for FAQ items
 * - Smooth transitions between filtered states
 * - Interactive hover effects on categories and accordions
 */

"use client"

import { useState, useMemo } from "react"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Plus, Search, HelpCircle, BookOpen, Users, Shield, GraduationCap, Home, CreditCard, Heart } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

/**
 * Category icon mapping for visual consistency
 */
const categoryIcons: Record<string, any> = {
  visa: Shield,
  documents: BookOpen,
  banking: CreditCard,
  health: Heart,
  academics: GraduationCap,
  "hostel and campus": Home,
  general: Users,
}

/**
 * Animation variants for consistent motion design
 */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
}

export default function FAQ() {
  const t = useTranslations('faq')
  const [searchQuery, setSearchQuery] = useState("")
  const [newQuestion, setNewQuestion] = useState("")
  const [newAnswer, setNewAnswer] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  /**
   * Get translated category name
   */
  const getCategoryName = (category: string) => {
    const categoryKey = category.replace(/\s+/g, '')
    const key = categoryKey === 'hostelandcampus' ? 'hostelAndCampus' : categoryKey
    return t(`categories.${key}` as any) || category
  }
  
  // Get translated FAQ data
  const initialFAQs = [
    {
      id: "1",
      question: t('questions.q1.question'),
      answer: t('questions.q1.answer'),
      category: t('questions.q1.category'),
    },
    {
      id: "2",
      question: t('questions.q2.question'),
      answer: t('questions.q2.answer'),
      category: t('questions.q2.category'),
    },
    {
      id: "3",
      question: t('questions.q3.question'),
      answer: t('questions.q3.answer'),
      category: t('questions.q3.category'),
    },
    {
      id: "4",
      question: t('questions.q4.question'),
      answer: t('questions.q4.answer'),
      category: t('questions.q4.category'),
    },
    {
      id: "5",
      question: t('questions.q5.question'),
      answer: t('questions.q5.answer'),
      category: t('questions.q5.category'),
    },
    {
      id: "6",
      question: t('questions.q6.question'),
      answer: t('questions.q6.answer'),
      category: t('questions.q6.category'),
    },
    {
      id: "7",
      question: t('questions.q7.question'),
      answer: t('questions.q7.answer'),
      category: t('questions.q7.category'),
    },
  ]

  const [faqs, setFaqs] = useState(initialFAQs)

  /**
   * Handle adding a new FAQ entry
   * In production, this would call an API endpoint
   */
  const handleAddFAQ = () => {
    if (newQuestion.trim() && newAnswer.trim()) {
      setFaqs([
        ...faqs,
        {
          id: (faqs.length + 1).toString(),
          question: newQuestion,
          answer: newAnswer,
          category: "general",
        },
      ])
      setNewQuestion("")
      setNewAnswer("")
      setIsDialogOpen(false)
    }
  }

  /**
   * Filter FAQs based on search query
   * Searches across question, answer, and category
   * Uses useMemo for performance optimization
   */
  const filteredFAQs = useMemo(() => {
    return faqs.filter((faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [faqs, searchQuery])

  const categories = useMemo(() => 
    Array.from(new Set(faqs.map((faq) => faq.category))),
    [faqs]
  )

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12 max-w-7xl">
        {/* Header Section with Animation */}
        <motion.div 
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center justify-center mb-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
            >
              <HelpCircle className="h-10 w-10 md:h-12 md:w-12 text-primary mb-4" />
            </motion.div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground">
              {t('title')}
            </h1>
          </div>
          <motion.p 
            className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {t('subtitle')}
          </motion.p>
        </motion.div>

        {/* Search and Add Section with Enhanced Animation */}
        <motion.div 
          className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 md:gap-6 mb-6 md:mb-8 bg-card p-4 md:p-6 rounded-2xl shadow-[inset_0_1px_1px_0_var(--highlight-color),_0_2px_4px_0_var(--shadow-color)] border border-border"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="flex-1 w-full max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 md:left-4 top-1/2 h-4 w-4 md:h-5 md:w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder={t('searchPlaceholder')}
                className="pl-10 md:pl-12 h-11 md:h-12 text-base md:text-lg focus-visible:ring-2 focus-visible:ring-primary transition-all duration-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full lg:w-auto"
              >
                <Button size="lg" className="flex items-center gap-2 w-full lg:w-auto shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-shadow duration-300">
                  <Plus className="h-4 w-4 md:h-5 md:w-5" />
                  {t('addQuestion')}
                </Button>
              </motion.div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-xl md:text-2xl font-semibold">{t('dialog.title')}</DialogTitle>
                <DialogDescription>
                  {t('dialog.description')}
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <label htmlFor="question" className="text-sm font-medium text-foreground">
                    {t('dialog.questionLabel')}
                  </label>
                  <Input
                    id="question"
                    value={newQuestion}
                    onChange={(e) => setNewQuestion(e.target.value)}
                    placeholder={t('dialog.questionPlaceholder')}
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="answer" className="text-sm font-medium text-foreground">
                    {t('dialog.answerLabel')}
                  </label>
                  <Textarea
                    id="answer"
                    value={newAnswer}
                    onChange={(e) => setNewAnswer(e.target.value)}
                    placeholder={t('dialog.answerPlaceholder')}
                    rows={5}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button onClick={handleAddFAQ} className="w-full sm:w-auto">
                  {t('dialog.submit')}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </motion.div>

        {/* Categories and Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Categories Sidebar */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="bg-card rounded-2xl shadow-[inset_0_1px_1px_0_var(--highlight-color),_0_2px_4px_0_var(--shadow-color)] border border-border p-4 md:p-6 lg:sticky lg:top-24">
              <h3 className="font-semibold text-base md:text-lg mb-4 text-foreground">Categories</h3>
              <div className="space-y-2 md:space-y-3">
                <motion.div whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    variant={searchQuery === "" ? "default" : "outline"}
                    className="w-full justify-start h-10 md:h-12 text-left font-medium text-sm md:text-base"
                    onClick={() => setSearchQuery("")}
                  >
                    <Users className="h-4 w-4 mr-2 md:mr-3 flex-shrink-0" />
                    {t('allCategories')}
                  </Button>
                </motion.div>
                {categories.map((category) => {
                  const IconComponent = categoryIcons[category as keyof typeof categoryIcons] || HelpCircle
                  return (
                    <motion.div key={category} whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        variant={searchQuery === category ? "default" : "outline"}
                        className="w-full justify-start h-10 md:h-12 text-left font-medium text-sm md:text-base"
                        onClick={() => setSearchQuery(category)}
                      >
                        <IconComponent className="h-4 w-4 mr-2 md:mr-3 flex-shrink-0" />
                        <span className="truncate">{getCategoryName(category)}</span>
                      </Button>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* FAQ Content with AnimatePresence for smooth transitions */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              {filteredFAQs.length > 0 ? (
                <motion.div
                  key="faq-list"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card rounded-2xl shadow-[inset_0_1px_1px_0_var(--highlight-color),_0_2px_4px_0_var(--shadow-color)] border border-border overflow-hidden"
                >
                  <Accordion type="single" collapsible className="w-full">
                    {filteredFAQs.map((faq, index) => (
                      <motion.div
                        key={faq.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                      >
                        <AccordionItem 
                          value={faq.id}
                          className="border-b border-border/50 last:border-b-0"
                        >
                          <AccordionTrigger className="text-left px-4 md:px-6 py-3 md:py-4 hover:bg-accent/50 transition-colors duration-200 font-medium text-foreground text-sm md:text-base [&[data-state=open]]:bg-accent/50">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="px-4 md:px-6 pb-3 md:pb-4">
                            <motion.div 
                              className="pt-2 pb-4"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.3 }}
                            >
                              <div className="text-muted-foreground leading-relaxed text-sm md:text-base">
                                {faq.answer}
                              </div>
                              <div className="mt-4 flex items-center">
                                <span className="text-xs bg-accent text-foreground rounded-full px-3 py-1 font-medium">
                                  {getCategoryName(faq.category)}
                                </span>
                              </div>
                            </motion.div>
                          </AccordionContent>
                        </AccordionItem>
                      </motion.div>
                    ))}
                  </Accordion>
                </motion.div>
              ) : (
                <motion.div
                  key="no-results"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card rounded-2xl shadow-[inset_0_1px_1px_0_var(--highlight-color),_0_2px_4px_0_var(--shadow-color)] border border-border p-8 md:p-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                  >
                    <HelpCircle className="h-12 w-12 md:h-16 md:w-16 text-muted-foreground mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">{t('noResults')}</h3>
                  <p className="text-sm md:text-base text-muted-foreground mb-6">{t('noResultsDescription')}</p>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      variant="outline" 
                      onClick={() => setSearchQuery("")}
                    >
                      Clear Search
                    </Button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
