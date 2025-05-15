import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { RainbowButton } from "./rainbow-button"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive relative",
  {
    variants: {
      variant: {
        default: "",
        destructive: "",
        outline: "",
        secondary: "",
        ghost: "",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "",
        sm: "px-3 py-1 text-xs",
        lg: "px-8 py-3 text-base",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }

// This component wraps the rainbow button and preserves the original Button API
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // Use the Slot component for asChild functionality
    if (asChild) {
      return (
        <Slot
          className={cn(buttonVariants({ variant, size, className }))}
          {...props}
        />
      )
    }
    
    // Detect if the button has a Link as direct child
    const hasLinkChild = React.Children.toArray(props.children).some(
      child => {
        if (!React.isValidElement(child)) return false;
        
        // Check if it's a direct anchor tag
        if (child.type === 'a') return true;
        
        // Check if it's a Next.js Link component (safer check without displayName)
        if (typeof child.type === 'function' || typeof child.type === 'object') {
          // Check for the presence of href prop which is common in Link components
          return child.props && typeof child.props === 'object' && 'href' in child.props;
        }
        
        return false;
      }
    );

    // Add specific styles for link-containing buttons
    const linkButtonStyles = hasLinkChild ? 'cursor-pointer [&>a]:z-10 [&>a]:pointer-events-auto [&>a]:relative [&>a]:w-full [&>a]:h-full [&>a]:flex [&>a]:items-center [&>a]:justify-center' : '';
    
    // For link variant, use a standard button since rainbow doesn't fit this style
    if (variant === "link") {
      return (
        <button
          className={cn(buttonVariants({ variant, size, className }), linkButtonStyles)}
          ref={ref}
          {...props}
        />
      )
    }
    
    // For all other variants, use the RainbowButton
    // Note: We can't forward ref directly since RainbowButton doesn't accept it
    return (
      <RainbowButton
        className={cn(buttonVariants({ variant, size, className }), linkButtonStyles)}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export { Button, buttonVariants } 