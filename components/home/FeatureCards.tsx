"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  content: string
  link: string
  linkText: string
  index?: number
}

export function FeatureCard({ 
  icon, 
  title, 
  description, 
  content, 
  link, 
  linkText,
  index = 0 
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="h-full"
    >
      <Card className="h-full flex flex-col group relative overflow-hidden border-2 hover:border-primary/50 transition-colors duration-300 shadow-[0_2px_10px_-3px] shadow-black/10 hover:shadow-[0_20px_40px_-10px] hover:shadow-primary/20">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        />
        
        <CardHeader className="flex flex-row items-start gap-4 pb-4 relative z-10">
          <motion.div 
            className="p-3 bg-accent rounded-xl shadow-[0_4px_15px_-3px] shadow-primary/20 group-hover:shadow-primary/40 transition-all duration-300"
            whileHover={{ 
              scale: 1.1,
              rotate: 5,
              transition: { duration: 0.3 }
            }}
          >
            {icon}
          </motion.div>

          <div className="flex-1 min-w-0">
            <CardTitle className="text-xl font-semibold mb-1">{title}</CardTitle>
            <CardDescription className="font-medium">{description}</CardDescription>
          </div>
        </CardHeader>

        <CardContent className="flex-1 pb-4 relative z-10">
          <p className="text-muted-foreground leading-relaxed">{content}</p>
        </CardContent>

        <CardFooter className="pt-0 relative z-10">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full"
          >
            <Button 
              asChild 
              variant="ghost" 
              className="w-full group/btn hover:bg-primary/10 transition-colors duration-300"
            >
              <Link href={link} className="flex items-center justify-center gap-2">
                {linkText}
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 2
                  }}
                >
                  <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </motion.div>
              </Link>
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
