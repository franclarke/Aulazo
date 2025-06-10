import { Metadata } from 'next'
import TeacherSearchClient from './components/teacher-search-client'
import DataAccess from './components/data-access'

export const metadata: Metadata = {
	title: 'Buscar Profesor - Aulazo Platform',
	description: 'Encuentra el profesor perfecto para tus necesidades educativas con nuestra plataforma inteligente',
}

export default function TeacherSearchPage() {
	return (
		<>
			<DataAccess />
			<TeacherSearchClient />
		</>
	)
} 