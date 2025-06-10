'use client'

import React, { useState, useEffect, useMemo } from 'react'
import { 
	Search, 
	Filter, 
	Star, 
	Clock, 
	DollarSign, 
	BookOpen,
	MapPin,
	Award,
	CheckCircle,
	Heart,
	Video,
	MessageCircle,
	Calendar,
	Users,
	Globe,
	TrendingUp,
	Zap,
	ChevronDown,
	X,
	SlidersHorizontal
} from 'lucide-react'
import { Button } from '@/src/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card'
import { Badge } from '@/src/components/ui/badge'
import { Input } from '@/src/components/ui/input'

interface Teacher {
	id: string
	name: string
	subject: string
	rating: number
	reviews: number
	price: number
	experience: string
	image: string
	specialties: string[]
	availability: string
	bio: string
	languages: string[]
	education: string
	verified: boolean
}

const TeacherSearchClient: React.FC = () => {
	const [teachers, setTeachers] = useState<Teacher[]>([])
	const [searchTerm, setSearchTerm] = useState('')
	const [selectedSubject, setSelectedSubject] = useState('all')
	const [priceRange, setPriceRange] = useState([0, 50])
	const [selectedRating, setSelectedRating] = useState(0)
	const [selectedAvailability, setSelectedAvailability] = useState<string[]>([])
	const [showFilters, setShowFilters] = useState(false)
	const [sortBy, setSortBy] = useState('relevance')
	const [favoriteTeachers, setFavoriteTeachers] = useState<string[]>([])
	const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

	const subjects = [
		'Todas las materias', 'Matemáticas', 'Física', 'Química', 'Programación', 
		'Idiomas', 'Historia', 'Literatura', 'Biología', 'Economía'
	]

	// Load data from server
	useEffect(() => {
		const dataScript = document.getElementById('teachers-data')
		if (dataScript) {
			try {
				const data = JSON.parse(dataScript.innerHTML)
				setTeachers(data.teachers || [])
			} catch (error) {
				console.error('Error parsing teachers data:', error)
			}
		}
	}, [])

	const filteredTeachers = useMemo(() => {
		return teachers.filter(teacher => {
			const matchesSearch = teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
								teacher.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
								teacher.specialties.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()))
			
			const matchesSubject = selectedSubject === 'all' || teacher.subject === selectedSubject
			const matchesPrice = teacher.price >= priceRange[0] && teacher.price <= priceRange[1]
			const matchesRating = teacher.rating >= selectedRating
			const matchesAvailability = selectedAvailability.length === 0 || 
										selectedAvailability.includes(teacher.availability)

			return matchesSearch && matchesSubject && matchesPrice && matchesRating && matchesAvailability
		}).sort((a, b) => {
			switch (sortBy) {
				case 'rating':
					return b.rating - a.rating
				case 'price-low':
					return a.price - b.price
				case 'price-high':
					return b.price - a.price
				case 'experience':
					return parseInt(b.experience) - parseInt(a.experience)
				default:
					return 0
			}
		})
	}, [teachers, searchTerm, selectedSubject, priceRange, selectedRating, selectedAvailability, sortBy])

	const toggleFavorite = (teacherId: string) => {
		setFavoriteTeachers(prev => 
			prev.includes(teacherId) 
				? prev.filter(id => id !== teacherId)
				: [...prev, teacherId]
		)
	}

	const clearFilters = () => {
		setSearchTerm('')
		setSelectedSubject('all')
		setPriceRange([0, 50])
		setSelectedRating(0)
		setSelectedAvailability([])
	}

	const getAvailabilityColor = (availability: string) => {
		if (availability.includes('ahora')) return 'bg-green-100 text-green-700 border-green-200'
		if (availability.includes('Hoy')) return 'bg-yellow-100 text-yellow-700 border-yellow-200'
		return 'bg-gray-100 text-gray-700 border-gray-200'
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-neutral-50 via-primary-50/20 to-secondary-50/20">
			{/* Hero Section - More Compact */}
			<div className="bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 text-white py-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center max-w-3xl mx-auto">
						<h1 className="text-3xl font-bold mb-3">
							Encuentra tu profesor ideal
						</h1>
						<p className="text-lg text-white/90 mb-6">
							Conecta con profesores verificados y expertos en más de 50 materias
						</p>
						
						{/* Search Bar - More Compact */}
						<Card className="p-3 bg-white/95 backdrop-blur-sm">
							<div className="flex flex-col md:flex-row gap-3">
								<div className="flex-1 relative">
									<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
									<Input
										type="text"
										placeholder="Buscar por materia, profesor o habilidad..."
										value={searchTerm}
										onChange={(e) => setSearchTerm(e.target.value)}
										className="pl-9 h-10 text-sm border-neutral-200 focus:border-primary-500"
									/>
								</div>
								<select
									value={selectedSubject}
									onChange={(e) => setSelectedSubject(e.target.value)}
									className="px-3 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white h-10 text-sm"
								>
									{subjects.map((subject, index) => (
										<option key={index} value={index === 0 ? 'all' : subject}>
											{subject}
										</option>
									))}
								</select>
								<Button size="default" className="h-10 px-6">
									<Search className="w-4 h-4 mr-2" />
									Buscar
								</Button>
							</div>
						</Card>
					</div>
				</div>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
				<div className="flex gap-6">
					{/* Filters Sidebar - More Compact */}
					<div className={`w-72 ${showFilters ? 'block' : 'hidden lg:block'}`}>
						<Card className="sticky top-6 shadow-compact scrollbar-thin">
							<CardHeader className="pb-4">
								<div className="flex items-center justify-between">
									<CardTitle className="flex items-center text-base">
										<SlidersHorizontal className="w-4 h-4 mr-2" />
										Filtros
									</CardTitle>
									<Button variant="ghost" size="sm" onClick={clearFilters} className="text-xs">
										Limpiar
									</Button>
								</div>
							</CardHeader>
							<CardContent className="space-y-4 pt-0">
								{/* Price Range */}
								<div>
									<label className="block text-sm font-medium text-neutral-700 mb-2">
										Precio por hora: ${priceRange[0]} - ${priceRange[1]}
									</label>
									<input
										type="range"
										min="0"
										max="50"
										value={priceRange[1]}
										onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
										className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer"
									/>
								</div>

								{/* Rating */}
								<div>
									<label className="block text-sm font-medium text-neutral-700 mb-2">
										Calificación mínima
									</label>
									<div className="space-y-1">
										{[4.5, 4.0, 3.5, 0].map((rating) => (
											<label key={rating} className="flex items-center cursor-pointer text-sm">
												<input 
													type="radio" 
													name="rating" 
													value={rating}
													checked={selectedRating === rating}
													onChange={(e) => setSelectedRating(parseFloat(e.target.value))}
													className="mr-2 w-3 h-3" 
												/>
												<div className="flex items-center">
													{rating > 0 ? (
														<>
															<div className="flex space-x-0.5">
																{[1,2,3,4,5].map((star) => (
																	<Star 
																		key={star} 
																		className={`h-3 w-3 ${star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-neutral-300'}`} 
																	/>
																))}
															</div>
															<span className="ml-2 text-xs text-neutral-600">{rating}+</span>
														</>
													) : (
														<span className="text-xs text-neutral-600">Cualquier calificación</span>
													)}
												</div>
											</label>
										))}
									</div>
								</div>

								{/* Availability */}
								<div>
									<label className="block text-sm font-medium text-neutral-700 mb-2">
										Disponibilidad
									</label>
									<div className="space-y-1">
										{['Disponible ahora', 'Disponible hoy', 'Esta semana'].map((option) => (
											<label key={option} className="flex items-center cursor-pointer text-sm">
												<input 
													type="checkbox" 
													checked={selectedAvailability.includes(option)}
													onChange={(e) => {
														if (e.target.checked) {
															setSelectedAvailability([...selectedAvailability, option])
														} else {
															setSelectedAvailability(selectedAvailability.filter(a => a !== option))
														}
													}}
													className="mr-2 w-3 h-3" 
												/>
												<span className="text-xs text-neutral-700">{option}</span>
											</label>
										))}
									</div>
								</div>
							</CardContent>
						</Card>
					</div>

					{/* Results */}
					<div className="flex-1">
						{/* Results Header - More Compact */}
						<div className="flex items-center justify-between mb-4">
							<div className="flex items-center gap-3">
								<p className="text-neutral-600 text-sm">
									<span className="font-semibold text-neutral-900">{filteredTeachers.length}</span> profesores encontrados
								</p>
								<Button
									variant="outline"
									size="sm"
									onClick={() => setShowFilters(!showFilters)}
									className="lg:hidden text-xs"
								>
									<Filter className="w-3 h-3 mr-1" />
									Filtros
								</Button>
							</div>
							
							<select 
								value={sortBy}
								onChange={(e) => setSortBy(e.target.value)}
								className="px-3 py-1.5 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-xs"
							>
								<option value="relevance">Más relevantes</option>
								<option value="rating">Mejor calificados</option>
								<option value="price-low">Precio: menor a mayor</option>
								<option value="price-high">Precio: mayor a menor</option>
								<option value="experience">Más experiencia</option>
							</select>
						</div>

						{/* Teachers Grid - More Compact Cards */}
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
							{filteredTeachers.map((teacher) => (
								<Card key={teacher.id} className="group shadow-compact hover:shadow-compact-hover transition-compact hover:scale-[1.01] animate-fade-in">
									<CardContent className="p-4">
										<div className="flex items-start gap-3">
											{/* Teacher Image - Smaller */}
											<div className="relative">
												<img
													src={teacher.image}
													alt={teacher.name}
													className="w-16 h-16 rounded-lg object-cover"
												/>
												{teacher.verified && (
													<div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
														<CheckCircle className="w-3 h-3 text-white" />
													</div>
												)}
											</div>

											{/* Teacher Info - More Compact */}
											<div className="flex-1 min-w-0">
												<div className="flex items-start justify-between mb-1">
													<div>
														<h3 className="text-base font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors">
															{teacher.name}
														</h3>
														<p className="text-primary-600 font-medium text-sm">{teacher.subject}</p>
													</div>
													<div className="flex items-center gap-1">
														<button
															onClick={() => toggleFavorite(teacher.id)}
															className={`p-1 rounded-full transition-colors ${
																favoriteTeachers.includes(teacher.id)
																	? 'text-red-500 bg-red-50'
																	: 'text-neutral-400 hover:text-red-500 hover:bg-red-50'
															}`}
														>
															<Heart className={`w-3.5 h-3.5 ${favoriteTeachers.includes(teacher.id) ? 'fill-current' : ''}`} />
														</button>
														<div className="text-right">
															<div className="flex items-center gap-0.5">
																<Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
																<span className="font-semibold text-xs">{teacher.rating}</span>
																<span className="text-neutral-500 text-xs">({teacher.reviews})</span>
															</div>
														</div>
													</div>
												</div>
												
												{/* Teacher Stats - Compact */}
												<div className="flex items-center gap-3 text-xs text-neutral-600 mb-2">
													<div className="flex items-center gap-1">
														<Clock className="w-3 h-3" />
														{teacher.experience}
													</div>
													<div className="flex items-center gap-1">
														<DollarSign className="w-3 h-3" />
														${teacher.price}/hora
													</div>
													<div className="flex items-center gap-1">
														<Globe className="w-3 h-3" />
														{teacher.languages.slice(0, 1).join(', ')}
													</div>
												</div>
												
												{/* Specialties - More Compact */}
												<div className="flex flex-wrap gap-1 mb-2">
													{teacher.specialties.slice(0, 2).map((specialty, index) => (
														<Badge key={index} variant="secondary" className="text-xs px-2 py-0.5">
															{specialty}
														</Badge>
													))}
													{teacher.specialties.length > 2 && (
														<Badge variant="outline" className="text-xs px-2 py-0.5">
															+{teacher.specialties.length - 2}
														</Badge>
													)}
												</div>
												
												{/* Bio - More Compact */}
												<p className="text-xs text-neutral-600 mb-3 line-clamp-1">
													{teacher.bio}
												</p>
												
												{/* Availability & Actions - Compact */}
												<div className="flex items-center justify-between">
													<Badge className={`text-xs px-2 py-1 ${getAvailabilityColor(teacher.availability)}`}>
														{teacher.availability}
													</Badge>
													<div className="flex items-center gap-1.5">
														<Button variant="outline" size="sm" className="h-7 px-2 text-xs">
															<MessageCircle className="w-3 h-3 mr-1" />
															Mensaje
														</Button>
														<Button size="sm" className="h-7 px-2 text-xs">
															<Video className="w-3 h-3 mr-1" />
															Reservar
														</Button>
													</div>
												</div>
											</div>
										</div>
									</CardContent>
								</Card>
							))}
						</div>

						{/* Load More */}
						{filteredTeachers.length > 0 && (
							<div className="text-center mt-8">
								<Button variant="outline" size="default" className="px-6">
									Cargar más profesores
								</Button>
							</div>
						)}

						{/* No Results */}
						{filteredTeachers.length === 0 && (
							<div className="text-center py-8">
								<div className="w-20 h-20 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-3">
									<Search className="w-10 h-10 text-neutral-400" />
								</div>
								<h3 className="text-base font-semibold text-neutral-900 mb-2">
									No encontramos profesores
								</h3>
								<p className="text-neutral-600 mb-3 text-sm">
									Intenta ajustar tus filtros o buscar con términos diferentes
								</p>
								<Button onClick={clearFilters} size="sm">
									Limpiar filtros
								</Button>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default TeacherSearchClient 