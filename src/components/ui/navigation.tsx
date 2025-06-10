import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { 
	Home, 
	BookOpen, 
	Users, 
	MessageCircle, 
	Settings, 
	User,
	Bell,
	Search,
	Menu,
	X,
	ChevronDown,
	LogOut,
	Shield,
	HelpCircle,
} from 'lucide-react'

const navigationVariants = cva(
	'fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-200 shadow-sm',
	{
		variants: {
			variant: {
				default: 'bg-white/90',
				glass: 'bg-white/80 backdrop-blur-md',
				solid: 'bg-white',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	}
)

interface NavigationProps extends VariantProps<typeof navigationVariants> {
	user?: {
		name: string
		avatar?: string
		role: 'student' | 'teacher' | 'admin'
	}
	className?: string
}

const Navigation: React.FC<NavigationProps> = ({ variant, user, className }) => {
	const pathname = usePathname()
	const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
	const [userMenuOpen, setUserMenuOpen] = React.useState(false)
	const [notifications] = React.useState(3)

	const navItems = React.useMemo(() => {
		const baseItems = [
			{ href: '/', label: 'Inicio', icon: Home },
			{ href: '/buscar-profesor', label: 'Buscar Profesor', icon: Search },
			{ href: '/contacto', label: 'Contacto', icon: MessageCircle },
			{ href: '/sobre-nosotros', label: 'Acerca de', icon: Users },
		]

		if (user) {
			if (user.role === 'student') {
				return [
					{ href: '/dashboard-estudiante', label: 'Mi Dashboard', icon: Home },
					{ href: '/aula-virtual', label: 'Aula Virtual', icon: BookOpen },
					{ href: '/buscar-profesor', label: 'Buscar Profesor', icon: Search },
					{ href: '/contacto', label: 'Contacto', icon: MessageCircle },
				]
			} else if (user.role === 'teacher') {
				return [
					{ href: '/dashboard-profesor', label: 'Mi Dashboard', icon: Home },
					{ href: '/aula-virtual', label: 'Aula Virtual', icon: BookOpen },
					{ href: '/contacto', label: 'Contacto', icon: MessageCircle },
				]
			}
		}

		return baseItems
	}, [user])

	const userMenuItems = [
		{ href: '/perfil', label: 'Mi Perfil', icon: User },
		{ href: '/configuracion', label: 'Configuración', icon: Settings },
		{ href: '/ayuda', label: 'Ayuda', icon: HelpCircle },
		{ href: '/privacidad', label: 'Privacidad', icon: Shield },
	]

	const isActive = (href: string) => {
		if (!pathname) return false
		if (href === '/') {
			return pathname === href
		}
		return pathname.startsWith(href)
	}

	return (
		<nav className={cn(navigationVariants({ variant, className }))}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					{/* Logo */}
					<div className="flex items-center space-x-4">
						<Link 
							href="/" 
							className="flex items-center space-x-2 group"
						>
							<div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-105 transition-transform duration-200">
								A
							</div>
							<span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
								Aulazo
							</span>
						</Link>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-1">
						{navItems.map((item) => {
							const Icon = item.icon
							return (
								<Link key={item.href} href={item.href}>
									<Button
										variant={isActive(item.href) ? 'default' : 'ghost'}
										size="sm"
										className="rounded-lg"
									>
										<Icon className="w-4 h-4 mr-2" />
										{item.label}
									</Button>
								</Link>
							)
						})}
					</div>

					{/* Right Side */}
					<div className="flex items-center space-x-4">
						{user ? (
							<>
								{/* Notifications */}
								<div className="relative">
									<Button
										variant="ghost"
										size="sm"
										className="relative rounded-lg"
									>
										<Bell className="w-4 h-4" />
										{notifications > 0 && (
											<span className="absolute -top-1 -right-1 w-5 h-5 bg-error-500 text-white text-xs rounded-full flex items-center justify-center">
												{notifications}
											</span>
										)}
									</Button>
								</div>

								{/* User Menu */}
								<div className="relative">
									<Button
										variant="ghost"
										size="sm"
										onClick={() => setUserMenuOpen(!userMenuOpen)}
										className="flex items-center space-x-2 rounded-lg"
									>
										<div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center text-white text-sm font-medium">
											{user.name.charAt(0).toUpperCase()}
										</div>
										<span className="hidden sm:inline text-sm font-medium text-neutral-700">
											{user.name}
										</span>
										<ChevronDown className="w-4 h-4" />
									</Button>

									{/* User Dropdown */}
									{userMenuOpen && (
										<div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-neutral-200 py-2 z-50">
											<div className="px-4 py-2 border-b border-neutral-100">
												<p className="text-sm font-medium text-neutral-900">{user.name}</p>
												<p className="text-xs text-neutral-600 capitalize">{user.role}</p>
											</div>
											{userMenuItems.map((item) => {
												const Icon = item.icon
												return (
													<Link 
														key={item.href} 
														href={item.href}
														className="flex items-center space-x-3 px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors"
														onClick={() => setUserMenuOpen(false)}
													>
														<Icon className="w-4 h-4" />
														<span>{item.label}</span>
													</Link>
												)
											})}
											<div className="border-t border-neutral-100 mt-2 pt-2">
												<button 
													className="flex items-center space-x-3 px-4 py-2 text-sm text-error-600 hover:bg-error-50 transition-colors w-full text-left"
													onClick={() => {
														// Handle logout
														setUserMenuOpen(false)
													}}
												>
													<LogOut className="w-4 h-4" />
													<span>Cerrar Sesión</span>
												</button>
											</div>
										</div>
									)}
								</div>
							</>
						) : (
							<>
								{/* Auth Buttons */}
								<Link href="/login">
									<Button variant="ghost" size="sm" className="rounded-lg">
										Iniciar Sesión
									</Button>
								</Link>
								<Link href="/registro">
									<Button variant="default" size="sm" className="rounded-lg">
										Registro
									</Button>
								</Link>
							</>
						)}

						{/* Mobile Menu Button */}
						<Button
							variant="ghost"
							size="sm"
							className="md:hidden rounded-lg"
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						>
							{mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
						</Button>
					</div>
				</div>

				{/* Mobile Menu */}
				{mobileMenuOpen && (
					<div className="md:hidden border-t border-neutral-200 bg-white/95 backdrop-blur-sm">
						<div className="py-4 space-y-2">
							{navItems.map((item) => {
								const Icon = item.icon
								return (
									<Link 
										key={item.href} 
										href={item.href}
										className={cn(
											'flex items-center space-x-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors',
											isActive(item.href) 
												? 'bg-primary-50 text-primary-600' 
												: 'text-neutral-700 hover:bg-neutral-50'
										)}
										onClick={() => setMobileMenuOpen(false)}
									>
										<Icon className="w-4 h-4" />
										<span>{item.label}</span>
									</Link>
								)
							})}
							
							{!user && (
								<div className="pt-4 border-t border-neutral-200 space-y-2">
									<Link href="/login">
										<Button variant="ghost" fullWidth className="justify-start rounded-lg">
											Iniciar Sesión
										</Button>
									</Link>
									<Link href="/registro">
										<Button variant="default" fullWidth className="justify-start rounded-lg">
											Registro
										</Button>
									</Link>
								</div>
							)}
						</div>
					</div>
				)}
			</div>

			{/* Overlay for dropdowns */}
			{(userMenuOpen || mobileMenuOpen) && (
				<div 
					className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
					onClick={() => {
						setUserMenuOpen(false)
						setMobileMenuOpen(false)
					}}
				/>
			)}
		</nav>
	)
}

export { Navigation, navigationVariants } 