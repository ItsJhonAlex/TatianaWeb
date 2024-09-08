import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-cyan-800 dark:bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2023 Tatiana Bot. Todos los derechos reservados.</p>
          </div>
          <div className="flex space-x-4">
            <Link href="/privacy" className="hover:text-cyan-300 dark:hover:text-cyan-400 transition duration-300">
              Política de privacidad
            </Link>
            <Link href="/terms" className="hover:text-cyan-300 dark:hover:text-cyan-400 transition duration-300">
              Términos de servicio
            </Link>
            <Link href="/contact" className="hover:text-cyan-300 dark:hover:text-cyan-400 transition duration-300">
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}