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
	Maximize2,
	Minimize2,
	Clock,
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
	Bell,
	BellOff,
	Share2,
	Download,
	Grid3X3,
	Focus,
	BookOpen,
	Award,
	Target,
} from 'lucide-react'

// Import components
import Whiteboard from './whiteboard'
import VideoConference from './video-conference' 
import SmartChat from './smart-chat'
import InnovationPanel from './innovation-panel'
import DataAccess from './data-access'
import { Button } from '@/src/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card'
import { MetricCard } from '@/src/components/ui/metric-card'

// Mock data
interface User {
	id: string
	name: string
	role: string
	avatar: string
}

const VirtualClassroomClient: React.FC = () => {
	const [currentUser] = useState<User>({
		id: 'student-1',
		name: 'Ana López',
		role: 'student',
		avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b789?w=150&h=150&fit=crop&crop=face&auto=format'
	})
	
	const [otherUsers] = useState<User[]>([
		{
			id: 'teacher-1',
			name: 'Dr. Elena Rodriguez',
			role: 'teacher',
			avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face&auto=format'
		},
		{
			id: 'student-2',
			name: 'Carlos Martinez',
			role: 'student',
			avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format'
		},
		{
			id: 'student-3',
			name: 'Sofia Chen',
			role: 'student',
			avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format'
		}
	])

	const [isFullscreen, setIsFullscreen] = useState(false)
	const [activeView, setActiveView] = useState<'balanced' | 'whiteboard-focus' | 'video-focus'>('balanced')
	const [sessionTime, setSessionTime] = useState(0)
	const [connectionQuality, setConnectionQuality] = useState<'excellent' | 'good' | 'fair'>('excellent')
	const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
	const [notifications, setNotifications] = useState(true)
	
	// AI Metrics - Simulated real-time data
	const [aiMetrics, setAiMetrics] = useState({
		engagement: 85,
		attention: 78,
		participation: 92,
		comprehension: 84,
		emotionalState: 'engaged' as 'engaged' | 'focused' | 'excited' | 'curious',
		focusLevel: 88,
		learningScore: 87,
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
				emotionalState: ['engaged', 'focused', 'excited', 'curious'][Math.floor(Math.random() * 4)] as any,
				focusLevel: Math.max(75, Math.min(100, prev.focusLevel + (Math.random() - 0.5) * 7)),
				learningScore: Math.max(70, Math.min(100, prev.learningScore + (Math.random() - 0.5) * 5)),
			}))
		}, 3000)
		return () => clearInterval(interval)
	}, [])

	// Connection quality simulation
	useEffect(() => {
		const interval = setInterval(() => {
			const qualities: ('excellent' | 'good' | 'fair')[] = ['excellent', 'good', 'fair']
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
			case 'excellent': return 'text-green-500'
			case 'good': return 'text-yellow-500'
			case 'fair': return 'text-red-500'
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
			case 'engaged': return 'text-green-600'
			case 'focused': return 'text-blue-600'
			case 'excited': return 'text-orange-600'
			case 'curious': return 'text-purple-600'
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

	const renderBalancedLayout = () => (
		<div className="h-full grid grid-cols-12 gap-4 p-4">
			{/* Left Panel - Video & Chat - More Compact */}
			<div className={`col-span-12 lg:col-span-4 flex flex-col space-y-4 transition-compact ${sidebarCollapsed ? 'lg:col-span-2' : ''}`}>
				<Card variant="glass" padding="sm" className="flex-1 min-h-0 h-80 shadow-compact animate-fade-in">
					<VideoConference 
						currentUser={currentUser}
						participants={otherUsers}
						className="h-full"
					/>
				</Card>
				<Card variant="glass" padding="sm" className="h-64 shadow-compact animate-fade-in">
					<SmartChat 
						currentUser={currentUser}
						participants={otherUsers}
						className="h-full"
					/>
				</Card>
			</div>

			{/* Center - Whiteboard - Optimized */}
			<div className={`col-span-12 lg:col-span-5 transition-compact ${sidebarCollapsed ? 'lg:col-span-7' : ''}`}>
				<Card variant="elevated" padding="none" className="h-full shadow-compact-hover animate-scale-in">
					<Whiteboard className="h-full rounded-lg" />
				</Card>
			</div>

			{/* Right Panel - AI Insights - Compact */}
			<div className={`col-span-12 lg:col-span-3 transition-all duration-300 ${sidebarCollapsed ? 'lg:col-span-3' : ''}`}>
				<InnovationPanel currentUser={currentUser} className="h-full" />
			</div>
		</div>
	)

	const renderWhiteboardFocus = () => (
		<div className="h-full grid grid-cols-12 gap-4 p-4">
			<div className="col-span-12 lg:col-span-9">
				<Card variant="elevated" padding="none" className="h-full">
					<Whiteboard className="h-full rounded-lg" />
				</Card>
			</div>
			<div className="col-span-12 lg:col-span-3 flex flex-col space-y-3">
				<Card variant="glass" padding="sm" className="h-48">
					<VideoConference 
						currentUser={currentUser}
						participants={otherUsers}
						className="h-full"
					/>
				</Card>
				<Card variant="glass" padding="sm" className="flex-1 min-h-0">
					<InnovationPanel currentUser={currentUser} className="h-full" />
				</Card>
			</div>
		</div>
	)

	const renderVideoFocus = () => (
		<div className="h-full grid grid-cols-12 gap-4 p-4">
			<div className="col-span-12 lg:col-span-8">
				<Card variant="glass" padding="sm" className="h-full">
					<VideoConference 
						currentUser={currentUser}
						participants={otherUsers}
						className="h-full"
					/>
				</Card>
			</div>
			<div className="col-span-12 lg:col-span-4 flex flex-col space-y-3">
				<Card variant="glass" padding="sm" className="h-64">
					<SmartChat 
						currentUser={currentUser}
						participants={otherUsers}
						className="h-full"
					/>
				</Card>
				<Card variant="glass" padding="sm" className="flex-1 min-h-0">
					<InnovationPanel currentUser={currentUser} className="h-full" />
				</Card>
			</div>
		</div>
	)

	return (
		<div className="min-h-screen bg-gradient-to-br from-neutral-50 via-primary-50/30 to-secondary-50/30">
			{/* Data Access Component */}
			<DataAccess />
			
			{/* Modern Header - More Compact */}
			<header className="bg-white/90 backdrop-blur-md border-b border-neutral-200 shadow-sm sticky top-0 z-40">
				<div className="px-4 py-3">
					<div className="flex items-center justify-between">
						{/* Class Info - Compact */}
						<div className="flex items-center space-x-4">
							<div className="flex items-center space-x-3">
								<div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
									M
								</div>
								<div>
									<h1 className="text-lg font-bold bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent">
										Matemáticas Avanzadas
									</h1>
									<p className="text-xs text-neutral-600">
										Profesor: {otherUsers.find(u => u.role === 'teacher')?.name || 'Dr. Elena Rodriguez'}
									</p>
								</div>
							</div>
							
							{/* Session Metrics - Compact */}
							<div className="hidden md:flex items-center space-x-4 text-xs text-neutral-600">
								<div className="flex items-center space-x-1.5 bg-neutral-100 px-2.5 py-1.5 rounded-md">
									<Clock className="w-3.5 h-3.5" />
									<span className="font-medium">{formatTime(sessionTime)}</span>
								</div>
								<div className="flex items-center space-x-1.5 bg-neutral-100 px-2.5 py-1.5 rounded-md">
									<Users className="w-3.5 h-3.5" />
									<span className="font-medium">{otherUsers.length + 1} participantes</span>
								</div>
								<div className={`flex items-center space-x-1.5 px-2.5 py-1.5 rounded-md ${getConnectionColor(connectionQuality)} bg-white border`}>
									<Signal className="w-3.5 h-3.5" />
									<span className="font-medium capitalize">{connectionQuality}</span>
								</div>
							</div>
						</div>

						{/* Header Controls - Compact */}
						<div className="flex items-center space-x-3">
							{/* View Toggle - Smaller */}
							<div className="hidden md:flex items-center bg-neutral-100 rounded-md p-0.5">
								<Button
									variant={activeView === 'balanced' ? 'default' : 'ghost'}
									size="sm"
									onClick={() => setActiveView('balanced')}
									className="rounded-sm h-7 w-7 p-0"
								>
									<Grid3X3 className="w-3.5 h-3.5" />
								</Button>
								<Button
									variant={activeView === 'whiteboard-focus' ? 'default' : 'ghost'}
									size="sm"
									onClick={() => setActiveView('whiteboard-focus')}
									className="rounded-sm h-7 w-7 p-0"
								>
									<BookOpen className="w-3.5 h-3.5" />
								</Button>
								<Button
									variant={activeView === 'video-focus' ? 'default' : 'ghost'}
									size="sm"
									onClick={() => setActiveView('video-focus')}
									className="rounded-sm h-7 w-7 p-0"
								>
									<Video className="w-3.5 h-3.5" />
								</Button>
							</div>

							{/* Notifications - Smaller */}
							<Button
								variant="ghost"
								size="sm"
								onClick={() => setNotifications(!notifications)}
								className={`${notifications ? 'text-primary-600' : 'text-neutral-500'} h-7 w-7 p-0`}
							>
								{notifications ? <Bell className="w-3.5 h-3.5" /> : <BellOff className="w-3.5 h-3.5" />}
							</Button>

							{/* Share & Record - Compact */}
							<div className="flex items-center space-x-1.5">
								<Button variant="outline" size="sm" className="h-7 px-2 text-xs">
									<Share2 className="w-3 h-3 mr-1" />
									Compartir
								</Button>
								<Button variant="outline" size="sm" className="h-7 px-2 text-xs">
									<Download className="w-3 h-3 mr-1" />
									Grabar
								</Button>
							</div>

							{/* Fullscreen & Settings - Smaller */}
							<Button
								variant="ghost"
								size="sm"
								onClick={toggleFullscreen}
								className="text-neutral-600 h-7 w-7 p-0"
							>
								{isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
							</Button>

							<Button variant="ghost" size="sm" className="text-neutral-600 h-7 w-7 p-0">
								<Settings className="w-3.5 h-3.5" />
							</Button>
						</div>
					</div>
				</div>
			</header>

			{/* Main Content */}
			<main className="flex-1 overflow-hidden">
				{activeView === 'balanced' && renderBalancedLayout()}
				{activeView === 'whiteboard-focus' && renderWhiteboardFocus()}
				{activeView === 'video-focus' && renderVideoFocus()}
			</main>

			{/* AI Floating Insights - More Compact */}
			{!sidebarCollapsed && (
				<div className="fixed bottom-4 right-4 z-30">
					<Card variant="ai" padding="sm" className="w-56 shadow-lg">
						<div className="flex items-center justify-between mb-2">
							<div className="flex items-center space-x-1.5">
								<div className="w-5 h-5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
									<Sparkles className="w-2.5 h-2.5 text-white" />
								</div>
								<span className="text-xs font-semibold text-neutral-900">AI Live</span>
							</div>
							<div className="text-lg font-bold text-primary-600">
								{Math.round(aiMetrics.learningScore)}%
							</div>
						</div>
						<div className="space-y-1.5">
							<div className="flex items-center justify-between text-xs">
								<span className="text-neutral-600">Engagement</span>
								<span className="font-bold text-green-600">{Math.round(aiMetrics.engagement)}%</span>
							</div>
							<div className="flex items-center justify-between text-xs">
								<span className="text-neutral-600">Focus</span>
								<span className="font-bold text-blue-600">{Math.round(aiMetrics.focusLevel)}%</span>
							</div>
							<div className="flex items-center justify-between text-xs">
								<span className="text-neutral-600">Estado</span>
								<span className={`font-bold ${getEmotionalStateColor(aiMetrics.emotionalState)}`}>
									{getEmotionalStateIcon(aiMetrics.emotionalState)} {aiMetrics.emotionalState}
								</span>
							</div>
						</div>
					</Card>
				</div>
			)}
		</div>
	)
}

export default VirtualClassroomClient 