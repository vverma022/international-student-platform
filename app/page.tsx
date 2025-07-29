import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Book, HelpCircle, LifeBuoy, FileText, Bell } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header with improved navigation alignment */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">MUJ International</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/map" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Campus Map
            </Link>
            <Link href="/panorama" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Virtual Tours
            </Link>
            <Link href="/faq" className="text-sm font-medium hover:text-blue-600 transition-colors">
              FAQ
            </Link>
            <Link href="/support" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Support
            </Link>
            <Link href="/documents" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Documents
            </Link>
            <Link href="/reminders" className="text-sm font-medium hover:text-blue-600 transition-colors">
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
        {/* Hero section with improved centering and button alignment */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-4xl mx-auto">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Welcome to Manipal University Jaipur
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Your comprehensive guide to navigating life as an international student
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href="/getting-started">Get Started</Link>
                </Button>
                <Button variant="outline" asChild size="lg" className="w-full sm:w-auto">
                  <Link href="/support">Need Help?</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features section with improved grid alignment */}
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
            
            {/* Improved grid layout with better responsive behavior */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              <Card className="h-full flex flex-col">
                <CardHeader className="flex flex-row items-start gap-4">
                  <MapPin className="h-8 w-8 text-blue-500 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <CardTitle>Interactive Map</CardTitle>
                    <CardDescription>Navigate the campus with ease</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <p>Detailed university layout with markers for all important locations and routes.</p>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button asChild variant="ghost" className="w-full">
                    <Link href="/map">Explore Map</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="h-full flex flex-col">
                <CardHeader className="flex flex-row items-start gap-4">
                  <Book className="h-8 w-8 text-blue-500 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <CardTitle>Panoramic Views</CardTitle>
                    <CardDescription>Virtual campus tours</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <p>Virtual tours of buildings, allowing you to familiarize yourself with the space in advance.</p>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button asChild variant="ghost" className="w-full">
                    <Link href="/panorama">Take a Tour</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="h-full flex flex-col">
                <CardHeader className="flex flex-row items-start gap-4">
                  <HelpCircle className="h-8 w-8 text-blue-500 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <CardTitle>FAQ Knowledge Base</CardTitle>
                    <CardDescription>Find answers quickly</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <p>Comprehensive knowledge base with the ability to add new questions and answers.</p>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button asChild variant="ghost" className="w-full">
                    <Link href="/faq">View FAQs</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="h-full flex flex-col">
                <CardHeader className="flex flex-row items-start gap-4">
                  <LifeBuoy className="h-8 w-8 text-blue-500 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <CardTitle>Special Case Support</CardTitle>
                    <CardDescription>Help for unique situations</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <p>A service to help students find the necessary assistance in non-standard situations.</p>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button asChild variant="ghost" className="w-full">
                    <Link href="/support">Get Support</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="h-full flex flex-col">
                <CardHeader className="flex flex-row items-start gap-4">
                  <FileText className="h-8 w-8 text-blue-500 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <CardTitle>Document Guides</CardTitle>
                    <CardDescription>Step-by-step instructions</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <p>
                    Detailed instructions on obtaining required documents and certificates for international students.
                  </p>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button asChild variant="ghost" className="w-full">
                    <Link href="/documents">View Guides</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="h-full flex flex-col">
                <CardHeader className="flex flex-row items-start gap-4">
                  <Bell className="h-8 w-8 text-blue-500 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <CardTitle>Document Reminders</CardTitle>
                    <CardDescription>Never miss a deadline</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <p>
                    Automatic notifications about the need to extend medical certificates, visas, registration, and
                    other documents.
                  </p>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button asChild variant="ghost" className="w-full">
                    <Link href="/reminders">Set Reminders</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer with improved alignment */}
      <footer className="w-full border-t py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
            <p className="text-center text-sm leading-loose text-muted-foreground">
              © {new Date().getFullYear()} Manipal University Jaipur. All rights reserved.
            </p>
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
