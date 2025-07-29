import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Book, HelpCircle, LifeBuoy, FileText, Bell } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header with improved navigation alignment */}
<header className="sticky top-0 z-50 w-full border-b bg-white backdrop-blur supports-[backdrop-filter]:bg-white">  <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
    <Link href="/" className="flex items-center gap-3">
      <Image src="/logo.png" alt="MUJ Logo" width={60} height={60} />
      <span className="text-2xl font-bold text-[#D14F1B]">MUJ International</span>
    </Link>

    <nav className="hidden md:flex items-center gap-6">
      <Link
        href="/map"
        className="text-base font-medium text-[#D14F1B] hover:text-black transition-colors"
      >
        Campus Map
      </Link>
      <Link
        href="/panorama"
        className="text-base font-medium text-[#D14F1B] hover:text-black transition-colors"
      >
        Virtual Tours
      </Link>
      <Link
        href="/faq"
        className="text-base font-medium text-[#D14F1B] hover:text-black transition-colors"
      >
        FAQ
      </Link>
      <Link
        href="/support"
        className="text-base font-medium text-[#D14F1B] hover:text-black transition-colors"
      >
        Support
      </Link>
      <Link
        href="/documents"
        className="text-base font-medium text-[#D14F1B] hover:text-black transition-colors"
      >
        Documents
      </Link>
      <Link
        href="/reminders"
        className="text-base font-medium text-[#D14F1B] hover:text-black transition-colors"
      >
        Reminders
      </Link>
    </nav>

    {/* Mobile menu button for responsive design */}
    <button className="md:hidden p-2">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div>
</header>


      <main className="flex-1">
     <section className="relative w-full h-[80vh] overflow-hidden">
  <div
    className="absolute inset-0 bg-cover bg-center scale-110 blur-sm brightness-75"
    style={{ backgroundImage: "url('/muj-banner.png')" }}
  />

  <div className="absolute inset-0 bg-white bg-opacity-10" />

  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-6 text-white">
    <div className="space-y-4 max-w-4xl">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
        Welcome to <span className="text-[#D14F1B]">Manipal University Jaipur</span>
      </h1>
      <p className="mx-auto max-w-[700px] text-white/90 md:text-xl">
        Your comprehensive guide to navigating life as an international student
      </p>
    </div>
    <div className="flex flex-col sm:flex-row gap-4 mt-6">
      <Button asChild size="lg" className="w-full sm:w-auto">
        <Link href="/getting-started">Get Started</Link>
      </Button>
      <Button
        asChild
        size="lg"
        className="w-full sm:w-auto border border-white text-white bg-transparent hover:bg-white hover:text-black"
      >
        <Link href="/support">Need Help?</Link>
      </Button>
    </div>
  </div>
</section>

        {/* Features section */}
<section className="w-full py-12 md:py-24 lg:py-32">
  <div className="container mx-auto px-4 md:px-6">
    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Features</h2>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Everything you need to make your transition to MUJ smooth and successful
        </p>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {/* Cards */}
      {[{
        icon: <MapPin className="h-8 w-8 mt-1 flex-shrink-0" style={{ color: 'rgb(208, 79, 27)' }} />,
        title: "Interactive Map",
        desc: "Navigate the campus with ease",
        content: "Detailed university layout with markers for all important locations and routes.",
        link: "/map",
        linkText: "Explore Map"
      }, {
        icon: <Book className="h-8 w-8 mt-1 flex-shrink-0" style={{ color: 'rgb(208, 79, 27)' }} />,
        title: "Panoramic Views",
        desc: "Virtual campus tours",
        content: "Virtual tours of buildings, allowing you to familiarize yourself with the space in advance.",
        link: "/panorama",
        linkText: "Take a Tour"
      }, {
        icon: <HelpCircle className="h-8 w-8 mt-1 flex-shrink-0" style={{ color: 'rgb(208, 79, 27)' }} />,
        title: "FAQ Knowledge Base",
        desc: "Find answers quickly",
        content: "Comprehensive knowledge base with the ability to add new questions and answers.",
        link: "/faq",
        linkText: "View FAQs"
      }, {
        icon: <LifeBuoy className="h-8 w-8 mt-1 flex-shrink-0" style={{ color: 'rgb(208, 79, 27)' }} />,
        title: "Special Case Support",
        desc: "Help for unique situations",
        content: "A service to help students find the necessary assistance in non-standard situations.",
        link: "/support",
        linkText: "Get Support"
      }, {
        icon: <FileText className="h-8 w-8 mt-1 flex-shrink-0" style={{ color: 'rgb(208, 79, 27)' }} />,
        title: "Document Guides",
        desc: "Step-by-step instructions",
        content: "Detailed instructions on obtaining required documents and certificates for international students.",
        link: "/documents",
        linkText: "View Guides"
      }, {
        icon: <Bell className="h-8 w-8 mt-1 flex-shrink-0" style={{ color: 'rgb(208, 79, 27)' }} />,
        title: "Document Reminders",
        desc: "Never miss a deadline",
        content: "Automatic notifications about the need to extend medical certificates, visas, registration, and other documents.",
        link: "/reminders",
        linkText: "Set Reminders"
      }].map(({ icon, title, desc, content, link, linkText }, idx) => (
        <Card key={idx} className="h-full flex flex-col">
          <CardHeader className="flex flex-row items-start gap-4">
            {icon}
            <div className="flex-1">
              <CardTitle>{title}</CardTitle>
              <CardDescription>{desc}</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="flex-1">
            <p>{content}</p>
          </CardContent>
          <CardFooter className="mt-auto">
            <Button asChild variant="ghost" className="w-full">
              <Link href={link}>{linkText}</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  </div>
</section>

      </main>

      {/* Footer*/}
      <footer className="w-full border-t py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="MUJ Logo" width={30} height={30} />
              <p className="text-center text-sm leading-loose text-muted-foreground">
                © {new Date().getFullYear()} Manipal University Jaipur. All rights reserved.
              </p>
            </div>
            <div className="flex gap-4">
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4">
                Terms
              </Link>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4">
                Privacy
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
