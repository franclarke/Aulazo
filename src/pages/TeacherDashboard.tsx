'use client'

import React from 'react';
import { Calendar, DollarSign, Star, Users, TrendingUp, Settings, Presentation as PresentationChart, Clock, Award, Bell, ChevronDown } from 'lucide-react';
import Navbar from '../components/Navbar';
import AulazoLogo from '../components/AulazoLogo';

const TeacherDashboard: React.FC = () => {
  const upcomingClasses = [
    {
      id: 1,
      subject: 'Matemáticas Avanzadas',
      student: 'Ana López',
      time: '10:00 - 11:00',
      date: 'Hoy',
      status: 'confirmada',
      studentImage: 'https://images.pexels.com/photos/3771097/pexels-photo-3771097.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: 2,
      subject: 'Álgebra Básica',
      student: 'Miguel Torres',
      time: '14:00 - 15:00',
      date: 'Hoy',
      status: 'pendiente',
      studentImage: 'https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: 3,
      subject: 'Cálculo Diferencial',
      student: 'Sofia Martín',
      time: '16:00 - 17:00',
      date: 'Mañana',
      status: 'confirmada',
      studentImage: 'https://images.pexels.com/photos/3771118/pexels-photo-3771118.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ];

  const weeklySchedule = [
    { day: 'Lun', classes: 3, available: true },
    { day: 'Mar', classes: 4, available: true },
    { day: 'Mié', classes: 2, available: true },
    { day: 'Jue', classes: 5, available: true },
    { day: 'Vie', classes: 3, available: true },
    { day: 'Sáb', classes: 1, available: false },
    { day: 'Dom', classes: 0, available: false }
  ];

  return (
    <div className="min-h-screen bg-aulazo-gray">
      {/* Header */}
      <div className="bg-aulazo-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <AulazoLogo className="h-8 w-8 text-white" />
              <span className="text-2xl font-bold">aulazo</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Bell className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  2
                </span>
              </button>
              <div className="flex items-center space-x-2 cursor-pointer hover:bg-blue-600 rounded-aulazo px-3 py-2 transition-colors">
                <img 
                  src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=50"
                  alt="Perfil"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="font-medium">Carlos Martinez</span>
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-aulazo-dark mb-2">
            Dashboard del Profesor
          </h1>
          <p className="text-gray-600">
            Gestiona tus clases, estudiantes y ganancias desde un solo lugar
          </p>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-aulazo shadow-aulazo p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Reservas este mes</p>
                <p className="text-2xl font-bold text-aulazo-dark">24</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-600 font-medium">+12%</span>
                </div>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <Calendar className="h-6 w-6 text-aulazo-blue" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-aulazo shadow-aulazo p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Ingresos este mes</p>
                <p className="text-2xl font-bold text-aulazo-dark">$1,840</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-600 font-medium">+8%</span>
                </div>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-aulazo shadow-aulazo p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Calificación promedio</p>
                <p className="text-2xl font-bold text-aulazo-dark">4.9</p>
                <div className="flex items-center mt-2">
                  <div className="flex space-x-1">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-yellow-100 p-3 rounded-full">
                <Award className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-aulazo shadow-aulazo p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Estudiantes activos</p>
                <p className="text-2xl font-bold text-aulazo-dark">18</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-600 font-medium">+3 nuevos</span>
                </div>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="xl:col-span-2 space-y-6">
            {/* Upcoming Classes */}
            <div className="bg-white rounded-aulazo shadow-aulazo p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-aulazo-dark">
                  Próximas clases
                </h2>
                <button className="text-aulazo-blue hover:text-blue-600 font-medium">
                  Ver todas
                </button>
              </div>
              
              <div className="space-y-4">
                {upcomingClasses.map((clase) => (
                  <div key={clase.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-aulazo hover:shadow-sm transition-shadow">
                    <div className="flex items-center space-x-4">
                      <img
                        src={clase.studentImage}
                        alt={clase.student}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-semibold text-aulazo-dark">{clase.subject}</h3>
                        <p className="text-sm text-gray-600">Estudiante: {clase.student}</p>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <Clock className="h-4 w-4 mr-1" />
                          {clase.time} • {clase.date}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                        clase.status === 'confirmada'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {clase.status === 'confirmada' ? 'Confirmada' : 'Pendiente'}
                      </span>
                      
                      <button className="bg-aulazo-blue text-white px-4 py-2 rounded-aulazo hover:bg-blue-600 transition-colors text-sm font-medium">
                        Iniciar clase
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Weekly Schedule */}
            <div className="bg-white rounded-aulazo shadow-aulazo p-6">
              <h2 className="text-xl font-bold text-aulazo-dark mb-6">
                Horario semanal
              </h2>
              
              <div className="grid grid-cols-7 gap-4">
                {weeklySchedule.map((day, index) => (
                  <div key={index} className="text-center">
                    <div className="text-sm font-medium text-gray-600 mb-2">
                      {day.day}
                    </div>
                    <div className={`h-20 rounded-aulazo border-2 border-dashed flex items-center justify-center ${
                      day.available 
                        ? 'border-aulazo-blue bg-blue-50' 
                        : 'border-gray-300 bg-gray-50'
                    }`}>
                      <div className="text-center">
                        <div className={`text-lg font-bold ${
                          day.available ? 'text-aulazo-blue' : 'text-gray-400'
                        }`}>
                          {day.classes}
                        </div>
                        <div className="text-xs text-gray-500">
                          {day.classes === 1 ? 'clase' : 'clases'}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-aulazo shadow-aulazo p-6">
              <h3 className="text-lg font-semibold text-aulazo-dark mb-4">
                Acciones rápidas
              </h3>
              
              <div className="space-y-3">
                <button className="w-full flex items-center space-x-3 px-4 py-3 bg-blue-50 text-aulazo-blue rounded-aulazo hover:bg-blue-100 transition-colors">
                  <PresentationChart className="h-5 w-5" />
                  <span className="font-medium">Ver Pizarra Virtual</span>
                </button>
                
                <button className="w-full flex items-center space-x-3 px-4 py-3 bg-green-50 text-green-700 rounded-aulazo hover:bg-green-100 transition-colors">
                  <Calendar className="h-5 w-5" />
                  <span className="font-medium">Gestionar Horarios</span>
                </button>
                
                <button className="w-full flex items-center space-x-3 px-4 py-3 bg-purple-50 text-purple-700 rounded-aulazo hover:bg-purple-100 transition-colors">
                  <Settings className="h-5 w-5" />
                  <span className="font-medium">Configurar Perfil</span>
                </button>
              </div>
            </div>

            {/* Profile Summary */}
            <div className="bg-white rounded-aulazo shadow-aulazo p-6">
              <h3 className="text-lg font-semibold text-aulazo-dark mb-4">
                Resumen del perfil
              </h3>
              
              <div className="text-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150"
                  alt="Profesor"
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-3"
                />
                <h4 className="font-semibold text-aulazo-dark">Carlos Martinez</h4>
                <p className="text-sm text-gray-600">Profesor de Matemáticas</p>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Experiencia:</span>
                  <span className="font-medium">8 años</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tarifa por hora:</span>
                  <span className="font-medium">$28</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total reseñas:</span>
                  <span className="font-medium">147</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Disponibilidad:</span>
                  <span className="text-green-600 font-medium">Activo</span>
                </div>
              </div>
              
              <button className="w-full mt-4 bg-aulazo-blue text-white py-2 rounded-aulazo hover:bg-blue-600 transition-colors font-medium">
                Editar perfil
              </button>
            </div>

            {/* Recent Reviews */}
            <div className="bg-white rounded-aulazo shadow-aulazo p-6">
              <h3 className="text-lg font-semibold text-aulazo-dark mb-4">
                Reseñas recientes
              </h3>
              
              <div className="space-y-4">
                <div className="border-l-4 border-aulazo-blue pl-4">
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="flex space-x-1">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">Ana López</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    "Excelente profesor, muy didáctico y paciente."
                  </p>
                </div>
                
                <div className="border-l-4 border-aulazo-blue pl-4">
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="flex space-x-1">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className={`h-3 w-3 ${star <= 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">Miguel Torres</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    "Las clases son muy claras y bien estructuradas."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;