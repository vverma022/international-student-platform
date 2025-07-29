import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Book, HelpCircle, LifeBuoy, FileText, Bell, ChevronRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Enhanced Header with minimal design */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/95">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-3 group">
            <Image 
              src="/logo.png" 
              alt="MUJ Logo" 
              width={60} 
              height={60}
              className="transition-transform duration-200 group-hover:scale-105" 
            />
            <span className="text-2xl font-semibold text-gray-900 tracking-tight">MUJ International</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {[
              { href: "/map", label: "Campus Map" },
              { href: "/panorama", label: "Virtual Tours" },
              { href: "/faq", label: "FAQ" },
              { href: "/support", label: "Support" },
              { href: "/documents", label: "Documents" },
              { href: "/reminders", label: "Reminders" }
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-gray-700 hover:text-gray-900 transition-all duration-200 ease-in-out relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Enhanced mobile menu button */}
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <main className="flex-1">
        {/* Enhanced Hero Section */}
        <section className="relative w-full h-[85vh] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center scale-110 blur-sm brightness-75"
            style={{ backgroundImage: "url('/muj-banner.png')" }}
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />

          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-6 text-white">
            <div className="space-y-6 max-w-5xl animate-fade-in">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                Welcome to{" "}
                <span className="text-white bg-gray-900/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                  Manipal University Jaipur
                </span>
              </h1>
              <p className="mx-auto max-w-[800px] text-white/95 md:text-xl lg:text-2xl font-light leading-relaxed">
                Your comprehensive guide to navigating life as an international student. 
                Discover campus resources, connect with support, and make the most of your academic journey.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Button asChild size="lg" className="w-full sm:w-auto bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-3 text-lg transition-all duration-200 hover:scale-105">
                <Link href="/getting-started" className="flex items-center gap-2">
                  Get Started
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto border-2 border-white text-white bg-transparent hover:bg-white hover:text-gray-900 font-semibold px-8 py-3 text-lg transition-all duration-200 hover:scale-105"
              >
                <Link href="/support">Need Help?</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Enhanced Features Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-balance text-gray-900">
                  Everything You Need
                </h2>
                <p className="mx-auto max-w-[800px] text-gray-600 md:text-xl lg:text-2xl font-light leading-relaxed">
                  Comprehensive tools and resources to make your transition to MUJ smooth and successful
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Enhanced Feature Cards */}
              {[{
                icon: <MapPin className="h-10 w-10 text-gray-700" />,
                title: "Interactive Campus Map",
                desc: "Navigate with confidence",
                content: "Detailed university layout with interactive markers for all important locations, routes, and facilities across the campus.",
                link: "/map",
                linkText: "Explore Map"
              }, {
                icon: <Book className="h-10 w-10 text-gray-700" />,
                title: "Virtual Campus Tours",
                desc: "Experience before arrival",
                content: "Immersive virtual tours of buildings and facilities, allowing you to familiarize yourself with the campus environment.",
                link: "/panorama",
                linkText: "Take a Tour"
              }, {
                icon: <HelpCircle className="h-10 w-10 text-gray-700" />,
                title: "Comprehensive FAQ",
                desc: "Find answers instantly",
                content: "Extensive knowledge base with searchable questions and answers covering all aspects of international student life.",
                link: "/faq",
                linkText: "View FAQs"
              }, {
                icon: <LifeBuoy className="h-10 w-10 text-gray-700" />,
                title: "Specialized Support",
                desc: "Help for unique situations",
                content: "Dedicated support service to assist students with non-standard situations and complex challenges.",
                link: "/support",
                linkText: "Get Support"
              }, {
                icon: <FileText className="h-10 w-10 text-gray-700" />,
                title: "Documentation Guides",
                desc: "Step-by-step assistance",
                content: "Detailed instructions and checklists for obtaining required documents, certificates, and completing formalities.",
                link: "/documents",
                linkText: "View Guides"
              }, {
                icon: <Bell className="h-10 w-10 text-gray-700" />,
                title: "Smart Reminders",
                desc: "Never miss deadlines",
                content: "Intelligent notification system for document renewals, visa extensions, and important academic deadlines.",
                link: "/reminders",
                linkText: "Set Reminders"
              }].map(({ icon, title, desc, content, link, linkText }, idx) => (
                <Card key={idx} className="h-full flex flex-col bg-white border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 group">
                  <CardHeader className="flex flex-row items-start gap-4 pb-4">
                    <div className="p-3 bg-gray-100 rounded-xl group-hover:bg-gray-200 transition-colors duration-200">
                      {icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-semibold text-gray-900">{title}</CardTitle>
                      <CardDescription className="text-gray-600 font-medium">{desc}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 pb-4">
                    <p className="text-gray-700 leading-relaxed">{content}</p>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button asChild variant="ghost" className="w-full group-hover:bg-gray-100 transition-all duration-200 font-semibold text-gray-700">
                      <Link href={link} className="flex items-center justify-center gap-2">
                        {linkText}
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer className="w-full border-t bg-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:justify-between">
            <div className="flex items-center gap-3">
              <Image 
                src="/logo.png" 
                alt="MUJ Logo" 
                width={40} 
                height={40}
                className="rounded-lg shadow-sm" 
              />
              <div>
                <p className="text-sm font-medium text-gray-900">Manipal University Jaipur</p>
                <p className="text-xs text-gray-600">International Student Platform</p>
              </div>
            </div>
            <div className="flex gap-6">
              {[
                { href: "/terms", label: "Terms" },
                { href: "/privacy", label: "Privacy" },
                { href: "/contact", label: "Contact" }
              ].map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Manipal University Jaipur. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
