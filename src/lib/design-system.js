const designTokens = {
	// Color Palette - Inspired by modern education and AI
	colors: {
		// Primary - Educational Purple
		primary: {
			50: '#faf5ff',
			100: '#f3e8ff',
			200: '#e9d5ff',
			300: '#d8b4fe',
			400: '#c084fc',
			500: '#a855f7', // Main primary
			600: '#9333ea',
			700: '#7c3aed',
			800: '#6b21a8',
			900: '#581c87',
			950: '#3b0764',
		},
		// Secondary - Knowledge Blue
		secondary: {
			50: '#eff6ff',
			100: '#dbeafe',
			200: '#bfdbfe',
			300: '#93c5fd',
			400: '#60a5fa',
			500: '#3b82f6', // Main secondary
			600: '#2563eb',
			700: '#1d4ed8',
			800: '#1e40af',
			900: '#1e3a8a',
			950: '#172554',
		},
		// Accent - Success Green
		accent: {
			50: '#f0fdf4',
			100: '#dcfce7',
			200: '#bbf7d0',
			300: '#86efac',
			400: '#4ade80',
			500: '#22c55e', // Main accent
			600: '#16a34a',
			700: '#15803d',
			800: '#166534',
			900: '#14532d',
			950: '#052e16',
		},
		// Warning - Orange
		warning: {
			50: '#fff7ed',
			100: '#ffedd5',
			200: '#fed7aa',
			300: '#fdba74',
			400: '#fb923c',
			500: '#f97316', // Main warning
			600: '#ea580c',
			700: '#c2410c',
			800: '#9a3412',
			900: '#7c2d12',
			950: '#431407',
		},
		// Error - Red
		error: {
			50: '#fef2f2',
			100: '#fee2e2',
			200: '#fecaca',
			300: '#fca5a5',
			400: '#f87171',
			500: '#ef4444', // Main error
			600: '#dc2626',
			700: '#b91c1c',
			800: '#991b1b',
			900: '#7f1d1d',
			950: '#450a0a',
		},
		// Neutral - Gray scale
		neutral: {
			0: '#ffffff',
			50: '#f8fafc',
			100: '#f1f5f9',
			200: '#e2e8f0',
			300: '#cbd5e1',
			400: '#94a3b8',
			500: '#64748b',
			600: '#475569',
			700: '#334155',
			800: '#1e293b',
			900: '#0f172a',
			950: '#020617',
		},
		// AI/Innovation - Gradient colors
		ai: {
			purple: '#8b5cf6',
			blue: '#06b6d4',
			teal: '#14b8a6',
			emerald: '#10b981',
		},
	},

	// Typography System
	typography: {
		fonts: {
			sans: ['Inter', 'system-ui', 'sans-serif'],
			mono: ['JetBrains Mono', 'Monaco', 'monospace'],
			display: ['Inter Display', 'Inter', 'system-ui', 'sans-serif'],
		},
		fontSizes: {
			xs: '0.75rem',     // 12px
			sm: '0.875rem',    // 14px
			base: '1rem',      // 16px
			lg: '1.125rem',    // 18px
			xl: '1.25rem',     // 20px
			'2xl': '1.5rem',   // 24px
			'3xl': '1.875rem', // 30px
			'4xl': '2.25rem',  // 36px
			'5xl': '3rem',     // 48px
			'6xl': '3.75rem',  // 60px
		},
		fontWeights: {
			light: '300',
			normal: '400',
			medium: '500',
			semibold: '600',
			bold: '700',
			extrabold: '800',
		},
		lineHeights: {
			tight: '1.25',
			normal: '1.5',
			relaxed: '1.75',
		},
		letterSpacing: {
			tight: '-0.025em',
			normal: '0',
			wide: '0.025em',
		},
	},

	// Spacing System (8px grid)
	spacing: {
		0: '0',
		1: '0.25rem',  // 4px
		2: '0.5rem',   // 8px
		3: '0.75rem',  // 12px
		4: '1rem',     // 16px
		5: '1.25rem',  // 20px
		6: '1.5rem',   // 24px
		8: '2rem',     // 32px
		10: '2.5rem',  // 40px
		12: '3rem',    // 48px
		16: '4rem',    // 64px
		20: '5rem',    // 80px
		24: '6rem',    // 96px
		32: '8rem',    // 128px
	},

	// Border Radius
	radius: {
		none: '0',
		sm: '0.125rem',   // 2px
		base: '0.25rem',  // 4px
		md: '0.375rem',   // 6px
		lg: '0.5rem',     // 8px
		xl: '0.75rem',    // 12px
		'2xl': '1rem',    // 16px
		'3xl': '1.5rem',  // 24px
		full: '9999px',
	},

	// Shadows
	shadows: {
		sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
		base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
		md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
		lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
		xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
		'2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
		inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
		glow: '0 0 20px rgb(168 85 247 / 0.4)',
		'glow-sm': '0 0 10px rgb(168 85 247 / 0.2)',
	},

	// Animation & Transitions
	animation: {
		duration: {
			fast: '150ms',
			normal: '300ms',
			slow: '500ms',
		},
		easing: {
			ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
			'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
			'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
			'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
		},
	},

	// Breakpoints
	breakpoints: {
		sm: '640px',
		md: '768px',
		lg: '1024px',
		xl: '1280px',
		'2xl': '1536px',
	},

	// Z-index layers
	zIndex: {
		hide: -1,
		auto: 'auto',
		base: 0,
		docked: 10,
		dropdown: 1000,
		sticky: 1100,
		banner: 1200,
		overlay: 1300,
		modal: 1400,
		popover: 1500,
		skipLink: 1600,
		toast: 1700,
		tooltip: 1800,
	},
}

