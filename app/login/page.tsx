export const metadata = {
	title: 'Iniciar Sesión',
	description: 'Inicia sesión en tu cuenta de Aulazo Platform',
}

export default function LoginPage() {
	return (
		<div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
			<div className="max-w-md w-full">
				<div className="text-center mb-8">
					<h1 className="text-3xl font-bold text-gray-900">
						Iniciar Sesión
					</h1>
					<p className="mt-2 text-gray-600">
						Accede a tu cuenta de Aulazo Platform
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

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Contraseña
							</label>
							<input
								type="password"
								className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
								placeholder="Tu contraseña"
							/>
						</div>

						<button
							type="submit"
							className="w-full bg-purple-600 text-white py-3 px-4 rounded-md hover:bg-purple-700 transition-colors font-medium"
						>
							Iniciar sesión
						</button>
					</form>

					<div className="mt-6 text-center">
						<p className="text-sm text-gray-600">
							¿No tienes cuenta?{' '}
							<a href="/registro" className="text-purple-600 hover:text-purple-500 font-medium">
								Regístrate aquí
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
} 