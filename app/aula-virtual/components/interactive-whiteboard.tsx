'use client'

import React, { useRef, useState, useEffect, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { 
	Pen, 
	Eraser, 
	Square, 
	Circle, 
	Minus, 
	Type, 
	Undo, 
	Redo, 
	Download, 
	Trash2,
	MousePointer,
	Grid3X3
} from 'lucide-react'

interface Point {
	x: number
	y: number
}

interface DrawElement {
	id: string
	type: 'pen' | 'line' | 'rectangle' | 'circle' | 'text'
	points: Point[]
	color: string
	thickness: number
	text?: string
	completed: boolean
}

type Tool = 'select' | 'pen' | 'eraser' | 'line' | 'rectangle' | 'circle' | 'text'

const InteractiveWhiteboard: React.FC = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const [isDrawing, setIsDrawing] = useState(false)
	const [currentTool, setCurrentTool] = useState<Tool>('pen')
	const [currentColor, setCurrentColor] = useState('#000000')
	const [currentThickness, setCurrentThickness] = useState(3)
	const [elements, setElements] = useState<DrawElement[]>([])
	const [undoStack, setUndoStack] = useState<DrawElement[][]>([])
	const [redoStack, setRedoStack] = useState<DrawElement[][]>([])
	const [startPoint, setStartPoint] = useState<Point>({ x: 0, y: 0 })
	const [currentElement, setCurrentElement] = useState<DrawElement | null>(null)
	const [showGrid, setShowGrid] = useState(true)

	const colors = ['#000000', '#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6', '#64748b']

	const saveState = useCallback(() => {
		setUndoStack(prev => [...prev, elements])
		setRedoStack([])
	}, [elements])

	const undo = useCallback(() => {
		if (undoStack.length > 0) {
			const previousState = undoStack[undoStack.length - 1]
			setRedoStack(prev => [elements, ...prev])
			setElements(previousState)
			setUndoStack(prev => prev.slice(0, -1))
		}
	}, [undoStack, elements])

	const redo = useCallback(() => {
		if (redoStack.length > 0) {
			const nextState = redoStack[0]
			setUndoStack(prev => [...prev, elements])
			setElements(nextState)
			setRedoStack(prev => prev.slice(1))
		}
	}, [redoStack, elements])

	const getMousePos = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
		const canvas = canvasRef.current
		if (!canvas) return { x: 0, y: 0 }
		
		const rect = canvas.getBoundingClientRect()
		return {
			x: e.clientX - rect.left,
			y: e.clientY - rect.top
		}
	}, [])

	const drawGrid = useCallback((ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
		if (!showGrid) return
		
		ctx.strokeStyle = '#f1f5f9'
		ctx.lineWidth = 1
		ctx.setLineDash([])

		const gridSize = 20
		
		for (let x = 0; x <= canvas.width; x += gridSize) {
			ctx.beginPath()
			ctx.moveTo(x, 0)
			ctx.lineTo(x, canvas.height)
			ctx.stroke()
		}
		
		for (let y = 0; y <= canvas.height; y += gridSize) {
			ctx.beginPath()
			ctx.moveTo(0, y)
			ctx.lineTo(canvas.width, y)
			ctx.stroke()
		}
	}, [showGrid])

	const drawElement = useCallback((ctx: CanvasRenderingContext2D, element: DrawElement) => {
		ctx.strokeStyle = element.color
		ctx.lineWidth = element.thickness
		ctx.lineCap = 'round'
		ctx.lineJoin = 'round'

		switch (element.type) {
			case 'pen':
				if (element.points.length > 1) {
					ctx.beginPath()
					ctx.moveTo(element.points[0].x, element.points[0].y)
					for (let i = 1; i < element.points.length; i++) {
						ctx.lineTo(element.points[i].x, element.points[i].y)
					}
					ctx.stroke()
				}
				break

			case 'line':
				if (element.points.length >= 2) {
					ctx.beginPath()
					ctx.moveTo(element.points[0].x, element.points[0].y)
					ctx.lineTo(element.points[element.points.length - 1].x, element.points[element.points.length - 1].y)
					ctx.stroke()
				}
				break

			case 'rectangle':
				if (element.points.length >= 2) {
					const start = element.points[0]
					const end = element.points[element.points.length - 1]
					ctx.strokeRect(start.x, start.y, end.x - start.x, end.y - start.y)
				}
				break

			case 'circle':
				if (element.points.length >= 2) {
					const start = element.points[0]
					const end = element.points[element.points.length - 1]
					const radius = Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2))
					ctx.beginPath()
					ctx.arc(start.x, start.y, radius, 0, 2 * Math.PI)
					ctx.stroke()
				}
				break

			case 'text':
				if (element.text && element.points.length > 0) {
					ctx.fillStyle = element.color
					ctx.font = `${element.thickness * 5}px Inter, sans-serif`
					ctx.fillText(element.text, element.points[0].x, element.points[0].y)
				}
				break
		}
	}, [])

	const redrawCanvas = useCallback(() => {
		const canvas = canvasRef.current
		const ctx = canvas?.getContext('2d')
		if (!canvas || !ctx) return

		ctx.clearRect(0, 0, canvas.width, canvas.height)
		
		drawGrid(ctx, canvas)
		
		elements.forEach(element => {
			drawElement(ctx, element)
		})

		if (currentElement) {
			drawElement(ctx, currentElement)
		}
	}, [elements, currentElement, drawElement, drawGrid])

	const handleMouseDown = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
		if (currentTool === 'select') return

		const point = getMousePos(e)
		setStartPoint(point)
		setIsDrawing(true)
		saveState()

		const newElement: DrawElement = {
			id: Date.now().toString(),
			type: currentTool === 'eraser' ? 'pen' : currentTool,
			points: [point],
			color: currentTool === 'eraser' ? '#ffffff' : currentColor,
			thickness: currentTool === 'eraser' ? currentThickness * 3 : currentThickness,
			completed: false
		}

		if (currentTool === 'text') {
			const text = prompt('Ingresa el texto:')
			if (text) {
				newElement.text = text
				newElement.completed = true
				setElements(prev => [...prev, newElement])
			}
			setIsDrawing(false)
			return
		}

		setCurrentElement(newElement)
	}, [currentTool, getMousePos, saveState, currentColor, currentThickness])

	const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
		if (!isDrawing || !currentElement) return

		const point = getMousePos(e)

		if (currentTool === 'pen' || currentTool === 'eraser') {
			setCurrentElement(prev => prev ? {
				...prev,
				points: [...prev.points, point]
			} : null)
		} else {
			setCurrentElement(prev => prev ? {
				...prev,
				points: [startPoint, point]
			} : null)
		}
	}, [isDrawing, currentElement, currentTool, getMousePos, startPoint])

	const handleMouseUp = useCallback(() => {
		if (!isDrawing || !currentElement) return

		setIsDrawing(false)
		setElements(prev => [...prev, { ...currentElement, completed: true }])
		setCurrentElement(null)
	}, [isDrawing, currentElement])

	const clearCanvas = useCallback(() => {
		saveState()
		setElements([])
	}, [saveState])

	const downloadCanvas = useCallback(() => {
		const canvas = canvasRef.current
		if (!canvas) return

		const link = document.createElement('a')
		link.download = 'pizarra-aulazo.png'
		link.href = canvas.toDataURL()
		link.click()
	}, [])

	useEffect(() => {
		const canvas = canvasRef.current
		if (canvas) {
			canvas.width = canvas.offsetWidth
			canvas.height = canvas.offsetHeight
		}
	}, [])

	useEffect(() => {
		redrawCanvas()
	}, [redrawCanvas])

	const tools = [
		{ icon: MousePointer, name: 'select', label: 'Seleccionar' },
		{ icon: Pen, name: 'pen', label: 'Lápiz' },
		{ icon: Eraser, name: 'eraser', label: 'Borrador' },
		{ icon: Minus, name: 'line', label: 'Línea' },
		{ icon: Square, name: 'rectangle', label: 'Rectángulo' },
		{ icon: Circle, name: 'circle', label: 'Círculo' },
		{ icon: Type, name: 'text', label: 'Texto' }
	]

	return (
		<div className="h-full flex flex-col bg-white">
			{/* Minimalist Toolbar */}
			<div className="flex items-center justify-between p-3 border-b border-slate-200">
				<div className="flex items-center space-x-3">
					{/* Tools */}
					<div className="flex items-center space-x-1">
						{tools.map(({ icon: Icon, name, label }) => (
							<Button
								key={name}
								variant={currentTool === name ? 'default' : 'ghost'}
								size="sm"
								onClick={() => setCurrentTool(name as Tool)}
								className="h-8 w-8 p-0"
								title={label}
							>
								<Icon className="w-4 h-4" />
							</Button>
						))}
					</div>

					{/* Colors */}
					<div className="flex items-center space-x-1 pl-2 border-l border-slate-200">
						{colors.map(color => (
							<button
								key={color}
								onClick={() => setCurrentColor(color)}
								className={`w-6 h-6 rounded border-2 ${
									currentColor === color ? 'border-slate-400' : 'border-slate-200'
								}`}
								style={{ backgroundColor: color }}
								title={color}
							/>
						))}
					</div>

					{/* Thickness */}
					<div className="flex items-center space-x-2 pl-2 border-l border-slate-200">
						<span className="text-sm text-slate-600">Grosor:</span>
						<input
							type="range"
							min="1"
							max="10"
							value={currentThickness}
							onChange={(e) => setCurrentThickness(Number(e.target.value))}
							className="w-16"
						/>
						<span className="text-sm text-slate-600 w-4">{currentThickness}</span>
					</div>
				</div>

				<div className="flex items-center space-x-2">
					{/* Actions */}
					<Button
						variant="ghost"
						size="sm"
						onClick={undo}
						disabled={undoStack.length === 0}
						className="h-8 w-8 p-0"
						title="Deshacer"
					>
						<Undo className="w-4 h-4" />
					</Button>
					<Button
						variant="ghost"
						size="sm"
						onClick={redo}
						disabled={redoStack.length === 0}
						className="h-8 w-8 p-0"
						title="Rehacer"
					>
						<Redo className="w-4 h-4" />
					</Button>
					<Button
						variant="ghost"
						size="sm"
						onClick={() => setShowGrid(!showGrid)}
						className={`h-8 w-8 p-0 ${showGrid ? 'bg-slate-100' : ''}`}
						title="Cuadrícula"
					>
						<Grid3X3 className="w-4 h-4" />
					</Button>
					<Button
						variant="ghost"
						size="sm"
						onClick={clearCanvas}
						className="h-8 w-8 p-0 text-red-600"
						title="Limpiar"
					>
						<Trash2 className="w-4 h-4" />
					</Button>
					<Button
						variant="outline"
						size="sm"
						onClick={downloadCanvas}
						className="h-8 px-3 text-sm"
					>
						<Download className="w-4 h-4 mr-1" />
						Descargar
					</Button>
				</div>
			</div>

			{/* Canvas */}
			<div className="flex-1 relative bg-white overflow-hidden">
				<canvas
					ref={canvasRef}
					className="absolute inset-0 w-full h-full cursor-crosshair"
					onMouseDown={handleMouseDown}
					onMouseMove={handleMouseMove}
					onMouseUp={handleMouseUp}
					onMouseLeave={() => setIsDrawing(false)}
				/>
			</div>
		</div>
	)
}

export default InteractiveWhiteboard 