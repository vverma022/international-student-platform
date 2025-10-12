"use client"

import { useEffect, useState } from "react"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-routing-machine"
import "leaflet-routing-machine/dist/leaflet-routing-machine.css"

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
})

interface InteractiveMapProps {
  height?: number
  className?: string
}

// OSRM Configuration
const OSRM_FOOT_URL = process.env.NEXT_PUBLIC_OSRM_FOOT_URL || 'https://router.project-osrm.org/route/v1'

// MUJ Campus coordinates
const MUJ_CENTER = [26.8441, 75.5635] as [number, number]

// Campus locations
const campusLocations = [
  {
    id: "admin",
    name: "Administrative Block",
    position: [26.8441, 75.5635] as [number, number],
    description: "Main administrative offices, international student office, and admission department."
  },
  {
    id: "hostel",
    name: "International Hostel",
    position: [26.8445, 75.5640] as [number, number],
    description: "Accommodation for international students with modern amenities."
  },
  {
    id: "library",
    name: "Central Library",
    position: [26.8438, 75.5632] as [number, number],
    description: "Main library with study areas and extensive collection of books and digital resources."
  },
  {
    id: "cafeteria",
    name: "Food Court",
    position: [26.8435, 75.5638] as [number, number],
    description: "Various food options including international cuisines."
  },
  {
    id: "cafe",
    name: "Campus Café",
    position: [26.8443, 75.5630] as [number, number],
    description: "Coffee shop and snack bar for quick refreshments."
  },
]

// Routing component
function RoutingMachine({ start, end }: { start: [number, number], end: [number, number] }) {
  const map = useMap()

  useEffect(() => {
    if (!map) return

    const osrm = L.Routing.osrmv1({
      serviceUrl: OSRM_FOOT_URL,
      profile: 'foot',
      timeout: 30 * 1000,
    })

    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(start[0], start[1]),
        L.latLng(end[0], end[1])
      ],
      router: osrm,
      lineOptions: {
        styles: [{ color: '#3b82f6', weight: 4, opacity: 0.7 }]
      },
      addWaypoints: false,
      draggableWaypoints: false,
      fitSelectedRoutes: true,
      showAlternatives: false,
      createMarker: () => null // Hide default markers
    }).addTo(map)

    return () => {
      map.removeControl(routingControl)
    }
  }, [map, start, end])

  return null
}

export function InteractiveMap({ height = 600, className = "" }: InteractiveMapProps) {
  const [selectedLocation, setSelectedLocation] = useState<typeof campusLocations[0] | null>(null)
  const [routingEnabled, setRoutingEnabled] = useState(false)
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null)

  // Get user's current location
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation([position.coords.latitude, position.coords.longitude])
          setRoutingEnabled(true)
        },
        (error) => {
          console.error("Error getting location:", error)
          // Fallback to MUJ center if geolocation fails
          setUserLocation(MUJ_CENTER)
          setRoutingEnabled(true)
        }
      )
    } else {
      // Fallback to MUJ center if geolocation not supported
      setUserLocation(MUJ_CENTER)
      setRoutingEnabled(true)
    }
  }

  return (
    <div className={`w-full rounded-lg overflow-hidden shadow-lg ${className}`} style={{ height }}>
      <MapContainer
        center={MUJ_CENTER}
        zoom={17}
        style={{ height: "100%", width: "100%" }}
        zoomControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* Campus location markers */}
        {campusLocations.map((location) => (
          <Marker
            key={location.id}
            position={location.position}
            eventHandlers={{
              click: () => setSelectedLocation(location),
            }}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-semibold text-sm mb-1">{location.name}</h3>
                <p className="text-xs text-gray-600 mb-2">{location.description}</p>
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded text-xs hover:bg-blue-600"
                  onClick={() => {
                    setSelectedLocation(location)
                    if (!userLocation) getUserLocation()
                  }}
                >
                  Get Directions
                </button>
              </div>
            </Popup>
          </Marker>
        ))}

        {/* User location marker */}
        {userLocation && (
          <Marker
            position={userLocation}
            icon={L.divIcon({
              className: 'custom-div-icon',
              html: `<div style="background-color: #10b981; width: 12px; height: 12px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>`,
              iconSize: [16, 16],
              iconAnchor: [8, 8]
            })}
          >
            <Popup>Your Location</Popup>
          </Marker>
        )}

        {/* Routing */}
        {routingEnabled && selectedLocation && userLocation && (
          <RoutingMachine start={userLocation} end={selectedLocation.position} />
        )}
      </MapContainer>

      {/* Control panel */}
      <div className="absolute top-4 right-4 z-[1000] bg-white p-3 rounded-lg shadow-lg">
        <button
          onClick={getUserLocation}
          className="w-full bg-blue-500 text-white px-3 py-2 rounded text-sm hover:bg-blue-600 transition-colors"
        >
          {userLocation ? "Update My Location" : "Get My Location"}
        </button>
        {routingEnabled && (
          <button
            onClick={() => setRoutingEnabled(false)}
            className="w-full mt-2 bg-gray-500 text-white px-3 py-2 rounded text-sm hover:bg-gray-600 transition-colors"
          >
            Clear Route
          </button>
        )}
      </div>
    </div>
  )
}
