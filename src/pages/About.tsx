import React from 'react'
import Link from 'next/link'
import { Users, Award, Globe, Heart, Target, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import AulazoLogo from '../components/AulazoLogo';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'María González',
      role: 'CEO & Fundadora',
      image: 'https://images.pexels.com/photos/3771100/pexels-photo-3771100.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Ex-directora de educación en Google, apasionada por democratizar el acceso a la educación de calidad.'
    },
    {
      name: 'Carlos Rodríguez',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Ingeniero de software con 15 años de experiencia en plataformas educativas y tecnología.'
    },
    {
      name: 'Ana López',
      role: 'Directora de Educación',
      image: 'https://images.pexels.com/photos/3771097/pexels-photo-3771097.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Doctora en Pedagogía con experiencia en diseño curricular y metodologías de enseñanza online.'
    },
    {
      name: 'David Chen',
      role: 'Director de Producto',
      image: 'https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Especialista en UX/UI con enfoque en productos educativos y experiencia del usuario.'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Estudiantes activos' },
    { number: '2,500+', label: 'Profesores verificados' },
    { number: '50+', label: 'Materias disponibles' },
    { number: '98%', label: 'Satisfacción del usuario' }
  ];

  const values = [
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: 'Pasión por la Educación',
      description: 'Creemos que la educación es el motor del cambio y el desarrollo personal.'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: 'Comunidad Inclusiva',
      description: 'Fomentamos un ambiente diverso donde todos pueden aprender y enseñar.'
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-500" />,
      title: 'Excelencia Académica',
      description: 'Mantenemos los más altos estándares de calidad en nuestra plataforma.'
    },
    {
      icon: <Globe className="h-8 w-8 text-green-500" />,
      title: 'Acceso Global',
      description: 'Conectamos estudiantes y profesores sin barreras geográficas.'
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
              Sobre <span className="text-aulazo-blue">aulazo</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Somos una plataforma educativa que conecta estudiantes con los mejores profesores del mundo, 
              democratizando el acceso a una educación de calidad a través de la tecnología.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-aulazo-dark mb-6">
                Nuestra Misión
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                En aulazo, creemos que cada persona merece acceso a una educación de calidad, 
                sin importar su ubicación geográfica o circunstancias económicas. Nuestra misión 
                es democratizar la educación conectando estudiantes con profesores excepcionales 
                a través de una plataforma tecnológica avanzada.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Educación accesible para todos</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Profesores verificados y calificados</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Tecnología de vanguardia</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Estudiantes aprendiendo"
                className="rounded-aulazo shadow-aulazo-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-aulazo-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Nuestro Impacto
            </h2>
            <p className="text-blue-100 text-lg">
              Cifras que reflejan nuestro compromiso con la educación
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-aulazo-dark mb-4">
              Nuestros Valores
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Los principios que guían cada decisión que tomamos en aulazo
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-aulazo hover:shadow-aulazo transition-shadow">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-aulazo-dark mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-aulazo-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-aulazo-dark mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conoce a las personas apasionadas que hacen posible aulazo
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-aulazo shadow-aulazo p-6 text-center">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-aulazo-dark mb-1">
                  {member.name}
                </h3>
                <p className="text-aulazo-blue font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Futuro de la educación"
                className="rounded-aulazo shadow-aulazo-lg"
              />
            </div>
            <div>
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-aulazo-blue mr-3" />
                <h2 className="text-3xl font-bold text-aulazo-dark">
                  Nuestra Visión
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Visualizamos un mundo donde la educación de calidad sea accesible para todos, 
                donde las barreras geográficas y económicas no limiten el potencial de aprendizaje 
                de ninguna persona. Queremos ser la plataforma líder que transforme la manera 
                en que las personas aprenden y enseñan.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nuestro objetivo es crear una comunidad global de aprendizaje donde estudiantes 
                y profesores puedan conectarse, colaborar y crecer juntos, impulsando el 
                desarrollo personal y profesional a través de la educación personalizada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-aulazo-blue to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Listo para formar parte de aulazo?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Únete a nuestra comunidad y comienza tu viaje de aprendizaje hoy mismo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/registro"
              className="bg-white text-aulazo-blue px-8 py-4 rounded-aulazo text-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Registrarse como Estudiante
            </Link>
            <Link
              href="/registro-profesor"
              className="border-2 border-white text-white px-8 py-4 rounded-aulazo text-lg font-semibold hover:bg-white hover:text-aulazo-blue transition-colors"
            >
              Enseñar en aulazo
            </Link>
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
              © 2024 Aulazo. Democratizando el acceso a la educación de calidad.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
