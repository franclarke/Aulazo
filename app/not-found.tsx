import Link from 'next/link'

export default function NotFound() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center space-y-4">
			<div className="text-center">
				<h1 className="text-6xl font-bold text-primary">404</h1>
				<h2 className="mt-4 text-2xl font-semibold">Página no encontrada</h2>
				<p className="mt-2 text-muted-foreground">
					La página que buscas no existe o ha sido movida.
				</p>
			</div>
			<Link
				href="/"
				className="rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
			>
				Volver al inicio
			</Link>
		</div>
	)
} 