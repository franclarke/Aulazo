'use client'

import { useEffect } from 'react'

interface ErrorProps {
	error: Error & { digest?: string }
	reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
	useEffect(() => {
		console.error('Error capturado:', error)
	}, [error])

	return (
		<div className="flex min-h-screen flex-col items-center justify-center space-y-4 p-4">
			<div className="text-center max-w-md">
				<h2 className="text-2xl font-bold text-red-600 mb-4">
					¡Algo salió mal!
				</h2>
				<p className="text-gray-600 mb-6">
					Ha ocurrido un error inesperado. Por favor, inténtalo de nuevo.
				</p>
				<button
					onClick={reset}
					className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
				>
					Intentar de nuevo
				</button>
			</div>
		</div>
	)
} 