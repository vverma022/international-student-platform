"use client"

import { MapContainer, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css"

/**
 * Location interface for map markers
 */
export interface MapLocation {
  id: string
  name: string
  position: [number, number]
  description: string
}

interface InteractiveMapProps {
  height?: number
  className?: string
}

// Manipal University Jaipur Campus center coordinates
// Located in Dehmi Kalan, Jaipur, Rajasthan
const MUJ_CENTER = [26.8437, 75.5645] as [number, number]

/**
 * Interactive Map Component
 * Displays a focused view of Manipal University Jaipur campus
 */
export function InteractiveMap({ 
  height = 600, 
  className = ""
}: InteractiveMapProps) {
  return (
    <div className={`w-full rounded-lg overflow-hidden shadow-lg ${className}`} style={{ height }}>
      <MapContainer
        center={MUJ_CENTER}
        zoom={17}
        minZoom={15}
        maxZoom={19}
        style={{ height: "100%", width: "100%" }}
        zoomControl={true}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  )
}
