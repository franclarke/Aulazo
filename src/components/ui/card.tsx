import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const cardVariants = cva(
	'rounded-xl transition-all duration-300',
	{
		variants: {
			variant: {
				default: 'bg-white border border-neutral-200 shadow-md hover:shadow-lg',
				elevated: 'bg-white border border-neutral-200 shadow-lg hover:shadow-xl',
				outlined: 'bg-white border-2 border-neutral-300 hover:border-primary-300',
				glass: 'bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl hover:bg-white/90',
				ai: 'bg-gradient-to-br from-ai-purple/5 via-ai-blue/5 to-ai-teal/5 border border-ai-purple/20 shadow-lg hover:shadow-xl',
				gradient: 'bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 border border-primary-200 shadow-lg hover:shadow-xl',
			},
			padding: {
				none: 'p-0',
				sm: 'p-4',
				md: 'p-6',
				lg: 'p-8',
				xl: 'p-10',
			},
			interactive: {
				true: 'cursor-pointer hover:scale-[1.02] active:scale-[0.98]',
			},
		},
		defaultVariants: {
			variant: 'default',
			padding: 'md',
		},
	}
)

const Card = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardVariants>
>(({ className, variant, padding, interactive, ...props }, ref) => (
	<div
		ref={ref}
		className={cn(cardVariants({ variant, padding, interactive, className }))}
		{...props}
	/>
))
Card.displayName = 'Card'

const CardHeader = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn('flex flex-col space-y-1.5 p-6', className)}
		{...props}
	/>
))
CardHeader.displayName = 'CardHeader'

const CardTitle = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
	<h3
		ref={ref}
		className={cn('text-2xl font-semibold leading-none tracking-tight text-neutral-900', className)}
		{...props}
	/>
))
CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
	<p
		ref={ref}
		className={cn('text-sm text-neutral-600 leading-relaxed', className)}
		{...props}
	/>
))
CardDescription.displayName = 'CardDescription'

const CardContent = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
))
CardContent.displayName = 'CardContent'

const CardFooter = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn('flex items-center p-6 pt-0', className)}
		{...props}
	/>
))
CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
