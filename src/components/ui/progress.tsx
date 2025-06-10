import * as React from 'react'
import { cn } from '@/src/lib/utils'

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
	value?: number
	className?: string
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
	({ className, value = 0, ...props }, ref) => (
		<div
			ref={ref}
			className={cn(
				'relative h-2 w-full overflow-hidden rounded-full bg-neutral-200',
				className
			)}
			{...props}
		>
			<div
				className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-300"
				style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
			/>
		</div>
	)
)
Progress.displayName = 'Progress'

export { Progress } 