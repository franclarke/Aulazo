import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
	'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
	{
		variants: {
			variant: {
				default: 'border-transparent bg-primary-500 text-white hover:bg-primary-600',
				secondary: 'border-transparent bg-secondary-100 text-secondary-800 hover:bg-secondary-200',
				destructive: 'border-transparent bg-error-500 text-white hover:bg-error-600',
				outline: 'border-neutral-300 text-neutral-700 hover:bg-neutral-50',
				success: 'border-transparent bg-accent-500 text-white hover:bg-accent-600',
				warning: 'border-transparent bg-warning-500 text-white hover:bg-warning-600',
				ai: 'border-transparent bg-gradient-to-r from-primary-500 to-secondary-500 text-white',
			},
		},
		defaultVariants: {
			variant: 'default',
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