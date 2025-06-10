import { z } from 'zod'

// Auth schemas
export const loginSchema = z.object({
	email: z
		.string()
		.min(1, 'El email es requerido')
		.email('Email inválido'),
	password: z
		.string()
		.min(1, 'La contraseña es requerida')
		.min(6, 'La contraseña debe tener al menos 6 caracteres'),
})

const baseRegisterSchema = z.object({
	name: z
		.string()
		.min(1, 'El nombre es requerido')
		.min(2, 'El nombre debe tener al menos 2 caracteres'),
	email: z
		.string()
		.min(1, 'El email es requerido')
		.email('Email inválido'),
	password: z
		.string()
		.min(1, 'La contraseña es requerida')
		.min(6, 'La contraseña debe tener al menos 6 caracteres'),
	confirmPassword: z
		.string()
		.min(1, 'Confirma tu contraseña'),
})

export const registerSchema = baseRegisterSchema.refine((data) => data.password === data.confirmPassword, {
	message: 'Las contraseñas no coinciden',
	path: ['confirmPassword'],
})

export const teacherRegisterSchema = baseRegisterSchema.extend({
	subjects: z
		.array(z.string())
		.min(1, 'Selecciona al menos una materia'),
	experience: z
		.number()
		.min(0, 'La experiencia no puede ser negativa')
		.max(50, 'La experiencia no puede ser mayor a 50 años'),
	hourlyRate: z
		.number()
		.min(1, 'La tarifa por hora debe ser mayor a 0')
		.max(1000, 'La tarifa por hora no puede ser mayor a $1000'),
	bio: z
		.string()
		.min(10, 'La biografía debe tener al menos 10 caracteres')
		.max(500, 'La biografía no puede tener más de 500 caracteres'),
}).refine((data) => data.password === data.confirmPassword, {
	message: 'Las contraseñas no coinciden',
	path: ['confirmPassword'],
})

export const forgotPasswordSchema = z.object({
	email: z
		.string()
		.min(1, 'El email es requerido')
		.email('Email inválido'),
})

export const resetPasswordSchema = z.object({
	password: z
		.string()
		.min(1, 'La contraseña es requerida')
		.min(6, 'La contraseña debe tener al menos 6 caracteres'),
	confirmPassword: z
		.string()
		.min(1, 'Confirma tu contraseña'),
}).refine((data) => data.password === data.confirmPassword, {
	message: 'Las contraseñas no coinciden',
	path: ['confirmPassword'],
})

// Course schemas
export const courseSchema = z.object({
	title: z
		.string()
		.min(1, 'El título es requerido')
		.min(5, 'El título debe tener al menos 5 caracteres')
		.max(100, 'El título no puede tener más de 100 caracteres'),
	description: z
		.string()
		.min(1, 'La descripción es requerida')
		.min(20, 'La descripción debe tener al menos 20 caracteres')
		.max(1000, 'La descripción no puede tener más de 1000 caracteres'),
	subject: z
		.string()
		.min(1, 'La materia es requerida'),
	level: z
		.enum(['beginner', 'intermediate', 'advanced'], {
			required_error: 'El nivel es requerido',
		}),
	duration: z
		.number()
		.min(30, 'La duración mínima es 30 minutos')
		.max(480, 'La duración máxima es 8 horas'),
	price: z
		.number()
		.min(1, 'El precio debe ser mayor a 0')
		.max(1000, 'El precio no puede ser mayor a $1000'),
	maxStudents: z
		.number()
		.min(1, 'Debe permitir al menos 1 estudiante')
		.max(50, 'No puede tener más de 50 estudiantes'),
})

// Contact schema
export const contactSchema = z.object({
	name: z
		.string()
		.min(1, 'El nombre es requerido')
		.min(2, 'El nombre debe tener al menos 2 caracteres'),
	email: z
		.string()
		.min(1, 'El email es requerido')
		.email('Email inválido'),
	subject: z
		.string()
		.min(1, 'El asunto es requerido')
		.min(5, 'El asunto debe tener al menos 5 caracteres'),
	message: z
		.string()
		.min(1, 'El mensaje es requerido')
		.min(10, 'El mensaje debe tener al menos 10 caracteres')
		.max(1000, 'El mensaje no puede tener más de 1000 caracteres'),
})

// Search schema
export const searchSchema = z.object({
	query: z.string().optional(),
	subject: z.string().optional(),
	level: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
	minPrice: z.number().min(0).optional(),
	maxPrice: z.number().min(0).optional(),
	minRating: z.number().min(1).max(5).optional(),
	sortBy: z.enum(['price', 'rating', 'experience']).optional(),
	sortOrder: z.enum(['asc', 'desc']).optional(),
})

// Type exports
export type LoginInput = z.infer<typeof loginSchema>
export type RegisterInput = z.infer<typeof registerSchema>
export type TeacherRegisterInput = z.infer<typeof teacherRegisterSchema>
export type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>
export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>
export type CourseInput = z.infer<typeof courseSchema>
export type ContactInput = z.infer<typeof contactSchema>
export type SearchInput = z.infer<typeof searchSchema> 