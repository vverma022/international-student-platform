"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Navigation, School, Home, Coffee, Book, Utensils } from "lucide-react"

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
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Interactive Campus Map</h1>
      <p className="text-gray-500 mb-8">
        Explore Manipal University Jaipur campus with our interactive map. Click on markers to learn more about each
        location.
      </p>

      <Tabs defaultValue="map" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="map">Map View</TabsTrigger>
          <TabsTrigger value="list">List View</TabsTrigger>
        </TabsList>
        <TabsContent value="map" className="mt-6">
          <div className="relative w-full h-[600px] bg-gray-100 rounded-lg overflow-hidden">
            {/* This would be replaced with an actual map component in production */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-500 mb-4">
                  Interactive map would be implemented here using a mapping library like Leaflet or Google Maps API
                </p>
                <Button>View Full Screen</Button>
              </div>
            </div>

            {/* Sample map markers */}
            {locations.map((location) => (
              <Button
                key={location.id}
                variant="outline"
                size="icon"
                className={`absolute rounded-full ${getPositionClass(location.id)}`}
                onClick={() => setSelectedLocation(location.id)}
              >
                <MapPin className="h-4 w-4" />
                <span className="sr-only">{location.name}</span>
              </Button>
            ))}

            {/* Location info card */}
            {selectedLocation && (
              <Card className="absolute bottom-4 left-4 w-80">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    {locations.find((l) => l.id === selectedLocation)?.icon}
                    <h3 className="font-medium">{locations.find((l) => l.id === selectedLocation)?.name}</h3>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">
                    {locations.find((l) => l.id === selectedLocation)?.description}
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex items-center gap-1">
                      <Navigation className="h-3 w-3" />
                      Directions
                    </Button>
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
          <div className="grid gap-4">
            {locations.map((location) => (
              <Card key={location.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-4 flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">{location.icon}</div>
                    <div>
                      <h3 className="font-medium mb-1">{location.name}</h3>
                      <p className="text-sm text-gray-500 mb-3">{location.description}</p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex items-center gap-1">
                          <Navigation className="h-3 w-3" />
                          Directions
                        </Button>
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

// Helper function to position markers on the map
function getPositionClass(id: string): string {
  switch (id) {
    case "admin":
      return "top-1/4 left-1/2 transform -translate-x-1/2"
    case "hostel":
      return "top-1/3 right-1/4"
    case "library":
      return "bottom-1/3 left-1/3"
    case "cafeteria":
      return "bottom-1/4 right-1/3"
    case "cafe":
      return "top-1/2 left-1/4"
    default:
      return ""
  }
}
