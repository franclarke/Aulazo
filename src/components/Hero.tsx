import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Users, Star, Play } from 'lucide-react'

export default function Hero() {
	return (
		<section className="relative bg-gradient-to-br from-primary-50/50 via-white to-secondary-50/30 py-20 overflow-hidden">
			{/* Background decorative pattern */}
			<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23a855f7" fill-opacity="0.03"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
			
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<div className="space-y-8">
						<div className="space-y-6">
							<div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full text-white text-sm font-medium shadow-lg">
								<Play className="h-4 w-4 mr-2" />
								¡Plataforma 100% en línea!
							</div>
							
							<h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight">
								Aprende en línea
								<br />
								<span className="text-gradient-primary">con los mejores</span>
								<br />
								profesores
							</h1>
							
							<p className="text-xl text-neutral-600 leading-relaxed max-w-lg">
								Conecta con tutores verificados, disfruta de clases interactivas con nuestra 
								pizarra virtual avanzada y acelera tu aprendizaje.
							</p>
						</div>
						
						<div className="flex flex-col sm:flex-row gap-4">
							<Link
								href="/buscar-profesor"
								className="inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transform hover:scale-105"
							>
								Encuentra tu profesor ideal
							</Link>
							<Link
								href="/registro"
								className="inline-flex items-center justify-center border-2 border-primary-500 text-primary-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-500 hover:text-white transition-all duration-300"
							>
								Registrarse gratis
							</Link>
						</div>
						
						{/* Stats */}
						<div className="flex items-center space-x-8 pt-6">
							<div className="text-center">
								<div className="text-3xl font-bold text-neutral-900">500+</div>
								<div className="text-sm text-neutral-600">Profesores verificados</div>
							</div>
							<div className="text-center">
								<div className="text-3xl font-bold text-neutral-900">10k+</div>
								<div className="text-sm text-neutral-600">Estudiantes activos</div>
							</div>
							<div className="text-center">
								<div className="flex items-center justify-center space-x-1 mb-1">
									{[1,2,3,4,5].map((star) => (
										<Star key={star} className="h-5 w-5 fill-warning-400 text-warning-400" />
									))}
								</div>
								<div className="text-sm text-neutral-600">4.9/5 calificación</div>
							</div>
						</div>
					</div>
					
					{/* Hero Image */}
					<div className="relative">
						<div className="relative w-full h-96 lg:h-[500px]">
							<Image
								src="/hero.png"
								alt="Estudiantes aprendiendo en línea con aulazo - plataforma educativa moderna con clases virtuales interactivas"
								fill
								className="object-contain"
								priority
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
								quality={90}
							/>
						</div>
						
						{/* Floating info card */}
						<div className="absolute bottom-4 left-4 right-4 glass rounded-2xl shadow-xl p-6 border border-white/20 animate-slide-up">
							<div className="flex items-center justify-between mb-4">
								<div className="flex items-center space-x-2">
									<div className="w-3 h-3 bg-accent-400 rounded-full animate-pulse"></div>
									<span className="text-sm font-medium text-neutral-700">Clase en vivo</span>
								</div>
								<div className="flex items-center space-x-1">
									{[1,2,3,4,5].map((star) => (
										<Star key={star} className="h-4 w-4 fill-warning-400 text-warning-400" />
									))}
									<span className="text-sm text-neutral-600 ml-1">5.0</span>
								</div>
							</div>
							
							<div className="flex items-center space-x-3">
								<div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-lg">
									<Users className="h-5 w-5 text-white" />
								</div>
								<div>
									<div className="text-sm font-semibold text-neutral-900">Matemáticas Avanzadas</div>
									<div className="text-xs text-neutral-500">Profesor: María González • 12 estudiantes conectados</div>
								</div>
							</div>
						</div>
						
						{/* Background decorative elements */}
						<div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full opacity-60 animate-float"></div>
						<div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-warning-100 to-warning-200 rounded-full opacity-40 animate-float-delay"></div>
					</div>
				</div>
			</div>
		</section>
	)
} 