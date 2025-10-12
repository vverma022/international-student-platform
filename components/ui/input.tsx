import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Input Component with DepthUI Design System
 * 
 * Implements recessed (sunken) appearance through:
 * - Background: var(--bg-dark) - deepest layer (appears pushed into page)
 * - Inset shadow only (no outer shadow)
 * - Border radius: 8px for inputs
 * - Smooth focus transition
 * 
 * The recessed shadow creates the illusion that the input is carved into
 * the surface, making it feel interactive and inviting for text entry.
 * 
 * Usage:
 * <Input type="text" placeholder="Enter your name" />
 * <Input type="email" placeholder="Email address" />
 */
const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          // DepthUI: recessed input with inset shadow
          "flex h-10 w-full rounded-lg bg-input px-3 py-2 text-base text-foreground",
          // Recessed shadow - makes input look sunken into the page
          "shadow-[inset_0_2px_4px_0_var(--shadow-color)]",
          // Border removed for cleaner depth effect, but can add subtle border if needed
          "border border-input/50",
          // Smooth transitions
          "transition-all duration-200 ease-in-out",
          // Focus state: slightly lift with ring
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
          "focus-visible:shadow-[inset_0_1px_3px_0_var(--shadow-color)]",
          // Placeholder and file input styling
          "placeholder:text-muted-foreground",
          "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
          // Disabled state
          "disabled:cursor-not-allowed disabled:opacity-50",
          // Responsive text size
          "md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
