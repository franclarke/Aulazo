import { Suspense } from 'react'

// Server Component para acceso a datos del dashboard del profesor
async function fetchTeacherDashboardData() {
	// Simular fetch de datos desde la API/DB
	await new Promise(resolve => setTimeout(resolve, 100))
	
	return {
		teacher: {
			id: 'teacher-1',
			name: 'Carlos Martinez',
			email: 'carlos.martinez@aulazo.com',
			avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format',
			verified: true,
			rating: 4.9,
			totalReviews: 127,
			joinDate: '2023-01-15',
			subjects: ['Matemáticas', 'Física'],
			bio: 'Profesor especializado en matemáticas y física con más de 8 años de experiencia.',
			education: 'PhD en Matemáticas Aplicadas, Universidad Nacional',
			languages: ['Español', 'Inglés']
		},
		metrics: {
			totalBookings: 24,
			monthlyRevenue: 1840,
			averageRating: 4.9,
			activeStudents: 18,
			completedClasses: 156,
			responseRate: 95,
			onTimeRate: 98
		},
		upcomingClasses: [
			{
				id: 'class-1',
				subject: 'Matemáticas Avanzadas',
				student: {
					name: 'Ana López',
					avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b789?w=100&h=100&fit=crop&crop=face&auto=format'
				},
				time: '10:00 - 11:00',
				date: new Date().toISOString(),
				status: 'confirmada',
				price: 25,
				type: 'individual'
			},
			{
				id: 'class-2',
				subject: 'Álgebra Básica',
				student: {
					name: 'Miguel Torres',
					avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&auto=format'
				},
				time: '14:00 - 15:00',
				date: new Date(Date.now() + 86400000).toISOString(),
				status: 'pendiente',
				price: 20,
				type: 'individual'
			},
			{
				id: 'class-3',
				subject: 'Cálculo Diferencial',
				student: {
					name: 'Sofia Martín',
					avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face&auto=format'
				},
				time: '16:00 - 17:00',
				date: new Date(Date.now() + 172800000).toISOString(),
				status: 'confirmada',
				price: 30,
				type: 'individual'
			}
		],
		weeklySchedule: [
			{ day: 'Lun', classes: 3, revenue: 75, available: true },
			{ day: 'Mar', classes: 4, revenue: 100, available: true },
			{ day: 'Mié', classes: 2, revenue: 50, available: true },
			{ day: 'Jue', classes: 5, revenue: 125, available: true },
			{ day: 'Vie', classes: 3, revenue: 75, available: true },
			{ day: 'Sáb', classes: 1, revenue: 25, available: false },
			{ day: 'Dom', classes: 0, revenue: 0, available: false }
		],
		recentActivity: [
			{
				id: 'activity-1',
				type: 'class_completed',
				message: 'Clase completada con Ana López',
				timestamp: new Date(Date.now() - 3600000).toISOString(),
				rating: 5
			},
			{
				id: 'activity-2',
				type: 'booking_received',
				message: 'Nueva reserva de Miguel Torres',
				timestamp: new Date(Date.now() - 7200000).toISOString()
			},
			{
				id: 'activity-3',
				type: 'payment_received',
				message: 'Pago recibido: $75',
				timestamp: new Date(Date.now() - 10800000).toISOString(),
				amount: 75
			}
		],
		earnings: {
			today: 75,
			thisWeek: 450,
			thisMonth: 1840,
			lastMonth: 1650,
			pending: 125,
			available: 1715
		}
	}
}

async function TeacherDashboardDataProvider() {
	const dashboardData = await fetchTeacherDashboardData()
	
	return (
		<script
			id="teacher-dashboard-data"
			type="application/json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(dashboardData)
			}}
		/>
	)
}

export default function DataAccess() {
	return (
		<Suspense fallback={null}>
			<TeacherDashboardDataProvider />
		</Suspense>
	)
} 