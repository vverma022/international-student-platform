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

export default function SupportPage() {
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
    { id: "visa", name: "Visa & Immigration", icon: <LifeBuoy className="h-5 w-5" /> },
    { id: "academic", name: "Academic Issues", icon: <MessageSquare className="h-5 w-5" /> },
    { id: "accommodation", name: "Accommodation", icon: <MessageSquare className="h-5 w-5" /> },
    { id: "financial", name: "Financial Matters", icon: <MessageSquare className="h-5 w-5" /> },
    { id: "health", name: "Health & Wellbeing", icon: <MessageSquare className="h-5 w-5" /> },
    { id: "cultural", name: "Cultural Adjustment", icon: <MessageSquare className="h-5 w-5" /> },
    { id: "other", name: "Other Issues", icon: <MessageSquare className="h-5 w-5" /> },
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
    <div className="container mx-auto px-4 md:px-6 py-10 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Support for Special Cases</h1>
        <p className="text-gray-500">Get assistance for non-standard situations and special requirements.</p>
      </div>

      <Tabs defaultValue="request" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-3 mx-auto">
          <TabsTrigger value="request">Request Support</TabsTrigger>
          <TabsTrigger value="contacts">Support Contacts</TabsTrigger>
          <TabsTrigger value="cases">My Cases</TabsTrigger>
        </TabsList>

        <TabsContent value="request" className="mt-6">
          <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Support Categories</CardTitle>
                  <CardDescription>Select the type of support you need</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {supportCategories.map((category) => (
                      <Button
                        key={category.id}
                        variant={supportCategory === category.id ? "default" : "outline"}
                        className="w-full justify-start"
                        onClick={() => setSupportCategory(category.id)}
                      >
                        <div className="flex items-center gap-2">
                          {category.icon}
                          <span>{category.name}</span>
                        </div>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Submit Support Request</CardTitle>
                  <CardDescription>Describe your issue in detail and our team will assist you</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmitSupport} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="category" className="text-sm font-medium">
                        Category
                      </label>
                      <Select value={supportCategory} onValueChange={setSupportCategory}>
                        <SelectTrigger>
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
                      <label htmlFor="email" className="text-sm font-medium">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={supportEmail}
                        onChange={(e) => setSupportEmail(e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Describe Your Issue
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Please provide details about your situation..."
                        rows={5}
                        value={supportMessage}
                        onChange={(e) => setSupportMessage(e.target.value)}
                        required
                      />
                    </div>

                    <div className="flex justify-end">
                      <Button type="submit" disabled={supportSubmitted}>
                        {supportSubmitted ? (
                          <>
                            <CheckCircle2 className="mr-2 h-4 w-4" />
                            Submitted
                          </>
                        ) : (
                          "Submit Request"
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="contacts" className="mt-6">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {supportContacts.map((contact) => (
              <Card key={contact.id} className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{contact.title}</CardTitle>
                  <CardDescription>{contact.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-gray-500 flex-shrink-0" />
                      <span className="break-all">{contact.email}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-gray-500 flex-shrink-0" />
                      <span>{contact.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-4 w-4 text-gray-500 flex-shrink-0" />
                      <span>{contact.hours}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="mt-auto">
                  <div className="flex gap-2 w-full">
                    <Button variant="outline" className="flex-1">
                      Call
                    </Button>
                    <Button className="flex-1">Email</Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="cases" className="mt-6">
          {recentCases.length > 0 ? (
            <div className="space-y-4 max-w-4xl mx-auto">
              {recentCases.map((caseItem) => (
                <Card key={caseItem.id}>
                  <CardContent className="p-0">
                    <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-medium mb-1">{caseItem.title}</h3>
                        <div className="flex items-center gap-3 text-sm text-gray-500">
                          <span className="capitalize">{caseItem.category}</span>
                          <span>•</span>
                          <span>{caseItem.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge
                          variant={
                            caseItem.status === "resolved"
                              ? "default"
                              : caseItem.status === "in-progress"
                                ? "secondary"
                                : "outline"
                          }
                          className="capitalize"
                        >
                          {caseItem.status}
                        </Badge>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 max-w-md mx-auto">
              <LifeBuoy className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">No support cases yet</h3>
              <p className="text-gray-500 mb-6">You haven't submitted any support requests.</p>
              <Button
                onClick={() =>
                  document.querySelector('[value="request"]')?.dispatchEvent(new MouseEvent("click", { bubbles: true }))
                }
              >
                Create New Request
              </Button>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
