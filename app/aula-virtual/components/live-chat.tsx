'use client'

import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
	Send, 
	Smile, 
	Crown
} from 'lucide-react'

interface ChatMessage {
	id: string
	userId: string
	userName: string
	userRole: 'teacher' | 'student'
	userAvatar: string
	content: string
	timestamp: Date
	type: 'text' | 'emoji' | 'system'
	reactions?: Reaction[]
}

interface Reaction {
	emoji: string
	count: number
	users: string[]
}

const LiveChat: React.FC = () => {
	const [messages, setMessages] = useState<ChatMessage[]>([
		{
			id: '1',
			userId: 'teacher-1',
			userName: 'Dr. Elena Rodriguez',
			userRole: 'teacher',
			userAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=40&h=40&fit=crop&crop=face&auto=format',
			content: '¡Bienvenidos a la clase de Matemáticas Avanzadas! Hoy veremos cálculo diferencial.',
			timestamp: new Date(Date.now() - 300000),
			type: 'text',
			reactions: [{ emoji: '👍', count: 3, users: ['student-1', 'student-2', 'student-3'] }]
		},
		{
			id: '2',
			userId: 'student-1',
			userName: 'Ana López',
			userRole: 'student',
			userAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b789?w=40&h=40&fit=crop&crop=face&auto=format',
			content: 'Buenos días profesora! ¿Podría repetir la explicación sobre límites?',
			timestamp: new Date(Date.now() - 240000),
			type: 'text'
		},
		{
			id: '3',
			userId: 'teacher-1',
			userName: 'Dr. Elena Rodriguez',
			userRole: 'teacher',
			userAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=40&h=40&fit=crop&crop=face&auto=format',
			content: 'Por supuesto Ana, vamos a revisarlo en la pizarra.',
			timestamp: new Date(Date.now() - 180000),
			type: 'text'
		},
		{
			id: '4',
			userId: 'student-2',
			userName: 'Carlos Martinez',
			userRole: 'student',
			userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face&auto=format',
			content: '¿Tendremos ejercicios prácticos hoy?',
			timestamp: new Date(Date.now() - 120000),
			type: 'text'
		},
		{
			id: '5',
			userId: 'system',
			userName: 'Sistema',
			userRole: 'student',
			userAvatar: '',
			content: 'María García se ha unido a la clase',
			timestamp: new Date(Date.now() - 60000),
			type: 'system'
		}
	])

	const [newMessage, setNewMessage] = useState('')
	const [isTyping, setIsTyping] = useState<string[]>([])
	const messagesEndRef = useRef<HTMLDivElement>(null)
	const inputRef = useRef<HTMLInputElement>(null)

	const currentUser = useMemo(() => ({
		id: 'student-current',
		name: 'Tu',
		role: 'student' as const,
		avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format'
	}), [])

	const scrollToBottom = useCallback(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
	}, [])

	useEffect(() => {
		scrollToBottom()
	}, [messages, scrollToBottom])

	// Simulate typing indicators
	useEffect(() => {
		const interval = setInterval(() => {
			const shouldShowTyping = Math.random() > 0.9
			if (shouldShowTyping) {
				const typingUsers = ['Dr. Elena Rodriguez', 'Carlos Martinez', 'Ana López']
				const randomUser = typingUsers[Math.floor(Math.random() * typingUsers.length)]
				setIsTyping([randomUser])
				
				setTimeout(() => {
					setIsTyping([])
				}, 2000)
			}
		}, 8000)

		return () => clearInterval(interval)
	}, [])

	const sendMessage = useCallback(() => {
		if (!newMessage.trim()) return

		const message: ChatMessage = {
			id: Date.now().toString(),
			userId: currentUser.id,
			userName: currentUser.name,
			userRole: currentUser.role,
			userAvatar: currentUser.avatar,
			content: newMessage.trim(),
			timestamp: new Date(),
			type: 'text'
		}

		setMessages(prev => [...prev, message])
		setNewMessage('')
		inputRef.current?.focus()
	}, [newMessage, currentUser])

	const addReaction = useCallback((messageId: string, emoji: string) => {
		setMessages(prev => prev.map(msg => {
			if (msg.id === messageId) {
				const existingReaction = msg.reactions?.find(r => r.emoji === emoji)
				
				if (existingReaction) {
					const hasUserReacted = existingReaction.users.includes(currentUser.id)
					
					if (hasUserReacted) {
						return {
							...msg,
							reactions: msg.reactions?.map(r => 
								r.emoji === emoji
									? { ...r, count: r.count - 1, users: r.users.filter(u => u !== currentUser.id) }
									: r
							).filter(r => r.count > 0)
						}
					} else {
						return {
							...msg,
							reactions: msg.reactions?.map(r => 
								r.emoji === emoji
									? { ...r, count: r.count + 1, users: [...r.users, currentUser.id] }
									: r
							)
						}
					}
				} else {
					return {
						...msg,
						reactions: [...(msg.reactions || []), { emoji, count: 1, users: [currentUser.id] }]
					}
				}
			}
			return msg
		}))
	}, [currentUser.id])

	const formatTime = (date: Date) => {
		return date.toLocaleTimeString('es-ES', { 
			hour: '2-digit', 
			minute: '2-digit' 
		})
	}

	const MessageComponent: React.FC<{ message: ChatMessage }> = ({ message }) => {
		const isCurrentUser = message.userId === currentUser.id
		const isSystem = message.type === 'system'

		if (isSystem) {
			return (
				<div className="flex justify-center my-2">
					<div className="bg-slate-100 text-slate-600 text-xs px-3 py-1 rounded-full">
						{message.content}
					</div>
				</div>
			)
		}

		return (
			<div className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'} mb-3 group`}>
				<div className={`flex ${isCurrentUser ? 'flex-row-reverse' : 'flex-row'} items-start space-x-3 max-w-[80%]`}>
					{!isCurrentUser && (
						<Image 
							src={message.userAvatar}
							alt={message.userName}
							width={32}
							height={32}
							className="rounded-full flex-shrink-0"
						/>
					)}
					
					<div className={`flex flex-col ${isCurrentUser ? 'items-end' : 'items-start'}`}>
						{!isCurrentUser && (
							<div className="flex items-center space-x-2 mb-1">
								{message.userRole === 'teacher' && (
									<Crown className="w-3 h-3 text-amber-500" />
								)}
								<span className="text-xs font-medium text-slate-600">
									{message.userName}
								</span>
							</div>
						)}
						
						<div className={`px-3 py-2 rounded-lg text-sm ${
							isCurrentUser 
								? 'bg-blue-500 text-white' 
								: message.userRole === 'teacher'
								? 'bg-amber-50 text-amber-900 border border-amber-200'
								: 'bg-slate-100 text-slate-900'
						}`}>
							{message.content}
							
							{message.reactions && message.reactions.length > 0 && (
								<div className="flex flex-wrap gap-1 mt-2">
									{message.reactions.map((reaction, index) => (
										<button
											key={index}
											onClick={() => addReaction(message.id, reaction.emoji)}
											className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs ${
												reaction.users.includes(currentUser.id)
													? 'bg-blue-100 text-blue-600'
													: 'bg-white text-slate-600 hover:bg-slate-50'
											}`}
										>
											<span>{reaction.emoji}</span>
											<span>{reaction.count}</span>
										</button>
									))}
								</div>
							)}
						</div>
						
						<span className="text-xs text-slate-500 mt-1">
							{formatTime(message.timestamp)}
						</span>

						{/* Quick reactions on hover */}
						{!isCurrentUser && (
							<div className="flex space-x-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
								{['👍', '❤️', '😊'].map(emoji => (
									<button
										key={emoji}
										onClick={() => addReaction(message.id, emoji)}
										className="w-5 h-5 flex items-center justify-center rounded hover:bg-slate-100 text-xs"
									>
										{emoji}
									</button>
								))}
							</div>
						)}
					</div>
				</div>
			</div>
		)
	}

	return (
		<div className="h-full flex flex-col bg-white">
			{/* Messages container */}
			<div className="flex-1 overflow-y-auto p-4 space-y-1">
				{messages.map((message) => (
					<MessageComponent key={message.id} message={message} />
				))}
				
				{/* Typing indicators */}
				{isTyping.length > 0 && (
					<div className="flex items-center space-x-2 text-slate-500 text-sm px-2 py-2">
						<div className="flex space-x-1">
							<div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
							<div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-75" />
							<div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-150" />
						</div>
						<span>{isTyping[0]} está escribiendo...</span>
					</div>
				)}
				
				<div ref={messagesEndRef} />
			</div>

			{/* Message input */}
			<div className="p-4 border-t border-slate-200 bg-slate-50">
				<div className="flex items-center space-x-3">
					<div className="flex-1 relative">
						<Input
							ref={inputRef}
							value={newMessage}
							onChange={(e) => setNewMessage(e.target.value)}
							onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
							placeholder="Escribe tu mensaje..."
							className="pr-12 border-slate-200 focus:border-blue-500"
						/>
						<Button 
							variant="ghost" 
							size="sm" 
							className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 p-0 text-slate-500"
						>
							<Smile className="w-4 h-4" />
						</Button>
					</div>
					<Button 
						onClick={sendMessage}
						disabled={!newMessage.trim()}
						size="sm"
						className="h-9 w-9 p-0"
					>
						<Send className="w-4 h-4" />
					</Button>
				</div>
			</div>
		</div>
	)
}

export default LiveChat 