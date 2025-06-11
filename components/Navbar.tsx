'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import AulazoLogo from './AulazoLogo'

interface NavbarProps {
	showFullNav?: boolean
}

const Navbar: React.FC<NavbarProps> = ({ showFullNav = true }) => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen)
	}

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false)
	}

	return (
		<nav className="bg-white/80 backdrop-blur-md shadow-lg shadow-neutral-900/5 sticky top-0 z-50 border-b border-neutral-100">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<Link href="/" className="flex items-center space-x-2 group" onClick={closeMobileMenu}>
						<AulazoLogo className="h-8 w-8 text-primary-500 group-hover:text-primary-600 transition-colors" />
						<span className="text-2xl font-bold text-primary-600 group-hover:text-primary-700 transition-colors">aulazo</span>
					</Link>
					
					{showFullNav && (
						<>
							{/* Desktop Navigation */}
							<div className="hidden md:flex items-center space-x-8">
								<Link href="/buscar-profesor" className="text-neutral-600 hover:text-primary-600 transition-colors font-medium">
									Buscar Profesor
								</Link>
								<Link href="/aula-virtual" className="text-neutral-600 hover:text-primary-600 transition-colors font-medium">
									Aula Virtual
								</Link>
								<Link href="/dashboard-estudiante" className="text-neutral-600 hover:text-primary-600 transition-colors font-medium">
									Dashboard Estudiante
								</Link>
								<Link href="/dashboard-profesor" className="text-neutral-600 hover:text-primary-600 transition-colors font-medium">
									Dashboard Profesor
								</Link>
							</div>
							
							{/* Desktop Auth Buttons */}
							<div className="hidden md:flex items-center space-x-4">
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

							{/* Mobile Menu Button */}
							<div className="md:hidden">
								<button
									onClick={toggleMobileMenu}
									className="text-neutral-600 hover:text-primary-600 focus:outline-none"
									aria-label="Toggle mobile menu"
								>
									<svg
										className="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										{isMobileMenuOpen ? (
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M6 18L18 6M6 6l12 12"
											/>
										) : (
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M4 6h16M4 12h16M4 18h16"
											/>
										)}
									</svg>
								</button>
							</div>
						</>
					)}
				</div>

				{/* Mobile Menu */}
				{showFullNav && isMobileMenuOpen && (
					<div className="md:hidden bg-white/95 backdrop-blur-md border-t border-neutral-100">
						<div className="px-2 pt-2 pb-3 space-y-1">
							<Link
								href="/"
								className="block px-3 py-2 text-neutral-600 hover:text-primary-600 hover:bg-neutral-50 rounded-md transition-colors font-medium"
								onClick={closeMobileMenu}
							>
								Inicio
							</Link>
							<Link
								href="/buscar-profesor"
								className="block px-3 py-2 text-neutral-600 hover:text-primary-600 hover:bg-neutral-50 rounded-md transition-colors font-medium"
								onClick={closeMobileMenu}
							>
								Buscar Profesor
							</Link>
							<Link
								href="/aula-virtual"
								className="block px-3 py-2 text-neutral-600 hover:text-primary-600 hover:bg-neutral-50 rounded-md transition-colors font-medium"
								onClick={closeMobileMenu}
							>
								Aula Virtual
							</Link>
							<Link
								href="/dashboard-estudiante"
								className="block px-3 py-2 text-neutral-600 hover:text-primary-600 hover:bg-neutral-50 rounded-md transition-colors font-medium"
								onClick={closeMobileMenu}
							>
								Dashboard Estudiante
							</Link>
							<Link
								href="/dashboard-profesor"
								className="block px-3 py-2 text-neutral-600 hover:text-primary-600 hover:bg-neutral-50 rounded-md transition-colors font-medium"
								onClick={closeMobileMenu}
							>
								Dashboard Profesor
							</Link>
							<Link
								href="/sobre-nosotros"
								className="block px-3 py-2 text-neutral-600 hover:text-primary-600 hover:bg-neutral-50 rounded-md transition-colors font-medium"
								onClick={closeMobileMenu}
							>
								Sobre Nosotros
							</Link>
							<div className="border-t border-neutral-200 pt-3 mt-3">
								<Link
									href="/login"
									className="block px-3 py-2 text-neutral-600 hover:text-primary-600 hover:bg-neutral-50 rounded-md transition-colors font-medium"
									onClick={closeMobileMenu}
								>
									Iniciar Sesión
								</Link>
								<Link
									href="/registro"
									className="block mx-3 mt-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all duration-300 font-medium text-center"
									onClick={closeMobileMenu}
								>
									Registrarse
								</Link>
							</div>
						</div>
					</div>
				)}
			</div>
		</nav>
	)
}

export default Navbar
