'use client'

import React, { useState, useEffect } from 'react'
import { 
	Brain, 
	Eye, 
	Heart, 
	TrendingUp, 
	Lightbulb, 
	Activity, 
	BarChart3,
	Sparkles,
	Target,
	Award,
	Zap,
	AlertCircle,
} from 'lucide-react'
import { Card } from '@/src/components/ui/card'
import { MetricCard } from '@/src/components/ui/metric-card'
import { Button } from '@/src/components/ui/button'

interface InnovationPanelProps {
	currentUser: any
	className?: string
}

const InnovationPanel: React.FC<InnovationPanelProps> = ({ currentUser, className }) => {
	const [aiMetrics, setAiMetrics] = useState({
		engagement: 85.3,
		attention: 94.3,
		participation: 92,
		comprehension: 78,
		emotionalState: 'engaged',
		focusLevel: 88,
		learningScore: 87,
	})

	const [recommendations, setRecommendations] = useState([
		{
			id: 1,
			type: 'positive',
			icon: <Eye className="w-3 h-3" />,
			message: 'Tu nivel de enfoque está excelente.',
			priority: 'high',
		},
		{
			id: 2,
			type: 'suggestion',
			icon: <Brain className="w-3 h-3" />,
			message: 'Considera hacer una pregunta sobre el tema.',
			priority: 'medium',
		},
		{
			id: 3,
			type: 'tip',
			icon: <Lightbulb className="w-3 h-3" />,
			message: '¿Te gustaría tomar notas sobre este concepto?',
			priority: 'low',
		},
	])

	// Simulate real-time AI updates
	useEffect(() => {
		const interval = setInterval(() => {
			setAiMetrics(prev => ({
				engagement: Math.max(70, Math.min(100, prev.engagement + (Math.random() - 0.5) * 8)),
				attention: Math.max(80, Math.min(100, prev.attention + (Math.random() - 0.5) * 6)),
				participation: Math.max(85, Math.min(100, prev.participation + (Math.random() - 0.5) * 4)),
				comprehension: Math.max(65, Math.min(95, prev.comprehension + (Math.random() - 0.5) * 10)),
				emotionalState: ['engaged', 'focused', 'excited', 'curious', 'challenged'][Math.floor(Math.random() * 5)],
				focusLevel: Math.max(75, Math.min(100, prev.focusLevel + (Math.random() - 0.5) * 7)),
				learningScore: Math.max(70, Math.min(100, prev.learningScore + (Math.random() - 0.5) * 5)),
			}))
		}, 4000)

		return () => clearInterval(interval)
	}, [])

	const getEmotionalStateColor = (state: string) => {
		switch (state) {
			case 'engaged': return 'text-green-600 bg-green-100'
			case 'focused': return 'text-blue-600 bg-blue-100'
			case 'excited': return 'text-orange-600 bg-orange-100'
			case 'curious': return 'text-purple-600 bg-purple-100'
			case 'challenged': return 'text-red-600 bg-red-100'
			default: return 'text-neutral-600 bg-neutral-100'
		}
	}

	const getEmotionalStateIcon = (state: string) => {
		switch (state) {
			case 'engaged': return '😊'
			case 'focused': return '🎯'
			case 'excited': return '🤩'
			case 'curious': return '🤔'
			case 'challenged': return '😤'
			default: return '😐'
		}
	}

	const getPriorityColor = (priority: string) => {
		switch (priority) {
			case 'high': return 'bg-red-500'
			case 'medium': return 'bg-yellow-500'
			case 'low': return 'bg-green-500'
			default: return 'bg-neutral-500'
		}
	}

	return (
		<div className={`h-full flex flex-col space-y-3 overflow-auto scrollbar-thin ${className || ''}`}>
			{/* Header - More Compact */}
			<div className="flex items-center justify-between">
				<div className="flex items-center space-x-2">
					<div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-md flex items-center justify-center">
						<Sparkles className="w-3 h-3 text-white" />
					</div>
					<h3 className="font-semibold text-neutral-900 text-sm">Panel IA</h3>
				</div>
				<div className="flex items-center space-x-1">
					<div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
					<span className="text-xs text-neutral-600 font-medium">Live</span>
				</div>
			</div>

			{/* AI Metrics Overview - More Compact */}
			<Card variant="ai" padding="sm" className="p-3">
				<div className="flex items-center justify-between mb-3">
					<h4 className="font-semibold text-neutral-900 flex items-center space-x-1.5 text-xs">
						<BarChart3 className="w-3 h-3 text-purple-500" />
						<span>Analytics Live</span>
					</h4>
					<div className="text-lg font-bold text-purple-600">
						{Math.round(aiMetrics.learningScore)}%
					</div>
				</div>
				
				<div className="grid grid-cols-2 gap-2 mb-3">
					<div className="text-center p-2 bg-white/50 rounded-md">
						<div className="text-sm font-bold text-green-600">
							{Math.round(aiMetrics.engagement)}%
						</div>
						<div className="text-xs text-neutral-600">Engagement</div>
					</div>
					<div className="text-center p-2 bg-white/50 rounded-md">
						<div className="text-sm font-bold text-blue-600">
							{Math.round(aiMetrics.attention)}%
						</div>
						<div className="text-xs text-neutral-600">Atención</div>
					</div>
				</div>

				{/* Emotional State - Compact */}
				<div className="flex items-center justify-between p-2 bg-white/50 rounded-md">
					<div className="flex items-center space-x-1.5">
						<Heart className="w-3 h-3 text-neutral-600" />
						<span className="text-xs font-medium text-neutral-700">Estado</span>
					</div>
					<div className={`px-2 py-1 rounded-full text-xs font-medium ${getEmotionalStateColor(aiMetrics.emotionalState)}`}>
						{getEmotionalStateIcon(aiMetrics.emotionalState)} {aiMetrics.emotionalState}
					</div>
				</div>
			</Card>

			{/* Detailed Metrics - Compact */}
			<div className="grid grid-cols-1 gap-2">
				<MetricCard
					variant="engagement"
					title="Enfoque"
					value={`${Math.round(aiMetrics.focusLevel)}%`}
					progress={aiMetrics.focusLevel}
					icon={<Target className="w-3 h-3" />}
					trend={aiMetrics.focusLevel > 85 ? 'positive' : 'neutral'}
					animated
					size="sm"
				/>
				<MetricCard
					variant="attention"
					title="Comprensión"
					value={`${Math.round(aiMetrics.comprehension)}%`}
					progress={aiMetrics.comprehension}
					icon={<Brain className="w-3 h-3" />}
					trend={aiMetrics.comprehension > 80 ? 'positive' : 'neutral'}
					animated
					size="sm"
				/>
				<MetricCard
					variant="participation"
					title="Participación"
					value={`${Math.round(aiMetrics.participation)}%`}
					progress={aiMetrics.participation}
					icon={<TrendingUp className="w-3 h-3" />}
					trend="positive"
					animated
					size="sm"
				/>
			</div>

			{/* AI Recommendations - Compact */}
			<Card variant="glass" padding="sm" className="flex-1 p-3">
				<div className="flex items-center justify-between mb-2">
					<h4 className="font-semibold text-neutral-900 text-xs">Recomendaciones IA</h4>
					<Button variant="ghost" size="sm" className="h-5 w-5 p-0">
						<Zap className="w-3 h-3 text-orange-500" />
					</Button>
				</div>
				
				<div className="space-y-2">
					{recommendations.map((rec) => (
						<div key={rec.id} className="flex items-start space-x-2 p-2 bg-white/50 rounded-md hover:bg-white/80 transition-colors">
							<div className={`w-1 h-1 rounded-full mt-2 ${getPriorityColor(rec.priority)}`} />
							<div className="flex items-start space-x-2 flex-1">
								<div className="text-neutral-600 mt-0.5">
									{rec.icon}
								</div>
								<p className="text-xs text-neutral-700 leading-relaxed">
									{rec.message}
								</p>
							</div>
						</div>
					))}
				</div>

				{/* Action Buttons - Compact */}
				<div className="mt-3 space-y-1.5">
					<Button 
						variant="ai" 
						size="sm" 
						className="w-full justify-start h-7 text-xs"
					>
						<Brain className="w-3 h-3 mr-1.5" />
						Generar Resumen
					</Button>
					<Button 
						variant="outline" 
						size="sm" 
						className="w-full justify-start h-7 text-xs"
					>
						<Award className="w-3 h-3 mr-1.5" />
						Ver Logros
					</Button>
				</div>
			</Card>

			{/* Quick Actions - Compact */}
			<div className="grid grid-cols-2 gap-2">
				<Button variant="ghost" size="sm" className="h-8 text-xs">
					<Activity className="w-3 h-3 mr-1" />
					Stats
				</Button>
				<Button variant="ghost" size="sm" className="h-8 text-xs">
					<Target className="w-3 h-3 mr-1" />
					Objetivos
				</Button>
			</div>
		</div>
	)
}

export default InnovationPanel 