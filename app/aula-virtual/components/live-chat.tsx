'use client'

import React, { useState, useRef, useEffect, useCallback } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
	Send, 
	Smile, 
	Paperclip, 
	MoreVertical,
	Clock,
	Check,
	CheckCheck,
	Crown,
	ThumbsUp,
	Heart,
	Plus,
	X,
	Sparkles,
	Users,
	MessageCircle
} from 'lucide-react'

interface ChatMessage {
	id: string
	userId: string
	userName: string
	userRole: 'teacher' | 'student'
	userAvatar: string
	content: string
	timestamp: Date
	type: 'text' | 'emoji' | 'file' | 'system'
	reactions?: Reaction[]
	isRead?: boolean
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
			reactions: [{ emoji: '👍', count: 3, users: ['student-1', 'student-2', 'student-3'] }],
			isRead: true
		},
		{
			id: '2',
			userId: 'student-1',
			userName: 'Ana López',
			userRole: 'student',
			userAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b789?w=40&h=40&fit=crop&crop=face&auto=format',
			content: 'Buenos días profesora! ¿Podría repetir la explicación sobre límites?',
			timestamp: new Date(Date.now() - 240000),
			type: 'text',
			isRead: true
		},
		{
			id: '3',
			userId: 'teacher-1',
			userName: 'Dr. Elena Rodriguez',
			userRole: 'teacher',
			userAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=40&h=40&fit=crop&crop=face&auto=format',
			content: 'Por supuesto Ana, vamos a revisarlo en la pizarra.',
			timestamp: new Date(Date.now() - 180000),
			type: 'text',
			reactions: [{ emoji: '❤️', count: 1, users: ['student-1'] }],
			isRead: true
		},
		{
			id: '4',
			userId: 'student-2',
			userName: 'Carlos Martinez',
			userRole: 'student',
			userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face&auto=format',
			content: '¿Tendremos ejercicios prácticos hoy?',
			timestamp: new Date(Date.now() - 120000),
			type: 'text',
			isRead: true
		},
		{
			id: '5',
			userId: 'system',
			userName: 'Sistema',
			userRole: 'student',
			userAvatar: '',
			content: 'María García se ha unido a la clase',
			timestamp: new Date(Date.now() - 60000),
			type: 'system',
			isRead: true
		}
	])

	const [newMessage, setNewMessage] = useState('')
	const [isTyping, setIsTyping] = useState<string[]>([])
	const [showEmojiPicker, setShowEmojiPicker] = useState(false)
	const messagesEndRef = useRef<HTMLDivElement>(null)
	const inputRef = useRef<HTMLInputElement>(null)

	const currentUser = {
		id: 'student-current',
		name: 'Tu',
		role: 'student' as const,
		avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format'
	}

	const emojis = ['👍', '❤️', '😊', '🎉', '👏', '🤔', '😍', '💯', '🔥', '⭐']

	const scrollToBottom = useCallback(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
	}, [])

	useEffect(() => {
		scrollToBottom()
	}, [messages, scrollToBottom])

	// Simulate typing indicators
	useEffect(() => {
		const interval = setInterval(() => {
			const shouldShowTyping = Math.random() > 0.8
			if (shouldShowTyping) {
				const typingUsers = ['Dr. Elena Rodriguez', 'Carlos Martinez', 'Ana López']
				const randomUser = typingUsers[Math.floor(Math.random() * typingUsers.length)]
				setIsTyping([randomUser])
				
				setTimeout(() => {
					setIsTyping([])
				}, 2000)
			}
		}, 5000)

		return () => clearInterval(interval)
	}, [])

	// Simulate new messages
	useEffect(() => {
		const interval = setInterval(() => {
			if (Math.random() > 0.7) {
				const responses = [
					'Excelente explicación profesora!',
					'Esto está muy claro, gracias',
					'¿Podríamos ver otro ejemplo?',
					'Entendido!',
					'👍',
					'Perfecto, ya lo comprendo'
				]

				const users = [
					{
						id: 'student-auto-1',
						name: 'Carlos Martinez',
						role: 'student' as const,
						avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face&auto=format'
					},
					{
						id: 'student-auto-2',
						name: 'María García',
						role: 'student' as const,
						avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face&auto=format'
					}
				]

				const randomUser = users[Math.floor(Math.random() * users.length)]
				const randomResponse = responses[Math.floor(Math.random() * responses.length)]

				const newAutoMessage: ChatMessage = {
					id: Date.now().toString(),
					userId: randomUser.id,
					userName: randomUser.name,
					userRole: randomUser.role,
					userAvatar: randomUser.avatar,
					content: randomResponse,
					timestamp: new Date(),
					type: randomResponse === '👍' ? 'emoji' : 'text',
					isRead: false
				}

				setMessages(prev => [...prev, newAutoMessage])
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
			type: 'text',
			isRead: false
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
						// Remove reaction
						return {
							...msg,
							reactions: msg.reactions?.map(r => 
								r.emoji === emoji
									? { ...r, count: r.count - 1, users: r.users.filter(u => u !== currentUser.id) }
									: r
							).filter(r => r.count > 0)
						}
					} else {
						// Add reaction
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
					// New reaction
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
				<div className="flex justify-center my-3">
					<div className="bg-slate-100 text-slate-600 text-xs px-3 py-2 rounded-full border border-slate-200">
						<div className="flex items-center space-x-2">
							<Sparkles className="w-3 h-3" />
							<span>{message.content}</span>
						</div>
					</div>
				</div>
			)
		}

		return (
			<div className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'} mb-4 group`}>
				<div className={`flex ${isCurrentUser ? 'flex-row-reverse' : 'flex-row'} items-end space-x-2 max-w-[85%]`}>
					{!isCurrentUser && (
						<img 
							src={message.userAvatar}
							alt={message.userName}
							className="w-8 h-8 rounded-full border-2 border-white shadow-sm flex-shrink-0"
						/>
					)}
					
					<div className={`flex flex-col ${isCurrentUser ? 'items-end' : 'items-start'}`}>
						{!isCurrentUser && (
							<div className="flex items-center space-x-2 mb-1 px-1">
								{message.userRole === 'teacher' && (
									<div className="w-4 h-4 bg-amber-500 rounded-full flex items-center justify-center">
										<Crown className="w-2.5 h-2.5 text-white" />
									</div>
								)}
								<span className="text-xs font-semibold text-slate-600">
									{message.userName}
								</span>
							</div>
						)}
						
						<div 
							className={`px-4 py-3 rounded-2xl text-sm leading-relaxed transition-all duration-200 hover:shadow-sm ${
								isCurrentUser 
									? 'bg-blue-500 text-white rounded-br-md' 
									: message.userRole === 'teacher'
									? 'bg-amber-50 text-amber-900 border border-amber-200 rounded-bl-md'
									: 'bg-white text-slate-900 border border-slate-200 rounded-bl-md shadow-sm'
							}`}
						>
							{message.content}
							
							{/* Enhanced message reactions */}
							{message.reactions && message.reactions.length > 0 && (
								<div className="flex flex-wrap gap-1 mt-3 -mb-1">
									{message.reactions.map((reaction, index) => (
										<button
											key={index}
											onClick={() => addReaction(message.id, reaction.emoji)}
											className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs transition-all duration-200 hover:scale-105 ${
												reaction.users.includes(currentUser.id)
													? 'bg-blue-100 text-blue-600 border border-blue-200'
													: 'bg-slate-100 hover:bg-slate-200 text-slate-600 border border-slate-200'
											}`}
										>
											<span>{reaction.emoji}</span>
											<span className="font-medium">{reaction.count}</span>
										</button>
									))}
								</div>
							)}
						</div>
						
						<div className="flex items-center space-x-2 mt-1 px-1">
							<span className="text-xs text-slate-500">
								{formatTime(message.timestamp)}
							</span>
							{isCurrentUser && (
								<div className="flex items-center">
									{message.isRead ? (
										<CheckCheck className="w-3 h-3 text-blue-500" />
									) : (
										<Check className="w-3 h-3 text-slate-400" />
									)}
								</div>
							)}
						</div>

						{/* Quick reactions - only show on hover for non-current user messages */}
						{!isCurrentUser && (
							<div className="flex space-x-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
								{['👍', '❤️', '😊'].map(emoji => (
									<button
										key={emoji}
										onClick={() => addReaction(message.id, emoji)}
										className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-slate-100 text-sm transition-colors duration-200"
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
			{/* Enhanced chat header */}
			<div className="flex items-center justify-between p-4 border-b border-slate-200/60 bg-gradient-to-r from-white to-slate-50/50">
				<div className="flex items-center space-x-3">
					<div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
						<MessageCircle className="w-5 h-5 text-white" />
					</div>
					<div>
						<h3 className="font-bold text-slate-800">Chat en Vivo</h3>
						<div className="flex items-center space-x-2 text-xs text-slate-500">
							<div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
							<span>{messages.length} mensajes</span>
							<div className="w-1 h-1 bg-slate-400 rounded-full" />
							<Users className="w-3 h-3" />
							<span>4 participantes</span>
						</div>
					</div>
				</div>
				<Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-slate-500 hover:text-slate-700">
					<MoreVertical className="w-4 h-4" />
				</Button>
			</div>

			{/* Enhanced messages container */}
			<div className="flex-1 overflow-y-auto p-4 space-y-1 bg-gradient-to-b from-slate-50/50 to-white">
				{messages.map((message) => (
					<MessageComponent key={message.id} message={message} />
				))}
				
				{/* Enhanced typing indicators */}
				{isTyping.length > 0 && (
					<div className="flex items-center space-x-3 text-slate-500 text-sm px-2 py-3">
						<div className="flex space-x-1">
							<div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
							<div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-75" />
							<div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-150" />
						</div>
						<span className="font-medium">{isTyping.join(', ')}</span>
						<span>está escribiendo...</span>
					</div>
				)}
				
				<div ref={messagesEndRef} />
			</div>

			{/* Enhanced emoji picker */}
			{showEmojiPicker && (
				<div className="p-3 border-t border-slate-200/60 bg-white">
					<div className="flex items-center justify-between mb-3">
						<span className="text-sm font-medium text-slate-700">Reacciones rápidas</span>
						<Button
							variant="ghost"
							size="sm"
							onClick={() => setShowEmojiPicker(false)}
							className="h-6 w-6 p-0 text-slate-500"
						>
							<X className="w-4 h-4" />
						</Button>
					</div>
					<div className="grid grid-cols-5 gap-2">
						{emojis.map((emoji) => (
							<button
								key={emoji}
								onClick={() => {
									setNewMessage(prev => prev + emoji)
									setShowEmojiPicker(false)
								}}
								className="w-10 h-10 flex items-center justify-center text-lg hover:bg-slate-100 rounded-lg transition-colors duration-200"
							>
								{emoji}
							</button>
						))}
					</div>
				</div>
			)}

			{/* Enhanced message input */}
			<div className="p-4 border-t border-slate-200/60 bg-white">
				<div className="flex items-center space-x-3">
					<div className="flex-1 relative">
						<Input
							ref={inputRef}
							value={newMessage}
							onChange={(e) => setNewMessage(e.target.value)}
							onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
							placeholder="Escribe tu mensaje..."
							className="pr-20 text-sm border-slate-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
						/>
						<div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center space-x-1">
							<Button 
								variant="ghost" 
								size="sm" 
								className="h-7 w-7 p-0 text-slate-500 hover:text-blue-600 hover:bg-blue-50"
								onClick={() => setShowEmojiPicker(!showEmojiPicker)}
							>
								<Smile className="w-4 h-4" />
							</Button>
							<Button 
								variant="ghost" 
								size="sm" 
								className="h-7 w-7 p-0 text-slate-500 hover:text-slate-700 hover:bg-slate-100"
							>
								<Paperclip className="w-4 h-4" />
							</Button>
						</div>
					</div>
					<Button 
						onClick={sendMessage}
						disabled={!newMessage.trim()}
						size="sm"
						className={`h-10 w-10 p-0 rounded-xl transition-all duration-200 ${
							newMessage.trim() 
								? 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/25' 
								: 'bg-slate-200 text-slate-400 cursor-not-allowed'
						}`}
					>
						<Send className="w-4 h-4" />
					</Button>
				</div>
			</div>
		</div>
	)
}

export default LiveChat 