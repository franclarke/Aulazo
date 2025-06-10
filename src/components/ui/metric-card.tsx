import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/src/lib/utils'

const metricCardVariants = cva(
	'p-4 rounded-xl transition-all duration-300 relative overflow-hidden',
	{
		variants: {
			variant: {
				engagement: 'bg-gradient-to-br from-accent-50 to-accent-100 border border-accent-200 hover:shadow-accent-200/50',
				attention: 'bg-gradient-to-br from-secondary-50 to-secondary-100 border border-secondary-200 hover:shadow-secondary-200/50',
				participation: 'bg-gradient-to-br from-primary-50 to-primary-100 border border-primary-200 hover:shadow-primary-200/50',
				emotional: 'bg-gradient-to-br from-warning-50 to-warning-100 border border-warning-200 hover:shadow-warning-200/50',
				ai: 'bg-gradient-to-br from-ai-purple/10 via-ai-blue/10 to-ai-teal/10 border border-ai-purple/20 hover:shadow-ai-purple/20',
			},
			size: {
				sm: 'p-3',
				md: 'p-4',
				lg: 'p-6',
			},
		},
		defaultVariants: {
			variant: 'ai',
			size: 'md',
		},
	}
)

interface MetricCardProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof metricCardVariants> {
	title: string
	value: string | number
	subtitle?: string
	icon?: React.ReactNode
	progress?: number
	trend?: 'positive' | 'negative' | 'neutral'
	animated?: boolean
}

const MetricCard = React.forwardRef<HTMLDivElement, MetricCardProps>(
	({ 
		className, 
		variant, 
		size, 
		title, 
		value, 
		subtitle, 
		icon, 
		progress, 
		trend, 
		animated = false,
		...props 
	}, ref) => {
		const progressColor = React.useMemo(() => {
			switch (variant) {
				case 'engagement': return 'bg-accent-500'
				case 'attention': return 'bg-secondary-500'
				case 'participation': return 'bg-primary-500'
				case 'emotional': return 'bg-warning-500'
				default: return 'bg-gradient-to-r from-ai-purple to-ai-blue'
			}
		}, [variant])

		const trendColor = React.useMemo(() => {
			switch (trend) {
				case 'positive': return 'text-accent-600'
				case 'negative': return 'text-error-600'
				default: return 'text-neutral-600'
			}
		}, [trend])

		return (
			<div
				ref={ref}
				className={cn(
					metricCardVariants({ variant, size, className }),
					'hover:shadow-lg group',
					animated && 'animate-scale-in'
				)}
				{...props}
			>
				{/* Background decoration */}
				<div className="absolute top-0 right-0 w-20 h-20 opacity-10 transform rotate-12 translate-x-6 -translate-y-6 group-hover:scale-110 transition-transform duration-300">
					{icon}
				</div>

				<div className="relative z-10">
					{/* Header */}
					<div className="flex items-start justify-between mb-3">
						<div className="flex items-center space-x-2">
							{icon && (
								<div className="w-8 h-8 flex items-center justify-center text-neutral-600">
									{icon}
								</div>
							)}
							<h3 className="text-sm font-medium text-neutral-700">{title}</h3>
						</div>
						{trend && (
							<div className={cn('text-xs font-medium', trendColor)}>
								{trend === 'positive' && '↗'}
								{trend === 'negative' && '↘'}
								{trend === 'neutral' && '→'}
							</div>
						)}
					</div>

					{/* Value */}
					<div className="mb-2">
						<div className="text-2xl font-bold text-neutral-900 group-hover:scale-105 transition-transform duration-200">
							{value}
						</div>
						{subtitle && (
							<div className="text-xs text-neutral-600 mt-1">{subtitle}</div>
						)}
					</div>

					{/* Progress bar */}
					{progress !== undefined && (
						<div className="space-y-1">
							<div className="w-full bg-neutral-200 rounded-full h-2 overflow-hidden">
								<div 
									className={cn(
										'h-full rounded-full transition-all duration-500 ease-out',
										progressColor,
										animated && 'animate-pulse-glow'
									)}
									style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
								/>
							</div>
							<div className="text-xs text-neutral-500 text-right">
								{Math.round(progress)}%
							</div>
						</div>
					)}
				</div>

				{/* Hover effect overlay */}
				<div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
			</div>
		)
	}
)
MetricCard.displayName = 'MetricCard'

export { MetricCard, metricCardVariants } 