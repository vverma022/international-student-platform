import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * Button Component with Enhanced DepthUI Design System
 * 
 * Implements dramatic visual depth through:
 * - Multi-layered shadow system for realistic elevation
 * - Smooth lift animation on hover (2px lift)
 * - Pressed state with reduced elevation
 * - Border radius: 12px for buttons
 * - Font weight: 600 for clarity
 * 
 * Variants:
 * - default: Primary accent color, dramatic elevation
 * - secondary: Lighter background, still elevated
 * - destructive: Error/danger actions
 * - outline: Minimal with border
 * - ghost: No background, hover effect only
 * - link: Text link styling
 * 
 * Usage:
 * <Button variant="default">Click me</Button>
 * <Button variant="secondary" size="lg">Large Button</Button>
 */
const buttonVariants = cva(
  // Base styles with enhanced DepthUI principles
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold ring-offset-background transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Primary: dramatic elevation with enhanced shadow system
        default: "rounded-xl bg-primary text-primary-foreground shadow-[var(--shadow-medium)] border border-white/10 hover:shadow-[var(--shadow-large)] hover:-translate-y-0.5 active:shadow-[var(--shadow-small)] active:translate-y-0",
        // Destructive: error actions with strong elevation
        destructive:
          "rounded-xl bg-destructive text-destructive-foreground shadow-[var(--shadow-medium)] border border-white/10 hover:shadow-[var(--shadow-large)] hover:-translate-y-0.5 active:shadow-[var(--shadow-small)] active:translate-y-0",
        // Outline: subtle with border and light elevation
        outline:
          "rounded-xl border-2 border-input bg-background shadow-[var(--shadow-small)] hover:bg-accent hover:text-accent-foreground hover:shadow-[var(--shadow-medium)] hover:-translate-y-0.5",
        // Secondary: lighter elevated surface with depth
        secondary:
          "rounded-xl bg-secondary text-secondary-foreground shadow-[var(--shadow-medium)] border border-black/5 hover:shadow-[var(--shadow-large)] hover:-translate-y-0.5 active:shadow-[var(--shadow-small)] active:translate-y-0",
        // Ghost: no background, minimal
        ghost: "rounded-xl hover:bg-accent hover:text-accent-foreground",
        // Link: text only
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5 py-2.5",
        sm: "h-9 rounded-lg px-3.5 py-2",
        lg: "h-12 rounded-xl px-8 py-3",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
