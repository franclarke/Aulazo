import { Metadata } from 'next'
import TeacherDashboardClient from './components/teacher-dashboard-client'
import DataAccess from './components/data-access'

export const metadata: Metadata = {
	title: 'Dashboard Profesor - Aulazo Platform',
	description: 'Panel de control integral para profesores. Gestiona clases, estudiantes y ganancias de manera profesional',
}

export default function TeacherDashboardPage() {
	return (
		<>
			<DataAccess />
			<TeacherDashboardClient />
		</>
	)
} 