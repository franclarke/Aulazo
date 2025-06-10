import { Metadata } from 'next'
import VirtualClassroomClient from './components/virtual-classroom-client'

export const metadata: Metadata = {
	title: 'Aula Virtual - Aulazo Platform',
	description: 'Experimenta el futuro de la educación con nuestra aula virtual potenciada por IA',
}

export default function VirtualClassroomPage() {
	return <VirtualClassroomClient />
} 