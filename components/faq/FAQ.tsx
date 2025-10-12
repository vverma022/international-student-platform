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
  const [searchQuery, setSearchQuery] = useState("")
  const [newQuestion, setNewQuestion] = useState("")
  const [newAnswer, setNewAnswer] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  
  // Initial FAQ data
  const initialFAQs = [
    {
      id: "1",
      question: "How do I apply for a student visa for India?",
      answer:
        "You can apply for a Student Visa or PIO or OCI at your nearest Indian Embassy or Consulate. You will need to submit the admission confirmation letter issued by the Director, Admissions, Manipal University Jaipur.",
      category: "visa",
    },
    {
      id: "2",
      question: "What documents do I need to bring for university registration?",
      answer:
        "For university registration, you need to bring your passport with valid visa, admission letter, original academic certificates and transcripts, medical fitness certificate, passport-sized photographs, and proof of fee payment. It's also recommended to bring multiple photocopies of all these documents.",
      category: "documents",
    },
    {
      id: "3",
      question: "How can I open a bank account in India as an international student?",
      answer:
        "To open a bank account in India as an international student, you'll need your passport, valid visa, university ID card, proof of address (university hostel letter works), and a reference letter from the International Student Office. Most banks near the campus offer special student accounts with minimal documentation.",
      category: "banking",
    },
    {
      id: "4",
      question: "What healthcare facilities are available on campus?",
      answer:
        "Manipal University Jaipur has a comprehensive health center on campus with general physicians available 24/7. For specialized care, the university has a tie-up with Manipal Hospitals. The campus health center can provide basic medications, first aid, and referrals to specialists when needed.",
      category: "health",
    },
    {
      id: "5",
      question: "How do I extend my visa if needed?",
      answer:
        "To extend your visa, you need to apply through the FRRO (Foreigners Regional Registration Office) portal. You'll need a letter from the university confirming your continued enrollment, your passport, current visa details, and proof of financial means. The International Student Office can guide you through this process.",
      category: "visa",
    },
    {
      id: "6",
      question: "What are the attendance rules and minimum percentage required?",
      answer:
        "A minimum of 75% attendance is mandatory to be eligible for examinations. Falling below this threshold will result in detainment, requiring you to re-register for the course credits, pay the associated fee again, and attend the same course in a future semester.",
      category: "academics",
    },
    {
      id: "7",
      question: "What are the hostel in-time rules?",
      answer:
        "Hostel in-time is 9:00 PM. In case of unavoidable situations, do call and inform any of the hostel wardens about your late arrival. Students can stay outside their rooms within the hostel premises until 11:00 PM. However, all students must return to their rooms by 11:00 PM.",
      category: "hostel and campus",
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
              Frequently Asked Questions
            </h1>
          </div>
          <motion.p 
            className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Find answers to common questions about studying at Manipal University Jaipur as an international student. 
            Can't find what you're looking for? Add your own question to help others!
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
                placeholder="Search FAQs by question, answer, or category..."
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
                  Add Question
                </Button>
              </motion.div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-xl md:text-2xl font-semibold">Add a New FAQ</DialogTitle>
                <DialogDescription>
                  Contribute to our knowledge base by adding a question and answer that might help other students.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <label htmlFor="question" className="text-sm font-medium text-foreground">
                    Question
                  </label>
                  <Input
                    id="question"
                    value={newQuestion}
                    onChange={(e) => setNewQuestion(e.target.value)}
                    placeholder="Enter your question here"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="answer" className="text-sm font-medium text-foreground">
                    Answer
                  </label>
                  <Textarea
                    id="answer"
                    value={newAnswer}
                    onChange={(e) => setNewAnswer(e.target.value)}
                    placeholder="Enter the answer here"
                    rows={5}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button onClick={handleAddFAQ} className="w-full sm:w-auto">
                  Submit FAQ
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
                    All Categories
                  </Button>
                </motion.div>
                {categories.map((category) => {
                  const IconComponent = categoryIcons[category as keyof typeof categoryIcons] || HelpCircle
                  return (
                    <motion.div key={category} whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        variant={searchQuery === category ? "default" : "outline"}
                        className="w-full justify-start h-10 md:h-12 text-left font-medium capitalize text-sm md:text-base"
                        onClick={() => setSearchQuery(category)}
                      >
                        <IconComponent className="h-4 w-4 mr-2 md:mr-3 flex-shrink-0" />
                        <span className="truncate">{category}</span>
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
                                <span className="text-xs bg-accent text-foreground rounded-full px-3 py-1 capitalize font-medium">
                                  {faq.category}
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
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">No FAQs Found</h3>
                  <p className="text-sm md:text-base text-muted-foreground mb-6">No FAQs found matching your search criteria.</p>
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
