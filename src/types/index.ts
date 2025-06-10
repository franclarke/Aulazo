export interface User {
	id: string
	email: string
	name: string
	role: 'student' | 'teacher' | 'admin'
	avatar?: string
	createdAt: Date
	updatedAt: Date
}

export interface Student extends User {
	role: 'student'
	enrolledCourses: string[]
	level: 'beginner' | 'intermediate' | 'advanced'
}

export interface Teacher extends User {
	role: 'teacher'
	subjects: string[]
	experience: number
	rating: number
	hourlyRate: number
	bio: string
	qualifications: string[]
	availability: TimeSlot[]
}

export interface Course {
	id: string
	title: string
	description: string
	teacherId: string
	teacher: Teacher
	students: Student[]
	subject: string
	level: 'beginner' | 'intermediate' | 'advanced'
	duration: number // in minutes
	price: number
	maxStudents: number
	schedule: TimeSlot[]
	createdAt: Date
	updatedAt: Date
}

export interface TimeSlot {
	id: string
	dayOfWeek: number // 0-6 (Sunday-Saturday)
	startTime: string // HH:MM format
	endTime: string // HH:MM format
	isAvailable: boolean
}

export interface Lesson {
	id: string
	courseId: string
	title: string
	description: string
	scheduledAt: Date
	duration: number
	status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled'
	meetingUrl?: string
	materials: LessonMaterial[]
}

export interface LessonMaterial {
	id: string
	name: string
	type: 'pdf' | 'video' | 'image' | 'link'
	url: string
	size?: number
}

export interface Review {
	id: string
	studentId: string
	teacherId: string
	courseId: string
	rating: number
	comment: string
	createdAt: Date
}

export interface ApiResponse<T = any> {
	success: boolean
	data?: T
	error?: string
	message?: string
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
	pagination: {
		page: number
		limit: number
		total: number
		totalPages: number
	}
}

export interface SearchFilters {
	subject?: string
	level?: string
	priceRange?: {
		min: number
		max: number
	}
	rating?: number
	availability?: string
	sortBy?: 'price' | 'rating' | 'experience'
	sortOrder?: 'asc' | 'desc'
} 