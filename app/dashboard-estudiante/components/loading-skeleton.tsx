export default function LoadingSkeleton() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-primary-50/50 via-white to-secondary-50/30 p-4">
			<div className="max-w-7xl mx-auto space-y-6">
				{/* Header Skeleton */}
				<div className="flex items-center justify-between">
					<div className="space-y-2">
						<div className="h-8 bg-neutral-200 rounded-lg w-64 animate-pulse" />
						<div className="h-4 bg-neutral-200 rounded w-48 animate-pulse" />
					</div>
					<div className="h-10 bg-neutral-200 rounded-lg w-32 animate-pulse" />
				</div>

				{/* Metrics Grid Skeleton */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{[...Array(4)].map((_, i) => (
						<div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100">
							<div className="flex items-center justify-between mb-4">
								<div className="h-5 bg-neutral-200 rounded w-24 animate-pulse" />
								<div className="h-8 w-8 bg-neutral-200 rounded-lg animate-pulse" />
							</div>
							<div className="h-8 bg-neutral-200 rounded w-16 animate-pulse mb-2" />
							<div className="h-3 bg-neutral-200 rounded w-full animate-pulse" />
						</div>
					))}
				</div>

				{/* Content Grid Skeleton */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
					{/* Left Column */}
					<div className="lg:col-span-2 space-y-6">
						{/* Classes Section */}
						<div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100">
							<div className="h-6 bg-neutral-200 rounded w-40 animate-pulse mb-4" />
							<div className="space-y-4">
								{[...Array(3)].map((_, i) => (
									<div key={i} className="flex items-center gap-4 p-4 bg-neutral-50 rounded-xl">
										<div className="h-12 w-12 bg-neutral-200 rounded-xl animate-pulse" />
										<div className="flex-1 space-y-2">
											<div className="h-4 bg-neutral-200 rounded w-32 animate-pulse" />
											<div className="h-3 bg-neutral-200 rounded w-24 animate-pulse" />
										</div>
										<div className="h-8 bg-neutral-200 rounded w-20 animate-pulse" />
									</div>
								))}
							</div>
						</div>

						{/* Progress Section */}
						<div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100">
							<div className="h-6 bg-neutral-200 rounded w-32 animate-pulse mb-4" />
							<div className="space-y-4">
								{[...Array(3)].map((_, i) => (
									<div key={i} className="space-y-2">
										<div className="flex justify-between">
											<div className="h-4 bg-neutral-200 rounded w-24 animate-pulse" />
											<div className="h-4 bg-neutral-200 rounded w-12 animate-pulse" />
										</div>
										<div className="h-2 bg-neutral-200 rounded-full animate-pulse" />
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Right Column */}
					<div className="space-y-6">
						{/* Quick Actions */}
						<div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100">
							<div className="h-6 bg-neutral-200 rounded w-32 animate-pulse mb-4" />
							<div className="space-y-3">
								{[...Array(4)].map((_, i) => (
									<div key={i} className="h-10 bg-neutral-200 rounded-lg animate-pulse" />
								))}
							</div>
						</div>

						{/* Recent Activity */}
						<div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100">
							<div className="h-6 bg-neutral-200 rounded w-36 animate-pulse mb-4" />
							<div className="space-y-3">
								{[...Array(4)].map((_, i) => (
									<div key={i} className="flex items-center gap-3">
										<div className="h-8 w-8 bg-neutral-200 rounded-full animate-pulse" />
										<div className="flex-1 space-y-1">
											<div className="h-3 bg-neutral-200 rounded w-full animate-pulse" />
											<div className="h-3 bg-neutral-200 rounded w-16 animate-pulse" />
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
} 