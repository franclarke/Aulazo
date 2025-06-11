'use client'

import React, { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
	FileText, 
	Play, 
	Download, 
	BookOpen, 
	Image, 
	Video,
	Link,
	Eye,
	Clock,
	Star,
	MoreVertical,
	Search,
	Filter,
	SortAsc,
	Calendar,
	TrendingUp,
	BarChart3,
	Heart,
	Share,
	ExternalLink,
	FolderOpen
} from 'lucide-react'

interface StudyMaterial {
	id: string
	title: string
	type: 'pdf' | 'video' | 'presentation' | 'link' | 'image' | 'document'
	description: string
	size?: string
	duration?: string
	uploadDate: Date
	downloadCount: number
	rating: number
	isNew: boolean
	thumbnail?: string
	url: string
}

const StudyMaterials: React.FC = () => {
	const [materials] = useState<StudyMaterial[]>([
		{
			id: '1',
			title: 'Límites y Continuidad - Teoría',
			type: 'pdf',
			description: 'Conceptos fundamentales de límites en cálculo diferencial',
			size: '2.4 MB',
			uploadDate: new Date(Date.now() - 86400000),
			downloadCount: 45,
			rating: 4.8,
			isNew: true,
			thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=200&h=150&fit=crop&auto=format',
			url: '#'
		},
		{
			id: '2',
			title: 'Derivadas - Ejercicios Resueltos',
			type: 'video',
			description: 'Solución paso a paso de problemas de derivación',
			duration: '23:45',
			uploadDate: new Date(Date.now() - 172800000),
			downloadCount: 78,
			rating: 4.9,
			isNew: false,
			thumbnail: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=200&h=150&fit=crop&auto=format',
			url: '#'
		},
		{
			id: '3',
			title: 'Presentación: Integrales Definidas',
			type: 'presentation',
			description: 'Slides de la clase sobre integración y aplicaciones',
			size: '5.1 MB',
			uploadDate: new Date(Date.now() - 259200000),
			downloadCount: 32,
			rating: 4.6,
			isNew: false,
			thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=150&fit=crop&auto=format',
			url: '#'
		},
		{
			id: '4',
			title: 'Gráficas de Funciones Interactivas',
			type: 'link',
			description: 'Herramienta online para visualizar funciones matemáticas',
			uploadDate: new Date(Date.now() - 345600000),
			downloadCount: 56,
			rating: 4.7,
			isNew: false,
			thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=150&fit=crop&auto=format',
			url: 'https://www.desmos.com/calculator'
		},
		{
			id: '5',
			title: 'Formulario de Derivadas',
			type: 'image',
			description: 'Tabla de referencia rápida con todas las reglas de derivación',
			size: '890 KB',
			uploadDate: new Date(Date.now() - 432000000),
			downloadCount: 123,
			rating: 4.5,
			isNew: false,
			thumbnail: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?w=200&h=150&fit=crop&auto=format',
			url: '#'
		},
		{
			id: '6',
			title: 'Examen de Práctica',
			type: 'document',
			description: 'Preguntas de ejemplo para el próximo examen parcial',
			size: '1.2 MB',
			uploadDate: new Date(Date.now() - 518400000),
			downloadCount: 89,
			rating: 4.8,
			isNew: true,
			thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=200&h=150&fit=crop&auto=format',
			url: '#'
		}
	])

	const [filter, setFilter] = useState<'all' | 'pdf' | 'video' | 'presentation' | 'link' | 'image' | 'document'>('all')
	const [searchTerm, setSearchTerm] = useState('')

	const getFileIcon = (type: string) => {
		switch (type) {
			case 'pdf':
			case 'document':
				return FileText
			case 'video':
				return Video
			case 'presentation':
				return BookOpen
			case 'link':
				return Link
			case 'image':
				return Image
			default:
				return FileText
		}
	}

	const getFileColor = (type: string) => {
		switch (type) {
			case 'pdf':
				return 'from-red-500 to-red-600'
			case 'video':
				return 'from-blue-500 to-blue-600'
			case 'presentation':
				return 'from-emerald-500 to-emerald-600'
			case 'link':
				return 'from-purple-500 to-purple-600'
			case 'image':
				return 'from-orange-500 to-orange-600'
			case 'document':
				return 'from-slate-500 to-slate-600'
			default:
				return 'from-slate-500 to-slate-600'
		}
	}

	const filteredMaterials = materials.filter(material => {
		const matchesFilter = filter === 'all' || material.type === filter
		const matchesSearch = material.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
							 material.description.toLowerCase().includes(searchTerm.toLowerCase())
		return matchesFilter && matchesSearch
	})

	const formatDate = (date: Date) => {
		return date.toLocaleDateString('es-ES', {
			day: 'numeric',
			month: 'short',
			year: 'numeric'
		})
	}

	const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
		return (
			<div className="flex items-center space-x-1">
				{[1, 2, 3, 4, 5].map((star) => (
					<Star
						key={star}
						className={`w-3 h-3 ${
							star <= rating
								? 'text-amber-400 fill-current'
								: 'text-slate-300'
						}`}
					/>
				))}
				<span className="text-xs text-slate-600 ml-1 font-medium">{rating}</span>
			</div>
		)
	}

	const MaterialCard: React.FC<{ material: StudyMaterial }> = ({ material }) => {
		const Icon = getFileIcon(material.type)
		const colorClass = getFileColor(material.type)

		return (
			<div className="bg-white rounded-xl border border-slate-200/60 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group hover:-translate-y-1">
				<div className="relative">
					{/* Enhanced thumbnail or icon */}
					<div className="relative h-32 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
						{material.thumbnail ? (
							<div className="relative h-full">
								<img 
									src={material.thumbnail}
									alt={material.title}
									className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
								/>
								{material.type === 'video' && (
									<div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
										<div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
											<Play className="w-5 h-5 text-slate-700 ml-0.5" />
										</div>
									</div>
								)}
								{material.type === 'link' && (
									<div className="absolute top-2 right-2 w-6 h-6 bg-white/90 rounded-full flex items-center justify-center">
										<ExternalLink className="w-3 h-3 text-slate-600" />
									</div>
								)}
							</div>
						) : (
							<div className={`w-full h-full bg-gradient-to-br ${colorClass} flex items-center justify-center`}>
								<Icon className="w-8 h-8 text-white" />
							</div>
						)}
						
						{material.isNew && (
							<div className="absolute top-2 left-2 bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
								NUEVO
							</div>
						)}

						{/* Enhanced file type badge */}
						<div className={`absolute bottom-2 left-2 bg-gradient-to-r ${colorClass} text-white text-xs font-semibold px-2 py-1 rounded-lg shadow-lg`}>
							{material.type.toUpperCase()}
						</div>
					</div>

					{/* Enhanced content */}
					<div className="p-4">
						<div className="flex items-start justify-between mb-2">
							<h4 className="font-semibold text-slate-800 line-clamp-2 text-sm leading-tight group-hover:text-blue-600 transition-colors">
								{material.title}
							</h4>
							<Button variant="ghost" size="sm" className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity text-slate-500 hover:text-slate-700">
								<MoreVertical className="w-3 h-3" />
							</Button>
						</div>
						
						<p className="text-xs text-slate-600 line-clamp-2 mb-3 leading-relaxed">
							{material.description}
						</p>

						{/* Enhanced metadata */}
						<div className="flex items-center justify-between text-xs text-slate-500 mb-3">
							<div className="flex items-center space-x-2">
								<div className="flex items-center space-x-1">
									<Calendar className="w-3 h-3" />
									<span>{formatDate(material.uploadDate)}</span>
								</div>
								{material.size && (
									<>
										<div className="w-1 h-1 bg-slate-400 rounded-full" />
										<span className="font-medium">{material.size}</span>
									</>
								)}
								{material.duration && (
									<>
										<div className="w-1 h-1 bg-slate-400 rounded-full" />
										<div className="flex items-center space-x-1">
											<Clock className="w-3 h-3" />
											<span className="font-medium">{material.duration}</span>
										</div>
									</>
								)}
							</div>
						</div>

						{/* Enhanced stats */}
						<div className="flex items-center justify-between mb-4">
							<div className="flex items-center space-x-3">
								<div className="flex items-center space-x-1 text-slate-600">
									<Download className="w-3 h-3" />
									<span className="text-xs font-medium">{material.downloadCount}</span>
								</div>
								<StarRating rating={material.rating} />
							</div>
						</div>

						{/* Enhanced actions */}
						<div className="flex items-center space-x-2">
							{material.type === 'video' ? (
								<Button size="sm" className={`h-8 text-xs flex-1 bg-gradient-to-r ${colorClass} hover:shadow-lg transition-all`}>
									<Play className="w-3 h-3 mr-1" />
									Reproducir
								</Button>
							) : material.type === 'link' ? (
								<Button size="sm" className={`h-8 text-xs flex-1 bg-gradient-to-r ${colorClass} hover:shadow-lg transition-all`}>
									<ExternalLink className="w-3 h-3 mr-1" />
									Abrir
								</Button>
							) : (
								<Button size="sm" className={`h-8 text-xs flex-1 bg-gradient-to-r ${colorClass} hover:shadow-lg transition-all`}>
									<Eye className="w-3 h-3 mr-1" />
									Ver
								</Button>
							)}
							
							<Button variant="outline" size="sm" className="h-8 w-8 p-0 border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all">
								<Download className="w-3 h-3" />
							</Button>
							<Button variant="outline" size="sm" className="h-8 w-8 p-0 border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all">
								<Share className="w-3 h-3" />
							</Button>
						</div>
					</div>
				</div>
			</div>
		)
	}

	const filters = [
		{ key: 'all', label: 'Todos', icon: FolderOpen },
		{ key: 'pdf', label: 'PDFs', icon: FileText },
		{ key: 'video', label: 'Videos', icon: Video },
		{ key: 'presentation', label: 'Presentaciones', icon: BookOpen },
		{ key: 'link', label: 'Enlaces', icon: Link },
		{ key: 'image', label: 'Imágenes', icon: Image },
		{ key: 'document', label: 'Documentos', icon: FileText }
	]

	return (
		<div className="h-full flex flex-col bg-white">
			{/* Enhanced header */}
			<div className="p-4 border-b border-slate-200/60 bg-gradient-to-r from-white to-slate-50/50">
				<div className="flex items-center justify-between mb-4">
					<div className="flex items-center space-x-3">
						<div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
							<FolderOpen className="w-5 h-5 text-white" />
						</div>
						<div>
							<h3 className="font-bold text-slate-800">Material de Estudio</h3>
							<div className="flex items-center space-x-2 text-xs text-slate-500">
								<div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
								<span>{filteredMaterials.length} recursos disponibles</span>
							</div>
						</div>
					</div>
				</div>

				{/* Enhanced search and filter */}
				<div className="space-y-3">
					<div className="relative">
						<Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
						<input
							type="text"
							placeholder="Buscar materiales..."
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							className="w-full pl-10 pr-4 py-3 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-50/50 hover:bg-white transition-colors"
						/>
					</div>

					<div className="flex items-center space-x-2 overflow-x-auto pb-1">
						{filters.map(({ key, label, icon: Icon }) => (
							<Button
								key={key}
								variant={filter === key ? 'default' : 'ghost'}
								size="sm"
								onClick={() => setFilter(key as any)}
								className={`h-8 px-3 text-xs whitespace-nowrap transition-all duration-200 ${
									filter === key 
										? 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/25' 
										: 'hover:bg-slate-100 text-slate-600'
								}`}
							>
								<Icon className="w-3 h-3 mr-1" />
								{label}
							</Button>
						))}
					</div>
				</div>
			</div>

			{/* Enhanced materials list */}
			<div className="flex-1 overflow-y-auto p-4">
				{filteredMaterials.length > 0 ? (
					<div className="grid gap-4">
						{filteredMaterials.map((material) => (
							<MaterialCard key={material.id} material={material} />
						))}
					</div>
				) : (
					<div className="flex flex-col items-center justify-center h-full text-center">
						<div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center mb-4">
							<FileText className="w-8 h-8 text-slate-400" />
						</div>
						<h4 className="font-semibold text-slate-700 mb-2">No se encontraron materiales</h4>
						<p className="text-sm text-slate-500 max-w-sm">
							Intenta cambiar los filtros o términos de búsqueda para encontrar lo que necesitas.
						</p>
						<Button 
							variant="outline" 
							size="sm" 
							className="mt-4"
							onClick={() => {
								setSearchTerm('')
								setFilter('all')
							}}
						>
							Limpiar filtros
						</Button>
					</div>
				)}
			</div>

			{/* Enhanced quick stats */}
			<div className="p-4 border-t border-slate-200/60 bg-gradient-to-r from-white to-slate-50/50">
				<div className="grid grid-cols-3 gap-4">
					<div className="text-center">
						<div className="flex items-center justify-center space-x-1 mb-1">
							<FileText className="w-4 h-4 text-slate-600" />
							<span className="font-bold text-slate-800">
								{materials.filter(m => m.type === 'pdf' || m.type === 'document').length}
							</span>
						</div>
						<div className="text-xs text-slate-600">Documentos</div>
					</div>
					<div className="text-center">
						<div className="flex items-center justify-center space-x-1 mb-1">
							<Video className="w-4 h-4 text-slate-600" />
							<span className="font-bold text-slate-800">
								{materials.filter(m => m.type === 'video').length}
							</span>
						</div>
						<div className="text-xs text-slate-600">Videos</div>
					</div>
					<div className="text-center">
						<div className="flex items-center justify-center space-x-1 mb-1">
							<TrendingUp className="w-4 h-4 text-slate-600" />
							<span className="font-bold text-slate-800">
								{materials.reduce((sum, m) => sum + m.downloadCount, 0)}
							</span>
						</div>
						<div className="text-xs text-slate-600">Descargas</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default StudyMaterials 