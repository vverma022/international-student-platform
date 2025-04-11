import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Book, HelpCircle, LifeBuoy, FileText, Bell } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">MUJ International</span>
          </Link>
          <nav className="ml-auto flex gap-4">
            <Link href="/map" className="text-sm font-medium">
              Campus Map
            </Link>
            <Link href="/panorama" className="text-sm font-medium">
              Virtual Tours
            </Link>
            <Link href="/faq" className="text-sm font-medium">
              FAQ
            </Link>
            <Link href="/support" className="text-sm font-medium">
              Support
            </Link>
            <Link href="/documents" className="text-sm font-medium">
              Documents
            </Link>
            <Link href="/reminders" className="text-sm font-medium">
              Reminders
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Welcome to Manipal University Jaipur
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Your comprehensive guide to navigating life as an international student
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="/getting-started">Get Started</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/support">Need Help?</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Features</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Everything you need to make your transition to MUJ smooth and successful
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <MapPin className="h-8 w-8 text-blue-500" />
                  <div>
                    <CardTitle>Interactive Map</CardTitle>
                    <CardDescription>Navigate the campus with ease</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>Detailed university layout with markers for all important locations and routes.</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="w-full">
                    <Link href="/map">Explore Map</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Book className="h-8 w-8 text-blue-500" />
                  <div>
                    <CardTitle>Panoramic Views</CardTitle>
                    <CardDescription>Virtual campus tours</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>Virtual tours of buildings, allowing you to familiarize yourself with the space in advance.</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="w-full">
                    <Link href="/panorama">Take a Tour</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <HelpCircle className="h-8 w-8 text-blue-500" />
                  <div>
                    <CardTitle>FAQ Knowledge Base</CardTitle>
                    <CardDescription>Find answers quickly</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>Comprehensive knowledge base with the ability to add new questions and answers.</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="w-full">
                    <Link href="/faq">View FAQs</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <LifeBuoy className="h-8 w-8 text-blue-500" />
                  <div>
                    <CardTitle>Special Case Support</CardTitle>
                    <CardDescription>Help for unique situations</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>A service to help students find the necessary assistance in non-standard situations.</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="w-full">
                    <Link href="/support">Get Support</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <FileText className="h-8 w-8 text-blue-500" />
                  <div>
                    <CardTitle>Document Guides</CardTitle>
                    <CardDescription>Step-by-step instructions</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>
                    Detailed instructions on obtaining required documents and certificates for international students.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="w-full">
                    <Link href="/documents">View Guides</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Bell className="h-8 w-8 text-blue-500" />
                  <div>
                    <CardTitle>Document Reminders</CardTitle>
                    <CardDescription>Never miss a deadline</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>
                    Automatic notifications about the need to extend medical certificates, visas, registration, and
                    other documents.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="w-full">
                    <Link href="/reminders">Set Reminders</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
          <p className="text-center text-sm leading-loose text-muted-foreground">
            © {new Date().getFullYear()} Manipal University Jaipur. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground underline underline-offset-4">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground underline underline-offset-4">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground underline underline-offset-4">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
