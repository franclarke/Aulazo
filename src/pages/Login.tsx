'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'
import AulazoLogo from '../components/AulazoLogo'

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login attempt:', { email, password })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link href="/" className="flex items-center justify-center space-x-2 mb-8">
            <AulazoLogo className="h-10 w-10 text-aulazo-blue" />
            <span className="text-3xl font-bold text-aulazo-blue">aulazo</span>
          </Link>
          <h2 className="text-3xl font-bold text-aulazo-dark">
            Inicia sesión en tu cuenta
          </h2>
          <p className="mt-2 text-gray-600">
            ¿No tienes cuenta?{' '}
            <Link href="/registro" className="text-aulazo-blue hover:text-blue-600 font-medium">
              Regístrate aquí
            </Link>
          </p>
        </div>

        {/* Login Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="bg-white rounded-aulazo shadow-aulazo p-8">
            <div className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Correo electrónico
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 w-full px-3 py-3 border border-gray-300 rounded-aulazo focus:outline-none focus:ring-2 focus:ring-aulazo-blue focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Contraseña
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10 w-full px-3 py-3 border border-gray-300 rounded-aulazo focus:outline-none focus:ring-2 focus:ring-aulazo-blue focus:border-transparent"
                    placeholder="Tu contraseña"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-aulazo-blue focus:ring-aulazo-blue border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Recordarme
                  </label>
                </div>

                <Link href="/recuperar-password" className="text-sm text-aulazo-blue hover:text-blue-600">
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full bg-aulazo-blue text-white py-3 px-4 rounded-aulazo hover:bg-blue-600 transition-colors font-medium"
              >
                Iniciar sesión
              </button>
            </div>
          </div>
        </form>

        {/* Alternative Login Methods */}
        <div className="bg-white rounded-aulazo shadow-aulazo p-6">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-4">O inicia sesión con</p>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-aulazo hover:bg-gray-50 transition-colors">
                <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" className="w-5 h-5 mr-3" />
                <span className="text-gray-700 font-medium">Continuar con Google</span>
              </button>
            </div>
          </div>
        </div>

        {/* User Type Selection */}
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-4">¿Eres profesor?</p>
          <Link
            href="/registro-profesor"
            className="inline-block bg-green-600 text-white px-6 py-2 rounded-aulazo hover:bg-green-700 transition-colors font-medium"
          >
            Únete como profesor
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login