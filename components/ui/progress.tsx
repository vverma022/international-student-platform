"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

/**
 * Progress Component with DepthUI Design System
 * 
 * Implements depth through contrasting surfaces:
 * - Track: Recessed background (sunken appearance)
 * - Fill/Indicator: Flat on same plane (uses primary accent color)
 * 
 * The recessed track creates a groove that the progress indicator
 * appears to fill, providing clear visual feedback.
 * 
 * Usage:
 * <Progress value={60} />  // 60% complete
 * <Progress value={100} /> // 100% complete
 */
const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      // DepthUI: recessed track with inset shadow
      "relative h-3 w-full overflow-hidden rounded-md bg-muted",
      "shadow-[inset_0_2px_4px_0_var(--shadow-color)]",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn(
        // Progress fill - primary accent color, smooth transition
        "h-full w-full flex-1 bg-primary transition-all duration-300 ease-in-out rounded-md"
      )}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
