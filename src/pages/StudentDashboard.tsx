'use client'

import React from 'react';
import { 
  Calendar, 
  Clock, 
  BookOpen, 
  CreditCard, 
  HelpCircle, 
  Video,
  Star,
  TrendingUp,
  Bell,
  User,
  ChevronDown
} from 'lucide-react';
import Navbar from '../components/Navbar';
import AulazoLogo from '../components/AulazoLogo';

const StudentDashboard: React.FC = () => {
  const upcomingClasses = [
    {
      id: 1,
      subject: 'Física',
      teacher: 'Luis Rodríguez',
      date: '25 abr. 2024',
      time: '10:00',
      status: 'confirmada',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: 2,
      subject: 'Matemáticas',
      teacher: 'Marta Pérez',
      date: '27 abr. 2024',
      time: '14:00',
      status: 'confirmada',
      image: 'https://images.pexels.com/photos/3771100/pexels-photo-3771100.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: 3,
      subject: 'Historia',
      teacher: 'Carlos Gómez',
      date: '27 abr. 2024',
      time: '9:00',
      status: 'pendiente',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: 4,
      subject: 'Inglés',
      teacher: 'Emma Wilson',
      date: '27 abr. 2024',
      time: '11:00',
      status: 'confirmada',
      image: 'https://images.pexels.com/photos/3771118/pexels-photo-3771118.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: 5,
      subject: 'Programación',
      teacher: 'David Chen',
      date: '27 abr. 2024',
      time: '11:00',
      status: 'pendiente',
      image: 'https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ];

  const recentClasses = [
    { subject: 'Matemáticas', rating: 5, date: '20 abr. 2024' },
    { subject: 'Física', rating: 4, date: '18 abr. 2024' },
    { subject: 'Química', rating: 5, date: '15 abr. 2024' }
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
                  3
                </span>
              </button>
              <div className="flex items-center space-x-2 cursor-pointer hover:bg-blue-600 rounded-aulazo px-3 py-2 transition-colors">
                <img 
                  src="https://images.pexels.com/photos/3771097/pexels-photo-3771097.jpeg?auto=compress&cs=tinysrgb&w=50"
                  alt="Perfil"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="font-medium">Ana López</span>
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64">
            <nav className="bg-white rounded-aulazo shadow-aulazo p-4 sticky top-8">
              <div className="space-y-2">
                <a href="#" className="flex items-center space-x-3 px-4 py-3 text-aulazo-blue bg-blue-50 rounded-aulazo font-medium">
                  <Calendar className="h-5 w-5" />
                  <span>Panel Principal</span>
                </a>
                <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:text-aulazo-blue hover:bg-blue-50 rounded-aulazo transition-colors">
                  <AulazoLogo className="h-5 w-5" />
                  <span>Mis Clases</span>
                </a>
                <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:text-aulazo-blue hover:bg-blue-50 rounded-aulazo transition-colors">
                  <Clock className="h-5 w-5" />
                  <span>Horarios</span>
                </a>
                <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:text-aulazo-blue hover:bg-blue-50 rounded-aulazo transition-colors">
                  <CreditCard className="h-5 w-5" />
                  <span>Pagos</span>
                </a>
                <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:text-aulazo-blue hover:bg-blue-50 rounded-aulazo transition-colors">
                  <HelpCircle className="h-5 w-5" />
                  <span>Soporte</span>
                </a>
              </div>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-aulazo-dark mb-2">
                Panel de estudiante
              </h1>
              <p className="text-gray-600">
                Gestiona tus clases y sigue tu progreso de aprendizaje
              </p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              {/* Left Column */}
              <div className="xl:col-span-2 space-y-6">
                {/* Upcoming Classes */}
                <div className="bg-white rounded-aulazo shadow-aulazo p-6">
                  <h2 className="text-xl font-bold text-aulazo-dark mb-4">
                    Próximas clases
                  </h2>
                  
                  <div className="space-y-4">
                    {upcomingClasses.map((clase) => (
                      <div key={clase.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-aulazo hover:shadow-sm transition-shadow">
                        <div className="flex items-center space-x-4">
                          <img
                            src={clase.image}
                            alt={clase.teacher}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div>
                            <h3 className="font-semibold text-aulazo-dark">{clase.subject}</h3>
                            <p className="text-sm text-gray-600">{clase.teacher}</p>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-sm font-medium text-aulazo-dark">
                            {clase.date} {clase.time}
                          </div>
                          <span className={`inline-block px-2 py-1 text-xs rounded-full font-medium ${
                            clase.status === 'confirmada'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {clase.status === 'confirmada' ? 'Confirmada' : 'Pendiente'}
                          </span>
                        </div>
                        
                        <button className="bg-aulazo-blue text-white px-4 py-2 rounded-aulazo hover:bg-blue-600 transition-colors text-sm font-medium">
                          <Video className="h-4 w-4 inline mr-1" />
                          Unirse
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-aulazo shadow-aulazo p-6">
                  <h2 className="text-xl font-bold text-aulazo-dark mb-4">
                    Actividad reciente
                  </h2>
                  
                  <div className="space-y-3">
                    {recentClasses.map((clase, index) => (
                      <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-aulazo-blue rounded-full"></div>
                          <span className="text-gray-800">Clase de {clase.subject} completada</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex space-x-1">
                            {[1,2,3,4,5].map((star) => (
                              <Star 
                                key={star} 
                                className={`h-4 w-4 ${star <= clase.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">{clase.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Progress Card */}
                <div className="bg-white rounded-aulazo shadow-aulazo p-6 text-center">
                  <h3 className="text-lg font-semibold text-aulazo-dark mb-4">Progreso</h3>
                  
                  <div className="relative inline-flex items-center justify-center">
                    <svg className="w-32 h-32 transform -rotate-90">
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="#E5E7EB"
                        strokeWidth="8"
                        fill="none"
                      />
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="#2A7AE4"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${75 * 3.51} 351.86`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl font-bold text-aulazo-blue">75%</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mt-4">
                    Clases completadas este mes
                  </p>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-aulazo shadow-aulazo p-6">
                  <h3 className="text-lg font-semibold text-aulazo-dark mb-4">Accesos rápidos</h3>
                  
                  <div className="space-y-3">
                    <button className="w-full flex items-center space-x-3 px-4 py-3 bg-blue-50 text-aulazo-blue rounded-aulazo hover:bg-blue-100 transition-colors">
                      <AulazoLogo className="h-5 w-5" />
                      <span className="font-medium">Mis Clases</span>
                    </button>
                    
                    <button className="w-full flex items-center space-x-3 px-4 py-3 bg-green-50 text-green-700 rounded-aulazo hover:bg-green-100 transition-colors">
                      <CreditCard className="h-5 w-5" />
                      <span className="font-medium">Pagos</span>
                    </button>
                    
                    <button className="w-full flex items-center space-x-3 px-4 py-3 bg-purple-50 text-purple-700 rounded-aulazo hover:bg-purple-100 transition-colors">
                      <HelpCircle className="h-5 w-5" />
                      <span className="font-medium">Soporte</span>
                    </button>
                  </div>
                </div>

                {/* Performance Stats */}
                <div className="bg-white rounded-aulazo shadow-aulazo p-6">
                  <h3 className="text-lg font-semibold text-aulazo-dark mb-4">Estadísticas</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Total de clases</span>
                      <span className="font-semibold text-aulazo-dark">24</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Horas aprendidas</span>
                      <span className="font-semibold text-aulazo-dark">36h</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Profesores favoritos</span>
                      <span className="font-semibold text-aulazo-dark">5</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Calificación promedio</span>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold text-aulazo-dark">4.8</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;