import StudentDashboardClient from './student-dashboard-client'

interface StudentData {
	student: {
		name: string
		email: string
		avatar: string
		level: string
		joinDate: string
	}
	metrics: {
		totalClasses: number
		completedClasses: number
		hoursStudied: number
		averageRating: number
		activeSubjects: number
		achievements: number
		streak: number
		totalProgress: number
	}
	upcomingClasses: Array<{
		id: string
		title: string
		teacher: string
		subject: string
		time: string
		duration: string
		type: 'individual' | 'group'
		status: 'confirmed' | 'pending'
	}>
	recentClasses: Array<{
		id: string
		title: string
		teacher: string
		subject: string
		date: string
		rating: number
		completed: boolean
	}>
	subjectProgress: Array<{
		subject: string
		progress: number
		totalHours: number
		level: string
		color: string
	}>
	achievements: Array<{
		id: string
		title: string
		description: string
		icon: string
		earned: boolean
		date?: string
		category: string
	}>
}

async function getStudentData(): Promise<StudentData> {
	// Simulate API call delay
	await new Promise(resolve => setTimeout(resolve, 100))

	return {
		student: {
			name: 'María González',
			email: 'maria.gonzalez@email.com',
			avatar: '/avatars/maria.jpg',
			level: 'Estudiante Avanzado',
			joinDate: '2024-01-15',
		},
		metrics: {
			totalClasses: 48,
			completedClasses: 42,
			hoursStudied: 78,
			averageRating: 4.8,
			activeSubjects: 5,
			achievements: 12,
			streak: 15,
			totalProgress: 87,
		},
		upcomingClasses: [
			{
				id: '1',
				title: 'Álgebra Lineal Avanzada',
				teacher: 'Dr. Carlos Mendoza',
				subject: 'Matemáticas',
				time: '2024-01-20T15:00:00Z',
				duration: '60 min',
				type: 'individual',
				status: 'confirmed',
			},
			{
				id: '2',
				title: 'Mecánica Cuántica',
				teacher: 'Dra. Ana López',
				subject: 'Física',
				time: '2024-01-20T17:00:00Z',
				duration: '90 min',
				type: 'individual',
				status: 'confirmed',
			},
			{
				id: '3',
				title: 'Literatura Contemporánea',
				teacher: 'Prof. Luis Hernández',
				subject: 'Literatura',
				time: '2024-01-21T14:00:00Z',
				duration: '75 min',
				type: 'group',
				status: 'pending',
			},
		],
		recentClasses: [
			{
				id: '1',
				title: 'Cálculo Diferencial',
				teacher: 'Dr. Carlos Mendoza',
				subject: 'Matemáticas',
				date: '2024-01-18T15:00:00Z',
				rating: 5,
				completed: true,
			},
			{
				id: '2',
				title: 'Termodinámica',
				teacher: 'Dra. Ana López',
				subject: 'Física',
				date: '2024-01-17T16:00:00Z',
				rating: 5,
				completed: true,
			},
			{
				id: '3',
				title: 'Química Orgánica',
				teacher: 'Dr. Roberto Silva',
				subject: 'Química',
				date: '2024-01-16T13:00:00Z',
				rating: 4,
				completed: true,
			},
		],
		subjectProgress: [
			{
				subject: 'Matemáticas',
				progress: 92,
				totalHours: 28,
				level: 'Avanzado',
				color: '#8b5cf6',
			},
			{
				subject: 'Física',
				progress: 85,
				totalHours: 22,
				level: 'Intermedio',
				color: '#3b82f6',
			},
			{
				subject: 'Química',
				progress: 78,
				totalHours: 18,
				level: 'Intermedio',
				color: '#14b8a6',
			},
			{
				subject: 'Literatura',
				progress: 65,
				totalHours: 15,
				level: 'Básico',
				color: '#f59e0b',
			},
			{
				subject: 'Historia',
				progress: 72,
				totalHours: 12,
				level: 'Básico',
				color: '#ef4444',
			},
		],
		achievements: [
			{
				id: '1',
				title: 'Primera Clase Completada',
				description: 'Completaste tu primera clase exitosamente',
				icon: '🎓',
				earned: true,
				date: '2024-01-15T10:00:00Z',
				category: 'Milestone',
			},
			{
				id: '2',
				title: 'Racha de 7 días',
				description: 'Mantuviste una racha de estudio de 7 días consecutivos',
				icon: '🔥',
				earned: true,
				date: '2024-01-18T12:00:00Z',
				category: 'Consistency',
			},
			{
				id: '3',
				title: 'Calificación Perfecta',
				description: 'Obtuviste 5 estrellas en una clase',
				icon: '⭐',
				earned: true,
				date: '2024-01-19T16:00:00Z',
				category: 'Excellence',
			},
			{
				id: '4',
				title: 'Explorador de Materias',
				description: 'Estudia 5 materias diferentes',
				icon: '🌟',
				earned: true,
				date: '2024-01-17T14:00:00Z',
				category: 'Exploration',
			},
			{
				id: '5',
				title: 'Estudiante Dedicado',
				description: 'Completa 50 horas de estudio',
				icon: '📚',
				earned: false,
				category: 'Time',
			},
		],
	}
}

export default async function DataAccess() {
	const data = await getStudentData()
	return <StudentDashboardClient data={data} />
} 