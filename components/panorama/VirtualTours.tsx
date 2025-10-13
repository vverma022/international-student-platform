"use client"

import dynamic from "next/dynamic"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin } from "lucide-react"

const InteractiveMap = dynamic(
  () => import("@/components/ui/interactive-map").then((mod) => mod.InteractiveMap),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-[600px] bg-muted animate-pulse rounded-lg flex items-center justify-center">
        <MapPin className="w-12 h-12 text-muted-foreground animate-spin" />
      </div>
    )
  }
)

export default function VirtualTours() {
  const t = useTranslations('virtualTours');

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
            {t('title')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            {t('subtitle')}
          </p>
        </motion.div>

        <motion.div 
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Card className="overflow-hidden">
            <CardHeader className="bg-accent/50">
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                {t('cardTitle')}
              </CardTitle>
              <CardDescription>
                {t('cardDescription')}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <InteractiveMap height={600} />
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

