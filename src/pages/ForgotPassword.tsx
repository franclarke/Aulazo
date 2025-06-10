'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';
import AulazoLogo from '../components/AulazoLogo'

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log('Password reset for:', email);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <Link href="/" className="flex items-center justify-center space-x-2 mb-8">
              <AulazoLogo className="h-10 w-10 text-aulazo-blue" />
              <span className="text-3xl font-bold text-aulazo-blue">aulazo</span>
            </Link>
            
            <div className="bg-white rounded-aulazo shadow-aulazo p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              
              <h2 className="text-2xl font-bold text-aulazo-dark mb-4">
                ¡Correo enviado!
              </h2>
              
              <p className="text-gray-600 mb-6">
                Hemos enviado un enlace para restablecer tu contraseña a <strong>{email}</strong>. 
                Revisa tu bandeja de entrada y sigue las instrucciones.
              </p>
              
              <div className="space-y-4">
                <Link
                  href="/login"
                  className="w-full bg-aulazo-blue text-white py-3 px-4 rounded-aulazo hover:bg-blue-600 transition-colors font-medium text-center block"
                >
                  Volver al inicio de sesión
                </Link>
                
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="w-full text-aulazo-blue hover:text-blue-600 py-2 font-medium"
                >
                  Enviar de nuevo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link href="/" className="flex items-center justify-center space-x-2 mb-8">
            <AulazoLogo className="h-10 w-10 text-aulazo-blue" />
            <span className="text-3xl font-bold text-aulazo-blue">aulazo</span>
          </Link>
          
          <h2 className="text-3xl font-bold text-aulazo-dark">
            ¿Olvidaste tu contraseña?
          </h2>
          <p className="mt-2 text-gray-600">
            No te preocupes, te ayudamos a recuperarla
          </p>
        </div>

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
                    placeholder="Ingresa tu correo electrónico"
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Te enviaremos un enlace para restablecer tu contraseña
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-aulazo-blue text-white py-3 px-4 rounded-aulazo hover:bg-blue-600 transition-colors font-medium"
              >
                Enviar enlace de recuperación
              </button>
            </div>
          </div>
        </form>

        <div className="text-center">
          <Link
            href="/login"
            className="flex items-center justify-center text-aulazo-blue hover:text-blue-600 font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al inicio de sesión
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
