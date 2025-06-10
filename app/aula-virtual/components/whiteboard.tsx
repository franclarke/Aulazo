'use client'

import React, { useState, useRef, useEffect, useCallback } from 'react'
import { 
	Pen, 
	Type, 
	Eraser, 
	Image as ImageIcon, 
	Square, 
	Circle, 
	ArrowRight,
	Undo,
	Redo,
	Trash2,
	Save,
	Download
} from 'lucide-react'

interface DrawingElement {
	id: string
	type: 'path' | 'text' | 'image' | 'shape'
	data: any
	position: { x: number, y: number }
	size?: { width: number, height: number }
	color?: string
	strokeWidth?: number
	isDragging?: boolean
}

interface WhiteboardProps {
	className?: string
}

const Whiteboard: React.FC<WhiteboardProps> = ({ className = '' }) => {
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const containerRef = useRef<HTMLDivElement>(null)
	const [isDrawing, setIsDrawing] = useState(false)
	const [selectedTool, setSelectedTool] = useState<string>('pen')
	const [selectedColor, setSelectedColor] = useState('#667EEA')
	const [strokeWidth, setStrokeWidth] = useState(3)
	const [elements, setElements] = useState<DrawingElement[]>([])
	const [selectedElementId, setSelectedElementId] = useState<string | null>(null)
	const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })

	const colors = [
		'#667EEA', '#764BA2', '#F093FB', '#4FACFE', '#00F2FE',
		'#FFECD2', '#FCB69F', '#FF6B6B', '#4ECDC4', '#45B7D1',
		'#96CEB4', '#FECA57', '#FF9FF3', '#54A0FF', '#5F27CD'
	]

	const tools = [
		{ id: 'pen', icon: Pen, name: 'Lápiz' },
		{ id: 'text', icon: Type, name: 'Texto' },
		{ id: 'eraser', icon: Eraser, name: 'Borrador' },
		{ id: 'image', icon: ImageIcon, name: 'Imagen' },
		{ id: 'rectangle', icon: Square, name: 'Rectángulo' },
		{ id: 'circle', icon: Circle, name: 'Círculo' },
		{ id: 'arrow', icon: ArrowRight, name: 'Flecha' }
	]

	const handleMouseDown = useCallback((e: React.MouseEvent) => {
		if (!canvasRef.current || !containerRef.current) return
		
		const rect = containerRef.current.getBoundingClientRect()
		const x = e.clientX - rect.left
		const y = e.clientY - rect.top

		// Check if clicking on existing element for selection/dragging
		const clickedElement = elements.find(el => {
			if (el.type === 'image') {
				return x >= el.position.x && x <= el.position.x + (el.size?.width || 100) &&
					   y >= el.position.y && y <= el.position.y + (el.size?.height || 100)
			}
			return false
		})

		if (clickedElement && selectedTool === 'pen') {
			setSelectedElementId(clickedElement.id)
			setDragOffset({
				x: x - clickedElement.position.x,
				y: y - clickedElement.position.y
			})
			return
		}

		if (selectedTool === 'pen' || selectedTool === 'eraser') {
			setIsDrawing(true)
			const newElement: DrawingElement = {
				id: Date.now().toString(),
				type: 'path',
				data: [{ x, y }],
				position: { x, y },
				color: selectedTool === 'eraser' ? '#FFFFFF' : selectedColor,
				strokeWidth: selectedTool === 'eraser' ? strokeWidth * 2 : strokeWidth
			}
			setElements(prev => [...prev, newElement])
		} else if (selectedTool === 'text') {
			const text = prompt('Ingresa el texto:')
			if (text) {
				const newElement: DrawingElement = {
					id: Date.now().toString(),
					type: 'text',
					data: text,
					position: { x, y },
					color: selectedColor
				}
				setElements(prev => [...prev, newElement])
			}
		} else if (selectedTool === 'image') {
			// Add sample mathematical images
			const mathImages = [
				{ src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgMTAwIDUwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjx0ZXh0IHg9IjUwIiB5PSIzMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiBmaWxsPSIjNjY3RUVBIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5hÂI3K2LCsj1jwrI8L3RleHQ+PC9zdmc+', width: 120, height: 60 },
				{ src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjgwIiB2aWV3Qm94PSIwIDAgMTIwIDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMCA3MFE2MCAyMCAxMTAgNzAiIHN0cm9rZT0iIzRGQUNGRSIgc3Ryb2tlLXdpZHRoPSIzIiBmaWxsPSJub25lIi8+PGNpcmNsZSBjeD0iNjAiIGN5PSIyMCIgcj0iNCIgZmlsbD0iI0Y5M0ZCIi8+PHRleHQgeD0iNjAiIHk9IjEwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM2NjdFRUEiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnk9eMKyPC90ZXh0Pjwvc3ZnPg==', width: 120, height: 80 }
			]
			
			const randomImage = mathImages[Math.floor(Math.random() * mathImages.length)]
			const newElement: DrawingElement = {
				id: Date.now().toString(),
				type: 'image',
				data: randomImage.src,
				position: { x, y },
				size: { width: randomImage.width, height: randomImage.height }
			}
			setElements(prev => [...prev, newElement])
		}
	}, [selectedTool, selectedColor, strokeWidth, elements])

	const handleMouseMove = useCallback((e: React.MouseEvent) => {
		if (!canvasRef.current || !containerRef.current) return
		
		const rect = containerRef.current.getBoundingClientRect()
		const x = e.clientX - rect.left
		const y = e.clientY - rect.top

		if (selectedElementId) {
			// Drag selected element
			setElements(prev => prev.map(el => 
				el.id === selectedElementId 
					? { ...el, position: { x: x - dragOffset.x, y: y - dragOffset.y } }
					: el
			))
		} else if (isDrawing && elements.length > 0) {
			// Continue drawing path
			const lastElement = elements[elements.length - 1]
			if (lastElement.type === 'path') {
				setElements(prev => prev.map((el, index) => 
					index === prev.length - 1
						? { ...el, data: [...el.data, { x, y }] }
						: el
				))
			}
		}
	}, [isDrawing, elements, selectedElementId, dragOffset])

	const handleMouseUp = useCallback(() => {
		setIsDrawing(false)
		setSelectedElementId(null)
	}, [])

	const clearBoard = () => {
		setElements([])
	}

	const downloadBoard = () => {
		if (!canvasRef.current) return
		const link = document.createElement('a')
		link.download = 'whiteboard.png'
		link.href = canvasRef.current.toDataURL()
		link.click()
	}

	// Render elements on canvas
	useEffect(() => {
		const canvas = canvasRef.current
		if (!canvas) return

		const ctx = canvas.getContext('2d')
		if (!ctx) return

		// Clear canvas
		ctx.clearRect(0, 0, canvas.width, canvas.height)

		// Draw elements
		elements.forEach(element => {
			if (element.type === 'path') {
				ctx.strokeStyle = element.color || '#000000'
				ctx.lineWidth = element.strokeWidth || 2
				ctx.lineCap = 'round'
				ctx.lineJoin = 'round'
				
				ctx.beginPath()
				element.data.forEach((point: any, index: number) => {
					if (index === 0) {
						ctx.moveTo(point.x, point.y)
					} else {
						ctx.lineTo(point.x, point.y)
					}
				})
				ctx.stroke()
			} else if (element.type === 'text') {
				ctx.fillStyle = element.color || '#000000'
				ctx.font = '18px Arial'
				ctx.fillText(element.data, element.position.x, element.position.y)
			}
		})
	}, [elements])

	return (
		<div className={`relative bg-white rounded-xl shadow-2xl overflow-hidden ${className}`}>
			{/* Toolbar */}
			<div className="absolute top-4 left-4 right-4 z-10">
				<div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-3 flex items-center justify-between">
					<div className="flex items-center space-x-2">
						{/* Tools */}
						<div className="flex items-center space-x-1">
							{tools.map((tool) => {
								const IconComponent = tool.icon
								return (
									<button
										key={tool.id}
										onClick={() => setSelectedTool(tool.id)}
										className={`p-2 rounded-lg transition-all ${
											selectedTool === tool.id
												? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md'
												: 'hover:bg-gray-100 text-gray-600'
										}`}
										title={tool.name}
									>
										<IconComponent size={18} />
									</button>
								)
							})}
						</div>
						
						<div className="w-px h-6 bg-gray-300"></div>
						
						{/* Colors */}
						<div className="flex items-center space-x-1">
							{colors.slice(0, 8).map((color) => (
								<button
									key={color}
									onClick={() => setSelectedColor(color)}
									className={`w-6 h-6 rounded-full border-2 transition-transform ${
										selectedColor === color ? 'border-gray-400 scale-110' : 'border-gray-200'
									}`}
									style={{ backgroundColor: color }}
								/>
							))}
						</div>
						
						<div className="w-px h-6 bg-gray-300"></div>
						
						{/* Stroke Width */}
						<div className="flex items-center space-x-2">
							<input
								type="range"
								min="1"
								max="20"
								value={strokeWidth}
								onChange={(e) => setStrokeWidth(Number(e.target.value))}
								className="w-16"
							/>
							<span className="text-sm text-gray-600 w-6">{strokeWidth}</span>
						</div>
					</div>
					
					<div className="flex items-center space-x-2">
						<button
							onClick={clearBoard}
							className="p-2 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
							title="Limpiar todo"
						>
							<Trash2 size={18} />
						</button>
						<button
							onClick={downloadBoard}
							className="p-2 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors"
							title="Descargar"
						>
							<Download size={18} />
						</button>
					</div>
				</div>
			</div>

			{/* Canvas Container */}
			<div 
				ref={containerRef}
				className="relative w-full h-full cursor-crosshair"
				onMouseDown={handleMouseDown}
				onMouseMove={handleMouseMove}
				onMouseUp={handleMouseUp}
				onMouseLeave={handleMouseUp}
			>
				<canvas
					ref={canvasRef}
					width={1200}
					height={800}
					className="absolute inset-0 w-full h-full"
				/>
				
				{/* Render draggable images */}
				{elements.filter(el => el.type === 'image').map(element => (
					<img
						key={element.id}
						src={element.data}
						alt="Elemento"
						className={`absolute cursor-move transition-transform ${
							selectedElementId === element.id ? 'scale-105 shadow-lg' : ''
						}`}
						style={{
							left: element.position.x,
							top: element.position.y,
							width: element.size?.width,
							height: element.size?.height
						}}
						draggable={false}
					/>
				))}
				
				{/* Grid background */}
				<div className="absolute inset-0 opacity-5" style={{
					backgroundImage: `radial-gradient(circle, #667EEA 1px, transparent 1px)`,
					backgroundSize: '20px 20px'
				}} />
			</div>
		</div>
	)
}

export default Whiteboard 