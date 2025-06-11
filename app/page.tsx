import Link from 'next/link'
import AulazoLogo from '@/components/AulazoLogo'

export default function HomePage() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
			<div className="container mx-auto px-4 py-16">
				{/* Hero Section with Logo */}
				<div className="text-center space-y-8 mb-16">
					<div className="flex justify-center mb-6">
						<AulazoLogo className="h-20 w-20" />
					</div>
					<h1 className="text-5xl font-bold text-gray-900 mb-4">
						Bienvenido a <span className="text-purple-600">Aulazo</span>
					</h1>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
						La plataforma educativa más moderna para conectar estudiantes con los mejores profesores. 
						Aprende, enseña y crece en nuestra comunidad educativa virtual.
					</p>
				</div>

				{/* Main Action Buttons */}
				<div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
					<Link
						href="/login"
						className="bg-purple-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
					>
						Iniciar Sesión
					</Link>
					<Link
						href="/registro"
						className="border-2 border-purple-500 text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-105"
					>
						Registrarse
					</Link>
				</div>

				{/* Platform Features Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
					<Link
						href="/buscar-profesor" 
						className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200 group"
					>
						<div className="text-center space-y-4">
							<div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
								<span className="text-white font-bold text-2xl">📚</span>
							</div>
							<h3 className="font-semibold text-gray-900 text-lg">Buscar Profesor</h3>
							<p className="text-sm text-gray-600">Encuentra el tutor perfecto para tus necesidades educativas</p>
						</div>
					</Link>
					
					<Link
						href="/aula-virtual"
						className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group"
					>
						<div className="text-center space-y-4">
							<div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
								<span className="text-white font-bold text-2xl">🖥️</span>
							</div>
							<h3 className="font-semibold text-gray-900 text-lg">Aula Virtual</h3>
							<p className="text-sm text-gray-600">Experimenta nuestra plataforma de clases interactivas</p>
						</div>
					</Link>
					
					<Link
						href="/dashboard-estudiante"
						className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 group"
					>
						<div className="text-center space-y-4">
							<div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
								<span className="text-white font-bold text-2xl">📖</span>
							</div>
							<h3 className="font-semibold text-gray-900 text-lg">Dashboard Estudiante</h3>
							<p className="text-sm text-gray-600">Accede a tu panel de control como estudiante</p>
						</div>
					</Link>

					<Link
						href="/dashboard-profesor"
						className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200 group"
					>
						<div className="text-center space-y-4">
							<div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
								<span className="text-white font-bold text-2xl">👨‍🏫</span>
							</div>
							<h3 className="font-semibold text-gray-900 text-lg">Dashboard Profesor</h3>
							<p className="text-sm text-gray-600">Gestiona tus clases y estudiantes como profesor</p>
						</div>
					</Link>
				</div>
			</div>
		</div>
	)
} 