'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Mail, Lock, User, Eye, EyeOff, Phone } from 'lucide-react';
import AulazoLogo from '../components/AulazoLogo'

const Register: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Registration attempt:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="flex items-center justify-center space-x-2 mb-8">
            <AulazoLogo className="h-10 w-10 text-aulazo-blue" />
            <span className="text-3xl font-bold text-aulazo-blue">aulazo</span>
          </Link>
          <h2 className="text-3xl font-bold text-aulazo-dark">
            Crea tu cuenta de estudiante
          </h2>
          <p className="mt-2 text-gray-600">
            ¿Ya tienes cuenta?{' '}
            <Link href="/login" className="text-aulazo-blue hover:text-blue-600 font-medium">
              Inicia sesión aquí
            </Link>
          </p>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit}>
          <div className="bg-white rounded-aulazo shadow-aulazo p-8 space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="pl-10 w-full px-3 py-3 border border-gray-300 rounded-aulazo focus:outline-none focus:ring-2 focus:ring-aulazo-blue focus:border-transparent"
                    placeholder="Tu nombre"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Apellido
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-3 border border-gray-300 rounded-aulazo focus:outline-none focus:ring-2 focus:ring-aulazo-blue focus:border-transparent"
                  placeholder="Tu apellido"
                />
              </div>
            </div>

            {/* Email */}
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
                  value={formData.email}
                  onChange={handleInputChange}
                  className="pl-10 w-full px-3 py-3 border border-gray-300 rounded-aulazo focus:outline-none focus:ring-2 focus:ring-aulazo-blue focus:border-transparent"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Teléfono (opcional)
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="pl-10 w-full px-3 py-3 border border-gray-300 rounded-aulazo focus:outline-none focus:ring-2 focus:ring-aulazo-blue focus:border-transparent"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            {/* Password */}
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
                  autoComplete="new-password"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="pl-10 pr-10 w-full px-3 py-3 border border-gray-300 rounded-aulazo focus:outline-none focus:ring-2 focus:ring-aulazo-blue focus:border-transparent"
                  placeholder="Mínimo 8 caracteres"
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

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                Confirmar contraseña
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="pl-10 pr-10 w-full px-3 py-3 border border-gray-300 rounded-aulazo focus:outline-none focus:ring-2 focus:ring-aulazo-blue focus:border-transparent"
                  placeholder="Repite tu contraseña"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start">
              <input
                id="acceptTerms"
                name="acceptTerms"
                type="checkbox"
                required
                checked={formData.acceptTerms}
                onChange={handleInputChange}
                className="h-4 w-4 text-aulazo-blue focus:ring-aulazo-blue border-gray-300 rounded mt-1"
              />
              <label htmlFor="acceptTerms" className="ml-2 block text-sm text-gray-700">
                Acepto los{' '}
                <Link href="/terminos" className="text-aulazo-blue hover:text-blue-600">
                  términos y condiciones
                </Link>{' '}
                y la{' '}
                <Link href="/privacidad" className="text-aulazo-blue hover:text-blue-600">
                  política de privacidad
                </Link>
              </label>
            </div>

            <button
              type="submit"
              disabled={!formData.acceptTerms}
              className="w-full bg-aulazo-blue text-white py-3 px-4 rounded-aulazo hover:bg-blue-600 transition-colors font-medium disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Crear cuenta
            </button>
          </div>
        </form>

        {/* Teacher Registration Link */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 mb-4">¿Quieres enseñar en aulazo?</p>
          <Link
            href="/registro-profesor"
            className="inline-block bg-green-600 text-white px-6 py-2 rounded-aulazo hover:bg-green-700 transition-colors font-medium"
          >
            Regístrate como profesor
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
