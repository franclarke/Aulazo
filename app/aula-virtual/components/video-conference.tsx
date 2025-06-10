'use client'

import React, { useState, useEffect } from 'react'
import { 
	Video, 
	VideoOff, 
	Mic, 
	MicOff, 
	Volume2, 
	VolumeX,
	Monitor,
	Users,
	Settings,
	Phone,
	Hand,
	Eye,
	Brain,
	Sparkles,
	Focus
} from 'lucide-react'
import { User } from '@/lib/mock-users'

interface VideoConferenceProps {
	currentUser: User
	participants: User[]
	className?: string
}

interface ParticipantState {
	id: string
	isMuted: boolean
	isVideoOff: boolean
	isHandRaised: boolean
	attentionLevel: number
	mood: 'focused' | 'confused' | 'engaged' | 'distracted'
}

const VideoConference: React.FC<VideoConferenceProps> = ({ 
	currentUser, 
	participants, 
	className = '' 
}) => {
	const [isMuted, setIsMuted] = useState(false)
	const [isVideoOff, setIsVideoOff] = useState(false)
	const [isScreenSharing, setIsScreenSharing] = useState(false)
	const [participantStates, setParticipantStates] = useState<ParticipantState[]>([])
	const [aiInsights, setAiInsights] = useState({
		classEngagement: 85,
		avgAttention: 78,
		recommendedBreak: false
	})

	// Initialize participant states
	useEffect(() => {
		const initialStates = participants.map(p => ({
			id: p.id,
			isMuted: Math.random() > 0.7,
			isVideoOff: Math.random() > 0.8,
			isHandRaised: Math.random() > 0.9,
			attentionLevel: Math.floor(Math.random() * 40) + 60,
			mood: ['focused', 'confused', 'engaged', 'distracted'][Math.floor(Math.random() * 4)] as any
		}))
		setParticipantStates(initialStates)
	}, [participants])

	// Simulate AI insights updates
	useEffect(() => {
		const interval = setInterval(() => {
			setAiInsights(prev => ({
				classEngagement: Math.max(60, Math.min(100, prev.classEngagement + (Math.random() - 0.5) * 10)),
				avgAttention: Math.max(50, Math.min(100, prev.avgAttention + (Math.random() - 0.5) * 15)),
				recommendedBreak: Math.random() > 0.85
			}))
			
			// Update participant attention levels
			setParticipantStates(prev => prev.map(p => ({
				...p,
				attentionLevel: Math.max(30, Math.min(100, p.attentionLevel + (Math.random() - 0.5) * 20))
			})))
		}, 3000)

		return () => clearInterval(interval)
	}, [])

	const getMoodColor = (mood: string) => {
		switch (mood) {
			case 'focused': return 'bg-green-500'
			case 'engaged': return 'bg-blue-500'
			case 'confused': return 'bg-yellow-500'
			case 'distracted': return 'bg-red-500'
			default: return 'bg-gray-500'
		}
	}

	const getAttentionColor = (level: number) => {
		if (level >= 80) return 'text-green-500'
		if (level >= 60) return 'text-yellow-500'
		return 'text-red-500'
	}

	return (
		<div className={`bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl overflow-hidden ${className}`}>
			{/* Main Video Grid */}
			<div className="relative h-full">
				{/* Teacher Video (Main) */}
				<div className="relative h-2/3 bg-gradient-to-br from-blue-600 to-purple-700 overflow-hidden">
					{/* Mock Video Feed */}
					<div className="absolute inset-0 bg-gradient-to-br from-blue-600/50 to-purple-700/50">
						<div className="w-full h-full flex items-center justify-center">
							{currentUser.role === 'teacher' ? (
								<div className="text-center">
									<div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 mx-auto">
										<Video className="w-16 h-16 text-white" />
									</div>
									<p className="text-white text-lg font-medium">Tu video</p>
								</div>
							) : (
								<div className="text-center">
									<img 
										src={participants.find(p => p.role === 'teacher')?.avatar}
										alt="Profesor"
										className="w-32 h-32 rounded-full border-4 border-white/30 mx-auto mb-4"
									/>
									<p className="text-white text-lg font-medium">
										{participants.find(p => p.role === 'teacher')?.name}
									</p>
								</div>
							)}
						</div>
					</div>

					{/* AI Insights Overlay */}
					<div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-3 text-white">
						<div className="flex items-center space-x-2 mb-2">
							<Brain className="w-4 h-4 text-purple-400" />
							<span className="text-sm font-medium">AI Insights</span>
						</div>
						<div className="space-y-1 text-xs">
							<div className="flex items-center justify-between">
								<span>Engagement:</span>
								<span className={`font-bold ${aiInsights.classEngagement >= 80 ? 'text-green-400' : 'text-yellow-400'}`}>
									{aiInsights.classEngagement}%
								</span>
							</div>
							<div className="flex items-center justify-between">
								<span>Attention:</span>
								<span className={`font-bold ${getAttentionColor(aiInsights.avgAttention)}`}>
									{aiInsights.avgAttention}%
								</span>
							</div>
							{aiInsights.recommendedBreak && (
								<div className="flex items-center space-x-1 text-orange-400">
									<Eye className="w-3 h-3" />
									<span>Break recommended</span>
								</div>
							)}
						</div>
					</div>

					{/* Screen Sharing Indicator */}
					{isScreenSharing && (
						<div className="absolute bottom-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm flex items-center space-x-2">
							<Monitor className="w-4 h-4" />
							<span>Compartiendo pantalla</span>
						</div>
					)}
				</div>

				{/* Participants Grid */}
				<div className="h-1/3 bg-gray-800 p-4">
					<div className="flex items-center justify-between mb-3">
						<h3 className="text-white font-medium flex items-center">
							<Users className="w-4 h-4 mr-2" />
							Participantes ({participants.length + 1})
						</h3>
						<div className="flex items-center space-x-2">
							<Sparkles className="w-4 h-4 text-purple-400" />
							<span className="text-xs text-gray-400">AI-Enhanced</span>
						</div>
					</div>
					
					<div className="grid grid-cols-4 gap-3 h-full">
						{/* Current User */}
						<div className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg overflow-hidden">
							<div className="w-full h-full flex items-center justify-center">
								{isVideoOff ? (
									<div className="text-center">
										<div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mb-1">
											<span className="text-white text-xs font-bold">
												{currentUser.name.split(' ').map(n => n[0]).join('')}
											</span>
										</div>
										<p className="text-white text-xs">Tú</p>
									</div>
								) : (
									<div className="text-center">
										<img 
											src={currentUser.avatar}
											alt={currentUser.name}
											className="w-8 h-8 rounded-full mx-auto mb-1"
										/>
										<p className="text-white text-xs">Tú</p>
									</div>
								)}
							</div>
							
							{/* Status indicators */}
							<div className="absolute bottom-1 left-1 flex space-x-1">
								{isMuted && <MicOff className="w-3 h-3 text-red-400" />}
								{isVideoOff && <VideoOff className="w-3 h-3 text-red-400" />}
							</div>
						</div>

						{/* Other Participants */}
						{participantStates.slice(0, 3).map((participant, index) => {
							const user = participants[index]
							if (!user) return null

							return (
								<div key={user.id} className="relative bg-gray-700 rounded-lg overflow-hidden">
									<div className="w-full h-full flex items-center justify-center">
										{participant.isVideoOff ? (
											<div className="text-center">
												<div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center mb-1">
													<span className="text-white text-xs font-bold">
														{user.name.split(' ').map(n => n[0]).join('')}
													</span>
												</div>
												<p className="text-white text-xs truncate">{user.name.split(' ')[0]}</p>
											</div>
										) : (
											<div className="text-center">
												<img 
													src={user.avatar}
													alt={user.name}
													className="w-8 h-8 rounded-full mx-auto mb-1"
												/>
												<p className="text-white text-xs truncate">{user.name.split(' ')[0]}</p>
											</div>
										)}
									</div>
									
									{/* Status indicators */}
									<div className="absolute bottom-1 left-1 flex space-x-1">
										{participant.isMuted && <MicOff className="w-3 h-3 text-red-400" />}
										{participant.isVideoOff && <VideoOff className="w-3 h-3 text-red-400" />}
										{participant.isHandRaised && <Hand className="w-3 h-3 text-yellow-400" />}
									</div>

									{/* AI Mood Indicator */}
									<div className="absolute top-1 right-1">
										<div className={`w-2 h-2 rounded-full ${getMoodColor(participant.mood)}`} 
											 title={`Mood: ${participant.mood}`} />
									</div>

									{/* Attention Level Bar */}
									<div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600">
										<div 
											className={`h-full transition-all duration-1000 ${
												participant.attentionLevel >= 80 ? 'bg-green-400' : 
												participant.attentionLevel >= 60 ? 'bg-yellow-400' : 'bg-red-400'
											}`}
											style={{ width: `${participant.attentionLevel}%` }}
										/>
									</div>
								</div>
							)
						})}
					</div>
				</div>

				{/* Controls Overlay */}
				<div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
					<div className="bg-black/70 backdrop-blur-sm rounded-full px-6 py-3 flex items-center space-x-4">
						<button
							onClick={() => setIsMuted(!isMuted)}
							className={`p-3 rounded-full transition-all ${
								isMuted ? 'bg-red-500 text-white' : 'bg-white/20 text-white hover:bg-white/30'
							}`}
						>
							{isMuted ? <MicOff size={18} /> : <Mic size={18} />}
						</button>
						
						<button
							onClick={() => setIsVideoOff(!isVideoOff)}
							className={`p-3 rounded-full transition-all ${
								isVideoOff ? 'bg-red-500 text-white' : 'bg-white/20 text-white hover:bg-white/30'
							}`}
						>
							{isVideoOff ? <VideoOff size={18} /> : <Video size={18} />}
						</button>
						
						<button
							onClick={() => setIsScreenSharing(!isScreenSharing)}
							className={`p-3 rounded-full transition-all ${
								isScreenSharing ? 'bg-green-500 text-white' : 'bg-white/20 text-white hover:bg-white/30'
							}`}
						>
							<Monitor size={18} />
						</button>
						
						<button className="p-3 rounded-full bg-white/20 text-white hover:bg-white/30 transition-all">
							<Settings size={18} />
						</button>
						
						<div className="w-px h-8 bg-white/30"></div>
						
						<button className="p-3 rounded-full bg-red-500 text-white hover:bg-red-600 transition-all">
							<Phone size={18} />
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default VideoConference 