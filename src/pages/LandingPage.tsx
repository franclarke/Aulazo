import React from 'react'
import Link from 'next/link'
import { CheckCircle, PresentationChart, Shield } from 'lucide-react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AulazoLogo from '../components/AulazoLogo'

const LandingPage: React.FC = () => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
			<div className="container mx-auto px-4 py-8">
				<h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
					Bienvenido a Aulazo
				</h1>
				<div className="text-center space-y-4">
					<Link
						href="/login"
						className="inline-block bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors mr-4"
					>
						Iniciar Sesión
					</Link>
					<Link
						href="/registro"
						className="inline-block border border-purple-500 text-purple-500 px-6 py-3 rounded-lg hover:bg-purple-500 hover:text-white transition-colors"
					>
						Registrarse
					</Link>
				</div>
			</div>
		</div>
	)
}

export default LandingPage
