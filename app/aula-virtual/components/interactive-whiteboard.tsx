'use client'

import React, { useRef, useState, useEffect, useCallback } from 'react'
import { Card } from '@/components/ui/card'
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
	Upload, 
	Trash2,
	Palette,
	MousePointer,
	Move3D,
	RotateCcw,
	Save,
	Image,
	Layers,
	ZoomIn,
	ZoomOut,
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
	const [currentColor, setCurrentColor] = useState('#3b82f6')
	const [currentThickness, setCurrentThickness] = useState(3)
	const [elements, setElements] = useState<DrawElement[]>([])
	const [undoStack, setUndoStack] = useState<DrawElement[][]>([])
	const [redoStack, setRedoStack] = useState<DrawElement[][]>([])
	const [startPoint, setStartPoint] = useState<Point>({ x: 0, y: 0 })
	const [currentElement, setCurrentElement] = useState<DrawElement | null>(null)
	const [showGrid, setShowGrid] = useState(true)

	const colors = [
		'#3b82f6', '#ef4444', '#10b981', '#f59e0b', 
		'#8b5cf6', '#f97316', '#06b6d4', '#ec4899',
		'#64748b', '#1e293b', '#ffffff'
	]

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
		
		ctx.strokeStyle = '#e2e8f0'
		ctx.lineWidth = 0.5
		ctx.setLineDash([2, 2])

		const gridSize = 20
		
		// Vertical lines
		for (let x = 0; x <= canvas.width; x += gridSize) {
			ctx.beginPath()
			ctx.moveTo(x, 0)
			ctx.lineTo(x, canvas.height)
			ctx.stroke()
		}
		
		// Horizontal lines
		for (let y = 0; y <= canvas.height; y += gridSize) {
			ctx.beginPath()
			ctx.moveTo(0, y)
			ctx.lineTo(canvas.width, y)
			ctx.stroke()
		}
		
		ctx.setLineDash([])
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
		
		// Draw grid first
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
		{ icon: MousePointer, name: 'select', label: 'Seleccionar', shortcut: 'V' },
		{ icon: Pen, name: 'pen', label: 'Lápiz', shortcut: 'P' },
		{ icon: Eraser, name: 'eraser', label: 'Borrador', shortcut: 'E' },
		{ icon: Minus, name: 'line', label: 'Línea', shortcut: 'L' },
		{ icon: Square, name: 'rectangle', label: 'Rectángulo', shortcut: 'R' },
		{ icon: Circle, name: 'circle', label: 'Círculo', shortcut: 'C' },
		{ icon: Type, name: 'text', label: 'Texto', shortcut: 'T' }
	]

	return (
		<div className="h-full flex flex-col bg-white rounded-2xl shadow-xl shadow-slate-900/5 border border-white/50 overflow-hidden">
			{/* Enhanced Toolbar */}
			<div className="flex items-center justify-between p-4 border-b border-slate-200/50 bg-gradient-to-r from-white to-slate-50/50">
				<div className="flex items-center space-x-4">
					{/* Enhanced Tools */}
					<div className="flex items-center bg-slate-100/80 rounded-xl p-1 shadow-inner">
						{tools.map(({ icon: Icon, name, label, shortcut }) => (
							<Button
								key={name}
								variant={currentTool === name ? 'default' : 'ghost'}
								size="sm"
								onClick={() => setCurrentTool(name as Tool)}
								className={`h-10 w-10 p-0 rounded-lg transition-all duration-200 group relative ${
									currentTool === name 
										? 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/25' 
										: 'hover:bg-white/80 text-slate-600'
								}`}
								title={`${label} (${shortcut})`}
							>
								<Icon className="w-4 h-4" />
								{/* Tooltip */}
								<div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
									{label} ({shortcut})
								</div>
							</Button>
						))}
					</div>

					{/* Enhanced Colors */}
					<div className="flex items-center bg-slate-100/80 rounded-xl p-2 shadow-inner">
						<div className="flex items-center space-x-1.5">
							{colors.map(color => (
								<button
									key={color}
									onClick={() => setCurrentColor(color)}
									className={`w-7 h-7 rounded-lg border-2 transition-all duration-200 hover:scale-110 ${
										currentColor === color 
											? 'border-slate-400 shadow-lg' 
											: 'border-transparent hover:border-slate-300'
									} ${color === '#ffffff' ? 'border-slate-300' : ''}`}
									style={{ backgroundColor: color }}
									title={`Color ${color}`}
								/>
							))}
						</div>
					</div>

					{/* Enhanced Thickness Control */}
					<div className="flex items-center bg-slate-100/80 rounded-xl px-4 py-2 shadow-inner">
						<span className="text-sm font-medium text-slate-600 mr-3">Grosor:</span>
						<div className="flex items-center space-x-3">
							<input
								type="range"
								min="1"
								max="15"
								value={currentThickness}
								onChange={(e) => setCurrentThickness(Number(e.target.value))}
								className="w-20 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer slider"
							/>
							<div className="w-8 h-8 bg-white rounded-lg border border-slate-200 flex items-center justify-center">
								<span className="text-sm font-semibold text-slate-700">{currentThickness}</span>
							</div>
						</div>
					</div>
				</div>

				<div className="flex items-center space-x-2">
					{/* Enhanced Action Buttons */}
					<div className="flex items-center bg-slate-100/80 rounded-xl p-1 shadow-inner">
						<Button
							variant="ghost"
							size="sm"
							onClick={undo}
							disabled={undoStack.length === 0}
							className="h-9 w-9 p-0 rounded-lg disabled:opacity-30 hover:bg-white/80 text-slate-600"
							title="Deshacer (Ctrl+Z)"
						>
							<Undo className="w-4 h-4" />
						</Button>
						<Button
							variant="ghost"
							size="sm"
							onClick={redo}
							disabled={redoStack.length === 0}
							className="h-9 w-9 p-0 rounded-lg disabled:opacity-30 hover:bg-white/80 text-slate-600"
							title="Rehacer (Ctrl+Y)"
						>
							<Redo className="w-4 h-4" />
						</Button>
						<Button
							variant="ghost"
							size="sm"
							onClick={() => setShowGrid(!showGrid)}
							className={`h-9 w-9 p-0 rounded-lg transition-all duration-200 ${
								showGrid 
									? 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/25' 
									: 'hover:bg-white/80 text-slate-600'
							}`}
							title="Mostrar/Ocultar cuadrícula"
						>
							<Grid3X3 className="w-4 h-4" />
						</Button>
						<Button
							variant="ghost"
							size="sm"
							onClick={clearCanvas}
							className="h-9 w-9 p-0 rounded-lg hover:bg-red-50 hover:text-red-600 text-slate-600 transition-all duration-200"
							title="Limpiar pizarra"
						>
							<Trash2 className="w-4 h-4" />
						</Button>
					</div>

					{/* Enhanced Utility Buttons */}
					<div className="flex items-center space-x-2">
						<Button
							variant="outline"
							size="sm"
							onClick={downloadCanvas}
							className="h-9 px-3 rounded-xl border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all text-slate-700"
						>
							<Download className="w-4 h-4 mr-2" />
							Descargar
						</Button>
						<Button
							variant="outline"
							size="sm"
							className="h-9 px-3 rounded-xl border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all text-slate-700"
						>
							<Save className="w-4 h-4 mr-2" />
							Guardar
						</Button>
					</div>
				</div>
			</div>

			{/* Enhanced Canvas */}
			<div className="flex-1 relative bg-gradient-to-br from-white to-slate-50/30 overflow-hidden">
				<canvas
					ref={canvasRef}
					className={`absolute inset-0 w-full h-full transition-all duration-200 ${
						currentTool === 'pen' ? 'cursor-crosshair' :
						currentTool === 'eraser' ? 'cursor-cell' :
						currentTool === 'text' ? 'cursor-text' :
						currentTool === 'select' ? 'cursor-pointer' :
						'cursor-crosshair'
					}`}
					onMouseDown={handleMouseDown}
					onMouseMove={handleMouseMove}
					onMouseUp={handleMouseUp}
					onMouseLeave={() => setIsDrawing(false)}
				/>
				
				{/* Canvas Overlay Info */}
				<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg border border-white/50">
					<div className="flex items-center space-x-3 text-sm text-slate-600">
						<div className="flex items-center space-x-1">
							<Layers className="w-4 h-4" />
							<span>{elements.length} elementos</span>
						</div>
						<div className="w-1 h-1 bg-slate-400 rounded-full" />
						<div className="flex items-center space-x-1">
							<Palette className="w-4 h-4" />
							<div 
								className="w-4 h-4 rounded border border-slate-300"
								style={{ backgroundColor: currentColor }}
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Custom Slider Styles */}
			<style jsx>{`
				.slider::-webkit-slider-thumb {
					appearance: none;
					height: 16px;
					width: 16px;
					border-radius: 50%;
					background: #3b82f6;
					cursor: pointer;
					box-shadow: 0 2px 4px rgba(59, 130, 246, 0.3);
				}
				
				.slider::-webkit-slider-thumb:hover {
					background: #2563eb;
					transform: scale(1.1);
				}
				
				.slider::-moz-range-thumb {
					height: 16px;
					width: 16px;
					border-radius: 50%;
					background: #3b82f6;
					cursor: pointer;
					border: none;
					box-shadow: 0 2px 4px rgba(59, 130, 246, 0.3);
				}
			`}</style>
		</div>
	)
}

export default InteractiveWhiteboard 