export const metadata = {
	title: 'Términos de Servicio',
	description: 'Términos y condiciones de uso de Aulazo Platform',
}

export default function TermsOfServicePage() {
	return (
		<div className="min-h-screen bg-gray-50 py-12">
			<div className="max-w-4xl mx-auto px-4">
				<h1 className="text-4xl font-bold text-gray-900 mb-8">
					Términos de Servicio
				</h1>
				
				<div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
					<section>
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">
							1. Aceptación de los términos
						</h2>
						<p className="text-gray-700 leading-relaxed">
							Al utilizar Aulazo Platform, aceptas estar legalmente obligado por estos 
							términos de servicio y nuestra política de privacidad.
						</p>
					</section>
					
					<section>
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">
							2. Uso del servicio
						</h2>
						<p className="text-gray-700 leading-relaxed">
							Puedes usar nuestro servicio solo para fines legales y de acuerdo con 
							estos términos y todas las leyes aplicables.
						</p>
					</section>
					
					<section>
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">
							3. Responsabilidades del usuario
						</h2>
						<p className="text-gray-700 leading-relaxed">
							Eres responsable de mantener la confidencialidad de tu cuenta y 
							contraseña, y de todas las actividades que ocurran bajo tu cuenta.
						</p>
					</section>
					
					<section>
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">
							4. Modificaciones
						</h2>
						<p className="text-gray-700 leading-relaxed">
							Nos reservamos el derecho de modificar estos términos en cualquier momento. 
							Los cambios entrarán en vigor inmediatamente después de su publicación.
						</p>
					</section>
				</div>
			</div>
		</div>
	)
} 