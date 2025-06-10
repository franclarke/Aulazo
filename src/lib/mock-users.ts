export interface User {
	id: string
	name: string
	email: string
	role: 'student' | 'teacher'
	avatar: string
	isOnline: boolean
	joinedAt?: Date
}

export const mockUsers: User[] = [
	{
		id: 'teacher-001',
		name: 'Dr. Elena Rodriguez',
		email: 'elena.rodriguez@aulazo.com',
		role: 'teacher',
		avatar: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=150',
		isOnline: true,
		joinedAt: new Date('2024-01-15T08:00:00Z')
	},
	{
		id: 'student-001',
		name: 'Alex Martinez',
		email: 'alex.martinez@student.aulazo.com',
		role: 'student',
		avatar: 'https://images.pexels.com/photos/3771097/pexels-photo-3771097.jpeg?auto=compress&cs=tinysrgb&w=150',
		isOnline: true,
		joinedAt: new Date('2024-01-15T08:05:00Z')
	}
]

export const getCurrentUser = (role: 'student' | 'teacher' = 'student'): User => {
	return mockUsers.find(user => user.role === role) || mockUsers[1]
}

export const getOtherUsers = (currentUserId: string): User[] => {
	return mockUsers.filter(user => user.id !== currentUserId)
} 