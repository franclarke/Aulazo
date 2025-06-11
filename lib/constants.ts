export const SUBJECTS = [
	'Matemáticas',
	'Física',
	'Química',
	'Biología',
	'Historia',
	'Geografía',
	'Literatura',
	'Inglés',
	'Francés',
	'Alemán',
	'Programación',
	'Diseño',
	'Música',
	'Arte',
	'Filosofía',
	'Psicología',
	'Economía',
	'Contabilidad',
	'Marketing',
	'Derecho',
] as const

export const LEVELS = [
	{ value: 'beginner', label: 'Principiante' },
	{ value: 'intermediate', label: 'Intermedio' },
	{ value: 'advanced', label: 'Avanzado' },
] as const

export const DAYS_OF_WEEK = [
	{ value: 0, label: 'Domingo' },
	{ value: 1, label: 'Lunes' },
	{ value: 2, label: 'Martes' },
	{ value: 3, label: 'Miércoles' },
	{ value: 4, label: 'Jueves' },
	{ value: 5, label: 'Viernes' },
	{ value: 6, label: 'Sábado' },
] as const

export const TIME_SLOTS = [
	'08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
	'11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
	'14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
	'17:00', '17:30', '18:00', '18:30', '19:00', '19:30',
	'20:00', '20:30', '21:00', '21:30', '22:00',
] as const

export const PRICE_RANGES = [
	{ min: 0, max: 25, label: '$0 - $25' },
	{ min: 25, max: 50, label: '$25 - $50' },
	{ min: 50, max: 100, label: '$50 - $100' },
	{ min: 100, max: 200, label: '$100 - $200' },
	{ min: 200, max: Infinity, label: '$200+' },
] as const

export const SORT_OPTIONS = [
	{ value: 'rating-desc', label: 'Mejor calificación' },
	{ value: 'price-asc', label: 'Precio: menor a mayor' },
	{ value: 'price-desc', label: 'Precio: mayor a menor' },
	{ value: 'experience-desc', label: 'Más experiencia' },
	{ value: 'newest', label: 'Más recientes' },
] as const

export const LESSON_STATUS = {
	SCHEDULED: 'scheduled',
	IN_PROGRESS: 'in-progress',
	COMPLETED: 'completed',
	CANCELLED: 'cancelled',
} as const

export const USER_ROLES = {
	STUDENT: 'student',
	TEACHER: 'teacher',
	ADMIN: 'admin',
} as const

export const FILE_TYPES = {
	PDF: 'application/pdf',
	IMAGE_JPEG: 'image/jpeg',
	IMAGE_PNG: 'image/png',
	IMAGE_WEBP: 'image/webp',
	VIDEO_MP4: 'video/mp4',
} as const

export const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB

export const PAGINATION = {
	DEFAULT_PAGE: 1,
	DEFAULT_LIMIT: 10,
	MAX_LIMIT: 100,
} as const

export const API_ENDPOINTS = {
	AUTH: {
		LOGIN: '/api/auth/login',
		REGISTER: '/api/auth/register',
		LOGOUT: '/api/auth/logout',
		FORGOT_PASSWORD: '/api/auth/forgot-password',
		RESET_PASSWORD: '/api/auth/reset-password',
		VERIFY_EMAIL: '/api/auth/verify-email',
	},
	USERS: {
		PROFILE: '/api/users/profile',
		UPDATE_PROFILE: '/api/users/profile',
		UPLOAD_AVATAR: '/api/users/avatar',
	},
	TEACHERS: {
		LIST: '/api/teachers',
		DETAIL: '/api/teachers',
		SEARCH: '/api/teachers/search',
		REVIEWS: '/api/teachers/reviews',
	},
	COURSES: {
		LIST: '/api/courses',
		CREATE: '/api/courses',
		DETAIL: '/api/courses',
		UPDATE: '/api/courses',
		DELETE: '/api/courses',
		ENROLL: '/api/courses/enroll',
	},
	LESSONS: {
		LIST: '/api/lessons',
		CREATE: '/api/lessons',
		DETAIL: '/api/lessons',
		UPDATE: '/api/lessons',
		DELETE: '/api/lessons',
	},
} as const 