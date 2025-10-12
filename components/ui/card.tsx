import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Card Component with Enhanced DepthUI Design System
 * 
 * Implements dramatic visual depth through:
 * - Layered background (var(--bg) - middle layer)
 * - Multi-layered shadow system for realistic elevation
 * - Smooth lift animation on hover with scale
 * - Subtle highlight border for extra dimension
 * - Border radius: 16px for card surfaces
 * 
 * Usage:
 * <Card>
 *   <CardHeader>...</CardHeader>
 *   <CardContent>...</CardContent>
 * </Card>
 */
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      // DepthUI: middle layer with enhanced shadow system
      "rounded-2xl bg-card text-card-foreground",
      "transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
      // Enhanced depth with CSS variable shadows
      "shadow-[var(--shadow-medium)]",
      "border border-white/5",
      // Dramatic hover state: lift + scale + larger shadow
      "hover:shadow-[var(--shadow-large)]",
      "hover:-translate-y-1.5 hover:scale-[1.02]",
      "hover:border-white/10",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

/**
 * CardHeader Component
 * Top section of card with proper DepthUI spacing (24px padding)
 */
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
