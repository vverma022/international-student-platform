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
        className="text-blue-600 hover:text-blue-800 underline"
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
        className="text-blue-600 hover:text-blue-800 underline"
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
          <a href="https://whatsapp.com/channel/0029Vaw1sQ989inot5JLMC2A" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
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
          <a href="https://play.google.com/store/apps/details?id=com.app.spacebasic&hl=en_IN" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
            Android
          </a>
          {" "}and{" "}
          <a href="https://apps.apple.com/in/app/spacebasic/id1217386342" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
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
          <a href="https://mujslcm.jaipur.manipal.edu" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
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
      <ul className="list-disc list-inside mt-2">
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