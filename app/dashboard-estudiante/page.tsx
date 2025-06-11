import type { Metadata } from 'next'
import { Suspense } from 'react'
import DataAccess from './components/data-access'
import LoadingSkeleton from './components/loading-skeleton'

export const metadata: Metadata = {
	title: 'Dashboard Estudiante - Aulazo Platform',
	description: 'Panel de control personalizado para estudiantes. Revisa tu progreso, clases próximas, logros y más en Aulazo Platform.',
	keywords: ['dashboard', 'estudiante', 'progreso', 'clases', 'logros', 'educación'],
	openGraph: {
		title: 'Dashboard Estudiante - Aulazo Platform',
		description: 'Panel de control personalizado para estudiantes',
		type: 'website',
	},
}

export default function StudentDashboardPage() {
	return (
		<Suspense fallback={<LoadingSkeleton />}>
			<DataAccess />
		</Suspense>
	)
} 