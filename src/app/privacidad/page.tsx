export const metadata = {
	title: 'Política de Privacidad',
	description: 'Política de privacidad y protección de datos de Aulazo Platform',
}

export default function PrivacyPolicyPage() {
	return (
		<div className="min-h-screen bg-gray-50 py-12">
			<div className="max-w-4xl mx-auto px-4">
				<h1 className="text-4xl font-bold text-gray-900 mb-8">
					Política de Privacidad
				</h1>
				
				<div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
					<section>
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">
							1. Información que recopilamos
						</h2>
						<p className="text-gray-700 leading-relaxed">
							En Aulazo Platform, recopilamos información que nos proporcionas directamente, 
							como cuando te registras, actualizas tu perfil, o nos contactas.
						</p>
					</section>
					
					<section>
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">
							2. Cómo utilizamos tu información
						</h2>
						<p className="text-gray-700 leading-relaxed">
							Utilizamos la información recopilada para proporcionar, mantener y mejorar 
							nuestros servicios, así como para comunicarnos contigo.
						</p>
					</section>
					
					<section>
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">
							3. Protección de datos
						</h2>
						<p className="text-gray-700 leading-relaxed">
							Implementamos medidas de seguridad técnicas y organizativas apropiadas 
							para proteger tu información personal.
						</p>
					</section>
				</div>
			</div>
		</div>
	)
} 