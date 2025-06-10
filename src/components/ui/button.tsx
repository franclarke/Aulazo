import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default: "bg-primary-500 text-white hover:bg-primary-600 shadow-lg hover:shadow-xl active:scale-[0.98]",
        destructive: "bg-error-500 text-white hover:bg-error-600 shadow-lg hover:shadow-xl active:scale-[0.98]",
        outline: "border-2 border-primary-500 text-primary-500 hover:bg-primary-50 hover:text-primary-600 active:scale-[0.98]",
        secondary: "bg-secondary-500 text-white hover:bg-secondary-600 shadow-lg hover:shadow-xl active:scale-[0.98]",
        ghost: "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 active:scale-[0.98]",
        link: "text-primary-500 underline-offset-4 hover:underline hover:text-primary-600",
        gradient: "bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 text-white hover:from-primary-600 hover:via-secondary-600 hover:to-accent-600 shadow-lg hover:shadow-xl active:scale-[0.98]",
        glass: "bg-white/80 backdrop-blur-sm border border-white/20 text-neutral-700 hover:bg-white/90 shadow-lg hover:shadow-xl active:scale-[0.98]",
        ai: "bg-gradient-to-r from-ai-purple to-ai-blue text-white hover:from-purple-600 hover:to-blue-600 shadow-lg hover:shadow-xl active:scale-[0.98] relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-ai-purple before:to-ai-blue before:opacity-0 before:transition-opacity hover:before:opacity-20",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-10 w-10",
      },
      fullWidth: {
        true: "w-full",
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
  ({ className, variant, size, fullWidth, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        {...props}
      >
        {children}
        {/* Ripple effect */}
        <span className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-active:opacity-100 transition-opacity duration-75" />
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
