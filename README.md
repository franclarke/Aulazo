# 🎓 Aulazo Platform

Una plataforma educativa moderna construida con Next.js 15, TypeScript, Tailwind CSS y Shadcn UI.

## ✨ Características

- 🚀 **Next.js 15** con App Router para máximo rendimiento
- 🎨 **Shadcn UI** + **Tailwind CSS** para una interfaz moderna
- 📱 **Diseño responsive** optimizado para todos los dispositivos
- 🔒 **TypeScript** para desarrollo type-safe
- 🎯 **Validación con Zod** para formularios robustos
- 🌙 **Modo oscuro** integrado
- ⚡ **Optimizaciones de rendimiento** automáticas
- 🔍 **SEO optimizado** con metadatos dinámicos
- 🛡️ **Headers de seguridad** configurados

## 🏗️ Arquitectura

El proyecto sigue las mejores prácticas de Next.js App Router:

```
app/
├── layout.tsx          # Layout principal con metadatos
├── page.tsx           # Página de inicio
├── loading.tsx        # Componente de carga global
├── error.tsx          # Manejo de errores global
├── not-found.tsx      # Página 404 personalizada
└── [rutas]/           # Rutas organizadas por funcionalidad
    ├── page.tsx       # Página de la ruta
    ├── loading.tsx    # Loading específico (opcional)
    └── components/    # Componentes específicos de la ruta
        ├── DataAccess.tsx     # Server Component para datos
        ├── ClientComponent.tsx # Client Component para interactividad
        └── SkeletonComponent.tsx # Componentes de skeleton
```

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+ 
- npm, yarn, pnpm o bun

### Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/aulazo-platform.git
   cd aulazo-platform
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Configura las variables de entorno**
   ```bash
   cp .env.example .env.local
   ```
   Edita `.env.local` con tus configuraciones.

4. **Ejecuta el servidor de desarrollo**
   ```bash
   npm run dev
   ```

5. **Abre tu navegador**
   Visita [http://localhost:3000](http://localhost:3000)

## 📦 Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run start        # Servidor de producción
npm run lint         # Linter con ESLint
npm run type-check   # Verificación de tipos TypeScript
```

## 🛠️ Stack Tecnológico

### Core
- **[Next.js 15](https://nextjs.org/)** - Framework React con App Router
- **[React 19](https://react.dev/)** - Biblioteca de UI
- **[TypeScript](https://www.typescriptlang.org/)** - Tipado estático

### UI & Styling
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Shadcn UI](https://ui.shadcn.com/)** - Componentes reutilizables
- **[Radix UI](https://www.radix-ui.com/)** - Primitivos de UI accesibles
- **[Lucide React](https://lucide.dev/)** - Iconos modernos

### Formularios & Validación
- **[React Hook Form](https://react-hook-form.com/)** - Manejo de formularios
- **[Zod](https://zod.dev/)** - Validación de esquemas TypeScript-first

### Utilidades
- **[clsx](https://github.com/lukeed/clsx)** - Utilidad para clases condicionales
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Merge inteligente de clases Tailwind

## 📁 Estructura del Proyecto

```
project/
├── app/                    # Next.js App Router
│   ├── (rutas)/           # Rutas agrupadas
│   ├── api/               # API Routes
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout raíz
│   └── page.tsx           # Página principal
├── src/
│   ├── components/        # Componentes reutilizables
│   │   └── ui/           # Componentes de Shadcn UI
│   ├── hooks/            # Hooks personalizados
│   ├── lib/              # Utilidades y configuraciones
│   ├── types/            # Definiciones de tipos TypeScript
│   └── pages/            # Páginas legacy (migración gradual)
├── public/               # Archivos estáticos
└── docs/                 # Documentación
```

## 🎨 Componentes UI

El proyecto utiliza Shadcn UI para componentes consistentes y accesibles:

```tsx
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function ExampleComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ejemplo</CardTitle>
      </CardHeader>
      <CardContent>
        <Input placeholder="Escribe algo..." />
        <Button>Enviar</Button>
      </CardContent>
    </Card>
  )
}
```

## 🔧 Configuración

### Tailwind CSS
La configuración incluye:
- Variables CSS para temas
- Colores personalizados de la marca
- Animaciones y transiciones
- Modo oscuro automático

### TypeScript
- Configuración estricta habilitada
- Path mapping para imports limpios (`@/`)
- Tipos personalizados para la aplicación

### ESLint
- Reglas de Next.js
- Reglas de React Hooks
- Configuración TypeScript
- Reglas personalizadas para consistencia

## 🚀 Despliegue

### Vercel (Recomendado)
```bash
npm run build
vercel --prod
```

### Docker
```bash
docker build -t aulazo-platform .
docker run -p 3000:3000 aulazo-platform
```

### Build Manual
```bash
npm run build
npm run start
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🙏 Agradecimientos

- [Next.js](https://nextjs.org/) por el increíble framework
- [Shadcn](https://ui.shadcn.com/) por los componentes UI
- [Vercel](https://vercel.com/) por el hosting y deployment
- [Tailwind CSS](https://tailwindcss.com/) por el sistema de diseño

---

Hecho con ❤️ por el equipo de Aulazo Platform 