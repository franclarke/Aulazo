'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Mail, Lock, User, Eye, EyeOff, Phone, GraduationCap, Upload, DollarSign } from 'lucide-react';
import AulazoLogo from '../components/AulazoLogo'

const TeacherRegister: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    
    // Professional Info
    subjects: [] as string[],
    experience: '',
    education: '',
    hourlyRate: '',
    bio: '',
    
    // Documents
    acceptTerms: false
  });

  const subjects = [
    'Matemáticas', 'Física', 'Química', 'Biología', 'Historia', 'Geografía',
    'Literatura', 'Inglés', 'Francés', 'Programación', 'Arte', 'Música'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      // Handle final registration
      console.log('Teacher registration:', formData);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubjectToggle = (subject: string) => {
    setFormData(prev => ({
      ...prev,
      subjects: prev.subjects.includes(subject)
        ? prev.subjects.filter(s => s !== subject)
        : [...prev.subjects, subject]
    }));
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-aulazo-dark">Información personal</h3>
        <p className="text-gray-600">Cuéntanos sobre ti</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
            Nombre *
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
            Apellido *
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

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Correo electrónico *
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="pl-10 w-full px-3 py-3 border border-gray-300 rounded-aulazo focus:outline-none focus:ring-2 focus:ring-aulazo-blue focus:border-transparent"
            placeholder="tu@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          Teléfono *
        </label>
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleInputChange}
            className="pl-10 w-full px-3 py-3 border border-gray-300 rounded-aulazo focus:outline-none focus:ring-2 focus:ring-aulazo-blue focus:border-transparent"
            placeholder="+1 (555) 123-4567"
          />
        </div>
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
          Contraseña *
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
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
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-aulazo-dark">Información profesional</h3>
        <p className="text-gray-600">Cuéntanos sobre tu experiencia</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Materias que enseñas *
        </label>
        <div className="grid grid-cols-3 gap-2">
          {subjects.map((subject) => (
            <label key={subject} className="flex items-center">
              <input
                type="checkbox"
                checked={formData.subjects.includes(subject)}
                onChange={() => handleSubjectToggle(subject)}
                className="h-4 w-4 text-aulazo-blue focus:ring-aulazo-blue border-gray-300 rounded mr-2"
              />
              <span className="text-sm text-gray-700">{subject}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
          Años de experiencia *
        </label>
        <select
          id="experience"
          name="experience"
          required
          value={formData.experience}
          onChange={handleInputChange}
          className="w-full px-3 py-3 border border-gray-300 rounded-aulazo focus:outline-none focus:ring-2 focus:ring-aulazo-blue focus:border-transparent"
        >
          <option value="">Selecciona tu experiencia</option>
          <option value="1-2">1-2 años</option>
          <option value="3-5">3-5 años</option>
          <option value="6-10">6-10 años</option>
          <option value="10+">Más de 10 años</option>
        </select>
      </div>

      <div>
        <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-2">
          Nivel educativo *
        </label>
        <select
          id="education"
          name="education"
          required
          value={formData.education}
          onChange={handleInputChange}
          className="w-full px-3 py-3 border border-gray-300 rounded-aulazo focus:outline-none focus:ring-2 focus:ring-aulazo-blue focus:border-transparent"
        >
          <option value="">Selecciona tu nivel educativo</option>
          <option value="licenciatura">Licenciatura</option>
          <option value="maestria">Maestría</option>
          <option value="doctorado">Doctorado</option>
          <option value="otro">Otro</option>
        </select>
      </div>

      <div>
        <label htmlFor="hourlyRate" className="block text-sm font-medium text-gray-700 mb-2">
          Tarifa por hora (USD) *
        </label>
        <div className="relative">
          <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            id="hourlyRate"
            name="hourlyRate"
            type="number"
            min="10"
            max="200"
            required
            value={formData.hourlyRate}
            onChange={handleInputChange}
            className="pl-10 w-full px-3 py-3 border border-gray-300 rounded-aulazo focus:outline-none focus:ring-2 focus:ring-aulazo-blue focus:border-transparent"
            placeholder="25"
          />
        </div>
      </div>

      <div>
        <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-2">
          Biografía profesional *
        </label>
        <textarea
          id="bio"
          name="bio"
          rows={4}
          required
          value={formData.bio}
          onChange={handleInputChange}
          className="w-full px-3 py-3 border border-gray-300 rounded-aulazo focus:outline-none focus:ring-2 focus:ring-aulazo-blue focus:border-transparent"
          placeholder="Describe tu experiencia, metodología de enseñanza y lo que te hace único como profesor..."
        />
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-aulazo-dark">Documentos y verificación</h3>
        <p className="text-gray-600">Sube tus documentos para verificación</p>
      </div>

      <div className="space-y-4">
        <div className="border-2 border-dashed border-gray-300 rounded-aulazo p-6 text-center">
          <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h4 className="text-lg font-medium text-gray-700 mb-2">Título universitario</h4>
          <p className="text-sm text-gray-500 mb-4">Sube una copia de tu título o certificado</p>
          <button
            type="button"
            className="bg-aulazo-blue text-white px-4 py-2 rounded-aulazo hover:bg-blue-600 transition-colors"
          >
            Seleccionar archivo
          </button>
        </div>

        <div className="border-2 border-dashed border-gray-300 rounded-aulazo p-6 text-center">
          <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h4 className="text-lg font-medium text-gray-700 mb-2">Identificación oficial</h4>
          <p className="text-sm text-gray-500 mb-4">Sube una copia de tu identificación</p>
          <button
            type="button"
            className="bg-aulazo-blue text-white px-4 py-2 rounded-aulazo hover:bg-blue-600 transition-colors"
          >
            Seleccionar archivo
          </button>
        </div>
      </div>

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
          para profesores y la{' '}
          <Link href="/privacidad" className="text-aulazo-blue hover:text-blue-600">
            política de privacidad
          </Link>
        </label>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <Link href="/" className="flex items-center justify-center space-x-2 mb-8">
            <AulazoLogo className="h-10 w-10 text-aulazo-blue" />
            <span className="text-3xl font-bold text-aulazo-blue">aulazo</span>
          </Link>
          <h2 className="text-3xl font-bold text-aulazo-dark">
            Únete como Profesor
          </h2>
          <p className="mt-2 text-gray-600">
            Comparte tu conocimiento y ayuda a otros a aprender
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step <= currentStep 
                    ? 'bg-aulazo-blue text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {step}
                </div>
                {step < 3 && (
                  <div className={`w-16 h-1 mx-2 ${
                    step < currentStep ? 'bg-aulazo-blue' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-2">
            <span className="text-sm text-gray-600">
              Paso {currentStep} de 3
            </span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="bg-white rounded-aulazo shadow-aulazo p-8">
            {currentStep === 1 && renderStep1()}
            {currentStep === 2 && renderStep2()}
            {currentStep === 3 && renderStep3()}

            <div className="flex justify-between mt-8">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="bg-gray-300 text-gray-700 px-6 py-3 rounded-aulazo hover:bg-gray-400 transition-colors font-medium"
                >
                  Anterior
                </button>
              )}
              
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-3 rounded-aulazo hover:bg-green-700 transition-colors font-medium ml-auto"
              >
                {currentStep === 3 ? 'Enviar solicitud' : 'Siguiente'}
              </button>
            </div>
          </div>
        </form>

        {/* Login Link */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            ¿Ya tienes cuenta?{' '}
            <Link href="/login" className="text-aulazo-blue hover:text-blue-600 font-medium">
              Inicia sesión aquí
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeacherRegister;
