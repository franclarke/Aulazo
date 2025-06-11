export const metadata = {
	title: 'Contacto',
	description: 'Ponte en contacto con el equipo de Aulazo Platform',
}

export default function ContactPage() {
	return (
		<div className="min-h-screen bg-gray-50 py-12">
			<div className="max-w-4xl mx-auto px-4">
				<div className="text-center mb-12">
					<h1 className="text-4xl font-bold text-gray-900 mb-4">
						Contáctanos
					</h1>
					<p className="text-xl text-gray-600">
						¿Tienes preguntas, sugerencias o necesitas ayuda? Estamos aquí para apoyarte
					</p>
				</div>
				
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div className="bg-white rounded-lg shadow-lg p-6">
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">
							Información de Contacto
						</h2>
						<div className="space-y-4">
							<div>
								<h3 className="font-semibold text-gray-800">Correo Electrónico</h3>
								<p className="text-gray-600">contacto@aulazo.com</p>
							</div>
							<div>
								<h3 className="font-semibold text-gray-800">Teléfono</h3>
								<p className="text-gray-600">+1 (555) 123-4567</p>
							</div>
							<div>
								<h3 className="font-semibold text-gray-800">Horarios</h3>
								<p className="text-gray-600">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
							</div>
						</div>
					</div>
					
					<div className="bg-white rounded-lg shadow-lg p-6">
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">
							Envíanos un Mensaje
						</h2>
						<form className="space-y-4">
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Nombre
								</label>
								<input
									type="text"
									className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
									placeholder="Tu nombre"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Correo Electrónico
								</label>
								<input
									type="email"
									className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
									placeholder="tu@email.com"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Mensaje
								</label>
								<textarea
									rows={4}
									className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
									placeholder="Tu mensaje..."
								></textarea>
							</div>
							<button
								type="submit"
								className="w-full bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 transition-colors"
							>
								Enviar Mensaje
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
} 