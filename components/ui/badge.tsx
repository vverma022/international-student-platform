import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * Badge Component with DepthUI Design System
 * 
 * Implements subtle elevation through:
 * - Small dual shadow for elevated variants
 * - Rounded pill shape (border-radius matches button style)
 * - Smooth transitions on hover
 * 
 * Variants:
 * - default: Primary accent color with elevation
 * - secondary: Muted background with subtle elevation
 * - destructive: Error/warning with elevation
 * - outline: Minimal with border only
 * 
 * Usage:
 * <Badge>New</Badge>
 * <Badge variant="secondary">Draft</Badge>
 * <Badge variant="destructive">Error</Badge>
 */
const badgeVariants = cva(
  // Base styling with smooth transitions
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        // Default: primary accent with subtle elevation
        default:
          "border-transparent bg-primary text-primary-foreground shadow-[inset_0_1px_1px_0_var(--highlight-color),_0_1px_3px_0_var(--shadow-color)] hover:shadow-[inset_0_1px_1px_0_var(--highlight-color),_0_2px_4px_0_var(--shadow-color)]",
        // Secondary: muted with subtle elevation
        secondary:
          "border-transparent bg-secondary text-secondary-foreground shadow-[inset_0_1px_1px_0_var(--highlight-color),_0_1px_3px_0_var(--shadow-color)] hover:shadow-[inset_0_1px_1px_0_var(--highlight-color),_0_2px_4px_0_var(--shadow-color)]",
        // Destructive: error/warning with elevation
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow-[inset_0_1px_1px_0_var(--highlight-color),_0_1px_3px_0_var(--shadow-color)] hover:shadow-[inset_0_1px_1px_0_var(--highlight-color),_0_2px_4px_0_var(--shadow-color)]",
        // Outline: minimal, no elevation
        outline: "text-foreground border border-border",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
