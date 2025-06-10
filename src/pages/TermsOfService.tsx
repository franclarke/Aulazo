import React from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react';
import AulazoLogo from '../components/AulazoLogo';

const TermsOfService: React.FC = () => {
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
          <h1 className="text-3xl font-bold text-aulazo-dark mb-8">
            Términos y Condiciones de Uso
          </h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Última actualización:</strong> 15 de enero de 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-aulazo-dark mb-4">1. Aceptación de los Términos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Al acceder y utilizar la plataforma aulazo, usted acepta estar sujeto a estos Términos y Condiciones de Uso. 
                Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestro servicio.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-aulazo-dark mb-4">2. Descripción del Servicio</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                aulazo es una plataforma educativa en línea que conecta estudiantes con profesores verificados para clases 
                particulares virtuales. Ofrecemos herramientas de videoconferencia, pizarra virtual interactiva y sistemas 
                de pago seguros.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-aulazo-dark mb-4">3. Registro de Cuenta</h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>Para utilizar nuestros servicios, debe:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Proporcionar información precisa y completa durante el registro</li>
                  <li>Mantener la seguridad de su contraseña</li>
                  <li>Notificar inmediatamente cualquier uso no autorizado de su cuenta</li>
                  <li>Ser mayor de 18 años o tener el consentimiento de un padre/tutor</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-aulazo-dark mb-4">4. Responsabilidades del Usuario</h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <h3 className="text-lg font-semibold text-aulazo-dark">Para Estudiantes:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Asistir puntualmente a las clases programadas</li>
                  <li>Tratar a los profesores con respeto</li>
                  <li>Realizar los pagos de manera oportuna</li>
                  <li>No grabar las clases sin consentimiento del profesor</li>
                </ul>

                <h3 className="text-lg font-semibold text-aulazo-dark mt-6">Para Profesores:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Proporcionar credenciales educativas verificables</li>
                  <li>Mantener un ambiente de aprendizaje profesional</li>
                  <li>Cumplir con los horarios acordados</li>
                  <li>Proteger la privacidad de los estudiantes</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-aulazo-dark mb-4">5. Pagos y Reembolsos</h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>Los pagos se procesan de forma segura a través de nuestros proveedores de pago certificados.</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Los pagos deben realizarse antes del inicio de la clase</li>
                  <li>Los reembolsos están sujetos a nuestra política de cancelación</li>
                  <li>aulazo retiene una comisión del 15% por cada transacción</li>
                  <li>Los profesores reciben sus pagos dentro de 7 días hábiles</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-aulazo-dark mb-4">6. Política de Cancelación</h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Cancelación con 24+ horas:</strong> Reembolso completo</li>
                  <li><strong>Cancelación con 2-24 horas:</strong> Reembolso del 50%</li>
                  <li><strong>Cancelación con menos de 2 horas:</strong> Sin reembolso</li>
                  <li><strong>No presentarse:</strong> Sin reembolso</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-aulazo-dark mb-4">7. Propiedad Intelectual</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Todo el contenido de la plataforma aulazo, incluyendo pero no limitado a textos, gráficos, logos, 
                iconos, imágenes, clips de audio, descargas digitales y software, es propiedad de aulazo o sus 
                proveedores de contenido y está protegido por las leyes de derechos de autor.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-aulazo-dark mb-4">8. Limitación de Responsabilidad</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                aulazo actúa como intermediario entre estudiantes y profesores. No somos responsables de la calidad 
                de la enseñanza, el contenido de las clases, o cualquier disputa que pueda surgir entre las partes. 
                Nuestra responsabilidad se limita al funcionamiento técnico de la plataforma.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-aulazo-dark mb-4">9. Modificaciones de los Términos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán 
                en vigor inmediatamente después de su publicación en la plataforma. Es su responsabilidad revisar 
                periódicamente estos términos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-aulazo-dark mb-4">10. Contacto</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Si tiene preguntas sobre estos Términos y Condiciones, puede contactarnos en:
              </p>
              <div className="bg-blue-50 p-4 rounded-aulazo">
                <p className="text-gray-700">
                  <strong>Email:</strong> legal@aulazo.com<br />
                  <strong>Teléfono:</strong> +1 (555) 123-4567<br />
                  <strong>Dirección:</strong> 123 Education Street, Learning City, LC 12345
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
