import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-700 dark:to-blue-700 text-white py-20">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold mb-4">Conoce a Tatiana</h1>
          <p className="text-xl mb-8">Tu asistente mágico para Discord, lista para hacer brillar tu servidor</p>
          <Link href="/invite" className="bg-white text-cyan-500 dark:bg-cyan-200 dark:text-cyan-800 px-6 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300">
            Invitar a Tatiana
          </Link>
        </div>
        <div className="hidden md:block">
          <Image src="/tatiana-avatar.png" alt="Tatiana" width={300} height={300} className="rounded-full" />
        </div>
      </div>
    </div>
  )
}