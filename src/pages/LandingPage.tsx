import React from 'react'
import Link from 'next/link'
import { CheckCircle, PresentationChart, Shield } from 'lucide-react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AulazoLogo from '../components/AulazoLogo'

const LandingPage: React.FC = () => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50/30">
			<Navbar />
			
			{/* Hero Section */}
			<Hero />

			{/* Features Section */}
			<section className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-neutral-900 mb-4">
							¿Por qué elegir Aulazo?
						</h2>
						<p className="text-xl text-neutral-600 max-w-3xl mx-auto">
							Una plataforma completa que conecta estudiantes con los mejores profesores del mundo
						</p>
					</div>
					
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="text-center space-y-6 p-8 rounded-2xl bg-gradient-to-br from-white to-primary-50/30 border border-primary-100 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300 group">
							<div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
								<CheckCircle className="h-8 w-8 text-white" />
							</div>
							<h3 className="text-2xl font-bold text-neutral-900">Profesores Verificados</h3>
							<p className="text-neutral-600 leading-relaxed">
								Contamos con docentes certificados y con experiencia comprobada en sus áreas de especialización.
							</p>
						</div>
						
						<div className="text-center space-y-6 p-8 rounded-2xl bg-gradient-to-br from-white to-secondary-50/30 border border-secondary-100 hover:shadow-lg hover:shadow-secondary-500/10 transition-all duration-300 group">
							<div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
								<PresentationChart className="h-8 w-8 text-white" />
							</div>
							<h3 className="text-2xl font-bold text-neutral-900">Pizarra Virtual Avanzada</h3>
							<p className="text-neutral-600 leading-relaxed">
								Herramientas interactivas para enseñar con diagramas, ecuaciones, gráficos y contenido multimedia.
							</p>
						</div>
						
						<div className="text-center space-y-6 p-8 rounded-2xl bg-gradient-to-br from-white to-accent-50/30 border border-accent-100 hover:shadow-lg hover:shadow-accent-500/10 transition-all duration-300 group">
							<div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
								<Shield className="h-8 w-8 text-white" />
							</div>
							<h3 className="text-2xl font-bold text-neutral-900">Pagos Seguros</h3>
							<p className="text-neutral-600 leading-relaxed">
								Plataforma protegida y confiable para realizar tus pagos de forma segura y transparente.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 relative overflow-hidden">
				<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-10"></div>
				<div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
					<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
						¿Listo para comenzar tu aprendizaje?
					</h2>
					<p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
						Únete a miles de estudiantes que ya están mejorando sus habilidades con Aulazo
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link
							href="/buscar-profesor"
							className="bg-white text-primary-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-neutral-50 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
						>
							Buscar Profesor
						</Link>
						<Link
							href="/dashboard-estudiante"
							className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300 transform hover:scale-105"
						>
							Ver Dashboard
						</Link>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-neutral-900 text-white py-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<div className="flex items-center justify-center space-x-2 mb-4">
							<AulazoLogo className="h-8 w-8 text-primary-400" />
							<span className="text-2xl font-bold">aulazo</span>
						</div>
						<p className="text-neutral-400">
							© 2024 Aulazo. Conectando estudiantes con los mejores profesores.
						</p>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default LandingPage
