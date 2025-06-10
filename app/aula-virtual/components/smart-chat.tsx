'use client'

import React, { useState, useRef, useEffect } from 'react'
import { 
	MessageCircle, 
	Send, 
	Smile, 
	Paperclip, 
	Mic, 
	Bot,
	Zap,
	BookOpen,
	Calculator,
	Lightbulb,
	Users,
	Pin
} from 'lucide-react'
import { User } from '@/lib/mock-users'

interface Message {
	id: string
	userId: string
	userName: string
	userAvatar: string
	content: string
	timestamp: Date
	type: 'text' | 'ai-help' | 'question' | 'poll' | 'resource'
	isAI?: boolean
	reactions?: string[]
	isPinned?: boolean
}

interface SmartChatProps {
	currentUser: User
	participants: User[]
	className?: string
}

const SmartChat: React.FC<SmartChatProps> = ({ 
	currentUser, 
	participants, 
	className = '' 
}) => {
	const [messages, setMessages] = useState<Message[]>([])
	const [newMessage, setNewMessage] = useState('')
	const [isRecording, setIsRecording] = useState(false)
	const [showAIAssistant, setShowAIAssistant] = useState(false)
	const messagesEndRef = useRef<HTMLDivElement>(null)

	// Initialize with some sample messages
	useEffect(() => {
		const sampleMessages: Message[] = [
			{
				id: '1',
				userId: 'ai-assistant',
				userName: 'AI Assistant',
				userAvatar: '',
				content: '¡Hola! Soy tu asistente de IA. Puedo ayudarte con matemáticas, explicaciones y más. 🤖',
				timestamp: new Date(Date.now() - 300000),
				type: 'ai-help',
				isAI: true
			},
			{
				id: '2',
				userId: participants[0]?.id || 'teacher',
				userName: participants[0]?.name || 'Profesor',
				userAvatar: participants[0]?.avatar || '',
				content: '¡Bienvenidos a nuestra clase de matemáticas avanzadas! Hoy estudiaremos ecuaciones cuadráticas.',
				timestamp: new Date(Date.now() - 240000),
				type: 'text',
				isPinned: true
			},
			{
				id: '3',
				userId: currentUser.id,
				userName: currentUser.name,
				userAvatar: currentUser.avatar,
				content: '¿Podrías explicar la fórmula cuadrática paso a paso?',
				timestamp: new Date(Date.now() - 180000),
				type: 'question'
			},
			{
				id: '4',
				userId: 'ai-assistant',
				userName: 'AI Assistant',
				userAvatar: '',
				content: '¡Claro! La fórmula cuadrática es: x = (-b ± √(b²-4ac)) / 2a\n\n📚 **Pasos:**\n1. Identifica a, b, c\n2. Calcula el discriminante (b²-4ac)\n3. Aplica la fórmula\n\n¿Te gustaría un ejemplo práctico?',
				timestamp: new Date(Date.now() - 120000),
				type: 'ai-help',
				isAI: true,
				reactions: ['👍', '💡', '📖']
			}
		]
		setMessages(sampleMessages)
	}, [currentUser, participants])

	// Auto scroll to bottom
	useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
	}, [messages])

	const sendMessage = () => {
		if (!newMessage.trim()) return

		const message: Message = {
			id: Date.now().toString(),
			userId: currentUser.id,
			userName: currentUser.name,
			userAvatar: currentUser.avatar,
			content: newMessage,
			timestamp: new Date(),
			type: newMessage.includes('?') ? 'question' : 'text'
		}

		setMessages(prev => [...prev, message])
		setNewMessage('')

		// Simulate AI response to questions
		if (message.type === 'question') {
			setTimeout(() => {
				const aiResponse: Message = {
					id: (Date.now() + 1).toString(),
					userId: 'ai-assistant',
					userName: 'AI Assistant',
					userAvatar: '',
					content: generateAIResponse(newMessage),
					timestamp: new Date(),
					type: 'ai-help',
					isAI: true
				}
				setMessages(prev => [...prev, aiResponse])
			}, 1000 + Math.random() * 2000)
		}
	}

	const generateAIResponse = (question: string) => {
		const responses = [
			'📊 Basándome en el contexto de la clase, aquí tienes una explicación detallada...',
			'🔍 Excelente pregunta. Déjame desglosarlo paso a paso...',
			'💡 Puedo ayudarte con eso. Considera estos puntos clave...',
			'📚 Según el material de la clase, la respuesta incluye...',
			'🎯 Para entender mejor este concepto, piensa en...'
		]
		return responses[Math.floor(Math.random() * responses.length)]
	}

	const toggleReaction = (messageId: string, emoji: string) => {
		setMessages(prev => prev.map(msg => {
			if (msg.id === messageId) {
				const reactions = msg.reactions || []
				const hasReaction = reactions.includes(emoji)
				return {
					...msg,
					reactions: hasReaction 
						? reactions.filter(r => r !== emoji)
						: [...reactions, emoji]
				}
			}
			return msg
		}))
	}

	const quickActions = [
		{ id: 'help', icon: Lightbulb, label: 'Pedir ayuda', action: () => setNewMessage('¿Podrías ayudarme con...?') },
		{ id: 'calc', icon: Calculator, label: 'Calculadora', action: () => setShowAIAssistant(true) },
		{ id: 'resource', icon: BookOpen, label: 'Recursos', action: () => setNewMessage('¿Tienes recursos adicionales sobre este tema?') },
		{ id: 'poll', icon: Users, label: 'Encuesta', action: () => console.log('Create poll') }
	]

	return (
		<div className={`bg-white rounded-xl shadow-xl overflow-hidden flex flex-col ${className}`}>
			{/* Header */}
			<div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4">
				<div className="flex items-center justify-between">
					<div className="flex items-center space-x-3">
						<MessageCircle className="w-5 h-5" />
						<h3 className="font-semibold">Chat Inteligente</h3>
						<div className="flex items-center space-x-1 bg-white/20 rounded-full px-2 py-1">
							<Bot className="w-3 h-3" />
							<span className="text-xs">AI</span>
						</div>
					</div>
					<div className="flex items-center space-x-2">
						<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
						<span className="text-sm">{participants.length + 1} online</span>
					</div>
				</div>
			</div>

			{/* Messages */}
			<div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-96">
				{messages.map((message) => (
					<div key={message.id} className={`flex space-x-3 ${message.isAI ? 'bg-blue-50 -mx-4 px-4 py-2 rounded-lg' : ''}`}>
						{/* Avatar */}
						<div className="flex-shrink-0">
							{message.isAI ? (
								<div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
									<Bot className="w-4 h-4 text-white" />
								</div>
							) : (
								<img 
									src={message.userAvatar || '/default-avatar.png'} 
									alt={message.userName}
									className="w-8 h-8 rounded-full object-cover"
								/>
							)}
						</div>

						{/* Message Content */}
						<div className="flex-1 min-w-0">
							<div className="flex items-center space-x-2 mb-1">
								<span className="font-medium text-sm text-gray-900">
									{message.userName}
								</span>
								{message.isPinned && <Pin className="w-3 h-3 text-yellow-500" />}
								{message.type === 'question' && <span className="text-xs bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full">Pregunta</span>}
								{message.isAI && <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">IA</span>}
								<span className="text-xs text-gray-500">
									{message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
								</span>
							</div>
							
							<div className={`text-sm text-gray-800 ${message.isAI ? 'whitespace-pre-line' : ''}`}>
								{message.content}
							</div>

							{/* Reactions */}
							{message.reactions && message.reactions.length > 0 && (
								<div className="flex items-center space-x-1 mt-2">
									{message.reactions.map((reaction, index) => (
										<button
											key={index}
											onClick={() => toggleReaction(message.id, reaction)}
											className="text-sm bg-gray-100 hover:bg-gray-200 rounded-full px-2 py-1 transition-colors"
										>
											{reaction}
										</button>
									))}
								</div>
							)}

							{/* Quick reaction buttons for AI messages */}
							{message.isAI && (
								<div className="flex items-center space-x-2 mt-2">
									{['👍', '❤️', '💡', '🤔'].map(emoji => (
										<button
											key={emoji}
											onClick={() => toggleReaction(message.id, emoji)}
											className="text-lg hover:scale-110 transition-transform"
										>
											{emoji}
										</button>
									))}
								</div>
							)}
						</div>
					</div>
				))}
				<div ref={messagesEndRef} />
			</div>

			{/* Quick Actions */}
			<div className="border-t bg-gray-50 p-3">
				<div className="flex items-center space-x-2 mb-3">
					<span className="text-xs text-gray-600 font-medium">Acciones rápidas:</span>
					{quickActions.map(action => {
						const IconComponent = action.icon
						return (
							<button
								key={action.id}
								onClick={action.action}
								className="flex items-center space-x-1 bg-white hover:bg-blue-50 text-gray-700 px-2 py-1 rounded-lg text-xs transition-colors border"
								title={action.label}
							>
								<IconComponent className="w-3 h-3" />
								<span>{action.label}</span>
							</button>
						)
					})}
				</div>
			</div>

			{/* Message Input */}
			<div className="border-t bg-white p-4">
				<div className="flex items-center space-x-3">
					<div className="flex-1 relative">
						<input
							type="text"
							value={newMessage}
							onChange={(e) => setNewMessage(e.target.value)}
							onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
							placeholder="Escribe tu mensaje o pregunta..."
							className="w-full bg-gray-100 rounded-full px-4 py-2 pr-20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
						/>
						<div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
							<button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
								<Smile className="w-4 h-4" />
							</button>
							<button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
								<Paperclip className="w-4 h-4" />
							</button>
						</div>
					</div>
					
					<button
						onClick={() => setIsRecording(!isRecording)}
						className={`p-2 rounded-full transition-all ${
							isRecording 
								? 'bg-red-500 text-white animate-pulse' 
								: 'bg-gray-100 text-gray-600 hover:bg-gray-200'
						}`}
					>
						<Mic className="w-4 h-4" />
					</button>
					
					<button
						onClick={sendMessage}
						disabled={!newMessage.trim()}
						className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
					>
						<Send className="w-4 h-4" />
					</button>
				</div>
			</div>
		</div>
	)
}

export default SmartChat 