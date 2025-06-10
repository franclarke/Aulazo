import Link from 'next/link'

export default function HomePage() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center">
			<div className="text-center space-y-8 px-4">
				<h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
					Bienvenido a <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Aulazo</span>
				</h1>
				<p className="text-xl text-gray-600 max-w-2xl mx-auto">
					La plataforma educativa más moderna para conectar estudiantes con los mejores profesores
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Link
						href="/login"
						className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-300 shadow-lg transform hover:scale-105"
					>
						Iniciar Sesión
					</Link>
					<Link
						href="/registro"
						className="border-2 border-purple-500 text-purple-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
					>
						Registrarse
					</Link>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
					<Link
						href="/buscar-profesor" 
						className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200 group"
					>
						<div className="text-center space-y-3">
							<div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
								<span className="text-white font-bold text-xl">🎓</span>
							</div>
							<h3 className="font-semibold text-gray-900">Buscar Profesor</h3>
							<p className="text-sm text-gray-600">Encuentra el tutor perfecto para ti</p>
						</div>
					</Link>
					
					<Link
						href="/aula-virtual"
						className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group"
					>
						<div className="text-center space-y-3">
							<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
								<span className="text-white font-bold text-xl">💻</span>
							</div>
							<h3 className="font-semibold text-gray-900">Aula Virtual</h3>
							<p className="text-sm text-gray-600">Experimenta nuestra plataforma de clases</p>
						</div>
					</Link>
					
					<Link
						href="/sobre-nosotros"
						className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 group"
					>
						<div className="text-center space-y-3">
							<div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
								<span className="text-white font-bold text-xl">ℹ️</span>
							</div>
							<h3 className="font-semibold text-gray-900">Sobre Nosotros</h3>
							<p className="text-sm text-gray-600">Conoce nuestra misión y valores</p>
						</div>
					</Link>
				</div>
			</div>
		</div>
	)
} 