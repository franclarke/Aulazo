import { Suspense } from 'react'

// Server Component para acceso a datos
async function fetchSessionData() {
	// Simular fetch de datos desde la API/DB
	await new Promise(resolve => setTimeout(resolve, 100))
	
	return {
		sessionId: 'session-123',
		className: 'Matemáticas Avanzadas',
		teacher: 'Dr. Elena Rodriguez',
		startTime: new Date().toISOString(),
		participants: 4,
		status: 'active'
	}
}

async function SessionDataProvider() {
	const sessionData = await fetchSessionData()
	
	// Este componente no renderiza nada visible,
	// solo prepara los datos para el cliente
	return (
		<script
			id="session-data"
			type="application/json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(sessionData)
			}}
		/>
	)
}

export default function DataAccess() {
	return (
		<Suspense fallback={null}>
			<SessionDataProvider />
		</Suspense>
	)
} 