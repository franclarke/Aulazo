'use client'

import React, { useState } from 'react';
import { Search, Filter, Star, Clock, DollarSign, BookOpen } from 'lucide-react';
import Navbar from '../components/Navbar';

const TeacherSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 100]);

  const teachers = [
    {
      id: 1,
      name: 'María González',
      subject: 'Matemáticas',
      rating: 4.9,
      reviews: 127,
      price: 25,
      experience: '8 años',
      image: 'https://images.pexels.com/photos/3771100/pexels-photo-3771100.jpeg?auto=compress&cs=tinysrgb&w=300',
      specialties: ['Álgebra', 'Cálculo', 'Geometría'],
      availability: 'Disponible ahora'
    },
    {
      id: 2,
      name: 'Carlos Rodríguez',
      subject: 'Física',
      rating: 4.8,
      reviews: 89,
      price: 28,
      experience: '6 años',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=300',
      specialties: ['Mecánica', 'Termodinámica', 'Electromagnetismo'],
      availability: 'Disponible en 2h'
    },
    {
      id: 3,
      name: 'Ana Patricia López',
      subject: 'Química',
      rating: 4.9,
      reviews: 156,
      price: 22,
      experience: '10 años',
      image: 'https://images.pexels.com/photos/3771097/pexels-photo-3771097.jpeg?auto=compress&cs=tinysrgb&w=300',
      specialties: ['Química Orgánica', 'Bioquímica', 'Análisis'],
      availability: 'Disponible ahora'
    },
    {
      id: 4,
      name: 'David Chen',
      subject: 'Programación',
      rating: 4.7,
      reviews: 203,
      price: 35,
      experience: '5 años',
      image: 'https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?auto=compress&cs=tinysrgb&w=300',
      specialties: ['JavaScript', 'Python', 'React'],
      availability: 'Disponible mañana'
    },
    {
      id: 5,
      name: 'Sophie Martin',
      subject: 'Francés',
      rating: 4.8,
      reviews: 92,
      price: 20,
      experience: '7 años',
      image: 'https://images.pexels.com/photos/3771118/pexels-photo-3771118.jpeg?auto=compress&cs=tinysrgb&w=300',
      specialties: ['Conversación', 'Gramática', 'DELF'],
      availability: 'Disponible ahora'
    },
    {
      id: 6,
      name: 'Roberto Silva',
      subject: 'Historia',
      rating: 4.6,
      reviews: 74,
      price: 18,
      experience: '12 años',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300',
      specialties: ['Historia Universal', 'Historia de América', 'Arqueología'],
      availability: 'Disponible en 1h'
    }
  ];

  const subjects = [
    'Todas las materias',
    'Matemáticas',
    'Física', 
    'Química',
    'Programación',
    'Idiomas',
    'Historia',
    'Literatura',
    'Biología'
  ];

  return (
    <div className="min-h-screen bg-aulazo-gray">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-aulazo-dark mb-2">
            Encuentra tu profesor ideal
          </h1>
          <p className="text-gray-600">
            Descubre profesores verificados y comienza a aprender hoy mismo
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-aulazo shadow-aulazo p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar por materia, profesor o habilidad..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-aulazo focus:outline-none focus:ring-2 focus:ring-aulazo-blue"
              />
            </div>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-aulazo focus:outline-none focus:ring-2 focus:ring-aulazo-blue"
            >
              {subjects.map((subject, index) => (
                <option key={index} value={index === 0 ? 'all' : subject.toLowerCase()}>
                  {subject}
                </option>
              ))}
            </select>
            <button className="bg-aulazo-blue text-white px-8 py-3 rounded-aulazo hover:bg-blue-600 transition-colors font-medium">
              Buscar
            </button>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className="w-80">
            <div className="bg-white rounded-aulazo shadow-aulazo p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-aulazo-dark mb-4 flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                Filtros
              </h3>
              
              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Precio por hora
                </label>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>$0</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Calificación mínima
                </label>
                <div className="space-y-2">
                  {[4.5, 4.0, 3.5].map((rating) => (
                    <label key={rating} className="flex items-center">
                      <input type="radio" name="rating" className="mr-2" />
                      <div className="flex items-center">
                        <div className="flex space-x-1">
                          {[1,2,3,4,5].map((star) => (
                            <Star 
                              key={star} 
                              className={`h-4 w-4 ${star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                        <span className="ml-2 text-sm text-gray-600">{rating}+</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Disponibilidad
                </label>
                <div className="space-y-2">
                  {['Disponible ahora', 'Hoy', 'Esta semana'].map((option) => (
                    <label key={option} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                {teachers.length} profesores encontrados
              </p>
              <select className="px-4 py-2 border border-gray-300 rounded-aulazo focus:outline-none focus:ring-2 focus:ring-aulazo-blue">
                <option>Más relevantes</option>
                <option>Mejor calificados</option>
                <option>Precio: menor a mayor</option>
                <option>Precio: mayor a menor</option>
              </select>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {teachers.map((teacher) => (
                <div key={teacher.id} className="bg-white rounded-aulazo shadow-aulazo p-6 hover:shadow-aulazo-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <img
                      src={teacher.image}
                      alt={teacher.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-aulazo-dark">
                            {teacher.name}
                          </h3>
                          <p className="text-aulazo-blue font-medium">{teacher.subject}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-medium">{teacher.rating}</span>
                            <span className="text-gray-500 text-sm">({teacher.reviews})</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {teacher.experience}
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-1" />
                          ${teacher.price}/hora
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        {teacher.specialties.map((specialty, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-blue-50 text-aulazo-blue text-xs rounded-full"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className={`text-sm font-medium ${
                          teacher.availability.includes('ahora') 
                            ? 'text-green-600' 
                            : 'text-orange-600'
                        }`}>
                          {teacher.availability}
                        </span>
                        <button className="bg-aulazo-blue text-white px-4 py-2 rounded-aulazo hover:bg-blue-600 transition-colors font-medium">
                          Reservar clase
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <button className="bg-white text-aulazo-blue border-2 border-aulazo-blue px-8 py-3 rounded-aulazo hover:bg-aulazo-blue hover:text-white transition-colors font-medium">
                Cargar más profesores
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherSearch;