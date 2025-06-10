'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { 
	Video, 
	VideoOff, 
	Mic, 
	MicOff, 
	Monitor,
	Phone,
	Settings,
	Users,
	MessageCircle,
	Grid,
	Maximize2,
	Minimize2,
	Volume2,
	VolumeX,
	Clock,
	Wifi,
	Signal,
	Brain,
	Eye,
	Heart,
	TrendingUp,
	Lightbulb,
	Zap,
	BarChart3,
	Activity,
	Sparkles,
	ChevronLeft,
	ChevronRight,
	PlusCircle,
	Share2,
	Download,
	Bell,
	BellOff,
} from 'lucide-react'

// Import components
import Whiteboard from '../../app/aula-virtual/components/whiteboard'
import VideoConference from '../../app/aula-virtual/components/video-conference'
import SmartChat from '../../app/aula-virtual/components/smart-chat'
import { getCurrentUser, getOtherUsers } from '@/lib/mock-users'
import { Button } from '@/src/components/ui/button'
import { Card } from '@/src/components/ui/card'
import { MetricCard } from '@/src/components/ui/metric-card'

const VirtualClassroom: React.FC = () => {
	const [currentUser] = useState(() => getCurrentUser('student'))
	const [otherUsers] = useState(() => getOtherUsers(currentUser.id))
	const [isFullscreen, setIsFullscreen] = useState(false)
	const [activeView, setActiveView] = useState<'default' | 'whiteboard-focus' | 'video-focus'>('default')
	const [sessionTime, setSessionTime] = useState(0)
	const [connectionQuality, setConnectionQuality] = useState('excellent')
	const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
	const [notifications, setNotifications] = useState(true)
	
	// AI Metrics - Simulated real-time data
	const [aiMetrics, setAiMetrics] = useState({
		engagement: 85,
		attention: 78,
		participation: 92,
		comprehension: 84,
		emotionalState: 'engaged',
		focusLevel: 88,
	})

	// Session timer
	useEffect(() => {
		const timer = setInterval(() => {
			setSessionTime(prev => prev + 1)
		}, 1000)
		return () => clearInterval(timer)
	}, [])

	// Simulate AI metrics updates
	useEffect(() => {
		const interval = setInterval(() => {
			setAiMetrics(prev => ({
				engagement: Math.max(70, Math.min(100, prev.engagement + (Math.random() - 0.5) * 10)),
				attention: Math.max(60, Math.min(100, prev.attention + (Math.random() - 0.5) * 8)),
				participation: Math.max(80, Math.min(100, prev.participation + (Math.random() - 0.5) * 5)),
				comprehension: Math.max(70, Math.min(100, prev.comprehension + (Math.random() - 0.5) * 6)),
				emotionalState: ['engaged', 'focused', 'excited', 'curious'][Math.floor(Math.random() * 4)],
				focusLevel: Math.max(75, Math.min(100, prev.focusLevel + (Math.random() - 0.5) * 7)),
			}))
		}, 3000)
		return () => clearInterval(interval)
	}, [])

	// Connection quality simulation
	useEffect(() => {
		const interval = setInterval(() => {
			const qualities = ['excellent', 'good', 'fair']
			setConnectionQuality(qualities[Math.floor(Math.random() * qualities.length)])
		}, 15000)
		return () => clearInterval(interval)
	}, [])

	const formatTime = useCallback((seconds: number) => {
		const hours = Math.floor(seconds / 3600)
		const minutes = Math.floor((seconds % 3600) / 60)
		const secs = seconds % 60
		return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
	}, [])

	const getConnectionColor = useCallback((quality: string) => {
		switch (quality) {
			case 'excellent': return 'text-accent-500'
			case 'good': return 'text-warning-500'
			case 'fair': return 'text-error-500'
			default: return 'text-neutral-500'
		}
	}, [])

	const toggleFullscreen = useCallback(() => {
		if (!document.fullscreenElement) {
			document.documentElement.requestFullscreen()
			setIsFullscreen(true)
		} else {
			document.exitFullscreen()
			setIsFullscreen(false)
		}
	}, [])

	const getEmotionalStateColor = useCallback((state: string) => {
		switch (state) {
			case 'engaged': return 'text-accent-600'
			case 'focused': return 'text-secondary-600'
			case 'excited': return 'text-warning-600'
			case 'curious': return 'text-primary-600'
			default: return 'text-neutral-600'
		}
	}, [])

	const getEmotionalStateIcon = useCallback((state: string) => {
		switch (state) {
			case 'engaged': return '😊'
			case 'focused': return '🎯'
			case 'excited': return '🤩'
			case 'curious': return '🤔'
			default: return '😐'
		}
	}, [])

	return (
		<div className="min-h-screen bg-gradient-to-br from-neutral-50 via-primary-50/30 to-secondary-50/30">
			{/* Modern Header */}
			<header className="bg-white/90 backdrop-blur-md border-b border-neutral-200 shadow-sm sticky top-0 z-40">
				<div className="px-6 py-4">
					<div className="flex items-center justify-between">
						{/* Class Info */}
						<div className="flex items-center space-x-6">
							<div className="flex items-center space-x-4">
								<div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
									M
								</div>
								<div>
									<h1 className="text-xl font-bold bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent">
										Matemáticas Avanzadas
									</h1>
									<p className="text-sm text-neutral-600">
										Profesor: {otherUsers.find(u => u.role === 'teacher')?.name || 'Dr. Elena Rodriguez'}
									</p>
								</div>
							</div>
							
							{/* Session Metrics */}
							<div className="hidden md:flex items-center space-x-6 text-sm text-neutral-600">
								<div className="flex items-center space-x-2 bg-neutral-100 px-3 py-2 rounded-lg">
									<Clock className="w-4 h-4" />
									<span className="font-medium">{formatTime(sessionTime)}</span>
								</div>
								<div className="flex items-center space-x-2 bg-neutral-100 px-3 py-2 rounded-lg">
									<Users className="w-4 h-4" />
									<span className="font-medium">{otherUsers.length + 1} participantes</span>
								</div>
								<div className={`flex items-center space-x-2 px-3 py-2 rounded-lg ${getConnectionColor(connectionQuality)} bg-white border`}>
									<Signal className="w-4 h-4" />
									<span className="font-medium capitalize">{connectionQuality}</span>
								</div>
							</div>
						</div>

						{/* Header Controls */}
						<div className="flex items-center space-x-3">
							{/* View Toggle */}
							<div className="hidden lg:flex items-center bg-neutral-100 rounded-xl p-1">
								<Button
									variant={activeView === 'default' ? 'default' : 'ghost'}
									size="sm"
									onClick={() => setActiveView('default')}
									className="rounded-lg"
								>
									<Grid className="w-4 h-4" />
								</Button>
								<Button
									variant={activeView === 'whiteboard-focus' ? 'default' : 'ghost'}
									size="sm"
									onClick={() => setActiveView('whiteboard-focus')}
									className="rounded-lg"
								>
									Pizarra
								</Button>
								<Button
									variant={activeView === 'video-focus' ? 'default' : 'ghost'}
									size="sm"
									onClick={() => setActiveView('video-focus')}
									className="rounded-lg"
								>
									Video
								</Button>
							</div>

							{/* Action Buttons */}
							<Button
								variant="ghost"
								size="sm"
								onClick={() => setNotifications(!notifications)}
								className="rounded-lg"
							>
								{notifications ? <Bell className="w-4 h-4" /> : <BellOff className="w-4 h-4" />}
							</Button>

							<Button
								variant="ghost"
								size="sm"
								onClick={toggleFullscreen}
								className="rounded-lg"
							>
								{isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
							</Button>

							<Button
								variant="ghost"
								size="sm"
								className="rounded-lg"
							>
								<Settings className="w-4 h-4" />
							</Button>

							<Button
								variant="destructive"
								size="sm"
								className="rounded-lg"
							>
								<Phone className="w-4 h-4" />
								<span className="hidden sm:inline">Salir</span>
							</Button>
						</div>
					</div>
				</div>
			</header>

			{/* Main Content */}
			<main className="flex-1 h-[calc(100vh-88px)] overflow-hidden">
				{renderLayout()}
			</main>

			{/* Modern Status Bar */}
			<div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
				<Card 
					variant="glass" 
					padding="sm" 
					className="flex items-center space-x-4 backdrop-blur-md shadow-lg"
				>
					<div className="flex items-center space-x-2 text-sm">
						<div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
						<span className="text-neutral-700 font-medium">En vivo</span>
					</div>
					<div className="w-px h-4 bg-neutral-300" />
					<div className={`flex items-center space-x-2 text-sm ${getConnectionColor(connectionQuality)}`}>
						<Wifi className="w-4 h-4" />
						<span className="font-medium capitalize">{connectionQuality}</span>
					</div>
					<div className="w-px h-4 bg-neutral-300" />
					<div className="flex items-center space-x-2 text-sm text-neutral-700">
						<Activity className="w-4 h-4" />
						<span className="font-medium">IA Activa</span>
					</div>
				</Card>
			</div>
		</div>
	)

	function renderLayout() {
		switch (activeView) {
			case 'whiteboard-focus':
				return renderWhiteboardFocus()
			case 'video-focus':
				return renderVideoFocus()
			default:
				return renderDefaultLayout()
		}
	}

	function renderDefaultLayout() {
		return (
			<div className="h-full grid grid-cols-12 gap-6 p-6">
				{/* Left Panel - Video & Chat */}
				<div className={`col-span-12 lg:col-span-4 flex flex-col space-y-6 transition-all duration-300 ${sidebarCollapsed ? 'lg:col-span-2' : ''}`}>
					<Card variant="glass" padding="sm" className="flex-1 min-h-0">
						<VideoConference 
							currentUser={currentUser}
							participants={otherUsers}
							className="h-full"
						/>
					</Card>
					<Card variant="glass" padding="sm" className="h-80">
						<SmartChat 
							currentUser={currentUser}
							participants={otherUsers}
							className="h-full"
						/>
					</Card>
				</div>

				{/* Center - Whiteboard */}
				<div className={`col-span-12 lg:col-span-5 transition-all duration-300 ${sidebarCollapsed ? 'lg:col-span-7' : ''}`}>
					<Card variant="elevated" padding="none" className="h-full">
						<Whiteboard className="h-full rounded-xl" />
					</Card>
				</div>

				{/* Right Panel - AI Insights */}
				<div className={`col-span-12 lg:col-span-3 transition-all duration-300 ${sidebarCollapsed ? 'lg:col-span-3' : ''}`}>
					{renderAIPanel()}
				</div>
			</div>
		)
	}

	function renderWhiteboardFocus() {
		return (
			<div className="h-full grid grid-cols-12 gap-6 p-6">
				<div className="col-span-12 lg:col-span-9">
					<Card variant="elevated" padding="none" className="h-full">
						<Whiteboard className="h-full rounded-xl" />
					</Card>
				</div>
				<div className="col-span-12 lg:col-span-3 flex flex-col space-y-4">
					<Card variant="glass" padding="sm" className="h-64">
						<VideoConference 
							currentUser={currentUser}
							participants={otherUsers}
							className="h-full"
						/>
					</Card>
					<Card variant="glass" padding="sm" className="flex-1 min-h-0">
						{renderAIPanel()}
					</Card>
				</div>
			</div>
		)
	}

	function renderVideoFocus() {
		return (
			<div className="h-full grid grid-cols-12 gap-6 p-6">
				<div className="col-span-12 lg:col-span-8">
					<Card variant="glass" padding="sm" className="h-full">
						<VideoConference 
							currentUser={currentUser}
							participants={otherUsers}
							className="h-full"
						/>
					</Card>
				</div>
				<div className="col-span-12 lg:col-span-4 flex flex-col space-y-4">
					<Card variant="glass" padding="sm" className="h-80">
						<SmartChat 
							currentUser={currentUser}
							participants={otherUsers}
							className="h-full"
						/>
					</Card>
					<Card variant="glass" padding="sm" className="flex-1 min-h-0">
						{renderAIPanel()}
					</Card>
				</div>
			</div>
		)
	}

	function renderAIPanel() {
		return (
			<div className="h-full flex flex-col space-y-4 overflow-auto">
				{/* AI Header */}
				<div className="flex items-center justify-between">
					<div className="flex items-center space-x-2">
						<div className="w-8 h-8 bg-gradient-to-r from-ai-purple to-ai-blue rounded-lg flex items-center justify-center">
							<Sparkles className="w-4 h-4 text-white" />
						</div>
						<h3 className="font-semibold text-neutral-900">Panel de IA</h3>
					</div>
					<Button
						variant="ghost"
						size="sm"
						onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
						className="rounded-lg"
					>
						{sidebarCollapsed ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
					</Button>
				</div>

				{/* AI Metrics Grid */}
				<div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
					<MetricCard
						variant="engagement"
						title="Nivel de Enfoque"
						value={`${Math.round(aiMetrics.focusLevel)}%`}
						progress={aiMetrics.focusLevel}
						icon={<Eye className="w-5 h-5" />}
						trend="positive"
						animated
					/>
					<MetricCard
						variant="attention"
						title="Comprensión"
						value={`${Math.round(aiMetrics.comprehension)}%`}
						progress={aiMetrics.comprehension}
						icon={<Brain className="w-5 h-5" />}
						trend="positive"
						animated
					/>
					<MetricCard
						variant="participation"
						title="Participación"
						value={`${Math.round(aiMetrics.participation)}%`}
						progress={aiMetrics.participation}
						icon={<TrendingUp className="w-5 h-5" />}
						trend="positive"
						animated
					/>
					<MetricCard
						variant="emotional"
						title="Estado Emocional"
						value={aiMetrics.emotionalState}
						subtitle={getEmotionalStateIcon(aiMetrics.emotionalState)}
						icon={<Heart className="w-5 h-5" />}
						trend="positive"
						animated
					/>
				</div>

				{/* AI Recommendations */}
				<Card variant="ai" padding="md" className="flex-1">
					<div className="flex items-center space-x-2 mb-4">
						<Lightbulb className="w-5 h-5 text-ai-purple" />
						<h4 className="font-semibold text-neutral-900">Recomendaciones IA</h4>
					</div>
					<div className="space-y-3 text-sm">
						<div className="flex items-start space-x-3 p-3 bg-white/50 rounded-lg">
							<div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0" />
							<p className="text-neutral-700">
								Tu nivel de enfoque está excelente. Mantén esta concentración.
							</p>
						</div>
						<div className="flex items-start space-x-3 p-3 bg-white/50 rounded-lg">
							<div className="w-2 h-2 bg-secondary-500 rounded-full mt-2 flex-shrink-0" />
							<p className="text-neutral-700">
								Considera hacer una pregunta sobre el tema actual para reforzar la comprensión.
							</p>
						</div>
						<div className="flex items-start space-x-3 p-3 bg-white/50 rounded-lg">
							<div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
							<p className="text-neutral-700">
								¿Te gustaría tomar notas sobre este concepto? Te ayudo a organizarlas.
							</p>
						</div>
					</div>
				</Card>
			</div>
		)
	}
}

export default VirtualClassroom