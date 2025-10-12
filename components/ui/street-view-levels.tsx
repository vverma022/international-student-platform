"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface Level {
  id: string
  label: string
  position: {
    lat: number
    lng: number
  }
  embedSrc: string
}

interface StreetViewLevelsProps {
  height?: number
  levels: Level[]
  initialLevelId?: string
}

export function StreetViewLevels({ 
  height = 400, 
  levels, 
  initialLevelId 
}: StreetViewLevelsProps) {
  const [activeLevel, setActiveLevel] = useState(
    initialLevelId || levels[0]?.id || ""
  )

  const currentLevel = levels.find(level => level.id === activeLevel)

  return (
    <div className="w-full">
      {/* Level Selector */}
      <div className="flex flex-wrap gap-2 mb-4 justify-center">
        {levels.map((level) => (
          <Button
            key={level.id}
            variant={activeLevel === level.id ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveLevel(level.id)}
            className="text-xs"
          >
            {level.label}
          </Button>
        ))}
      </div>

      {/* Street View Embed */}
      {currentLevel && (
        <div className="w-full rounded-lg overflow-hidden shadow-lg">
          <iframe
            src={currentLevel.embedSrc}
            width="100%"
            height={height}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`${currentLevel.label} - 360° View`}
            className="w-full"
          />
        </div>
      )}

    </div>
  )
}
