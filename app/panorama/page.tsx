"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building, ChevronLeft, ChevronRight, Maximize2, Info } from "lucide-react"

export default function PanoramaPage() {
  const [currentView, setCurrentView] = useState(0)

  const panoramaViews = [
    {
      id: "main-building",
      name: "Main Academic Building",
      description: "The central academic complex housing classrooms, labs, and faculty offices.",
    },
    {
      id: "library",
      name: "Central Library",
      description: "State-of-the-art library with digital resources and study spaces.",
    },
    {
      id: "hostel",
      name: "International Student Hostel",
      description: "Dedicated accommodation for international students with modern amenities.",
    },
    { id: "cafeteria", name: "Food Court", description: "Multi-cuisine food court offering diverse dining options." },
    {
      id: "sports",
      name: "Sports Complex",
      description: "Comprehensive sports facilities including indoor and outdoor courts.",
    },
  ]

  const nextView = () => {
    setCurrentView((prev) => (prev + 1) % panoramaViews.length)
  }

  const prevView = () => {
    setCurrentView((prev) => (prev - 1 + panoramaViews.length) % panoramaViews.length)
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-10 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Virtual Campus Tour</h1>
        <p className="text-gray-500">
          Explore Manipal University Jaipur through 360° panoramic views of key locations.
        </p>
      </div>

      <Tabs defaultValue="panorama" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2 mx-auto">
          <TabsTrigger value="panorama">Panoramic Views</TabsTrigger>
          <TabsTrigger value="list">Location List</TabsTrigger>
        </TabsList>
        <TabsContent value="panorama" className="mt-6">
          <div className="relative w-full h-[500px] bg-gray-100 rounded-lg overflow-hidden">
            {/* This would be replaced with an actual 360° panorama viewer in production */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center max-w-md mx-auto px-4">
                <Building className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-medium mb-2">{panoramaViews[currentView].name}</h3>
                <p className="text-gray-500 mb-6">{panoramaViews[currentView].description}</p>
                <Button>View in Full Screen</Button>
              </div>
            </div>

            {/* Navigation controls */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              <Button variant="outline" size="icon" onClick={prevView}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="bg-white/90 px-3 py-1 rounded-full text-sm">
                {currentView + 1} / {panoramaViews.length}
              </div>
              <Button variant="outline" size="icon" onClick={nextView}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Additional controls */}
            <div className="absolute top-4 right-4 flex gap-2">
              <Button variant="outline" size="icon" className="bg-white/90">
                <Info className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="bg-white/90">
                <Maximize2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Thumbnail navigation */}
          <div className="grid grid-cols-5 gap-2 mt-4 max-w-2xl mx-auto">
            {panoramaViews.map((view, index) => (
              <div
                key={view.id}
                className={`cursor-pointer rounded-md overflow-hidden border-2 transition-colors ${
                  index === currentView ? "border-blue-500" : "border-transparent hover:border-gray-300"
                }`}
                onClick={() => setCurrentView(index)}
              >
                <div className="bg-gray-200 h-16 flex items-center justify-center">
                  <Building className="h-6 w-6 text-gray-500" />
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="list" className="mt-6">
          <div className="grid gap-4 max-w-4xl mx-auto">
            {panoramaViews.map((view, index) => (
              <Card key={view.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-4 flex items-start gap-4">
                    <div className="bg-gray-200 p-4 rounded-md flex-shrink-0">
                      <Building className="h-8 w-8 text-gray-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium mb-1">{view.name}</h3>
                      <p className="text-sm text-gray-500 mb-3">{view.description}</p>
                      <Button
                        size="sm"
                        onClick={() => {
                          setCurrentView(index)
                          document
                            .querySelector('[value="panorama"]')
                            ?.dispatchEvent(new MouseEvent("click", { bubbles: true }))
                        }}
                      >
                        View Panorama
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
