import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import Navbar from '@/components/Navbar'
import './globals.css'

const inter = Inter({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700', '800'],
	variable: '--font-inter',
	display: 'swap',
})

export const metadata: Metadata = {
	title: {
		default: 'Aulazo Platform - Plataforma Educativa Online',
		template: '%s | Aulazo Platform',
	},
	description: 'Plataforma educativa moderna para conectar estudiantes y profesores',
	keywords: ['educación', 'online', 'clases', 'profesores', 'estudiantes'],
	authors: [{ name: 'Aulazo Team' }],
	creator: 'Aulazo Platform',
	icons: {
		icon: '/favicon.svg',
		shortcut: '/favicon.svg',
		apple: '/favicon.svg',
	},
	openGraph: {
		type: 'website',
		locale: 'es_ES',
		url: 'https://aulazo.com',
		title: 'Aulazo Platform - Plataforma Educativa Online',
		description: 'Plataforma educativa moderna para conectar estudiantes y profesores',
		siteName: 'Aulazo Platform',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Aulazo Platform - Plataforma Educativa Online',
		description: 'Plataforma educativa moderna para conectar estudiantes y profesores',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
}

interface RootLayoutProps {
	children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="es" className={inter.variable}>
			<head>
				<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
				<link rel="alternate icon" href="/favicon.svg" />
				<link rel="mask-icon" href="/favicon.svg" color="#a855f7" />
			</head>
			<body className="min-h-screen bg-background font-sans antialiased">
				<Navbar />
				{children}
				<Analytics />
			</body>
		</html>
	)
} 