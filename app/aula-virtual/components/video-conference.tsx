'use client'

import React, { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
	Video, 
	VideoOff, 
	Mic, 
	MicOff, 
	Volume2, 
	VolumeX,
	Maximize2,
	Settings,
	Signal,
	Crown,
	Phone,
	Monitor,
	Users,
	WifiOff,
	Wifi
} from 'lucide-react'

interface Participant {
	id: string
	name: string
	role: 'teacher' | 'student'
	avatar: string
	isVideoOn: boolean
	isMicOn: boolean
	isMainVideo?: boolean
}

const VideoConference: React.FC = () => {
	const [participants] = useState<Participant[]>([
		{
			id: 'teacher-1',
			name: 'Dr. Elena Rodriguez',
			role: 'teacher',
			avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=300&fit=crop&crop=face&auto=format',
			isVideoOn: true,
			isMicOn: true,
			isMainVideo: true
		},
		{
			id: 'student-1',
			name: 'Ana López',
			role: 'student',
			avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b789?w=400&h=300&fit=crop&crop=face&auto=format',
			isVideoOn: true,
			isMicOn: false
		},
		{
			id: 'student-2',
			name: 'Carlos Martinez',
			role: 'student',
			avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face&auto=format',
			isVideoOn: false,
			isMicOn: true
		},
		{
			id: 'student-3',
			name: 'María García',
			role: 'student',
			avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop&crop=face&auto=format',
			isVideoOn: true,
			isMicOn: false
		}
	])

	const [connectionQuality] = useState<'excellent' | 'good' | 'fair'>('excellent')
	const [isFullscreen, setIsFullscreen] = useState(false)
	const [mainVideo, setMainVideo] = useState(participants.find(p => p.isMainVideo) || participants[0])

	const getConnectionColor = (quality: string) => {
		switch (quality) {
			case 'excellent': return 'text-emerald-500'
			case 'good': return 'text-amber-500'
			case 'fair': return 'text-red-500'
			default: return 'text-slate-500'
		}
	}

	const getConnectionIcon = (quality: string) => {
		switch (quality) {
			case 'excellent': return Wifi
			case 'good': return Wifi
			case 'fair': return WifiOff
			default: return WifiOff
		}
	}

	const ParticipantVideo: React.FC<{ participant: Participant; isMain?: boolean }> = ({ 
		participant, 
		isMain = false 
	}) => {
		const [isHovered, setIsHovered] = useState(false)
		const ConnectionIcon = getConnectionIcon(connectionQuality)

		return (
			<div 
				className={`relative overflow-hidden ${
					isMain ? 'h-full' : 'aspect-video'
				} bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border-2 transition-all duration-300 hover:scale-[1.02] cursor-pointer group ${
					participant.role === 'teacher' 
						? 'border-amber-400 shadow-lg shadow-amber-500/20' 
						: 'border-slate-300/50 hover:border-blue-400/50 shadow-lg shadow-slate-900/10'
				}`}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				onClick={() => !isMain && setMainVideo(participant)}
			>
				{participant.isVideoOn ? (
					<div className="relative w-full h-full">
						{/* Enhanced video feed */}
						<img 
							src={participant.avatar}
							alt={participant.name}
							className="w-full h-full object-cover"
						/>
						
						{/* Enhanced overlay effects */}
						<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
						
						{/* Simulated camera feed indicator */}
						<div className="absolute top-3 left-3 flex items-center space-x-2 bg-red-500/90 backdrop-blur-sm px-2 py-1 rounded-lg">
							<div className="w-2 h-2 bg-white rounded-full animate-pulse" />
							<span className="text-xs text-white font-semibold">LIVE</span>
						</div>

						{/* Enhanced connection quality */}
						<div className={`absolute top-3 right-3 ${getConnectionColor(connectionQuality)} bg-white/90 backdrop-blur-sm p-1.5 rounded-lg`}>
							<ConnectionIcon className="w-3 h-3" />
						</div>

						{/* Enhanced teacher crown */}
						{participant.role === 'teacher' && (
							<div className="absolute top-3 left-1/2 -translate-x-1/2 bg-amber-500/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center space-x-1">
								<Crown className="w-3 h-3 text-white" />
								<span className="text-xs text-white font-semibold">Profesor</span>
							</div>
						)}
					</div>
				) : (
					<div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 text-white">
						<div className="relative mb-4">
							<img 
								src={participant.avatar}
								alt={participant.name}
								className="w-20 h-20 rounded-full border-4 border-white/20 shadow-xl"
							/>
							<div className="absolute -bottom-1 -right-1 w-8 h-8 bg-slate-700 rounded-full border-2 border-slate-600 flex items-center justify-center">
								<VideoOff className="w-4 h-4 text-slate-400" />
							</div>
						</div>
						<h4 className="text-sm font-semibold mb-1">{participant.name}</h4>
						<p className="text-xs text-slate-400">Cámara desactivada</p>
					</div>
				)}

				{/* Enhanced name and controls overlay */}
				<div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 transition-all duration-300 ${
					isHovered || !participant.isVideoOn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
				}`}>
					<div className="flex items-center justify-between">
						<div className="flex items-center space-x-2">
							{participant.role === 'teacher' && (
								<div className="w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center">
									<Crown className="w-3 h-3 text-white" />
								</div>
							)}
							<span className="text-white text-sm font-semibold truncate">
								{participant.name}
							</span>
						</div>
						
						<div className="flex items-center space-x-2">
							{/* Enhanced audio indicator */}
							{participant.isMicOn ? (
								<div className="flex items-center space-x-1 bg-emerald-500/90 backdrop-blur-sm px-2 py-1 rounded-lg">
									<Mic className="w-3 h-3 text-white" />
									{/* Audio level indicator */}
									<div className="flex space-x-0.5">
										<div className="w-0.5 h-2 bg-white rounded-full animate-pulse" />
										<div className="w-0.5 h-3 bg-white rounded-full animate-pulse delay-75" />
										<div className="w-0.5 h-2 bg-white rounded-full animate-pulse delay-150" />
									</div>
								</div>
							) : (
								<div className="bg-red-500/90 backdrop-blur-sm p-1.5 rounded-lg">
									<MicOff className="w-3 h-3 text-white" />
								</div>
							)}
							
							{/* Video status indicator */}
							<div className={`p-1.5 rounded-lg backdrop-blur-sm ${
								participant.isVideoOn 
									? 'bg-emerald-500/90' 
									: 'bg-red-500/90'
							}`}>
								{participant.isVideoOn ? (
									<Video className="w-3 h-3 text-white" />
								) : (
									<VideoOff className="w-3 h-3 text-white" />
								)}
							</div>
						</div>
					</div>
				</div>

				{/* Enhanced maximize button for main video */}
				{isMain && (
					<div className="absolute top-3 right-12 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
						<Button
							variant="ghost"
							size="sm"
							className="w-8 h-8 p-0 bg-black/50 hover:bg-black/70 text-white rounded-lg backdrop-blur-sm"
							onClick={(e) => {
								e.stopPropagation()
								setIsFullscreen(!isFullscreen)
							}}
						>
							<Maximize2 className="w-3 h-3" />
						</Button>
					</div>
				)}
			</div>
		)
	}

	return (
		<div className="h-full flex flex-col space-y-4 p-4">
			{/* Enhanced main video */}
			<div className="flex-1 min-h-[350px]">
				<ParticipantVideo participant={mainVideo} isMain />
			</div>

			{/* Enhanced participant thumbnails */}
			<div className="grid grid-cols-3 gap-3 h-28">
				{participants
					.filter(p => p.id !== mainVideo.id)
					.slice(0, 3)
					.map(participant => (
						<ParticipantVideo 
							key={participant.id} 
							participant={participant} 
						/>
					))}
			</div>

			{/* Enhanced video stats */}
			<div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-white/50 shadow-lg shadow-slate-900/5">
				<div className="flex items-center justify-between">
					<div className="flex items-center space-x-4">
						<div className="flex items-center space-x-2">
							<div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
							<span className="text-sm font-semibold text-slate-700">HD 1080p</span>
						</div>
						<div className="flex items-center space-x-2">
							<Signal className={`w-4 h-4 ${getConnectionColor(connectionQuality)}`} />
							<span className="text-sm font-semibold text-slate-700">Conexión Estable</span>
						</div>
						<div className="flex items-center space-x-2">
							<Users className="w-4 h-4 text-blue-600" />
							<span className="text-sm font-semibold text-slate-700">{participants.length} participantes</span>
						</div>
					</div>
					
					<div className="flex items-center space-x-4 text-sm text-slate-600">
						<div className="flex items-center space-x-1">
							<Monitor className="w-4 h-4" />
							<span>Latencia: 32ms</span>
						</div>
						<div className="w-1 h-1 bg-slate-400 rounded-full" />
						<span>Calidad: Excelente</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default VideoConference 