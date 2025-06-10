import React from 'react'
import Link from 'next/link'
import AulazoLogo from './AulazoLogo'

interface NavbarProps {
	showFullNav?: boolean
}

const Navbar: React.FC<NavbarProps> = ({ showFullNav = true }) => {
	return (
		<nav className="bg-white/80 backdrop-blur-md shadow-lg shadow-neutral-900/5 sticky top-0 z-50 border-b border-neutral-100">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<Link href="/" className="flex items-center space-x-2 group">
						<AulazoLogo className="h-8 w-8 text-primary-500 group-hover:text-primary-600 transition-colors" />
						<span className="text-2xl font-bold text-primary-600 group-hover:text-primary-700 transition-colors">aulazo</span>
					</Link>
					
					{showFullNav && (
						<>
							<div className="hidden md:flex items-center space-x-8">
								<Link href="/" className="text-neutral-600 hover:text-primary-600 transition-colors font-medium">
									Inicio
								</Link>
								<Link href="/buscar-profesor" className="text-neutral-600 hover:text-primary-600 transition-colors font-medium">
									Buscar Profesor
								</Link>
								<Link href="/sobre-nosotros" className="text-neutral-600 hover:text-primary-600 transition-colors font-medium">
									Sobre Nosotros
								</Link>
								<Link href="/contacto" className="text-neutral-600 hover:text-primary-600 transition-colors font-medium">
									Contacto
								</Link>
							</div>
							
							<div className="flex items-center space-x-4">
								<Link 
									href="/login"
									className="text-neutral-600 hover:text-primary-600 transition-colors font-medium"
								>
									Iniciar Sesión
								</Link>
								<Link 
									href="/registro"
									className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-2 rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all duration-300 font-medium shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:scale-105"
								>
									Registrarse
								</Link>
							</div>
						</>
					)}
				</div>
			</div>
		</nav>
	)
}

export default Navbar
