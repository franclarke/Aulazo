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
	Minimize2
} from 'lucide-react'

interface User {
	id: string
	name: string
	email: string
	role: 'student' | 'teacher'
	avatar: string
	isOnline: boolean
	joinedAt?: Date
}

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
		}
	])

	const [isFullscreen, setIsFullscreen] = useState(false)
	const [sessionTime, setSessionTime] = useState(0)
	const [connectionQuality] = useState<'excellent' | 'good' | 'fair'>('excellent')
	const [notifications, setNotifications] = useState(true)
	const [isVideoOn, setIsVideoOn] = useState(true)
	const [isMicOn, setIsMicOn] = useState(true)
	
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

	return (
		<div className="min-h-screen bg-gradient-to-br from-neutral-50 via-primary-50/30 to-secondary-50/30">
			{/* Header */}
			<header className="bg-white/90 backdrop-blur-md border-b border-neutral-200 shadow-sm sticky top-0 z-40">
				<div className="px-4 py-3">
					<div className="flex items-center justify-between">
						{/* Class Info */}
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
										Profesor: Dr. Elena Rodriguez
									</p>
								</div>
							</div>
							
							{/* Session Metrics */}
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

						{/* Header Controls */}
						<div className="flex items-center space-x-3">
							{/* Media Controls */}
							<div className="flex items-center space-x-1">
								<Button
									variant={isVideoOn ? 'default' : 'destructive'}
									size="sm"
									onClick={() => setIsVideoOn(!isVideoOn)}
									className="h-8 w-8 p-0"
								>
									{isVideoOn ? <Video className="w-4 h-4" /> : <VideoOff className="w-4 h-4" />}
								</Button>
								<Button
									variant={isMicOn ? 'default' : 'destructive'}
									size="sm"
									onClick={() => setIsMicOn(!isMicOn)}
									className="h-8 w-8 p-0"
								>
									{isMicOn ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
								</Button>
							</div>

							{/* Notifications */}
							<Button
								variant="ghost"
								size="sm"
								onClick={() => setNotifications(!notifications)}
								className={`${notifications ? 'text-primary-600' : 'text-neutral-500'} h-7 w-7 p-0`}
							>
								{notifications ? <Bell className="w-3.5 h-3.5" /> : <BellOff className="w-3.5 h-3.5" />}
							</Button>

							{/* Actions */}
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

							{/* Fullscreen & Settings */}
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
			<main className="flex-1 overflow-hidden p-4">
				<div className="h-full grid grid-cols-12 gap-4">
					{/* Left Panel - Video */}
					<div className="col-span-12 lg:col-span-4 flex flex-col space-y-4">
						<Card variant="glass" padding="sm" className="flex-1 min-h-[300px] shadow-lg">
							<div className="h-full bg-neutral-900 rounded-lg flex items-center justify-center text-white">
								<div className="text-center">
									<Video className="w-12 h-12 mx-auto mb-2 opacity-50" />
									<p className="text-sm opacity-75">Videoconferencia</p>
								</div>
							</div>
						</Card>
						
						{/* Participants */}
						<Card variant="glass" padding="sm" className="h-48">
							<h3 className="font-semibold text-sm mb-3">Participantes ({otherUsers.length + 1})</h3>
							<div className="space-y-2">
								{[currentUser, ...otherUsers].map((user) => (
									<div key={user.id} className="flex items-center space-x-2">
										<img 
											src={user.avatar} 
											alt={user.name}
											className="w-6 h-6 rounded-full"
										/>
										<span className="text-xs text-neutral-700">{user.name}</span>
										{user.role === 'teacher' && (
											<span className="text-xs bg-primary-100 text-primary-600 px-1 rounded">Prof</span>
										)}
									</div>
								))}
							</div>
						</Card>
					</div>

					{/* Center - Whiteboard */}
					<div className="col-span-12 lg:col-span-5">
						<Card variant="elevated" padding="none" className="h-full shadow-lg">
							<div className="h-full bg-white rounded-lg flex items-center justify-center">
								<div className="text-center text-neutral-400">
									<BookOpen className="w-16 h-16 mx-auto mb-2" />
									<p>Pizarra Virtual</p>
									<p className="text-sm">Herramientas interactivas próximamente</p>
								</div>
							</div>
						</Card>
					</div>

					{/* Right Panel - Chat & AI */}
					<div className="col-span-12 lg:col-span-3 flex flex-col space-y-4">
						<Card variant="glass" padding="sm" className="flex-1 min-h-[300px]">
							<h3 className="font-semibold text-sm mb-3">Chat en vivo</h3>
							<div className="h-full bg-neutral-50 rounded-lg flex items-center justify-center text-neutral-400">
								<p className="text-xs text-center">Sistema de chat<br />próximamente</p>
							</div>
						</Card>
						
						<Card variant="glass" padding="sm" className="h-48">
							<h3 className="font-semibold text-sm mb-3">Insights de IA</h3>
							<div className="space-y-2 text-xs">
								<div className="flex justify-between">
									<span>Participación</span>
									<span className="text-green-600">92%</span>
								</div>
								<div className="flex justify-between">
									<span>Atención</span>
									<span className="text-blue-600">85%</span>
								</div>
								<div className="flex justify-between">
									<span>Comprensión</span>
									<span className="text-purple-600">88%</span>
								</div>
							</div>
						</Card>
					</div>
				</div>
			</main>
		</div>
	)
}

export default VirtualClassroomClient 