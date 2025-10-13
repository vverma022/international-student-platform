"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { useTranslations } from "next-intl"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Map, 
  Building2, 
  GraduationCap, 
  Utensils, 
  Home, 
  Library,
  MapPin,
  ExternalLink,
  Navigation
} from "lucide-react"

const InteractiveMap = dynamic(
  () => import("@/components/ui/interactive-map").then((mod) => mod.InteractiveMap),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-[600px] bg-muted animate-pulse rounded-lg flex items-center justify-center">
        <Map className="w-12 h-12 text-muted-foreground animate-spin" />
      </div>
    )
  }
)

const tourLocations = [
  {
    id: "academic-block-a",
    name: "Academic Block A",
    category: "academic",
    description: "Main academic building with lecture halls and labs",
    icon: GraduationCap,
    streetViewUrl: "https://www.google.com/maps/@26.8440712,75.5652342,3a,75y,90t/data=!3m6!1e1!3m4!1s...",
    virtualTourUrl: null,
    position: [26.8440712, 75.5652342] as [number, number]
  },
  {
    id: "library",
    name: "Central Library",
    category: "academic",
    description: "Multi-story library with extensive collection and study areas",
    icon: Library,
    streetViewUrl: null,
    virtualTourUrl: null,
    position: [26.8445123, 75.5648234] as [number, number]
  },
  {
    id: "cafeteria",
    name: "Main Cafeteria",
    category: "dining",
    description: "Central dining facility with diverse food options",
    icon: Utensils,
    streetViewUrl: null,
    virtualTourUrl: null,
    position: [26.8442456, 75.5655789] as [number, number]
  },
  {
    id: "boys-hostel",
    name: "Boys Hostel Block",
    category: "residential",
    description: "Modern hostel facilities with all amenities",
    icon: Home,
    streetViewUrl: null,
    virtualTourUrl: null,
    position: [26.8438901, 75.5660123] as [number, number]
  },
  {
    id: "girls-hostel",
    name: "Girls Hostel Block",
    category: "residential",
    description: "Comfortable accommodation with security",
    icon: Home,
    streetViewUrl: null,
    virtualTourUrl: null,
    position: [26.8447234, 75.5643567] as [number, number]
  },
  {
    id: "admin-block",
    name: "Administration Block",
    category: "administrative",
    description: "Main administrative offices and services",
    icon: Building2,
    streetViewUrl: null,
    virtualTourUrl: null,
    position: [26.8441567, 75.5650456] as [number, number]
  }
]

const categoryColors = {
  academic: "bg-blue-500",
  dining: "bg-orange-500",
  residential: "bg-green-500",
  administrative: "bg-purple-500"
}

const categoryLabels = {
  academic: "Academic",
  dining: "Dining",
  residential: "Residential",
  administrative: "Administrative"
}

export default function VirtualTours() {
  const t = useTranslations('virtualTours');
  const [selectedLocation, setSelectedLocation] = useState(tourLocations[0])
  const [activeTab, setActiveTab] = useState("map")

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Virtual Campus Tours
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Explore Manipal University Jaipur campus from anywhere in the world. Navigate through our interactive 3D map and experience virtual tours of key locations.
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2 mx-auto mb-6">
            <TabsTrigger value="map" className="flex items-center gap-2">
              <Map className="w-4 h-4" />
              <span>3D Map</span>
            </TabsTrigger>
            <TabsTrigger value="locations" className="flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              <span>Locations</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="map" className="mt-0">
            <div className="grid lg:grid-cols-3 gap-6">
              <motion.div 
                className="lg:col-span-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Card className="overflow-hidden">
                  <CardHeader className="bg-accent/50">
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      Interactive Campus Map
                    </CardTitle>
                    <CardDescription>
                      Click on markers to explore different campus locations
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <InteractiveMap height={600} />
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div 
                className="lg:col-span-1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedLocation.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="sticky top-24">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <selectedLocation.icon className="w-8 h-8 text-primary" />
                          <Badge className={`${categoryColors[selectedLocation.category as keyof typeof categoryColors]} text-white`}>
                            {categoryLabels[selectedLocation.category as keyof typeof categoryLabels]}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl">{selectedLocation.name}</CardTitle>
                        <CardDescription>{selectedLocation.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium text-muted-foreground">Actions</h4>
                          <div className="flex flex-col gap-2">
                            {selectedLocation.streetViewUrl && (
                              <Button variant="default" className="w-full" asChild>
                                <a href={selectedLocation.streetViewUrl} target="_blank" rel="noopener noreferrer">
                                  <Navigation className="w-4 h-4 mr-2" />
                                  Street View
                                </a>
                              </Button>
                            )}
                            {selectedLocation.virtualTourUrl && (
                              <Button variant="secondary" className="w-full" asChild>
                                <a href={selectedLocation.virtualTourUrl} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="w-4 h-4 mr-2" />
                                  Virtual Tour
                                </a>
                              </Button>
                            )}
                            <Button 
                              variant="outline" 
                              className="w-full"
                              onClick={() => {
                                const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${selectedLocation.position[0]},${selectedLocation.position[1]}`;
                                window.open(googleMapsUrl, '_blank');
                              }}
                            >
                              <MapPin className="w-4 h-4 mr-2" />
                              Get Directions
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="locations" className="mt-0">
            <motion.div 
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {tourLocations.map((location, index) => (
                <motion.div
                  key={location.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -4 }}
                >
                  <Card 
                    className="cursor-pointer hover:shadow-lg transition-shadow duration-300 h-full"
                    onClick={() => {
                      setSelectedLocation(location)
                      setActiveTab("map")
                    }}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <location.icon className="w-8 h-8 text-primary" />
                        <Badge className={`${categoryColors[location.category as keyof typeof categoryColors]} text-white`}>
                          {categoryLabels[location.category as keyof typeof categoryLabels]}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">{location.name}</CardTitle>
                      <CardDescription className="line-clamp-2">{location.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full" size="sm">
                        <MapPin className="w-4 h-4 mr-2" />
                        View on Map
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

