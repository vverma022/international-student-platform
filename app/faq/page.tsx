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
import { Plus, Search } from "lucide-react"

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [newQuestion, setNewQuestion] = useState("")
  const [newAnswer, setNewAnswer] = useState("")
  const [faqs, setFaqs] = useState([
    {
      id: "1",
      question: "How do I apply for a student visa for India?",
      answer:
        "To apply for a student visa for India, you need to first receive an admission letter from Manipal University Jaipur. Then, visit the official Indian embassy or consulate website in your country to fill out the visa application form. Submit the required documents including your passport, admission letter, financial statements, and photographs. The visa processing typically takes 2-4 weeks.",
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
        "To open a bank account in India as an international student, you'll need your passport, valid visa, university ID card, proof of address (university hostel letter works), and a reference letter from the International Student Office. Most banks near the campus offer special student accounts with minimal documentation. The university's international office can assist you with the process.",
      category: "banking",
    },
    {
      id: "4",
      question: "What healthcare facilities are available on campus?",
      answer:
        "Manipal University Jaipur has a comprehensive health center on campus with general physicians available 24/7. For specialized care, the university has tie-ups with nearby hospitals. All international students are required to have health insurance. The campus health center can provide basic medications, first aid, and referrals to specialists when needed.",
      category: "health",
    },
    {
      id: "5",
      question: "How do I extend my visa if needed?",
      answer:
        "To extend your visa, you need to apply through the FRRO (Foreigners Regional Registration Office) portal at least 60 days before your current visa expires. You'll need a letter from the university confirming your continued enrollment, your passport, current visa details, and proof of financial means. The International Student Office can guide you through this process.",
      category: "visa",
    },
  ])

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
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const categories = Array.from(new Set(faqs.map((faq) => faq.category)))

  return (
    <div className="container py-10">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
          <p className="text-gray-500 mt-2">
            Find answers to common questions about studying at Manipal University Jaipur as an international student.
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Add Question
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add a New FAQ</DialogTitle>
              <DialogDescription>
                Contribute to our knowledge base by adding a question and answer that might help other students.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <label htmlFor="question" className="text-sm font-medium">
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
                <label htmlFor="answer" className="text-sm font-medium">
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
              <Button onClick={handleAddFAQ}>Submit FAQ</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
        <Input
          placeholder="Search FAQs..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <h3 className="font-medium mb-3">Categories</h3>
          <div className="space-y-2">
            <Button
              variant={searchQuery === "" ? "default" : "outline"}
              className="w-full justify-start"
              onClick={() => setSearchQuery("")}
            >
              All Categories
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={searchQuery === category ? "default" : "outline"}
                className="w-full justify-start capitalize"
                onClick={() => setSearchQuery(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        <div className="md:col-span-3">
          {filteredFAQs.length > 0 ? (
            <Accordion type="single" collapsible className="w-full">
              {filteredFAQs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    <div className="pt-2 pb-4">
                      <p>{faq.answer}</p>
                      <div className="mt-4 flex items-center">
                        <span className="text-xs bg-blue-100 text-blue-800 rounded-full px-2 py-1 capitalize">
                          {faq.category}
                        </span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-500">No FAQs found matching your search.</p>
              <Button variant="outline" className="mt-4" onClick={() => setSearchQuery("")}>
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
