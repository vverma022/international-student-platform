"use client"

import { useRef } from "react"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { StreetViewLevels } from "@/components/ui/street-view-levels"
import { Building2 } from "lucide-react"

export default function VirtualTours() {
  const t = useTranslations('virtualTours');
  const campusViewRef = useRef<HTMLElement>(null)

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        {/* Header Section */}
        <motion.div 
          className="mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
              className="inline-flex items-center justify-center p-4 rounded-2xl bg-primary/10 mb-4"
            >
              <Building2 className="h-12 w-12 text-primary" />
            </motion.div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t('title')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* 360 Degree View Section */}
        <motion.section
          ref={campusViewRef}
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-foreground">
            {t('panoramaTitle')}
          </h2>
        
          <div className="w-full max-w-6xl mx-auto">
            <StreetViewLevels
              height={500}
              levels={[
                { 
                  id: 'dome', 
                  label: t('locations.dome'), 
                  position: { lat: 26.844071, lng: 75.565228 }, 
                  embedSrc: 'https://www.google.com/maps/embed?pb=!4v1755535881817!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQzhxNVhCYnc.!2m2!1d26.84407091446291!2d75.56522833275928!3f30.98!4f4.6299999999999955!5f0.5970117501821992' 
                },
                { 
                  id: 'library', 
                  label: t('locations.library'), 
                  position: { lat: 26.8440607, lng: 75.5652878 }, 
                  embedSrc: 'https://www.google.com/maps/embed?pb=!4v1755534163449!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQzhxNVhaTWc.!2m2!1d26.84406065003139!2d75.56528784853882!3f202.2794505640211!4f-3.185439736735333!5f0.7820865974627469' 
                },
                { 
                  id: 'ab1', 
                  label: t('locations.ab1'), 
                  position: { lat: 26.84409899371046, lng: 75.56513888138585 }, 
                  embedSrc: 'https://www.google.com/maps/embed?pb=!4v1755536705351!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQzhxNDJYT3c.!2m2!1d26.84409899371046!2d75.56513888138585!3f179.8570992173503!4f4.159413701647793!5f0.4000000000000002' 
                },
                { 
                  id: 'ab2', 
                  label: t('locations.ab2'), 
                  position: { lat: 26.84409899371046, lng: 75.56513888138585 }, 
                  embedSrc: 'https://www.google.com/maps/embed?pb=!4v1755536705351!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQzhxNDJYT3c.!2m2!1d26.84409899371046!2d75.56513888138585!3f179.8570992173503!4f4.159413701647793!5f0.4000000000000002' 
                },
                { 
                  id: 'aic', 
                  label: t('locations.aic'), 
                  position: { lat: 26.84385521744164, lng: 75.56523428433832 }, 
                  embedSrc: 'https://www.google.com/maps/embed?pb=!4v1755537330235!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQzhxLVdrMlFF!2m2!1d26.84385521744164!2d75.56523428433832!3f39.56364515148488!4f-10.239939263007102!5f0.7820865974627469' 
                },
                { 
                  id: 'conference', 
                  label: t('locations.conferenceRoom'), 
                  position: { lat: 26.84385433771263, lng: 75.5652359720995 }, 
                  embedSrc: 'https://www.google.com/maps/embed?pb=!4v1755537377068!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQzhxXzN3Z1FF!2m2!1d26.84385433771263!2d75.5652359720995!3f352.4658820364628!4f0.1660954161468169!5f0.7820865974627469' 
                },
                { 
                  id: 'finance', 
                  label: t('locations.finance'), 
                  position: { lat: 26.84388215573711, lng: 75.56523384019064 }, 
                  embedSrc: 'https://www.google.com/maps/embed?pb=!4v1755537436240!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQzhxOTM1YVE.!2m2!1d26.84388215573711!2d75.56523384019064!3f352.99579179300775!4f-16.208577209374965!5f0.7820865974627469' 
                },
                { 
                  id: 'gym', 
                  label: t('locations.gym'), 
                  position: { lat: 26.84388183829127, lng: 75.56522993169098 }, 
                  embedSrc: 'https://www.google.com/maps/embed?pb=!4v1755537469687!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQzhxOTM1Ymc.!2m2!1d26.84388183829127!2d75.56522993169098!3f25.33257048692999!4f-18.64588226498482!5f0.7820865974627469' 
                },
                { 
                  id: 'oldMess', 
                  label: t('locations.oldMess'), 
                  position: { lat: 26.844071, lng: 75.565228 }, 
                  embedSrc: 'https://www.google.com/maps/embed?pb=!4v1755535881817!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQzhxNVhCYnc.!2m2!1d26.84407091446291!2d75.56522833275928!3f30.98!4f4.6299999999999955!5f0.5970117501821992' 
                },
                { 
                  id: 'gameRoom', 
                  label: t('locations.gameRoom'), 
                  position: { lat: 26.84385521744164, lng: 75.56523428433832 }, 
                  embedSrc: 'https://www.google.com/maps/embed?pb=!4v1755536246831!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQzhxOTM1S1E.!2m2!1d26.84385521744164!2d75.56523428433832!3f0.05917622296095715!4f-6.501571231872646!5f0.7820865974627469' 
                },
              ]}
              initialLevelId="dome"
            />
          </div>
        </motion.section>
      </div>
    </div>
  )
}


