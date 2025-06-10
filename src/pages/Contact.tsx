'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, HelpCircle, Users } from 'lucide-react';
import Navbar from '../components/Navbar';
import AulazoLogo from '../components/AulazoLogo';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    userType: 'student'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', formData);
    // Reset form or show success message
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Correo Electrónico',
      description: 'Envíanos un mensaje y te responderemos en 24 horas',
      contact: 'hola@aulazo.com',
      action: 'mailto:hola@aulazo.com'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Teléfono',
      description: 'Llámanos de lunes a viernes de 9:00 a 18:00',
      contact: '+1 (555) 123-4567',
      action: 'tel:+15551234567'
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: 'Chat en Vivo',
      description: 'Chatea con nuestro equipo de soporte',
      contact: 'Disponible 24/7',
      action: '#'
    }
  ];

  const supportTopics = [
    {
      icon: <HelpCircle className="h-6 w-6 text-blue-500" />,
      title: 'Preguntas Frecuentes',
      description: 'Encuentra respuestas a las preguntas más comunes',
      link: '/faq'
    },
    {
      icon: <Users className="h-6 w-6 text-green-500" />,
      title: 'Soporte Técnico',
      description: 'Ayuda con problemas técnicos de la plataforma',
      link: '/soporte-tecnico'
    },
    {
      icon: <AulazoLogo className="h-6 w-6 text-purple-500" />,
      title: 'Guías de Usuario',
      description: 'Aprende a usar todas las funciones de aulazo',
      link: '/guias'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-aulazo-dark mb-6">
              Contáctanos
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              ¿Tienes preguntas, sugerencias o necesitas ayuda? Estamos aquí para apoyarte 
              en tu experiencia educativa con aulazo.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-aulazo-dark mb-4">
              Formas de Contacto
            </h2>
            <p className="text-lg text-gray-600">
              Elige la forma que más te convenga para comunicarte con nosotros
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-aulazo shadow-aulazo p-8 text-center hover:shadow-aulazo-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-aulazo-blue bg-opacity-10 rounded-full mb-6">
                  <div className="text-aulazo-blue">
                    {method.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-aulazo-dark mb-3">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {method.description}
                </p>
                <a
                  href={method.action}
                  className="text-aulazo-blue font-semibold hover:text-blue-600 transition-colors"
                >
                  {method.contact}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-aulazo-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-aulazo-dark mb-4">
              Envíanos un Mensaje
            </h2>
            <p className="text-lg text-gray-600">
              Completa el formulario y nos pondremos en contacto contigo pronto
            </p>
          </div>
          
          <div className="bg-white rounded-aulazo shadow-aulazo p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-aulazo focus:outline-none focus:ring-2 focus:ring-aulazo-blue focus:border-transparent"
                    placeholder="Tu nombre completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-aulazo focus:outline-none focus:ring-2 focus:ring-aulazo-blue focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="userType" className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de usuario
                  </label>
                  <select
                    id="userType"
                    name="userType"
                    value={formData.userType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-aulazo focus:outline-none focus:ring-2 focus:ring-aulazo-blue focus:border-transparent"
                  >
                    <option value="student">Estudiante</option>
                    <option value="teacher">Profesor</option>
                    <option value="parent">Padre/Madre</option>
                    <option value="other">Otro</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Asunto *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-aulazo focus:outline-none focus:ring-2 focus:ring-aulazo-blue focus:border-transparent"
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="support">Soporte técnico</option>
                    <option value="billing">Facturación y pagos</option>
                    <option value="account">Problemas de cuenta</option>
                    <option value="teacher">Información para profesores</option>
                    <option value="partnership">Alianzas y colaboraciones</option>
                    <option value="feedback">Comentarios y sugerencias</option>
                    <option value="other">Otro</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-aulazo focus:outline-none focus:ring-2 focus:ring-aulazo-blue focus:border-transparent"
                  placeholder="Describe tu consulta o mensaje en detalle..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-aulazo-blue text-white px-8 py-4 rounded-aulazo hover:bg-blue-600 transition-colors font-semibold flex items-center mx-auto"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Support Resources */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-aulazo-dark mb-4">
              Recursos de Ayuda
            </h2>
            <p className="text-lg text-gray-600">
              Encuentra respuestas rápidas a tus preguntas más frecuentes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportTopics.map((topic, index) => (
              <Link
                key={index}
                href={topic.link}
                className="bg-white rounded-aulazo shadow-aulazo p-6 hover:shadow-aulazo-lg transition-shadow group"
              >
                <div className="flex items-center mb-4">
                  {topic.icon}
                  <h3 className="text-xl font-semibold text-aulazo-dark ml-3 group-hover:text-aulazo-blue transition-colors">
                    {topic.title}
                  </h3>
                </div>
                <p className="text-gray-600">
                  {topic.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Office Info */}
      <section className="py-20 bg-aulazo-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Nuestra Oficina
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-200 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Dirección</h3>
                    <p className="text-blue-100">
                      123 Education Street<br />
                      Learning City, LC 12345<br />
                      Estados Unidos
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-blue-200 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Horarios de Atención</h3>
                    <p className="text-blue-100">
                      Lunes a Viernes: 9:00 AM - 6:00 PM<br />
                      Sábados: 10:00 AM - 2:00 PM<br />
                      Domingos: Cerrado
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-aulazo p-6">
              <h3 className="text-xl font-semibold text-aulazo-dark mb-4">
                Tiempo de Respuesta
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Correo electrónico</span>
                  <span className="text-aulazo-blue font-semibold">24 horas</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Chat en vivo</span>
                  <span className="text-green-600 font-semibold">Inmediato</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Teléfono</span>
                  <span className="text-aulazo-blue font-semibold">Inmediato</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Soporte técnico</span>
                  <span className="text-orange-600 font-semibold">2-4 horas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <AulazoLogo className="h-8 w-8 text-aulazo-blue" />
              <span className="text-2xl font-bold">aulazo</span>
            </div>
            <p className="text-gray-400">
              © 2024 Aulazo. Estamos aquí para ayudarte en tu experiencia educativa.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;