"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Navigation, School, Home, Coffee, Book, Utensils } from "lucide-react"
import { GoogleMap } from "@/components/ui/google-map"

export default function MapPage() {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)

  const locations = [
    {
      id: "admin",
      name: "Administrative Block",
      icon: <School className="h-5 w-5" />,
      description: "Main administrative offices, international student office, and admission department.",
    },
    {
      id: "hostel",
      name: "International Hostel",
      icon: <Home className="h-5 w-5" />,
      description: "Accommodation for international students with modern amenities.",
    },
    {
      id: "library",
      name: "Central Library",
      icon: <Book className="h-5 w-5" />,
      description: "Main library with study areas and extensive collection of books and digital resources.",
    },
    {
      id: "cafeteria",
      name: "Food Court",
      icon: <Utensils className="h-5 w-5" />,
      description: "Various food options including international cuisines.",
    },
    {
      id: "cafe",
      name: "Campus Café",
      icon: <Coffee className="h-5 w-5" />,
      description: "Coffee shop and snack bar for quick refreshments.",
    },
  ]

  return (
    <div className="container mx-auto px-4 md:px-6 py-10 max-w-7xl">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Interactive Campus Map</h1>
            <p className="text-gray-500">
              Explore Manipal University Jaipur campus with our interactive map. Click on markers to learn more about each
              location.
            </p>
          </div>
          <Button 
            className="bg-blue-500 hover:bg-blue-600 text-white flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault()
              // OSRM demo URL with MUJ coordinates as center
              const osrmUrl = `https://map.project-osrm.org/?z=17&center=26.842495%2C75.564561&loc=&loc=&hl=en&alt=0&srv=2`
              window.open(osrmUrl, '_blank')
            }}
          >
            <Navigation className="h-4 w-4" />
            Get Directions
          </Button>
        </div>
      </div>

      <Tabs defaultValue="map" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2 mx-auto">
          <TabsTrigger value="map">Map View</TabsTrigger>
          <TabsTrigger value="list">List View</TabsTrigger>
        </TabsList>
        <TabsContent value="map" className="mt-6">
          <div className="relative">
            <GoogleMap height={600} />
            
            {/* Location info card */}
            {selectedLocation && (
              <Card className="absolute bottom-4 left-4 w-80 z-10">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    {locations.find((l) => l.id === selectedLocation)?.icon}
                    <h3 className="font-medium">{locations.find((l) => l.id === selectedLocation)?.name}</h3>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">
                    {locations.find((l) => l.id === selectedLocation)?.description}
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      More Info
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>
        <TabsContent value="list" className="mt-6">
          <div className="grid gap-4 max-w-4xl mx-auto">
            {locations.map((location) => (
              <Card key={location.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-4 flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">{location.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-medium mb-1">{location.name}</h3>
                      <p className="text-sm text-gray-500 mb-3">{location.description}</p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          More Info
                        </Button>
                      </div>
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
