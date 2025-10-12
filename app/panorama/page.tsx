"use client"

import { useRef } from "react"
import { StreetViewLevels } from "@/components/ui/street-view-levels"

export default function PanoramaPage() {
  const campusViewRef = useRef<HTMLElement>(null)

  return (
    <div className="container mx-auto px-4 md:px-6 py-10 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Virtual Campus Tour</h1>
        <p className="text-gray-500">
          Explore Manipal University Jaipur through 360° panoramic views of key locations.
        </p>
      </div>

      {/* 360 Degree View Section */}
      <section ref={campusViewRef} className="py-12 px-4 bg-background flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-2 text-center">360° Campus View</h2>
      
        <div className="w-full max-w-4xl">
          <StreetViewLevels
            height={420}
            levels={[
              // Tip: Click each level; the resolved pano ID is shown below the viewer. Share those to lock in exact panoIds.
              { id: 'L1', label: 'Dome', position: { lat: 26.844071, lng: 75.565228 }, embedSrc: 'https://www.google.com/maps/embed?pb=!4v1755535881817!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQzhxNVhCYnc.!2m2!1d26.84407091446291!2d75.56522833275928!3f30.98!4f4.6299999999999955!5f0.5970117501821992' },
              { id: 'Library', label: 'Library', position: { lat: 26.8440607, lng: 75.5652878 }, embedSrc: 'https://www.google.com/maps/embed?pb=!4v1755534163449!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQzhxNVhaTWc.!2m2!1d26.84406065003139!2d75.56528784853882!3f202.2794505640211!4f-3.185439736735333!5f0.7820865974627469' },
              { id: 'AB1', label: 'AB1', position: { lat: 26.84409899371046, lng: 75.56513888138585 }, embedSrc: 'https://www.google.com/maps/embed?pb=!4v1755536705351!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQzhxNDJYT3c.!2m2!1d26.84409899371046!2d75.56513888138585!3f179.8570992173503!4f4.159413701647793!5f0.4000000000000002' },
              { id: 'AB2', label: 'AB2', position: { lat: 26.84409899371046, lng: 75.56513888138585 }, embedSrc: 'https://www.google.com/maps/embed?pb=!4v1755536705351!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQzhxNDJYT3c.!2m2!1d26.84409899371046!2d75.56513888138585!3f179.8570992173503!4f4.159413701647793!5f0.4000000000000002' },
              { id: 'AIC', label: 'AIC', position: { lat: 26.84385521744164, lng: 75.56523428433832 }, embedSrc: 'https://www.google.com/maps/embed?pb=!4v1755537330235!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQzhxLVdrMlFF!2m2!1d26.84385521744164!2d75.56523428433832!3f39.56364515148488!4f-10.239939263007102!5f0.7820865974627469' },
              { id: 'ConferenceRoom', label: 'Conference room', position: { lat: 26.84385433771263, lng: 75.5652359720995 }, embedSrc: 'https://www.google.com/maps/embed?pb=!4v1755537377068!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQzhxXzN3Z1FF!2m2!1d26.84385433771263!2d75.5652359720995!3f352.4658820364628!4f0.1660954161468169!5f0.7820865974627469' },
              { id: 'Finance', label: 'Finance', position: { lat: 26.84388215573711, lng: 75.56523384019064 }, embedSrc: 'https://www.google.com/maps/embed?pb=!4v1755537436240!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQzhxOTM1YVE.!2m2!1d26.84388215573711!2d75.56523384019064!3f352.99579179300775!4f-16.208577209374965!5f0.7820865974627469' },
              { id: 'Gym', label: 'Gym', position: { lat: 26.84388183829127, lng: 75.56522993169098 }, embedSrc: 'https://www.google.com/maps/embed?pb=!4v1755537469687!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQzhxOTM1Ymc.!2m2!1d26.84388183829127!2d75.56522993169098!3f25.33257048692999!4f-18.64588226498482!5f0.7820865974627469' },
              { id: 'OldMess', label: 'Old mess', position: { lat: 26.844071, lng: 75.565228 }, embedSrc: 'https://www.google.com/maps/embed?pb=!4v1755535881817!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQzhxNVhCYnc.!2m2!1d26.84407091446291!2d75.56522833275928!3f30.98!4f4.6299999999999955!5f0.5970117501821992' },
              { id: 'GameRoom', label: 'Game room', position: { lat: 26.84385521744164, lng: 75.56523428433832 }, embedSrc: 'https://www.google.com/maps/embed?pb=!4v1755536246831!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQzhxOTM1S1E.!2m2!1d26.84385521744164!2d75.56523428433832!3f0.05917622296095715!4f-6.501571231872646!5f0.7820865974627469' },
            ]}
            initialLevelId="L1"
          />
        </div>
      </section>
    </div>
  )
}
