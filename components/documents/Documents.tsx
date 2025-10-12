/**
 * Documents Component with Framer Motion
 * 
 * Enhanced document processing guides page with:
 * - Smooth animations for all elements
 * - Tabbed navigation for different document categories
 * - Step-by-step guide cards with hover effects
 * - Progress tracking with animations
 * - Download and view options
 * - Fully responsive design
 * 
 * Animation Strategy:
 * - Stagger animations for cards
 * - Smooth tab transitions
 * - Interactive hover effects
 * - Progress bar animations
 */

"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { FileText, Download, Clock } from "lucide-react"
import { motion } from "framer-motion"

/**
 * Animation variants for stagger effects
 */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const
    }
  }
}

export default function Documents() {
  const [activeTab, setActiveTab] = useState("visa")

  const documentCategories = [
    { id: "visa", name: "Visa & Immigration" },
    { id: "university", name: "University Registration" },
    { id: "accommodation", name: "Accommodation" },
    { id: "banking", name: "Banking & Finance" },
    { id: "medical", name: "Medical & Insurance" },
  ]

  const documents = {
    visa: [
      {
        id: "student-visa",
        title: "Student Visa Application",
        description: "Complete guide to applying for an Indian student visa",
        steps: [
          {
            id: 1,
            title: "Obtain Admission Letter",
            description: "Receive official admission letter from Manipal University Jaipur",
          },
          {
            id: 2,
            title: "Create Account on Indian Visa Website",
            description: "Register on the official Indian visa application portal",
          },
          {
            id: 3,
            title: "Fill Application Form",
            description: "Complete the online application form with personal and academic details",
          },
          {
            id: 4,
            title: "Upload Documents",
            description: "Upload passport copy, photos, admission letter, and financial statements",
          },
          { id: 5, title: "Pay Visa Fee", description: "Make the visa fee payment through the online portal" },
          {
            id: 6,
            title: "Schedule Appointment",
            description: "Book an appointment at your nearest Indian embassy/consulate",
          },
          {
            id: 7,
            title: "Attend Interview",
            description: "Visit the embassy with original documents for verification and interview",
          },
          { id: 8, title: "Collect Visa", description: "Collect your visa once approved or track courier delivery" },
        ],
      },
      {
        id: "frro-registration",
        title: "FRRO Registration",
        description: "Mandatory registration with Foreigners Regional Registration Office",
        steps: [
          {
            id: 1,
            title: "Create FRRO Account",
            description: "Register on the FRRO online portal within 14 days of arrival in India",
          },
          {
            id: 2,
            title: "Fill Registration Form",
            description: "Complete the online registration form with your details",
          },
          {
            id: 3,
            title: "Upload Documents",
            description: "Upload passport, visa, university letter, and accommodation proof",
          },
          { id: 4, title: "Schedule Appointment", description: "Book an appointment at the nearest FRRO office" },
          {
            id: 5,
            title: "Biometric Verification",
            description: "Visit the FRRO office for biometric verification and document checking",
          },
          {
            id: 6,
            title: "Receive Registration Certificate",
            description: "Collect your registration certificate or e-FRRO confirmation",
          },
        ],
      },
    ],
    university: [
      {
        id: "admission-documents",
        title: "Admission Documentation",
        description: "Documents required for completing your university admission",
        steps: [
          {
            id: 1,
            title: "Prepare Academic Documents",
            description: "Gather original and attested copies of all academic certificates and transcripts",
          },
          { id: 2, title: "Passport and Visa", description: "Keep your passport with valid student visa ready" },
          { id: 3, title: "Passport Photos", description: "Get 10-15 passport-sized photographs (white background)" },
          {
            id: 4,
            title: "Medical Certificate",
            description: "Obtain a medical fitness certificate from an authorized doctor",
          },
          { id: 5, title: "Fee Payment Receipt", description: "Keep proof of tuition fee payment" },
          {
            id: 6,
            title: "Visit International Office",
            description: "Submit all documents to the International Student Office",
          },
          { id: 7, title: "Verification Process", description: "Documents will be verified by university officials" },
          {
            id: 8,
            title: "Receive Student ID",
            description: "Collect your student ID card and admission confirmation",
          },
        ],
      },
    ],
    accommodation: [
      {
        id: "hostel-application",
        title: "Hostel Application Process",
        description: "Steps to apply for on-campus accommodation",
        steps: [
          {
            id: 1,
            title: "Check Availability",
            description: "Verify hostel availability through the university portal",
          },
          {
            id: 2,
            title: "Fill Application Form",
            description: "Complete the hostel application form with personal details",
          },
          { id: 3, title: "Select Room Type", description: "Choose your preferred room type based on availability" },
          { id: 4, title: "Pay Hostel Fee", description: "Make the hostel fee payment as per university guidelines" },
          {
            id: 5,
            title: "Submit Documents",
            description: "Provide necessary documents including medical certificate",
          },
          { id: 6, title: "Room Allocation", description: "Receive your room allocation details" },
          { id: 7, title: "Check-in Process", description: "Complete the check-in process at the hostel office" },
        ],
      },
    ],
    banking: [
      {
        id: "bank-account",
        title: "Opening a Bank Account",
        description: "Process for international students to open a bank account in India",
        steps: [
          { id: 1, title: "Choose a Bank", description: "Select a bank with branches near the university campus" },
          {
            id: 2,
            title: "Collect Required Documents",
            description: "Gather passport, visa, university ID, address proof, and reference letter",
          },
          { id: 3, title: "Visit Bank Branch", description: "Go to the bank branch with all documents" },
          { id: 4, title: "Fill Application Form", description: "Complete the account opening form" },
          { id: 5, title: "KYC Verification", description: "Complete the Know Your Customer verification process" },
          { id: 6, title: "Initial Deposit", description: "Make the minimum initial deposit as required by the bank" },
          {
            id: 7,
            title: "Collect Account Details",
            description: "Receive your account number, checkbook, and debit card",
          },
        ],
      },
    ],
    medical: [
      {
        id: "health-insurance",
        title: "Health Insurance Registration",
        description: "Mandatory health insurance for international students",
        steps: [
          {
            id: 1,
            title: "Insurance Options",
            description: "Review health insurance options recommended by the university",
          },
          {
            id: 2,
            title: "Select Coverage Plan",
            description: "Choose an appropriate coverage plan based on your needs",
          },
          { id: 3, title: "Fill Application", description: "Complete the insurance application form" },
          { id: 4, title: "Submit Documents", description: "Provide passport, visa, and other required documents" },
          { id: 5, title: "Pay Premium", description: "Make the insurance premium payment" },
          {
            id: 6,
            title: "Receive Insurance Card",
            description: "Collect your health insurance card and policy documents",
          },
          {
            id: 7,
            title: "Register at Campus Health Center",
            description: "Register your insurance details at the university health center",
          },
        ],
      },
    ],
  }

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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-foreground">Document Processing Guides</h1>
          <p className="text-sm md:text-base text-muted-foreground">
            Step-by-step instructions for obtaining and processing all required documents for international students.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Tabs defaultValue="visa" onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 max-w-4xl mx-auto h-auto">
              {documentCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="text-xs md:text-sm py-2">
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(documents).map(([category, docs]) => (
              <TabsContent key={category} value={category} className="mt-6">
                <motion.div 
                  className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {docs.map((doc, index) => (
                    <motion.div
                      key={doc.id}
                      variants={cardVariants}
                      whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    >
                      <Card className="overflow-hidden h-full flex flex-col shadow-md hover:shadow-xl transition-shadow duration-300 border-2 hover:border-primary/50">
                        <CardHeader className="bg-accent/50 backdrop-blur-sm">
                          <CardTitle className="flex items-center gap-2 text-base md:text-lg">
                            <FileText className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0" />
                            <span className="line-clamp-2">{doc.title}</span>
                          </CardTitle>
                          <CardDescription className="text-xs md:text-sm">{doc.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="pt-4 md:pt-6 flex-1">
                          <div className="mb-4">
                            <div className="flex justify-between mb-2 text-xs md:text-sm text-foreground">
                              <span>Completion Progress</span>
                              <span className="font-medium">0/{doc.steps.length} steps</span>
                            </div>
                            <Progress value={0} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            {doc.steps.slice(0, 3).map((step) => (
                              <motion.div 
                                key={step.id} 
                                className="flex items-start gap-3 text-xs md:text-sm"
                                whileHover={{ x: 4 }}
                                transition={{ duration: 0.2 }}
                              >
                                <div className="mt-0.5 text-muted-foreground flex-shrink-0">
                                  <Clock className="h-3 w-3 md:h-4 md:w-4" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="font-medium text-foreground line-clamp-1">{step.title}</p>
                                  <p className="text-muted-foreground text-xs line-clamp-2">{step.description}</p>
                                </div>
                              </motion.div>
                            ))}
                            {doc.steps.length > 3 && (
                              <div className="text-xs md:text-sm text-muted-foreground pt-1">+{doc.steps.length - 3} more steps</div>
                            )}
                          </div>
                        </CardContent>
                        <CardFooter className="border-t border-border bg-muted/30 mt-auto">
                          <div className="flex w-full gap-2">
                            <motion.div 
                              className="flex-1"
                              whileHover={{ scale: 1.05 }} 
                              whileTap={{ scale: 0.95 }}
                            >
                              <Button variant="ghost" size="sm" className="flex items-center gap-1 w-full text-xs md:text-sm h-8 md:h-9">
                                <Download className="h-3 w-3 md:h-4 md:w-4" />
                                <span className="hidden sm:inline">Download</span>
                                <span className="sm:hidden">PDF</span>
                              </Button>
                            </motion.div>
                            <motion.div 
                              className="flex-1"
                              whileHover={{ scale: 1.05 }} 
                              whileTap={{ scale: 0.95 }}
                            >
                              <Button size="sm" asChild className="w-full text-xs md:text-sm h-8 md:h-9">
                                <Link href={`/documents/${doc.id}`}>View Guide</Link>
                              </Button>
                            </motion.div>
                          </div>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </div>
  )
}
