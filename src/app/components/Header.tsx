"use client"

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

export default function Header() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Verificar si hay una preferencia guardada
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    } else {
      setDarkMode(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">
            Tatiana Bot
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/features" className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition duration-300">
              Características
            </Link>
            <Link href="/docs" className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition duration-300">
              Documentación
            </Link>
            <Link href="/login" className="bg-cyan-500 dark:bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-600 dark:hover:bg-cyan-700 transition duration-300">
              Iniciar sesión
            </Link>
            <button 
              onClick={toggleDarkMode} 
              className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400"
              aria-label={darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            >
              {darkMode ? <FaMoon size={24} /> : <FaSun size={24} />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}