// Component Variants
const componentVariants = {
	button: {
		size: {
			sm: 'px-3 py-1.5 text-sm',
			md: 'px-4 py-2 text-base',
			lg: 'px-6 py-3 text-lg',
			xl: 'px-8 py-4 text-xl',
		},
		variant: {
			primary: 'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500',
			secondary: 'bg-secondary-500 text-white hover:bg-secondary-600 focus:ring-secondary-500',
			outline: 'border border-neutral-300 text-neutral-700 hover:bg-neutral-50 focus:ring-primary-500',
			ghost: 'text-neutral-700 hover:bg-neutral-100 focus:ring-primary-500',
			danger: 'bg-error-500 text-white hover:bg-error-600 focus:ring-error-500',
		},
	},
	card: {
		variant: {
			default: 'bg-white border border-neutral-200 shadow-md',
			elevated: 'bg-white border border-neutral-200 shadow-lg',
			outlined: 'bg-white border-2 border-neutral-300',
			glass: 'bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg',
		},
		padding: {
			sm: 'p-4',
			md: 'p-6',
			lg: 'p-8',
		},
	},
	input: {
		size: {
			sm: 'px-3 py-2 text-sm',
			md: 'px-4 py-2.5 text-base',
			lg: 'px-4 py-3 text-lg',
		},
		variant: {
			default: 'border border-neutral-300 focus:border-primary-500 focus:ring-primary-500',
			filled: 'bg-neutral-100 border-transparent focus:bg-white focus:border-primary-500',
			ghost: 'border-transparent focus:border-primary-500 focus:ring-primary-500',
		},
	},
}

// Utility Classes
const utilityClasses = {
	// Gradients
	gradient: {
		primary: 'bg-gradient-to-r from-primary-500 to-primary-600',
		secondary: 'bg-gradient-to-r from-secondary-500 to-secondary-600',
		ai: 'bg-gradient-to-r from-ai-purple via-ai-blue to-ai-teal',
		rainbow: 'bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500',
	},
	// Text gradients
	textGradient: {
		primary: 'bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent',
		ai: 'bg-gradient-to-r from-ai-purple via-ai-blue to-ai-teal bg-clip-text text-transparent',
	},
	// Glassmorphism
	glass: {
		light: 'bg-white/80 backdrop-blur-sm',
		medium: 'bg-white/60 backdrop-blur-md',
		dark: 'bg-neutral-900/80 backdrop-blur-sm',
	},
}

module.exports = {
	designTokens,
	componentVariants,
	utilityClasses
} 