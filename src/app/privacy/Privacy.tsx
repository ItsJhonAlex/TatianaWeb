import React from 'react';
import Image from 'next/image';

const Privacy = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6 text-cyan-600 dark:text-cyan-400">🔐 Política de Privacidad de Tatiana Discord AI Bot</h1>
      
      <div className="text-center mb-8">
        <p className="text-xl font-semibold">Última actualización: 24 de agosto de 2024</p>
      </div>

      <hr className="my-8 border-gray-300 dark:border-gray-700" />

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-cyan-500 dark:text-cyan-300">📊 1. Información que Recopilamos</h2>
        <p>Tatiana el bot recopila y procesa la siguiente información:</p>
        <ul className="list-disc list-inside ml-4 mt-2">
          <li>🆔 ID de usuario de Discord</li>
          <li>👤 Nombre de usuario y apodo en el servidor</li>
          <li>💬 Contenido de los mensajes enviados al Bot</li>
          <li>📈 Datos de uso relacionados con las interacciones con el Bot</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-cyan-500 dark:text-cyan-300">🔍 2. Cómo Utilizamos la Información</h2>
        <p>Utilizamos la información recopilada para:</p>
        <ul className="list-disc list-inside ml-4 mt-2">
          <li>🛠️ Proporcionar y mejorar las funcionalidades del Bot</li>
          <li>🎨 Personalizar la experiencia del usuario</li>
          <li>📝 Mantener registros de uso y resolver problemas técnicos</li>
          <li>⚖️ Cumplir con las obligaciones legales</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-cyan-500 dark:text-cyan-300">🤝 3. Compartir Información</h2>
        <p>No vendemos ni compartimos tu información personal con terceros, excepto:</p>
        <ul className="list-disc list-inside ml-4 mt-2">
          <li>🤖 Cuando sea necesario para proporcionar el servicio (ej. procesamiento de IA)</li>
          <li>📜 Para cumplir con obligaciones legales</li>
          <li>✅ Con tu consentimiento explícito</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-cyan-500 dark:text-cyan-300">🔒 4. Seguridad de los Datos</h2>
        <p>Implementamos medidas de seguridad para proteger tu información contra acceso no autorizado, alteración, divulgación o destrucción.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-cyan-500 dark:text-cyan-300">⏳ 5. Retención de Datos</h2>
        <p>Conservamos la información personal solo durante el tiempo necesario para los fines establecidos en esta política o según lo requiera la ley.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-cyan-500 dark:text-cyan-300">👤 6. Derechos del Usuario</h2>
        <p>Tienes derecho a:</p>
        <ul className="list-disc list-inside ml-4 mt-2">
          <li>👁️ Acceder a tu información personal</li>
          <li>✏️ Corregir datos inexactos</li>
          <li>🗑️ Solicitar la eliminación de tus datos</li>
          <li>🚫 Oponerte al procesamiento de tus datos</li>
        </ul>
        <p className="mt-2">Para ejercer estos derechos, contáctanos a través de isenkidu@gmail.com.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-cyan-500 dark:text-cyan-300">🧒 7. Uso por Menores</h2>
        <p>El Bot no está diseñado para ser utilizado por menores de 13 años. No recopilamos intencionalmente información de niños menores de 13 años.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-cyan-500 dark:text-cyan-300">🔄 8. Cambios en esta Política</h2>
        <p>Podemos actualizar esta política ocasionalmente. Te notificaremos sobre cambios significativos a través de los canales apropiados.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-cyan-500 dark:text-cyan-300">✅ 9. Consentimiento</h2>
        <p>Al utilizar el Bot, consientes el procesamiento de tu información como se describe en esta política.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-cyan-500 dark:text-cyan-300">📞 10. Contacto</h2>
        <p>Si tienes preguntas sobre esta Política de Privacidad, contáctanos en isenkidu@gmail.com.</p>
      </section>

      <hr className="my-8 border-gray-300 dark:border-gray-700" />

      <div className="text-center mt-12">
        <Image src="https://img.shields.io/badge/Hecho%20con-❤️-ff69b4.svg" alt="Hecho con amor" width={120} height={20} className="inline-block" />
        <p className="mt-2">Desarrollado con pasión por ItsJhonAlex</p>
      </div>
    </div>
  );
};

export default Privacy;
