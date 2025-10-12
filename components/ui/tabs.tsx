"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

/**
 * Tabs Component with DepthUI Design System
 * 
 * Uses depth to indicate selection state:
 * - TabsList: Recessed background container
 * - Inactive tabs: Flat, no shadow
 * - Active tab: Elevated with dual shadow + accent border
 * 
 * The selected tab appears to lift out of the container, creating
 * clear visual hierarchy and making selection obvious.
 * 
 * Usage:
 * <Tabs defaultValue="tab1">
 *   <TabsList>
 *     <TabsTrigger value="tab1">Tab 1</TabsTrigger>
 *     <TabsTrigger value="tab2">Tab 2</TabsTrigger>
 *   </TabsList>
 *   <TabsContent value="tab1">Content 1</TabsContent>
 * </Tabs>
 */
const Tabs = TabsPrimitive.Root

/**
 * TabsList - Container with subtle recessed appearance
 */
const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      // DepthUI: slightly recessed container
      "inline-flex h-auto items-center justify-center rounded-xl bg-muted p-1.5 text-muted-foreground",
      "shadow-[inset_0_1px_2px_0_var(--shadow-color)]",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

/**
 * TabsTrigger - Individual tab with elevation on active state
 * Active tabs lift out with dual shadow system
 */
const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      // Base styling
      "inline-flex items-center justify-center whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium",
      "ring-offset-background transition-all duration-200 ease-in-out",
      // Focus state
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      // Disabled state
      "disabled:pointer-events-none disabled:opacity-50",
      // DepthUI: Active state - elevated with dual shadow + accent border
      "data-[state=active]:bg-background data-[state=active]:text-foreground",
      "data-[state=active]:shadow-[inset_0_1px_1px_0_var(--highlight-color),_0_2px_4px_0_var(--shadow-color)]",
      "data-[state=active]:border-2 data-[state=active]:border-primary",
      // Inactive state - flat
      "data-[state=inactive]:border-2 data-[state=inactive]:border-transparent",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
