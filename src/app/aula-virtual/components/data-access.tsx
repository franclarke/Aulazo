

interface ClassroomData {
	id: string
	title: string
	description: string
	teacher: {
		id: string
		name: string
		avatar: string
	}
	participants: number
	startTime: string
	duration: number
}

async function getClassroomData(): Promise<ClassroomData> {
	// Simulate API call
	await new Promise(resolve => setTimeout(resolve, 100))
	
	return {
		id: 'class-math-101',
		title: 'Matemáticas Avanzadas',
		description: 'Clase de cálculo diferencial e integral',
		teacher: {
			id: 'teacher-001',
			name: 'Dr. Elena Rodriguez',
			avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face&auto=format'
		},
		participants: 12,
		startTime: '2024-01-15T14:00:00Z',
		duration: 90
	}
}

export default async function DataAccess() {
	await getClassroomData()
	
	// This component doesn't render anything visible,
	// it just fetches data that can be accessed by client components
	return null
} 