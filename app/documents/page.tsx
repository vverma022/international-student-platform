"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { FileText, Download, Clock } from "lucide-react"

export default function DocumentsPage() {
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
      {
        id: "visa-extension",
        title: "Visa Extension Process",
        description: "How to extend your student visa if your course duration is longer",
        steps: [
          {
            id: 1,
            title: "University Recommendation Letter",
            description: "Obtain a letter from the university confirming continued enrollment",
          },
          { id: 2, title: "Login to FRRO Portal", description: "Access your account on the FRRO portal" },
          { id: 3, title: "Apply for Extension", description: "Fill the visa extension application form" },
          {
            id: 4,
            title: "Upload Required Documents",
            description: "Upload university letter, passport, current visa, and financial proof",
          },
          { id: 5, title: "Pay Extension Fee", description: "Make the payment for visa extension" },
          { id: 6, title: "Attend Appointment", description: "Visit FRRO office if required for verification" },
          { id: 7, title: "Receive Extended Visa", description: "Collect your extended visa or updated e-visa" },
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
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-2">Document Processing Guides</h1>
      <p className="text-gray-500 mb-8">
        Step-by-step instructions for obtaining and processing all required documents for international students.
      </p>

      <Tabs defaultValue="visa" onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
          {documentCategories.map((category) => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.entries(documents).map(([category, docs]) => (
          <TabsContent key={category} value={category} className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {docs.map((doc) => (
                <Card key={doc.id} className="overflow-hidden">
                  <CardHeader className="bg-blue-50 dark:bg-gray-800">
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-blue-500" />
                      {doc.title}
                    </CardTitle>
                    <CardDescription>{doc.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="mb-4">
                      <div className="flex justify-between mb-2 text-sm">
                        <span>Completion Progress</span>
                        <span className="font-medium">0/{doc.steps.length} steps</span>
                      </div>
                      <Progress value={0} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      {doc.steps.slice(0, 3).map((step) => (
                        <div key={step.id} className="flex items-start gap-3 text-sm">
                          <div className="mt-0.5 text-gray-400">
                            <Clock className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="font-medium">{step.title}</p>
                            <p className="text-gray-500 text-xs">{step.description}</p>
                          </div>
                        </div>
                      ))}
                      {doc.steps.length > 3 && (
                        <div className="text-sm text-gray-500 pt-1">+{doc.steps.length - 3} more steps</div>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="border-t bg-gray-50 dark:bg-gray-900">
                    <div className="flex w-full justify-between">
                      <Button variant="ghost" size="sm" className="flex items-center gap-1">
                        <Download className="h-4 w-4" />
                        Download PDF
                      </Button>
                      <Button size="sm" asChild>
                        <Link href={`/documents/${doc.id}`}>View Guide</Link>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
