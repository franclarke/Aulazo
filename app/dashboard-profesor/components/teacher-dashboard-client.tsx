'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface TeacherData {
	teacher: {
		id: string
		name: string
		email: string
		avatar: string
		verified: boolean
		rating: number
		totalReviews: number
		joinDate: string
		subjects: string[]
		bio: string
		education: string
		languages: string[]
	}
	metrics: {
		totalBookings: number
		monthlyRevenue: number
		averageRating: number
		activeStudents: number
		completedClasses: number
		responseRate: number
		onTimeRate: number
	}
	upcomingClasses: Array<{
		id: string
		subject: string
		student: {
			name: string
			avatar: string
		}
		time: string
		date: string
		status: 'confirmada' | 'pendiente'
		price: number
		type: 'individual' | 'grupo'
	}>
	weeklySchedule: Array<{
		day: string
		classes: number
		revenue: number
		available: boolean
	}>
	recentActivity: Array<{
		id: string
		type: 'class_completed' | 'booking_received' | 'payment_received'
		message: string
		timestamp: string
		rating?: number
		amount?: number
	}>
	earnings: {
		today: number
		thisWeek: number
		thisMonth: number
		lastMonth: number
		pending: number
		available: number
	}
}

export default function TeacherDashboardClient() {
	const [data, setData] = useState<TeacherData | null>(null)
	const [activeTab, setActiveTab] = useState<'overview' | 'classes' | 'students' | 'earnings'>('overview')

	useEffect(() => {
		// Obtener datos del script inyectado por el server component
		const dataScript = document.getElementById('teacher-dashboard-data')
		if (dataScript) {
			try {
				const dashboardData = JSON.parse(dataScript.textContent || '{}')
				setData(dashboardData)
			} catch (error) {
				console.error('Error parsing dashboard data:', error)
			}
		}
	}, [])

	if (!data) {
		return (
			<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
				<div className="text-center">
					<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
					<p className="text-gray-600">Cargando dashboard...</p>
				</div>
			</div>
		)
	}

	const formatDate = (dateStr: string) => {
		return new Date(dateStr).toLocaleDateString('es-ES', {
			weekday: 'short',
			day: 'numeric',
			month: 'short',
			hour: '2-digit',
			minute: '2-digit'
		})
	}

	const formatCurrency = (amount: number) => {
		return new Intl.NumberFormat('es-ES', {
			style: 'currency',
			currency: 'USD'
		}).format(amount)
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
			{/* Header */}
			<div className="border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-40">
				<div className="max-w-7xl mx-auto px-4 py-4">
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-4">
							<div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
								{data.teacher.name.charAt(0)}
							</div>
							<div>
								<h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
									¡Hola, Prof. {data.teacher.name.split(' ')[0]}! 👨‍🏫
									{data.teacher.verified && (
										<Badge className="bg-green-100 text-green-800">✓ Verificado</Badge>
									)}
								</h1>
								<p className="text-gray-600">
									⭐ {data.teacher.rating} • {data.teacher.totalReviews} reseñas • {data.metrics.activeStudents} estudiantes activos
								</p>
							</div>
						</div>

						<div className="flex items-center gap-3">
							<Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white">
								📅 Gestionar Horario
							</Button>
						</div>
					</div>
				</div>
			</div>

			<div className="max-w-7xl mx-auto p-4 space-y-6">
				{/* Quick Stats */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					<Card className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0">
						<div className="flex items-center justify-between mb-4">
							<div className="p-3 bg-white/20 rounded-xl">
								💰
							</div>
							<span className="text-blue-200">📈</span>
						</div>
						<div className="space-y-1">
							<p className="text-sm text-blue-100">Ingresos del Mes</p>
							<p className="text-2xl font-bold">{formatCurrency(data.metrics.monthlyRevenue)}</p>
							<p className="text-xs text-blue-200">
								+{Math.round(((data.metrics.monthlyRevenue - data.earnings.lastMonth) / data.earnings.lastMonth) * 100)}% vs. mes anterior
							</p>
						</div>
					</Card>

					<Card className="p-6 bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0">
						<div className="flex items-center justify-between mb-4">
							<div className="p-3 bg-white/20 rounded-xl">
								👥
							</div>
							<span className="text-purple-200">🎯</span>
						</div>
						<div className="space-y-1">
							<p className="text-sm text-purple-100">Estudiantes Activos</p>
							<p className="text-2xl font-bold">{data.metrics.activeStudents}</p>
							<p className="text-xs text-purple-200">{data.metrics.totalBookings} reservas totales</p>
						</div>
					</Card>

					<Card className="p-6 bg-gradient-to-br from-green-500 to-green-600 text-white border-0">
						<div className="flex items-center justify-between mb-4">
							<div className="p-3 bg-white/20 rounded-xl">
								⭐
							</div>
							<span className="text-green-200">🏆</span>
						</div>
						<div className="space-y-1">
							<p className="text-sm text-green-100">Calificación</p>
							<p className="text-2xl font-bold">{data.metrics.averageRating}</p>
							<p className="text-xs text-green-200">{data.metrics.responseRate}% respuesta</p>
						</div>
					</Card>

					<Card className="p-6 bg-gradient-to-br from-orange-500 to-red-500 text-white border-0">
						<div className="flex items-center justify-between mb-4">
							<div className="p-3 bg-white/20 rounded-xl">
								📚
							</div>
							<span className="text-orange-200">🎓</span>
						</div>
						<div className="space-y-1">
							<p className="text-sm text-orange-100">Clases Completadas</p>
							<p className="text-2xl font-bold">{data.metrics.completedClasses}</p>
							<p className="text-xs text-orange-200">{data.metrics.onTimeRate}% puntualidad</p>
						</div>
					</Card>
				</div>

				{/* Navigation Tabs */}
				<div className="flex space-x-1 bg-gray-100 p-1 rounded-xl w-fit">
					{[
						{ key: 'overview', label: 'Resumen', icon: '📊' },
						{ key: 'classes', label: 'Clases', icon: '📅' },
						{ key: 'students', label: 'Estudiantes', icon: '👥' },
						{ key: 'earnings', label: 'Ganancias', icon: '💰' },
					].map(({ key, label, icon }) => (
						<Button
							key={key}
							variant={activeTab === key ? 'default' : 'ghost'}
							size="sm"
							onClick={() => setActiveTab(key as 'overview' | 'earnings')}
							className={`relative ${
								activeTab === key
									? 'bg-white shadow-sm text-blue-600'
									: 'text-gray-600 hover:text-gray-900'
							}`}
						>
							{icon} {label}
						</Button>
					))}
				</div>

				{/* Main Content */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
					{/* Left Column - Main Content */}
					<div className="lg:col-span-2 space-y-6">
						{activeTab === 'overview' && (
							<>
								{/* Upcoming Classes */}
								<Card className="p-6">
									<div className="flex items-center justify-between mb-6">
										<h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
											📅 Próximas Clases
										</h2>
										<Button variant="outline" size="sm">
											Ver Todas →
										</Button>
									</div>

									<div className="space-y-4">
										{data.upcomingClasses.slice(0, 3).map((cls) => (
											<div
												key={cls.id}
												className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-gray-100/50 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-200"
											>
												<div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center">
													<span className="text-blue-600 font-bold">
														{cls.student.name.charAt(0)}
													</span>
												</div>
												<div className="flex-1">
													<h3 className="font-semibold text-gray-900">{cls.subject}</h3>
													<p className="text-sm text-gray-600">
														{cls.student.name}
													</p>
													<p className="text-xs text-gray-500 mt-1">
														{formatDate(cls.date)} • {cls.time}
													</p>
												</div>
												<div className="text-right space-y-2">
													<Badge
														variant={cls.status === 'confirmada' ? 'default' : 'outline'}
														className="text-xs"
													>
														{cls.status === 'confirmada' ? 'Confirmada' : 'Pendiente'}
													</Badge>
													<p className="text-lg font-bold text-green-600">
														{formatCurrency(cls.price)}
													</p>
												</div>
												<Button size="sm" className="ml-4">
													💬 Chat
												</Button>
											</div>
										))}
									</div>
								</Card>

								{/* Weekly Schedule */}
								<Card className="p-6">
									<h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
										📊 Horario Semanal
									</h2>

									<div className="grid grid-cols-7 gap-2">
										{data.weeklySchedule.map((day) => (
											<div
												key={day.day}
												className={`p-4 rounded-xl text-center ${
													day.available
														? 'bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200'
														: 'bg-gray-50 border border-gray-200'
												}`}
											>
												<div className="font-semibold text-gray-900 mb-2">
													{day.day}
												</div>
												<div className="space-y-1">
													<div className="text-lg font-bold text-blue-600">
														{day.classes}
													</div>
													<div className="text-xs text-gray-600">clases</div>
													<div className="text-sm font-semibold text-green-600">
														{formatCurrency(day.revenue)}
													</div>
												</div>
											</div>
										))}
									</div>
								</Card>
							</>
						)}

						{activeTab === 'earnings' && (
							<Card className="p-6">
								<h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
									💰 Resumen de Ganancias
								</h2>

								<div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
									<div className="p-4 bg-blue-50 rounded-xl">
										<div className="text-sm text-gray-600 mb-1">Hoy</div>
										<div className="text-xl font-bold text-blue-600">
											{formatCurrency(data.earnings.today)}
										</div>
									</div>
									<div className="p-4 bg-purple-50 rounded-xl">
										<div className="text-sm text-gray-600 mb-1">Esta Semana</div>
										<div className="text-xl font-bold text-purple-600">
											{formatCurrency(data.earnings.thisWeek)}
										</div>
									</div>
									<div className="p-4 bg-green-50 rounded-xl">
										<div className="text-sm text-gray-600 mb-1">Este Mes</div>
										<div className="text-xl font-bold text-green-600">
											{formatCurrency(data.earnings.thisMonth)}
										</div>
									</div>
								</div>

								<div className="grid grid-cols-2 gap-4">
									<div className="p-4 bg-yellow-50 rounded-xl border border-yellow-200">
										<div className="text-sm text-gray-600 mb-1">Pendiente</div>
										<div className="text-lg font-bold text-yellow-600">
											{formatCurrency(data.earnings.pending)}
										</div>
									</div>
									<div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
										<div className="text-sm text-gray-600 mb-1">Disponible</div>
										<div className="text-lg font-bold text-emerald-600">
											{formatCurrency(data.earnings.available)}
										</div>
									</div>
								</div>
							</Card>
						)}
					</div>

					{/* Right Column - Sidebar */}
					<div className="space-y-6">
						{/* Quick Actions */}
						<Card className="p-6">
							<h3 className="font-semibold text-gray-900 mb-4">Acciones Rápidas</h3>
							<div className="space-y-3">
								<Button variant="outline" className="w-full justify-start" size="sm">
									➕ Crear Clase
								</Button>
								<Button variant="outline" className="w-full justify-start" size="sm">
									📝 Actualizar Perfil
								</Button>
								<Button variant="outline" className="w-full justify-start" size="sm">
									💬 Mensajes
								</Button>
								<Button variant="outline" className="w-full justify-start" size="sm">
									📊 Ver Estadísticas
								</Button>
							</div>
						</Card>

						{/* Recent Activity */}
						<Card className="p-6">
							<div className="flex items-center justify-between mb-4">
								<h3 className="font-semibold text-gray-900">Actividad Reciente</h3>
								🔔
							</div>
							<div className="space-y-3">
								{data.recentActivity.slice(0, 4).map((activity) => (
									<div
										key={activity.id}
										className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
									>
										<div className="text-lg">
											{activity.type === 'class_completed' ? '✅' : 
											 activity.type === 'booking_received' ? '📅' : '💰'}
										</div>
										<div className="flex-1">
											<p className="font-medium text-gray-900 text-sm">
												{activity.message}
											</p>
											<p className="text-xs text-gray-600">
												{formatDate(activity.timestamp)}
											</p>
											{activity.rating && (
												<div className="flex gap-1 mt-1">
													{[...Array(activity.rating)].map((_, i) => (
														<span key={i} className="text-yellow-400 text-xs">⭐</span>
													))}
												</div>
											)}
										</div>
									</div>
								))}
							</div>
						</Card>

						{/* Teacher Profile Summary */}
						<Card className="p-6">
							<h3 className="font-semibold text-gray-900 mb-4">Mi Perfil</h3>
							<div className="space-y-4">
								<div>
									<p className="text-sm text-gray-600 mb-2">Materias</p>
									<div className="flex flex-wrap gap-2">
										{data.teacher.subjects.map((subject) => (
											<Badge key={subject} variant="outline" className="text-xs">
												{subject}
											</Badge>
										))}
									</div>
								</div>

								<div>
									<p className="text-sm text-gray-600 mb-2">Idiomas</p>
									<div className="flex flex-wrap gap-2">
										{data.teacher.languages.map((language) => (
											<Badge key={language} variant="outline" className="text-xs">
												{language}
											</Badge>
										))}
									</div>
								</div>

								<div className="pt-4 border-t border-gray-100">
									<div className="text-center">
										<div className="text-2xl font-bold text-blue-600 mb-1">
											{data.metrics.responseRate}%
										</div>
										<p className="text-xs text-gray-600">Tasa de Respuesta</p>
									</div>
								</div>
							</div>
						</Card>
					</div>
				</div>
			</div>
		</div>
	)
} 