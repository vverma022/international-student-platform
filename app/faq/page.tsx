"use client"

import { useState } from "react"
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

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [newQuestion, setNewQuestion] = useState("")
  const [newAnswer, setNewAnswer] = useState("")
  const [faqs, setFaqs] = useState([
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
  answer: (
    <>
      To open a bank account in India as an international student, you'll need your passport, valid visa, university ID card, proof of address (university hostel letter works), and a reference letter from the International Student Office.
      Most banks near the campus offer special student accounts with minimal documentation. The university's international office can assist you with the process.
      Here's information on {" "}
      <a
        href="https://www.icicibank.com/personal-banking/accounts/savings-account"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
      >
        opening an ICICI Bank account
      </a>
      .
    </>
  ),
  category: "banking",
}
,
    {
      id: "4",
      question: "What healthcare facilities are available on campus?",
      answer:
        "Manipal University Jaipur has a comprehensive health center on campus with general physicians available 24/7. For specialized care, the university has a tie-up with Manipal Hosiptals. The campus health center can provide basic medications, first aid, and referrals to specialists when needed.",
      category: "health",
    },
    {
  id: "5",
  question: "How do I extend my visa if needed?",
  answer: (
    <>
      To extend your visa, you need to apply through the FRRO (Foreigners Regional Registration Office) portal. You'll need a letter from the university confirming your continued enrollment, your passport, current visa details, and proof of financial means. The International Student Office can guide you through this process. Visit{" "}
      <a
        href="https://indianfrro.gov.in/eservices/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
      >
        FRRO Website
      </a>{" "}
      for more details.
    </>
  ),
  category: "visa",
}
,
    {
      id: "6",
      question: "What are the mess timings for breakfast, lunch, and dinner?",
      answer: (
        <>
          Mess timings are as follows: Breakfast: 7:30 AM – 9:30 AM, Lunch: 12:00 PM – 2:30 PM, Dinner: 7:30 PM – 9:30 PM. However, they may slightly change throughout the session so do join the respective mess channels for regular updates -{" "}
          <a href="https://whatsapp.com/channel/0029Vaw1sQ989inot5JLMC2A" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200">
            Follow the Indya Foods Mess MUJ channel on WhatsApp
          </a>
        </>
      ),
      category: "hostel and campus",
    },
    {
      id: "7",
      question: "What are the official campus timings?",
      answer:
        "The official campus timings are 9:00 AM to 5:15 PM.",
      category: "hostel and campus",
    },
    {
      id: "8",
      question: "What is the dress code or attire expected for college?",
      answer:
        "Casual and neat attire is acceptable, such as a simple T-shirt and jeans.",
      category: "hostel and campus",
    },
    {
      id: "9",
      question: "What should I do if I lose my college ID card?",
      answer:
        "Report the loss to the Fire Control Room in hostel (near B3 block) to request a replacement.",
      category: "hostel and campus",
    },
    {
      id: "10",
      question: "Where should I report hostel room complaints or maintenance issues?",
      answer: (
        <>
          All hostel-related complaints should be submitted through the SpaceBasic app, available on{" "}
          <a href="https://play.google.com/store/apps/details?id=com.app.spacebasic&hl=en_IN" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200">
            Android
          </a>
          {" "}and{" "}
          <a href="https://apps.apple.com/in/app/spacebasic/id1217386342" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200">
            iOS
          </a>
          {" "}app stores.
        </>
      ),
      category: "hostel and campus",
    },
    {
      id: "11",
      question: "What is the link to the SLCM (Student Lifecycle Management) website?",
      answer: (
        <>
          The SLCM website can be accessed at:{" "}
          <a href="https://mujslcm.jaipur.manipal.edu" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200">
            https://mujslcm.jaipur.manipal.edu
          </a>
          . You can view your attendance, internal marks, and final CGPA scores here.
        </>
      ),
      category: "academics",
    },
    {
      id: "12",
      question: "Where can I find the names and contact details of the teachers teaching me?",
      answer:
        "The details can be found on the SLCM website under your course or subject section.",
      category: "academics",
    },
    {
  id: "13",
  question: "What is the weightage and split of marks (internal, external, assignments, etc.)?",
  answer: (
    <>
      The marks distribution is as follows:
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li><strong>Internal Assessment:</strong> 30 marks (includes quizzes, assignments, and coursework)</li>
        <li><strong>Mid-Term Exams:</strong> 30 marks</li>
        <li><strong>End-Term Exams:</strong> 40 marks</li>
      </ul>
    </>
  ),
  category: "academics",
}
,
    {
  id: "14",
  question: "What are the attendance rules and minimum percentage required?",
  answer: (
    <>
      A minimum of <strong>75% attendance</strong> is mandatory to be eligible for examinations.{" "}
      Falling below this threshold will result in <strong>detainment</strong>, requiring you to{" "}
      <strong>re-register for the course credits</strong>, pay the associated fee again, and{" "}
      attend the same course in a future semester.
    </>
  ),
  category: "academics",
}
,
    {
      id: "15",
      question: "What are the rules regarding backlogs and re-examinations?",
      answer:
        "A backlog is received if you score below 26 marks in the end-term exam or perform poorly in both mid-term and internal assessments. Backlogs can be cleared in subsequent semesters or during the summer semester.",
      category: "academics",
    },
    {
      id: "16",
      question: "What are the hostel in-time rules?",
      answer:
        "Hostel in-time is 9:00 PM. In case of unavoidable situations, do call and inform any of the hostel wardens about your late arrival. students can stay outside their rooms within the hostel premises until 11:00 PM. However, all students must return to their rooms by 11:00 PM.",
      category: "hostel and campus",
    },
  ])

  // Category icons mapping
  const categoryIcons = {
    visa: Shield,
    documents: BookOpen,
    banking: CreditCard,
    health: Heart,
    academics: GraduationCap,
    "hostel and campus": Home,
  }

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
    }
  }

  const filteredFAQs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (typeof faq.answer === 'string' ? faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) : faq.question.toLowerCase().includes(searchQuery.toLowerCase())) ||
      faq.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const categories = Array.from(new Set(faqs.map((faq) => faq.category)))

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 py-12 max-w-7xl">
        {/* Enhanced Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="h-12 w-12 text-gray-700 mr-4" />
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-gray-900">
              Frequently Asked Questions
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about studying at Manipal University Jaipur as an international student. 
            Can't find what you're looking for? Add your own question to help others!
          </p>
        </div>

        {/* Enhanced Search and Add Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search FAQs by question, answer, or category..."
                className="pl-12 h-12 text-lg border-gray-200 focus:border-gray-900 focus:ring-gray-900"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 py-3 h-12 transition-all duration-200 hover:scale-105">
                <Plus className="h-5 w-5" />
                Add Question
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-2xl font-semibold">Add a New FAQ</DialogTitle>
                <DialogDescription className="text-gray-600">
                  Contribute to our knowledge base by adding a question and answer that might help other students.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <label htmlFor="question" className="text-sm font-medium text-gray-700">
                    Question
                  </label>
                  <Input
                    id="question"
                    value={newQuestion}
                    onChange={(e) => setNewQuestion(e.target.value)}
                    placeholder="Enter your question here"
                    className="border-gray-200 focus:border-gray-900 focus:ring-gray-900"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="answer" className="text-sm font-medium text-gray-700">
                    Answer
                  </label>
                  <Textarea
                    id="answer"
                    value={newAnswer}
                    onChange={(e) => setNewAnswer(e.target.value)}
                    placeholder="Enter the answer here"
                    rows={5}
                    className="border-gray-200 focus:border-gray-900 focus:ring-gray-900"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button 
                  onClick={handleAddFAQ}
                  className="bg-gray-900 hover:bg-gray-800 text-white font-semibold"
                >
                  Submit FAQ
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Enhanced Categories and Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Enhanced Categories Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sticky top-24">
              <h3 className="font-semibold text-lg mb-4 text-gray-900">Categories</h3>
              <div className="space-y-3">
                <Button
                  variant={searchQuery === "" ? "default" : "outline"}
                  className={`w-full justify-start h-12 text-left font-medium transition-all duration-200 ${
                    searchQuery === "" 
                      ? "bg-gray-900 text-white hover:bg-gray-800" 
                      : "hover:bg-gray-50 border-gray-200"
                  }`}
                  onClick={() => setSearchQuery("")}
                >
                  <Users className="h-4 w-4 mr-3" />
                  All Categories
                </Button>
                {categories.map((category) => {
                  const IconComponent = categoryIcons[category as keyof typeof categoryIcons] || HelpCircle
                  return (
                    <Button
                      key={category}
                      variant={searchQuery === category ? "default" : "outline"}
                      className={`w-full justify-start h-12 text-left font-medium capitalize transition-all duration-200 ${
                        searchQuery === category 
                          ? "bg-gray-900 text-white hover:bg-gray-800" 
                          : "hover:bg-gray-50 border-gray-200"
                      }`}
                      onClick={() => setSearchQuery(category)}
                    >
                      <IconComponent className="h-4 w-4 mr-3" />
                      {category}
                    </Button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Enhanced FAQ Content */}
          <div className="lg:col-span-3">
            {filteredFAQs.length > 0 ? (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <Accordion type="single" collapsible className="w-full">
                  {filteredFAQs.map((faq, index) => (
                    <AccordionItem 
                      key={faq.id} 
                      value={faq.id}
                      className="border-b border-gray-100 last:border-b-0"
                    >
                      <AccordionTrigger className="text-left px-6 py-4 hover:bg-gray-50 transition-colors duration-200 font-medium text-gray-900">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <div className="pt-2 pb-4">
                          <div className="text-gray-700 leading-relaxed prose prose-gray max-w-none">
                            {faq.answer}
                          </div>
                          <div className="mt-4 flex items-center">
                            <span className="text-xs bg-gray-100 text-gray-700 rounded-full px-3 py-1 capitalize font-medium">
                              {faq.category}
                            </span>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-12 text-center">
                <HelpCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No FAQs Found</h3>
                <p className="text-gray-600 mb-6">No FAQs found matching your search criteria.</p>
                <Button 
                  variant="outline" 
                  onClick={() => setSearchQuery("")}
                  className="border-gray-200 hover:bg-gray-50"
                >
                  Clear Search
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}