"use client"

interface GoogleMapProps {
  height?: number
  width?: string
  className?: string
}

export function GoogleMap({ 
  height = 600, 
  width = "100%", 
  className = "" 
}: GoogleMapProps) {
  return (
    <div className={`w-full rounded-lg overflow-hidden shadow-lg ${className}`}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.1234567890123!2d75.56523428433832!3d26.84407121744164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db1234567890%3A0xabcdef1234567890!2sManipal%20University%20Jaipur!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin"
        width={width}
        height={height}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Manipal University Jaipur Campus Map"
        className="w-full"
      />
    </div>
  )
}
