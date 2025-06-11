'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'

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

interface StudentDashboardClientProps {
	data: StudentData
}

export default function StudentDashboardClient({ data }: StudentDashboardClientProps) {
	const [activeTab, setActiveTab] = useState<'overview' | 'classes' | 'progress' | 'achievements'>('overview')

	const formatDate = (dateStr: string) => {
		return new Date(dateStr).toLocaleDateString('es-ES', {
			weekday: 'short',
			day: 'numeric',
			month: 'short',
			hour: '2-digit',
			minute: '2-digit'
		})
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
			{/* Header */}
			<div className="border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-40">
				<div className="max-w-7xl mx-auto px-4 py-4">
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-4">
							<div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
								{data.student.name.charAt(0)}
							</div>
							<div>
								<h1 className="text-2xl font-bold text-gray-900">
									¡Hola, {data.student.name.split(' ')[0]}! 👋
								</h1>
								<p className="text-gray-600">
									{data.student.level} • {data.metrics.streak} días de racha
								</p>
							</div>
						</div>

						<div className="flex items-center gap-3">
							<Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white">
								▶️ Continuar Aprendiendo
							</Button>
						</div>
					</div>
				</div>
			</div>

			<div className="max-w-7xl mx-auto p-4 space-y-6">
				{/* Quick Stats */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					<Card className="p-6 bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0">
						<div className="flex items-center justify-between mb-4">
							<div className="p-3 bg-white/20 rounded-xl">
								📚
							</div>
							<span className="text-purple-200">📈</span>
						</div>
						<div className="space-y-1">
							<p className="text-sm text-purple-100">Clases Completadas</p>
							<p className="text-2xl font-bold">{data.metrics.completedClasses}</p>
							<p className="text-xs text-purple-200">
								de {data.metrics.totalClasses} totales
							</p>
						</div>
					</Card>

					<Card className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0">
						<div className="flex items-center justify-between mb-4">
							<div className="p-3 bg-white/20 rounded-xl">
								⏱️
							</div>
							<span className="text-blue-200">🎯</span>
						</div>
						<div className="space-y-1">
							<p className="text-sm text-blue-100">Horas de Estudio</p>
							<p className="text-2xl font-bold">{data.metrics.hoursStudied}</p>
							<p className="text-xs text-blue-200">este mes</p>
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
							<p className="text-sm text-green-100">Calificación Promedio</p>
							<p className="text-2xl font-bold">{data.metrics.averageRating}</p>
							<p className="text-xs text-green-200">⭐ Excelente</p>
						</div>
					</Card>

					<Card className="p-6 bg-gradient-to-br from-orange-500 to-red-500 text-white border-0">
						<div className="flex items-center justify-between mb-4">
							<div className="p-3 bg-white/20 rounded-xl">
								🏅
							</div>
							<span className="text-orange-200">🎓</span>
						</div>
						<div className="space-y-1">
							<p className="text-sm text-orange-100">Logros Desbloqueados</p>
							<p className="text-2xl font-bold">{data.metrics.achievements}</p>
							<p className="text-xs text-orange-200">+2 esta semana</p>
						</div>
					</Card>
				</div>

				{/* Navigation Tabs */}
				<div className="flex space-x-1 bg-gray-100 p-1 rounded-xl w-fit">
					{[
						{ key: 'overview', label: 'Resumen', icon: '📊' },
						{ key: 'classes', label: 'Mis Clases', icon: '📅' },
						{ key: 'progress', label: 'Progreso', icon: '🎯' },
						{ key: 'achievements', label: 'Logros', icon: '🏆' },
					].map(({ key, label, icon }) => (
						<Button
							key={key}
							variant={activeTab === key ? 'default' : 'ghost'}
							size="sm"
							onClick={() => setActiveTab(key as 'overview' | 'progress')}
							className={`relative ${
								activeTab === key
									? 'bg-white shadow-sm text-purple-600'
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
											Ver Todo →
										</Button>
									</div>

									<div className="space-y-4">
										{data.upcomingClasses.slice(0, 3).map((cls) => (
											<div
												key={cls.id}
												className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-gray-100/50 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-200"
											>
												<div className="p-3 bg-white rounded-xl shadow-sm">
													🧮
												</div>
												<div className="flex-1">
													<h3 className="font-semibold text-gray-900">{cls.title}</h3>
													<p className="text-sm text-gray-600">
														{cls.teacher} • {cls.subject}
													</p>
													<p className="text-xs text-gray-500 mt-1">
														{formatDate(cls.time)} • {cls.duration}
													</p>
												</div>
												<div className="text-right space-y-2">
													<Badge
														variant={cls.status === 'confirmed' ? 'default' : 'outline'}
														className="text-xs"
													>
														{cls.status === 'confirmed' ? 'Confirmada' : 'Pendiente'}
													</Badge>
													<Badge
														variant="outline"
														className="text-xs"
													>
														{cls.type === 'individual' ? '1:1' : 'Grupo'}
													</Badge>
												</div>
												<Button size="sm" className="ml-4">
													▶️
												</Button>
											</div>
										))}
									</div>
								</Card>

								{/* Recent Activity */}
								<Card className="p-6">
									<h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
										✅ Clases Recientes
									</h2>

									<div className="space-y-4">
										{data.recentClasses.map((cls) => (
											<div
												key={cls.id}
												className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-xl hover:shadow-sm transition-all duration-200"
											>
												<div className="p-3 bg-gray-50 rounded-xl">
													🧮
												</div>
												<div className="flex-1">
													<h3 className="font-medium text-gray-900">{cls.title}</h3>
													<p className="text-sm text-gray-600">
														{cls.teacher} • {cls.subject}
													</p>
													<p className="text-xs text-gray-500 mt-1">
														{formatDate(cls.date)}
													</p>
												</div>
												<div className="flex items-center gap-2">
													<div className="flex items-center gap-1">
														{[...Array(5)].map((_, i) => (
															<span
																key={i}
																className={`text-sm ${
																	i < cls.rating
																		? 'text-yellow-400'
																		: 'text-gray-300'
																}`}
															>
																⭐
															</span>
														))}
													</div>
													<Badge
														variant={cls.completed ? 'default' : 'outline'}
														className="ml-2"
													>
														{cls.completed ? 'Completada' : 'Pendiente'}
													</Badge>
												</div>
											</div>
										))}
									</div>
								</Card>
							</>
						)}

						{activeTab === 'progress' && (
							<Card className="p-6">
								<h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
									🎯 Progreso por Materia
								</h2>

								<div className="space-y-6">
									{data.subjectProgress.map((subject) => (
										<div key={subject.subject} className="space-y-3">
											<div className="flex items-center justify-between">
												<div className="flex items-center gap-3">
													<div className="p-2 bg-gray-100 rounded-lg">
														📚
													</div>
													<div>
														<h3 className="font-semibold text-gray-900">
															{subject.subject}
														</h3>
														<p className="text-sm text-gray-600">
															{subject.totalHours}h • Nivel {subject.level}
														</p>
													</div>
												</div>
												<div className="text-right">
													<p className="text-lg font-bold text-gray-900">
														{subject.progress}%
													</p>
													<Badge variant="outline" className="text-xs">
														{subject.level}
													</Badge>
												</div>
											</div>
											<Progress value={subject.progress} className="h-3" />
										</div>
									))}
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
									📅 Programar Clase
								</Button>
								<Button variant="outline" className="w-full justify-start" size="sm">
									👥 Buscar Profesor
								</Button>
								<Button variant="outline" className="w-full justify-start" size="sm">
									📥 Descargar Notas
								</Button>
								<Button variant="outline" className="w-full justify-start" size="sm">
									📤 Compartir Progreso
								</Button>
							</div>
						</Card>

						{/* Achievements Preview */}
						<Card className="p-6">
							<div className="flex items-center justify-between mb-4">
								<h3 className="font-semibold text-gray-900">Logros Recientes</h3>
								🏆
							</div>
							<div className="space-y-3">
								{data.achievements
									.filter(a => a.earned)
									.slice(0, 3)
									.map((achievement) => (
										<div
											key={achievement.id}
											className="flex items-center gap-3 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200"
										>
											<div className="text-2xl">{achievement.icon}</div>
											<div className="flex-1">
												<p className="font-medium text-gray-900 text-sm">
													{achievement.title}
												</p>
												<p className="text-xs text-gray-600">
													{achievement.date && formatDate(achievement.date)}
												</p>
											</div>
										</div>
									))}
							</div>
						</Card>

						{/* Progress Overview */}
						<Card className="p-6">
							<h3 className="font-semibold text-gray-900 mb-4">Progreso General</h3>
							<div className="space-y-4">
								<div className="text-center">
									<div className="text-3xl font-bold text-purple-600 mb-2">
										{data.metrics.totalProgress}%
									</div>
									<Progress value={data.metrics.totalProgress} className="h-2 mb-2" />
									<p className="text-sm text-gray-600">Completado este mes</p>
								</div>

								<div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
									<div className="text-center">
										<div className="text-xl font-bold text-blue-600">
											{data.metrics.activeSubjects}
										</div>
										<p className="text-xs text-gray-600">Materias Activas</p>
									</div>
									<div className="text-center">
										<div className="text-xl font-bold text-green-600">
											{data.metrics.streak}
										</div>
										<p className="text-xs text-gray-600">Días de Racha</p>
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