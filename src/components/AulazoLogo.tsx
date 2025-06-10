import React from 'react'

interface AulazoLogoProps {
	className?: string
	width?: number
	height?: number
}

const AulazoLogo: React.FC<AulazoLogoProps> = ({ 
	className = "h-8 w-8", 
	width, 
	height 
}) => {
	return (
		<svg
			className={className}
			width={width}
			height={height}
			viewBox="0 0 48 48"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<defs>
				{/* Primary gradient - Educational Purple */}
				<linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
					<stop offset="0%" stopColor="#c084fc" />
					<stop offset="100%" stopColor="#a855f7" />
				</linearGradient>
				
				{/* Secondary gradient - Knowledge Blue */}
				<linearGradient id="secondaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
					<stop offset="0%" stopColor="#60a5fa" />
					<stop offset="100%" stopColor="#3b82f6" />
				</linearGradient>
				
				{/* Accent gradient - Success Green */}
				<linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
					<stop offset="0%" stopColor="#4ade80" />
					<stop offset="100%" stopColor="#22c55e" />
				</linearGradient>
				
				{/* Subtle shadow */}
				<filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
					<feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#a855f7" floodOpacity="0.15"/>
				</filter>
			</defs>
			
			{/* Main container - Rounded square representing digital platform */}
			<rect 
				x="6" 
				y="6" 
				width="36" 
				height="36" 
				rx="8" 
				fill="url(#primaryGradient)" 
				filter="url(#softShadow)"
			/>
			
			{/* Inner book/screen representation */}
			<rect 
				x="10" 
				y="10" 
				width="28" 
				height="28" 
				rx="4" 
				fill="white" 
				opacity="0.95"
			/>
			
			{/* Book spine - vertical line */}
			<line 
				x1="24" 
				y1="12" 
				x2="24" 
				y2="36" 
				stroke="url(#secondaryGradient)" 
				strokeWidth="2"
				opacity="0.8"
			/>
			
			{/* Content lines representing text/learning */}
			<g opacity="0.6">
				<rect x="14" y="16" width="8" height="1.5" rx="0.75" fill="url(#secondaryGradient)" />
				<rect x="26" y="16" width="8" height="1.5" rx="0.75" fill="url(#secondaryGradient)" />
				<rect x="14" y="20" width="6" height="1.5" rx="0.75" fill="#94a3b8" />
				<rect x="26" y="20" width="7" height="1.5" rx="0.75" fill="#94a3b8" />
				<rect x="14" y="24" width="7" height="1.5" rx="0.75" fill="#94a3b8" />
				<rect x="26" y="24" width="6" height="1.5" rx="0.75" fill="#94a3b8" />
			</g>
			
			{/* Digital connection dots - representing virtual learning network */}
			<g opacity="0.8">
				<circle cx="16" cy="30" r="1.5" fill="url(#accentGradient)" />
				<circle cx="24" cy="32" r="1.5" fill="url(#accentGradient)" />
				<circle cx="32" cy="30" r="1.5" fill="url(#accentGradient)" />
				
				{/* Connection lines */}
				<path 
					d="M17.5,30 Q20.5,31 22.5,32" 
					stroke="url(#accentGradient)" 
					strokeWidth="1" 
					fill="none" 
					opacity="0.6"
					strokeLinecap="round"
				/>
				<path 
					d="M25.5,32 Q28.5,31 30.5,30" 
					stroke="url(#accentGradient)" 
					strokeWidth="1" 
					fill="none" 
					opacity="0.6"
					strokeLinecap="round"
				/>
			</g>
			
			{/* Subtle "A" integration - very minimal */}
			<path 
				d="M20,28 L22,22 L24,22 L26,28 M21,26 L25,26" 
				stroke="url(#primaryGradient)" 
				strokeWidth="1.5" 
				fill="none" 
				opacity="0.3"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

export default AulazoLogo 