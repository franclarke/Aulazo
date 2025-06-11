'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { 
	Video, 
	VideoOff, 
	Mic, 
	MicOff, 
	Crown,
	Users
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
			avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop&crop=face&auto=format',
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

	const [mainVideo, setMainVideo] = useState(participants.find(p => p.isMainVideo) || participants[0])

	const ParticipantVideo: React.FC<{ participant: Participant; isMain?: boolean }> = ({ 
		participant, 
		isMain = false 
	}) => {
		return (
			<div 
				className={`relative overflow-hidden bg-slate-900 ${
					isMain 
						? 'aspect-video rounded-lg' 
						: 'aspect-square rounded-lg cursor-pointer hover:ring-2 hover:ring-blue-400 transition-all'
				} ${participant.role === 'teacher' ? 'ring-2 ring-amber-400' : ''}`}
				onClick={() => !isMain && setMainVideo(participant)}
			>
				{participant.isVideoOn ? (
					<div className="relative w-full h-full">
						<Image 
							src={participant.avatar}
							alt={participant.name}
							width={400}
							height={300}
							className="w-full h-full object-cover"
						/>
						
						{/* Live indicator */}
						{isMain && (
							<div className="absolute top-2 left-2 bg-red-500 px-2 py-1 rounded text-xs text-white font-medium">
								LIVE
							</div>
						)}
						
						{/* Teacher badge */}
						{participant.role === 'teacher' && (
							<div className="absolute top-2 right-2 bg-amber-500 p-1 rounded">
								<Crown className="w-3 h-3 text-white" />
							</div>
						)}
					</div>
				) : (
					<div className="w-full h-full flex flex-col items-center justify-center bg-slate-800 text-white">
						<Image 
							src={participant.avatar}
							alt={participant.name}
							width={isMain ? 60 : 40}
							height={isMain ? 60 : 40}
							className={`${isMain ? 'w-15 h-15' : 'w-10 h-10'} rounded-full border-2 border-white/20 mb-2`}
						/>
						<VideoOff className={`${isMain ? 'w-5 h-5' : 'w-4 h-4'} text-slate-400`} />
					</div>
				)}

				{/* Name and controls overlay */}
				<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
					<div className="flex items-center justify-between">
						<span className="text-white text-xs font-medium truncate">
							{isMain ? participant.name : participant.name.split(' ')[0]}
						</span>
						
						<div className="flex items-center space-x-1">
							{participant.isMicOn ? (
								<div className="bg-green-500 p-1 rounded">
									<Mic className="w-2 h-2 text-white" />
								</div>
							) : (
								<div className="bg-red-500 p-1 rounded">
									<MicOff className="w-2 h-2 text-white" />
								</div>
							)}
							
							<div className={`p-1 rounded ${participant.isVideoOn ? 'bg-green-500' : 'bg-red-500'}`}>
								{participant.isVideoOn ? (
									<Video className="w-2 h-2 text-white" />
								) : (
									<VideoOff className="w-2 h-2 text-white" />
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}

	return (
		<div className="h-full flex flex-col p-4">
			{/* Header */}
			<div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200">
				<h3 className="font-medium text-slate-900">Participantes</h3>
				<div className="flex items-center space-x-1 text-sm text-slate-500">
					<Users className="w-4 h-4" />
					<span>{participants.length}</span>
				</div>
			</div>

			{/* Main video */}
			<div className="mb-4">
				<ParticipantVideo participant={mainVideo} isMain />
			</div>

			{/* Participant grid */}
			<div className="grid grid-cols-3 gap-2 flex-1">
				{participants
					.filter(p => p.id !== mainVideo.id)
					.map(participant => (
						<ParticipantVideo 
							key={participant.id} 
							participant={participant} 
						/>
					))}
			</div>

			{/* Connection info */}
			<div className="mt-4 pt-3 border-t border-slate-200 text-center">
				<div className="flex items-center justify-center space-x-2 text-sm text-slate-500">
					<div className="w-2 h-2 bg-green-500 rounded-full" />
					<span>Conexión estable</span>
				</div>
			</div>
		</div>
	)
}

export default VideoConference 