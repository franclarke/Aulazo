'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
	Video, 
	VideoOff, 
	Mic, 
	MicOff, 
	Settings, 
	Users, 
	Clock,
	Signal,
	Share2,
	Download,
	Bell,
	BellOff,
	BookOpen,
	Maximize2,
	Minimize2,
	MessageSquare,
	FolderOpen,
	PenTool,
	Grid3X3,
	Layout,
	Phone,
	PhoneOff,
	Monitor,
	Volume2,
	VolumeX,
	Activity,
	TrendingUp,
	Award,
	Target,
	Brain,
	Sparkles
} from 'lucide-react'

import InteractiveWhiteboard from './interactive-whiteboard'
import VideoConference from './video-conference'
import LiveChat from './live-chat'
import StudyMaterials from './study-materials'

interface User {
	id: string
	name: string
	email: string
	role: 'student' | 'teacher'
	avatar: string
	isOnline: boolean
	joinedAt?: Date
}

type ViewMode = 'default' | 'whiteboard-focus' | 'video-focus' | 'materials-focus'

const VirtualClassroomClient: React.FC = () => {
	const [currentUser] = useState<User>({
		id: 'student-1',
		name: 'Ana López',
		email: 'ana.lopez@student.aulazo.com',
		role: 'student',
		avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b789?w=150&h=150&fit=crop&crop=face&auto=format',
		isOnline: true
	})
	
	const [otherUsers] = useState<User[]>([
		{
			id: 'teacher-1',
			name: 'Dr. Elena Rodriguez',
			email: 'elena.rodriguez@aulazo.com',
			role: 'teacher',
			avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face&auto=format',
			isOnline: true
		},
		{
			id: 'student-2',
			name: 'Carlos Martinez',
			email: 'carlos.martinez@student.aulazo.com',
			role: 'student',
			avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format',
			isOnline: true
		},
		{
			id: 'student-3',
			name: 'María García',
			email: 'maria.garcia@student.aulazo.com',
			role: 'student',
			avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format',
			isOnline: true
		}
	])

	const [isFullscreen, setIsFullscreen] = useState(false)
	const [sessionTime, setSessionTime] = useState(0)
	const [connectionQuality] = useState<'excellent' | 'good' | 'fair'>('excellent')
	const [notifications, setNotifications] = useState(true)
	const [isVideoOn, setIsVideoOn] = useState(true)
	const [isMicOn, setIsMicOn] = useState(true)
	const [viewMode, setViewMode] = useState<ViewMode>('default')
	const [activeTab, setActiveTab] = useState<'chat' | 'materials'>('chat')
	
	// Session timer
	useEffect(() => {
		const timer = setInterval(() => {
			setSessionTime(prev => prev + 1)
		}, 1000)
		return () => clearInterval(timer)
	}, [])

	const formatTime = useCallback((seconds: number) => {
		const hours = Math.floor(seconds / 3600)
		const minutes = Math.floor((seconds % 3600) / 60)
		const secs = seconds % 60
		return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
	}, [])

	const getConnectionColor = useCallback((quality: string) => {
		switch (quality) {
			case 'excellent': return 'text-emerald-500'
			case 'good': return 'text-amber-500'
			case 'fair': return 'text-red-500'
			default: return 'text-slate-500'
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

	const getGridClasses = () => {
		switch (viewMode) {
			case 'whiteboard-focus':
				return 'grid-cols-12 xl:grid-cols-16'
			case 'video-focus':
				return 'grid-cols-12 xl:grid-cols-16'
			case 'materials-focus':
				return 'grid-cols-12 xl:grid-cols-16'
			default:
				return 'grid-cols-12 xl:grid-cols-12'
		}
	}

	const getColumnSpans = () => {
		switch (viewMode) {
			case 'whiteboard-focus':
				return {
					video: 'col-span-12 xl:col-span-3',
					whiteboard: 'col-span-12 xl:col-span-9',
					sidebar: 'col-span-12 xl:col-span-4'
				}
			case 'video-focus':
				return {
					video: 'col-span-12 xl:col-span-8',
					whiteboard: 'col-span-12 xl:col-span-5',
					sidebar: 'col-span-12 xl:col-span-3'
				}
			default:
				return {
					video: 'col-span-12 lg:col-span-4 xl:col-span-4',
					whiteboard: 'col-span-12 lg:col-span-8 xl:col-span-5',
					sidebar: 'col-span-12 lg:col-span-12 xl:col-span-3'
				}
		}
	}

	const columnSpans = getColumnSpans()

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/30">
			{/* Enhanced Header with Glass Effect */}
			<header className="bg-white/95 backdrop-blur-xl border-b border-slate-200/60 shadow-lg shadow-slate-900/5 sticky top-0 z-50">
				<div className="px-6 py-4">
					<div className="flex items-center justify-between">
						{/* Enhanced Class Info */}
						<div className="flex items-center space-x-6">
							<div className="flex items-center space-x-4">
								<div className="relative">
									<div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/25">
										M
									</div>
									<div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white animate-pulse" />
								</div>
								<div>
									<h1 className="text-xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
										Matemáticas Avanzadas
									</h1>
									<div className="flex items-center space-x-2 mt-1">
										<span className="text-sm text-slate-600">
											Dr. Elena Rodriguez
										</span>
										<div className="w-1 h-1 bg-slate-400 rounded-full" />
										<span className="text-sm text-emerald-600 font-medium">
											En vivo
										</span>
									</div>
								</div>
							</div>
							
							{/* Enhanced Session Metrics */}
							<div className="hidden lg:flex items-center space-x-3">
								<div className="flex items-center space-x-2 bg-slate-100 px-3 py-2 rounded-xl">
									<Clock className="w-4 h-4 text-slate-600" />
									<span className="font-mono text-sm font-semibold text-slate-700">{formatTime(sessionTime)}</span>
								</div>
								<div className="flex items-center space-x-2 bg-blue-50 px-3 py-2 rounded-xl">
									<Users className="w-4 h-4 text-blue-600" />
									<span className="text-sm font-semibold text-blue-700">{otherUsers.length + 1}</span>
								</div>
								<div className={`flex items-center space-x-2 px-3 py-2 rounded-xl ${getConnectionColor(connectionQuality)} bg-emerald-50`}>
									<Signal className="w-4 h-4" />
									<span className="text-sm font-semibold">Excelente</span>
								</div>
							</div>
						</div>

						{/* Enhanced Header Controls */}
						<div className="flex items-center space-x-4">
							{/* View Mode Controls with Better Styling */}
							<div className="flex items-center bg-slate-100 rounded-xl p-1">
								<Button
									variant={viewMode === 'default' ? 'default' : 'ghost'}
									size="sm"
									onClick={() => setViewMode('default')}
									className={`h-8 w-8 p-0 rounded-lg transition-all duration-200 ${
										viewMode === 'default' 
											? 'bg-white shadow-sm shadow-slate-900/10' 
											: 'hover:bg-white/60'
									}`}
									title="Vista balanceada"
								>
									<Grid3X3 className="w-4 h-4" />
								</Button>
								<Button
									variant={viewMode === 'whiteboard-focus' ? 'default' : 'ghost'}
									size="sm"
									onClick={() => setViewMode('whiteboard-focus')}
									className={`h-8 w-8 p-0 rounded-lg transition-all duration-200 ${
										viewMode === 'whiteboard-focus' 
											? 'bg-white shadow-sm shadow-slate-900/10' 
											: 'hover:bg-white/60'
									}`}
									title="Enfocar pizarra"
								>
									<PenTool className="w-4 h-4" />
								</Button>
								<Button
									variant={viewMode === 'video-focus' ? 'default' : 'ghost'}
									size="sm"
									onClick={() => setViewMode('video-focus')}
									className={`h-8 w-8 p-0 rounded-lg transition-all duration-200 ${
										viewMode === 'video-focus' 
											? 'bg-white shadow-sm shadow-slate-900/10' 
											: 'hover:bg-white/60'
									}`}
									title="Enfocar video"
								>
									<Video className="w-4 h-4" />
								</Button>
							</div>

							{/* Enhanced Media Controls */}
							<div className="flex items-center space-x-2">
								<Button
									variant={isVideoOn ? 'default' : 'destructive'}
									size="sm"
									onClick={() => setIsVideoOn(!isVideoOn)}
									className={`h-9 w-9 p-0 rounded-xl transition-all duration-200 ${
										isVideoOn 
											? 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/25' 
											: 'bg-red-500 hover:bg-red-600 text-white shadow-lg shadow-red-500/25'
									}`}
								>
									{isVideoOn ? <Video className="w-4 h-4" /> : <VideoOff className="w-4 h-4" />}
								</Button>
								<Button
									variant={isMicOn ? 'default' : 'destructive'}
									size="sm"
									onClick={() => setIsMicOn(!isMicOn)}
									className={`h-9 w-9 p-0 rounded-xl transition-all duration-200 ${
										isMicOn 
											? 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/25' 
											: 'bg-red-500 hover:bg-red-600 text-white shadow-lg shadow-red-500/25'
									}`}
								>
									{isMicOn ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
								</Button>
							</div>

							{/* Enhanced Action Buttons */}
							<div className="hidden md:flex items-center space-x-2">
								<Button variant="outline" size="sm" className="h-9 px-3 rounded-xl border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all">
									<Share2 className="w-4 h-4 mr-2" />
									Compartir
								</Button>
								<Button variant="outline" size="sm" className="h-9 px-3 rounded-xl border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all">
									<Download className="w-4 h-4 mr-2" />
									Grabar
								</Button>
							</div>

							{/* Enhanced Utility Controls */}
							<div className="flex items-center space-x-2">
								<Button
									variant="ghost"
									size="sm"
									onClick={() => setNotifications(!notifications)}
									className={`h-9 w-9 p-0 rounded-xl transition-all duration-200 ${
										notifications ? 'text-blue-600 bg-blue-50 hover:bg-blue-100' : 'text-slate-500 hover:bg-slate-100'
									}`}
								>
									{notifications ? <Bell className="w-4 h-4" /> : <BellOff className="w-4 h-4" />}
								</Button>

								<Button
									variant="ghost"
									size="sm"
									onClick={toggleFullscreen}
									className="h-9 w-9 p-0 rounded-xl text-slate-600 hover:bg-slate-100 transition-all"
								>
									{isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
								</Button>

								<Button variant="ghost" size="sm" className="h-9 w-9 p-0 rounded-xl text-slate-600 hover:bg-slate-100 transition-all">
									<Settings className="w-4 h-4" />
								</Button>
							</div>
						</div>
					</div>
				</div>
			</header>

			{/* Enhanced Main Content */}
			<main className="flex-1 overflow-hidden p-6">
				<div className={`h-full grid ${getGridClasses()} gap-6`}>
					{/* Video Panel with Enhanced Styling */}
					<div className={`${columnSpans.video} flex flex-col space-y-4`}>
						<div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl shadow-slate-900/5 border border-white/50 overflow-hidden">
							<VideoConference />
						</div>
					</div>

					{/* Whiteboard Panel with Enhanced Styling */}
					<div className={`${columnSpans.whiteboard}`}>
						<div className="h-full bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl shadow-slate-900/5 border border-white/50 overflow-hidden">
							<InteractiveWhiteboard />
						</div>
					</div>

					{/* Enhanced Sidebar Panel */}
					<div className={`${columnSpans.sidebar} flex flex-col space-y-4`}>
						{/* Enhanced Tab Navigation */}
						<div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl shadow-slate-900/5 border border-white/50 overflow-hidden">
							{/* Tab Headers */}
							<div className="flex bg-slate-50/50 border-b border-slate-200/50">
								<button
									onClick={() => setActiveTab('chat')}
									className={`flex-1 flex items-center justify-center space-x-2 py-4 px-4 text-sm font-medium transition-all duration-200 ${
										activeTab === 'chat'
											? 'bg-white text-blue-600 shadow-sm border-b-2 border-blue-500'
											: 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
									}`}
								>
									<MessageSquare className="w-4 h-4" />
									<span>Chat en Vivo</span>
								</button>
								<button
									onClick={() => setActiveTab('materials')}
									className={`flex-1 flex items-center justify-center space-x-2 py-4 px-4 text-sm font-medium transition-all duration-200 ${
										activeTab === 'materials'
											? 'bg-white text-blue-600 shadow-sm border-b-2 border-blue-500'
											: 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
									}`}
								>
									<FolderOpen className="w-4 h-4" />
									<span>Materiales</span>
								</button>
							</div>

							{/* Tab Content */}
							<div className="h-96">
								{activeTab === 'chat' ? (
									<LiveChat />
								) : (
									<StudyMaterials />
								)}
							</div>
						</div>

						{/* Enhanced AI Insights Panel */}
						<div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl shadow-slate-900/5 border border-white/50 p-6">
							<div className="flex items-center space-x-3 mb-6">
								<div className="relative">
									<div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
										<Brain className="w-4 h-4 text-white" />
									</div>
									<Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-yellow-500" />
								</div>
								<h3 className="font-bold text-slate-800">Insights de IA</h3>
							</div>
							
							<div className="space-y-4">
								{/* Enhanced Metrics */}
								<div className="space-y-3">
									<div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-4 border border-emerald-100">
										<div className="flex justify-between items-center mb-3">
											<div className="flex items-center space-x-2">
												<Activity className="w-4 h-4 text-emerald-600" />
												<span className="font-semibold text-slate-700">Participación</span>
											</div>
											<span className="text-emerald-600 font-bold text-lg">92%</span>
										</div>
										<div className="w-full bg-emerald-100 rounded-full h-2">
											<div className="bg-gradient-to-r from-emerald-500 to-green-500 h-2 rounded-full w-[92%] transition-all duration-1000" />
										</div>
									</div>
									
									<div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
										<div className="flex justify-between items-center mb-3">
											<div className="flex items-center space-x-2">
												<Target className="w-4 h-4 text-blue-600" />
												<span className="font-semibold text-slate-700">Comprensión</span>
											</div>
											<span className="text-blue-600 font-bold text-lg">88%</span>
										</div>
										<div className="w-full bg-blue-100 rounded-full h-2">
											<div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full w-[88%] transition-all duration-1000" />
										</div>
									</div>

									<div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100">
										<div className="flex justify-between items-center mb-3">
											<div className="flex items-center space-x-2">
												<TrendingUp className="w-4 h-4 text-purple-600" />
												<span className="font-semibold text-slate-700">Atención</span>
											</div>
											<span className="text-purple-600 font-bold text-lg">85%</span>
										</div>
										<div className="w-full bg-purple-100 rounded-full h-2">
											<div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full w-[85%] transition-all duration-1000" />
										</div>
									</div>
								</div>

								{/* Enhanced AI Suggestion */}
								<div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-xl p-4">
									<div className="flex items-start space-x-3">
										<div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
											<Award className="w-4 h-4 text-amber-600" />
										</div>
										<div>
											<p className="text-amber-800 text-sm font-medium mb-1">
												Sugerencia de IA
											</p>
											<p className="text-amber-700 text-sm leading-relaxed">
												Los estudiantes muestran más interés cuando usas ejemplos visuales en la pizarra.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}

export default VirtualClassroomClient 