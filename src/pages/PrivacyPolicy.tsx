import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Shield, Eye, Lock, Users } from 'lucide-react';
import AulazoLogo from '../components/AulazoLogo';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-aulazo-gray">
      {/* Header */}
      <div className="bg-white shadow-aulazo">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <AulazoLogo className="h-8 w-8 text-aulazo-blue" />
              <span className="text-2xl font-bold text-aulazo-blue">aulazo</span>
            </Link>
            <Link
              href="/"
              className="flex items-center text-aulazo-blue hover:text-blue-600 font-medium"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-aulazo shadow-aulazo p-8">
          <div className="flex items-center mb-8">
            <Shield className="h-8 w-8 text-aulazo-blue mr-3" />
            <h1 className="text-3xl font-bold text-aulazo-dark">
              Política de Privacidad
            </h1>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Última actualización:</strong> 15 de enero de 2024
            </p>

            <div className="bg-blue-50 border-l-4 border-aulazo-blue p-4 mb-8">
              <p className="text-aulazo-dark font-medium">
                En aulazo, proteger su privacidad es nuestra prioridad. Esta política explica cómo recopilamos, 
                usamos y protegemos su información personal.
              </p>
            </div>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Eye className="h-6 w-6 text-aulazo-blue mr-2" />
                <h2 className="text-2xl font-semibold text-aulazo-dark">1. Información que Recopilamos</h2>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-aulazo-dark">Información Personal</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Nombre completo y información de contacto</li>
                  <li>Dirección de correo electrónico y número de teléfono</li>
                  <li>Información de pago y facturación</li>
                  <li>Fotografía de perfil (opcional)</li>
                  <li>Información educativa y profesional (para profesores)</li>
                </ul>

                <h3 className="text-lg font-semibold text-aulazo-dark mt-6">Información de Uso</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Datos de navegación y uso de la plataforma</li>
                  <li>Registros de clases y sesiones</li>
                  <li>Comunicaciones dentro de la plataforma</li>
                  <li>Preferencias y configuraciones de usuario</li>
                </ul>

                <h3 className="text-lg font-semibold text-aulazo-dark mt-6">Información Técnica</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Dirección IP y ubicación geográfica</li>
                  <li>Tipo de dispositivo y navegador</li>
                  <li>Cookies y tecnologías similares</li>
                  <li>Datos de rendimiento y errores</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-aulazo-blue mr-2" />
                <h2 className="text-2xl font-semibold text-aulazo-dark">2. Cómo Usamos su Información</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-4 rounded-aulazo">
                  <h3 className="font-semibold text-green-800 mb-2">Servicios Principales</h3>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Facilitar conexiones entre estudiantes y profesores</li>
                    <li>• Procesar pagos y transacciones</li>
                    <li>• Proporcionar soporte técnico</li>
                    <li>• Verificar identidad de profesores</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-aulazo">
                  <h3 className="font-semibold text-blue-800 mb-2">Mejora del Servicio</h3>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Personalizar la experiencia del usuario</li>
                    <li>• Analizar patrones de uso</li>
                    <li>• Desarrollar nuevas funcionalidades</li>
                    <li>• Prevenir fraude y abuso</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Lock className="h-6 w-6 text-aulazo-blue mr-2" />
                <h2 className="text-2xl font-semibold text-aulazo-dark">3. Protección de Datos</h2>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-aulazo">
                <h3 className="font-semibold text-gray-800 mb-4">Medidas de Seguridad</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Técnicas</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Encriptación SSL/TLS</li>
                      <li>• Autenticación de dos factores</li>
                      <li>• Monitoreo de seguridad 24/7</li>
                      <li>• Copias de seguridad regulares</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Organizacionales</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Acceso limitado a datos</li>
                      <li>• Capacitación en privacidad</li>
                      <li>• Auditorías de seguridad</li>
                      <li>• Políticas de retención de datos</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-aulazo-dark mb-4">4. Compartir Información</h2>
              <div className="space-y-4">
                <p className="text-gray-700">
                  No vendemos, alquilamos o compartimos su información personal con terceros, excepto en las siguientes circunstancias:
                </p>
                
                <div className="space-y-3">
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h3 className="font-semibold text-gray-800">Con su Consentimiento</h3>
                    <p className="text-sm text-gray-600">Cuando usted autoriza explícitamente el intercambio de información</p>
                  </div>
                  
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h3 className="font-semibold text-gray-800">Proveedores de Servicios</h3>
                    <p className="text-sm text-gray-600">Con empresas que nos ayudan a operar la plataforma (pagos, hosting, análisis)</p>
                  </div>
                  
                  <div className="border-l-4 border-red-400 pl-4">
                    <h3 className="font-semibold text-gray-800">Requerimientos Legales</h3>
                    <p className="text-sm text-gray-600">Cuando sea requerido por ley o para proteger nuestros derechos</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-aulazo-dark mb-4">5. Sus Derechos</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="bg-blue-50 p-3 rounded">
                    <h3 className="font-semibold text-blue-800">Acceso</h3>
                    <p className="text-sm text-blue-700">Solicitar una copia de sus datos personales</p>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded">
                    <h3 className="font-semibold text-green-800">Rectificación</h3>
                    <p className="text-sm text-green-700">Corregir información inexacta o incompleta</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-yellow-50 p-3 rounded">
                    <h3 className="font-semibold text-yellow-800">Eliminación</h3>
                    <p className="text-sm text-yellow-700">Solicitar la eliminación de sus datos</p>
                  </div>
                  
                  <div className="bg-purple-50 p-3 rounded">
                    <h3 className="font-semibold text-purple-800">Portabilidad</h3>
                    <p className="text-sm text-purple-700">Transferir sus datos a otro servicio</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-aulazo-dark mb-4">6. Cookies y Tecnologías Similares</h2>
              <p className="text-gray-700 mb-4">
                Utilizamos cookies y tecnologías similares para mejorar su experiencia en nuestra plataforma:
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700"><strong>Esenciales:</strong> Necesarias para el funcionamiento básico</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700"><strong>Funcionales:</strong> Recordar preferencias y configuraciones</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                  <span className="text-gray-700"><strong>Analíticas:</strong> Entender cómo se usa la plataforma</span>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-aulazo-dark mb-4">7. Retención de Datos</h2>
              <p className="text-gray-700 mb-4">
                Conservamos su información personal solo durante el tiempo necesario para cumplir con los propósitos 
                descritos en esta política, a menos que la ley requiera un período de retención más largo.
              </p>
              
              <div className="bg-gray-50 p-4 rounded-aulazo">
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Cuentas activas:</strong> Mientras mantenga su cuenta</li>
                  <li><strong>Cuentas inactivas:</strong> 3 años después del último acceso</li>
                  <li><strong>Datos de transacciones:</strong> 7 años por requerimientos fiscales</li>
                  <li><strong>Registros de seguridad:</strong> 2 años</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-aulazo-dark mb-4">8. Contacto</h2>
              <p className="text-gray-700 mb-4">
                Si tiene preguntas sobre esta Política de Privacidad o desea ejercer sus derechos, contáctenos:
              </p>
              
              <div className="bg-blue-50 p-6 rounded-aulazo">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-blue-800 mb-2">Información de Contacto</h3>
                    <p className="text-blue-700 text-sm">
                      <strong>Email:</strong> privacy@aulazo.com<br />
                      <strong>Teléfono:</strong> +1 (555) 123-4567<br />
                      <strong>Dirección:</strong> 123 Education Street<br />
                      Learning City, LC 12345
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-800 mb-2">Oficial de Protección de Datos</h3>
                    <p className="text-blue-700 text-sm">
                      <strong>Email:</strong> dpo@aulazo.com<br />
                      <strong>Horario:</strong> Lun-Vie 9:00-17:00<br />
                      <strong>Respuesta:</strong> Dentro de 30 días
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
