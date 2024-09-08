import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Terms = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6 text-cyan-600 dark:text-cyan-400">📜 Términos de Servicio de Tatiana Discord AI Bot</h1>
      
      <div className="text-center mb-8">
        <p className="text-xl font-semibold">Última actualización: 24 de agosto de 2024</p>
      </div>

      <hr className="my-8 border-gray-300 dark:border-gray-700" />

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-cyan-500 dark:text-cyan-300">🤝 1. Aceptación de los Términos</h2>
        <p>Al utilizar Tatiana el bot, aceptas estos Términos de Servicio en su totalidad. Si no estás de acuerdo con alguna parte de estos términos, no debes usar el Bot.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-cyan-500 dark:text-cyan-300">🤖 2. Descripción del Servicio</h2>
        <p>Tatiana es un bot de Discord que utiliza inteligencia artificial para generar respuestas y ofrecer diversas funcionalidades a los usuarios de Discord.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-cyan-500 dark:text-cyan-300">✅ 3. Uso Aceptable</h2>
        <p>Te comprometes a utilizar el Bot de manera responsable y de acuerdo con estos términos y las políticas de Discord. Está prohibido:</p>
        <ul className="list-disc list-inside ml-4 mt-2">
          <li>🚫 Usar el Bot para fines ilegales o maliciosos.</li>
          <li>🚫 Intentar acceder, modificar o interferir con el funcionamiento del Bot.</li>
          <li>🚫 Utilizar el Bot para hostigar, abusar o dañar a otros usuarios.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-cyan-500 dark:text-cyan-300">🧠 4. Contenido Generado por IA</h2>
        <p>El Bot utiliza IA para generar contenido. No garantizamos la precisión, integridad o adecuación de este contenido para ningún propósito específico.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-cyan-500 dark:text-cyan-300">🔒 5. Privacidad</h2>
        <p>Tu uso del Bot está sujeto a nuestra <Link href="/privacy" className="text-cyan-600 dark:text-cyan-400 hover:underline">Política de Privacidad</Link>, que describe cómo recopilamos y utilizamos la información.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-cyan-500 dark:text-cyan-300">©️ 6. Propiedad Intelectual</h2>
        <p>El Bot y todo su contenido son propiedad de los desarrolladores. No se otorga ningún derecho de propiedad intelectual al usuario.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-cyan-500 dark:text-cyan-300">⚠️ 7. Limitación de Responsabilidad</h2>
        <p>El Bot se proporciona, sin garantías de ningún tipo. No nos hacemos responsables de ningún daño directo, indirecto, incidental o consecuente derivado del uso del Bot.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-cyan-500 dark:text-cyan-300">🔄 8. Modificaciones del Servicio</h2>
        <p>Nos reservamos el derecho de modificar, suspender o discontinuar el Bot en cualquier momento sin previo aviso.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-cyan-500 dark:text-cyan-300">📝 9. Cambios en los Términos</h2>
        <p>Podemos actualizar estos términos ocasionalmente. Te notificaremos sobre cambios significativos y la continuación del uso del Bot después de dichos cambios constituirá tu aceptación de los nuevos términos.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-cyan-500 dark:text-cyan-300">📞 10. Contacto</h2>
        <p>Si tienes preguntas sobre estos Términos de Servicio, contáctanos en isenkidu@gmail.com.</p>
      </section>

      <hr className="my-8 border-gray-300 dark:border-gray-700" />

      <div className="text-center mt-12">
        <Image src="https://img.shields.io/badge/Hecho%20con-❤️-ff69b4.svg" alt="Hecho con amor" width={120} height={20} className="inline-block" />
        <p className="mt-2">Desarrollado con pasión por ItsJhonAlex</p>
      </div>
    </div>
  );
};

export default Terms;