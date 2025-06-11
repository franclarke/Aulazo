'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { 
	Video, 
	VideoOff, 
	Mic, 
	MicOff, 
	Settings, 
	Users, 
	MessageSquare,
	Share2,
	LogOut,
	ChevronUp,
	ChevronDown
} from 'lucide-react'

import InteractiveWhiteboard from './interactive-whiteboard'
import VideoConference from './video-conference'
import LiveChat from './live-chat'

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

	const [sessionTime, setSessionTime] = useState(0)
	const [isVideoOn, setIsVideoOn] = useState(true)
	const [isMicOn, setIsMicOn] = useState(true)
	const [isChatExpanded, setIsChatExpanded] = useState(false)
	
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

	return (
		<div className="h-screen bg-slate-50 flex flex-col overflow-hidden">
			{/* Minimalist Header */}
			<header className="bg-white border-b border-slate-200 px-6 py-3 flex-shrink-0">
				<div className="flex items-center justify-between">
					{/* Class Info - Simplified */}
					<div className="flex items-center space-x-4">
						<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-semibold text-sm">
							M
						</div>
						<div>
							<h1 className="text-lg font-semibold text-slate-900">
								Matemáticas Avanzadas
							</h1>
							<p className="text-sm text-slate-500">
								Dr. Elena Rodriguez • {formatTime(sessionTime)}
							</p>
						</div>
					</div>

					{/* Center Controls */}
					<div className="flex items-center space-x-2">
						{/* Media Controls */}
						<Button
							variant={isVideoOn ? "default" : "destructive"}
							size="sm"
							onClick={() => setIsVideoOn(!isVideoOn)}
							className="h-8 w-8 p-0"
						>
							{isVideoOn ? <Video className="w-4 h-4" /> : <VideoOff className="w-4 h-4" />}
						</Button>
						<Button
							variant={isMicOn ? "default" : "destructive"}
							size="sm"
							onClick={() => setIsMicOn(!isMicOn)}
							className="h-8 w-8 p-0"
						>
							{isMicOn ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
						</Button>
					</div>

					{/* Right Controls */}
					<div className="flex items-center space-x-2">
						<div className="flex items-center space-x-2 text-sm text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg">
							<Users className="w-4 h-4" />
							<span>{otherUsers.length + 1}</span>
						</div>
						<Button variant="outline" size="sm" className="h-8 px-3 text-sm">
							<Share2 className="w-4 h-4 mr-1" />
							Compartir
						</Button>
						<Button variant="ghost" size="sm" className="h-8 w-8 p-0">
							<Settings className="w-4 h-4" />
						</Button>
						<Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-red-600">
							<LogOut className="w-4 h-4" />
						</Button>
					</div>
				</div>
			</header>

			{/* Main Content Area */}
			<div className="flex-1 flex overflow-hidden">
				{/* Left Panel - Video Conference */}
				<div className="w-80 bg-white border-r border-slate-200 flex-shrink-0">
					<VideoConference />
				</div>

				{/* Right Panel - Interactive Whiteboard */}
				<div className="flex-1 bg-white">
					<InteractiveWhiteboard />
				</div>
			</div>

			{/* Bottom Chat Panel */}
			<div className={`bg-white border-t border-slate-200 transition-all duration-300 ${
				isChatExpanded ? 'h-80' : 'h-16'
			}`}>
				{/* Chat Header */}
				<div className="h-16 px-6 flex items-center justify-between border-b border-slate-100">
					<div className="flex items-center space-x-3">
						<MessageSquare className="w-5 h-5 text-slate-600" />
						<span className="font-medium text-slate-900">Chat en Vivo</span>
						<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
					</div>
					<Button
						variant="ghost"
						size="sm"
						onClick={() => setIsChatExpanded(!isChatExpanded)}
						className="h-8 w-8 p-0"
					>
						{isChatExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
					</Button>
				</div>

				{/* Chat Content */}
				{isChatExpanded && (
					<div className="h-64">
						<LiveChat />
					</div>
				)}
			</div>
		</div>
	)
}

export default VirtualClassroomClient 