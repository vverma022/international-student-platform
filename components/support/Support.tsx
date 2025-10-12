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
    { id: "visa", name: "Visa & Immigration", icon: <LifeBuoy className="h-4 w-4 md:h-5 md:w-5" /> },
    { id: "academic", name: "Academic Issues", icon: <MessageSquare className="h-4 w-4 md:h-5 md:w-5" /> },
    { id: "accommodation", name: "Accommodation", icon: <MessageSquare className="h-4 w-4 md:h-5 md:w-5" /> },
    { id: "financial", name: "Financial Matters", icon: <MessageSquare className="h-4 w-4 md:h-5 md:w-5" /> },
    { id: "health", name: "Health & Wellbeing", icon: <MessageSquare className="h-4 w-4 md:h-5 md:w-5" /> },
    { id: "cultural", name: "Cultural Adjustment", icon: <MessageSquare className="h-4 w-4 md:h-5 md:w-5" /> },
    { id: "other", name: "Other Issues", icon: <MessageSquare className="h-4 w-4 md:h-5 md:w-5" /> },
  ]

  const supportContacts = [
    {
      id: "admissions-office",
      title: "Admissions Office",
      description: "Primary contact for all admission matters",
      email: "admissions@jaipur.manipal.edu",
      phone: "0141 - 3999100 (Extensions 142, 257, 297)",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM",
    },
    {
      id: "chief-warden-office",
      title: "Chief Warden Office",
      description: "Hostel inquiries",
      email: "office.chiefwarden@jaipur.manipal.edu",
      phone: "0141 - 3999100 (Extensions 108, 493)",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM",
    },
    {
      id: "finance",
      title: "Student Finance Center",
      description: "Financial inquiries",
      email: "student.finance@jaipur.manipal.edu",
      phone: "0141 - 3999100 (Extensions 236, 252, 741)",
      hours: "Mon-Sat: 9:00 AM - 5:00 PM",
    },
    {
      id: "doic",
      title: "Directorate of International Collaborations",
      description: "International student queries",
      email: "doic@jaipur.manipal.edu",
      phone: "0141 - 3999100",
      hours: "Mon-Sat: 9:00 AM - 5:00 PM",
    },
  ]

  const recentCases = [
    {
      id: "case-1",
      title: "Visa Extension Process",
      category: "visa",
      status: "resolved",
      date: "2 days ago",
    },
    {
      id: "case-2",
      title: "Accommodation Change Request",
      category: "accommodation",
      status: "in-progress",
      date: "1 week ago",
    },
    {
      id: "case-3",
      title: "Course Registration Issue",
      category: "academic",
      status: "pending",
      date: "3 days ago",
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-foreground">Support for Special Cases</h1>
          <p className="text-sm md:text-base text-muted-foreground">Get assistance for non-standard situations and special requirements.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Tabs defaultValue="request" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-3 mx-auto h-auto">
              <TabsTrigger value="request" className="text-xs md:text-sm py-2">Request Support</TabsTrigger>
              <TabsTrigger value="contacts" className="text-xs md:text-sm py-2">Support Contacts</TabsTrigger>
              <TabsTrigger value="cases" className="text-xs md:text-sm py-2">My Cases</TabsTrigger>
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
                      <CardTitle className="text-lg md:text-xl">Support Categories</CardTitle>
                      <CardDescription className="text-xs md:text-sm">Select the type of support you need</CardDescription>
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
                      <CardTitle className="text-lg md:text-xl">Submit Support Request</CardTitle>
                      <CardDescription className="text-xs md:text-sm">Describe your issue in detail and our team will assist you</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmitSupport} className="space-y-4">
                        <div className="space-y-2">
                          <label htmlFor="category" className="text-xs md:text-sm font-medium text-foreground">
                            Category
                          </label>
                          <Select value={supportCategory} onValueChange={setSupportCategory}>
                            <SelectTrigger className="h-10 md:h-11">
                              <SelectValue placeholder="Select category" />
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
                            Your Email
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your.email@example.com"
                            value={supportEmail}
                            onChange={(e) => setSupportEmail(e.target.value)}
                            required
                            className="h-10 md:h-11"
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="message" className="text-xs md:text-sm font-medium text-foreground">
                            Describe Your Issue
                          </label>
                          <Textarea
                            id="message"
                            placeholder="Please provide details about your situation..."
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
                                    Submitted
                                  </motion.span>
                                ) : (
                                  <motion.span
                                    key="submit"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                  >
                                    Submit Request
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
                className="grid sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {supportContacts.map((contact, index) => (
                  <motion.div
                    key={contact.id}
                    variants={itemVariants}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="h-full flex flex-col shadow-md hover:shadow-xl transition-shadow duration-300">
                      <CardHeader>
                        <CardTitle className="text-lg md:text-xl">{contact.title}</CardTitle>
                        <CardDescription className="text-xs md:text-sm">{contact.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="space-y-3 text-xs md:text-sm text-foreground">
                          <div className="flex items-center gap-3">
                            <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                            <span className="break-all">{contact.email}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                            <span>{contact.phone}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Clock className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                            <span>{contact.hours}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="border-t border-border bg-muted/30 mt-auto">
                        <div className="flex gap-2 w-full">
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                            <Button variant="outline" className="w-full text-xs md:text-sm h-9">
                              Call
                            </Button>
                          </motion.div>
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                            <Button className="w-full text-xs md:text-sm h-9">Email</Button>
                          </motion.div>
                        </div>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="cases" className="mt-6">
              {recentCases.length > 0 ? (
                <motion.div 
                  className="space-y-4 max-w-4xl mx-auto"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {recentCases.map((caseItem, index) => (
                    <motion.div
                      key={caseItem.id}
                      variants={itemVariants}
                      whileHover={{ x: 4 }}
                    >
                      <Card>
                        <CardContent className="p-0">
                          <div className="p-4 md:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <div className="flex-1 min-w-0">
                              <h3 className="font-medium mb-1 text-sm md:text-base text-foreground truncate">{caseItem.title}</h3>
                              <div className="flex items-center gap-3 text-xs md:text-sm text-muted-foreground">
                                <span className="capitalize">{caseItem.category}</span>
                                <span>•</span>
                                <span>{caseItem.date}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 w-full sm:w-auto">
                              <Badge
                                variant={
                                  caseItem.status === "resolved"
                                    ? "default"
                                    : caseItem.status === "in-progress"
                                      ? "secondary"
                                      : "outline"
                                }
                                className="capitalize text-xs"
                              >
                                {caseItem.status}
                              </Badge>
                              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button variant="outline" size="sm" className="text-xs">
                                  View Details
                                </Button>
                              </motion.div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  className="text-center py-12 max-w-md mx-auto"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <LifeBuoy className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-lg font-medium mb-2 text-foreground">No support cases yet</h3>
                  <p className="text-sm text-muted-foreground mb-6">You haven't submitted any support requests.</p>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      onClick={() =>
                        document.querySelector('[value="request"]')?.dispatchEvent(new MouseEvent("click", { bubbles: true }))
                      }
                    >
                      Create New Request
                    </Button>
                  </motion.div>
                </motion.div>
              )}
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  )
}
