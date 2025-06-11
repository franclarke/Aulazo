export const metadata = {
	title: 'Recuperar Contraseña',
	description: 'Recupera tu contraseña de Aulazo Platform',
}

export default function ForgotPasswordPage() {
	return (
		<div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
			<div className="max-w-md w-full">
				<div className="text-center mb-8">
					<h1 className="text-3xl font-bold text-gray-900">
						Recuperar Contraseña
					</h1>
					<p className="mt-2 text-gray-600">
						Te enviaremos un enlace para restablecer tu contraseña
					</p>
				</div>

				<div className="bg-white rounded-lg shadow-lg p-8">
					<form className="space-y-6">
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Correo electrónico
							</label>
							<input
								type="email"
								className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
								placeholder="tu@email.com"
							/>
						</div>

						<button
							type="submit"
							className="w-full bg-purple-600 text-white py-3 px-4 rounded-md hover:bg-purple-700 transition-colors font-medium"
						>
							Enviar enlace de recuperación
						</button>
					</form>

					<div className="mt-6 text-center">
						<p className="text-sm text-gray-600">
							¿Recordaste tu contraseña?{' '}
							<a href="/login" className="text-purple-600 hover:text-purple-500 font-medium">
								Iniciar sesión
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
} 