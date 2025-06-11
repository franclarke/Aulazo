import { Suspense } from 'react'

// Server Component para acceso a datos de profesores
async function fetchTeachersData() {
	// Simular fetch de datos desde la API/DB
	await new Promise(resolve => setTimeout(resolve, 100))
	
	return {
		teachers: [
			{
				id: '1',
				name: 'María González',
				subject: 'Matemáticas',
				rating: 4.9,
				reviews: 127,
				price: 25,
				experience: '8 años',
				image: 'https://ui-avatars.com/api/?name=Maria+Gonzalez&background=3b82f6&color=fff&size=200&rounded=true',
				specialties: ['Álgebra', 'Cálculo', 'Geometría'],
				availability: 'Disponible ahora',
				bio: 'Profesora especializada en matemáticas con amplia experiencia en preparación universitaria.',
				languages: ['Español', 'Inglés'],
				education: 'PhD en Matemáticas, Universidad Nacional',
				verified: true
			},
			{
				id: '2',
				name: 'Carlos Rodríguez',
				subject: 'Física',
				rating: 4.8,
				reviews: 89,
				price: 28,
				experience: '6 años',
				image: 'https://ui-avatars.com/api/?name=Carlos+Rodriguez&background=22c55e&color=fff&size=200&rounded=true',
				specialties: ['Mecánica', 'Termodinámica', 'Electromagnetismo'],
				availability: 'Disponible en 2h',
				bio: 'Ingeniero físico con pasión por enseñar conceptos complejos de manera simple.',
				languages: ['Español'],
				education: 'MSc en Física, Instituto Tecnológico',
				verified: true
			},
			{
				id: '3',
				name: 'Ana Patricia López',
				subject: 'Química',
				rating: 4.9,
				reviews: 156,
				price: 22,
				experience: '10 años',
				image: 'https://ui-avatars.com/api/?name=Ana+Patricia+Lopez&background=ec4899&color=fff&size=200&rounded=true',
				specialties: ['Química Orgánica', 'Bioquímica', 'Análisis'],
				availability: 'Disponible ahora',
				bio: 'Doctora en Química con experiencia en investigación y docencia universitaria.',
				languages: ['Español', 'Inglés', 'Francés'],
				education: 'PhD en Química, Universidad Internacional',
				verified: true
			},
			{
				id: '4',
				name: 'David Chen',
				subject: 'Programación',
				rating: 4.7,
				reviews: 203,
				price: 35,
				experience: '5 años',
				image: 'https://ui-avatars.com/api/?name=David+Chen&background=8b5cf6&color=fff&size=200&rounded=true',
				specialties: ['JavaScript', 'Python', 'React'],
				availability: 'Disponible mañana',
				bio: 'Desarrollador senior con experiencia en startups tecnológicas y educación.',
				languages: ['Español', 'Inglés', 'Mandarín'],
				education: 'Computer Science, Stanford University',
				verified: true
			},
			{
				id: '5',
				name: 'Sophie Martin',
				subject: 'Francés',
				rating: 4.8,
				reviews: 92,
				price: 20,
				experience: '7 años',
				image: 'https://ui-avatars.com/api/?name=Sophie+Martin&background=f59e0b&color=fff&size=200&rounded=true',
				specialties: ['Conversación', 'Gramática', 'DELF'],
				availability: 'Disponible ahora',
				bio: 'Nativa francesa con certificación en enseñanza de idiomas extranjeros.',
				languages: ['Francés', 'Español', 'Inglés'],
				education: 'FLE Certification, Sorbonne University',
				verified: true
			},
			{
				id: '6',
				name: 'Roberto Silva',
				subject: 'Historia',
				rating: 4.6,
				reviews: 74,
				price: 18,
				experience: '12 años',
				image: 'https://ui-avatars.com/api/?name=Roberto+Silva&background=ef4444&color=fff&size=200&rounded=true',
				specialties: ['Historia Universal', 'Historia de América', 'Arqueología'],
				availability: 'Disponible en 1h',
				bio: 'Historiador especializado en culturas precolombinas y metodología histórica.',
				languages: ['Español', 'Inglés'],
				education: 'PhD en Historia, Universidad Central',
				verified: true
			}
		],
		subjects: [
			'Matemáticas', 'Física', 'Química', 'Programación', 'Idiomas', 
			'Historia', 'Literatura', 'Biología', 'Economía', 'Filosofía'
		],
		filters: {
			priceRange: [0, 50],
			ratings: [4.5, 4.0, 3.5],
			availability: ['Disponible ahora', 'Hoy', 'Esta semana'],
			experience: ['1-3 años', '3-5 años', '5+ años']
		}
	}
}

async function TeachersDataProvider() {
	const teachersData = await fetchTeachersData()
	
	return (
		<script
			id="teachers-data"
			type="application/json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(teachersData)
			}}
		/>
	)
}

export default function DataAccess() {
	return (
		<Suspense fallback={null}>
			<TeachersDataProvider />
		</Suspense>
	)
} 