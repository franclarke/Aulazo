export const metadata = {
	title: 'Sobre Nosotros',
	description: 'Conoce más sobre Aulazo Platform y nuestro equipo',
}

export default function AboutPage() {
	return (
		<div className="min-h-screen bg-gray-50">
			<div className="max-w-6xl mx-auto px-4 py-12">
				<div className="text-center mb-12">
					<h1 className="text-4xl font-bold text-gray-900 mb-4">
						Sobre Aulazo Platform
					</h1>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Revolucionamos la educación conectando estudiantes y profesores en un entorno 
						virtual innovador y accesible para todos.
					</p>
				</div>
				
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
					<div className="bg-white rounded-lg shadow-lg p-8">
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">
							Nuestra Misión
						</h2>
						<p className="text-gray-700 leading-relaxed">
							Democratizar el acceso a la educación de calidad mediante tecnología 
							avanzada que facilita la conexión entre educadores y estudiantes, 
							sin importar su ubicación geográfica.
						</p>
					</div>
					
					<div className="bg-white rounded-lg shadow-lg p-8">
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">
							Nuestra Visión
						</h2>
						<p className="text-gray-700 leading-relaxed">
							Ser la plataforma líder en educación virtual que empodere a millones 
							de personas a alcanzar su máximo potencial académico y profesional.
						</p>
					</div>
				</div>
				
				<div className="bg-white rounded-lg shadow-lg p-8">
					<h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
						¿Por qué elegir Aulazo Platform?
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="text-center">
							<div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
								<div className="text-purple-600 text-2xl">🎓</div>
							</div>
							<h3 className="font-semibold text-gray-900 mb-2">Calidad Educativa</h3>
							<p className="text-gray-600">Profesores certificados y contenido de alta calidad</p>
						</div>
						
						<div className="text-center">
							<div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
								<div className="text-purple-600 text-2xl">💻</div>
							</div>
							<h3 className="font-semibold text-gray-900 mb-2">Tecnología Avanzada</h3>
							<p className="text-gray-600">Plataforma intuitiva con herramientas modernas</p>
						</div>
						
						<div className="text-center">
							<div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
								<div className="text-purple-600 text-2xl">🌍</div>
							</div>
							<h3 className="font-semibold text-gray-900 mb-2">Acceso Global</h3>
							<p className="text-gray-600">Aprende desde cualquier lugar del mundo</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
} 