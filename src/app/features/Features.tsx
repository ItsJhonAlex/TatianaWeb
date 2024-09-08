'use client';

import React, { useState } from 'react';
import { FaRobot, FaBrain, FaPuzzlePiece, FaBook, FaCog, FaBug, FaHashtag, FaChartBar, FaShieldAlt, FaPaw, FaYinYang, FaCoins } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface Feature {
  title: string;
  description: string;
  icon: IconType;
  details: string[];
}

const features: Feature[] = [
  {
    title: 'Integración con Discord',
    description: 'Perfecta integración con Discord usando discord.py',
    icon: FaRobot,
    details: ['Soporte para comandos con prefijo y comandos de barra (/)', 'Interacción fluida con los usuarios']
  },
  {
    title: 'Inteligencia Artificial',
    description: 'Generación de respuestas inteligentes con Gemini AI',
    icon: FaBrain,
    details: ['Conversaciones naturales y contextuales', 'Adaptación a diferentes temas y estilos de conversación']
  },
  {
    title: 'Arquitectura Modular',
    description: 'Sistema de plugins automáticos para fácil expansión',
    icon: FaPuzzlePiece,
    details: ['Fácil adición de nuevas funcionalidades', 'Organización clara del código']
  },
  {
    title: 'Sistema de Ayuda Interactivo',
    description: 'Menú de categorías y paginación para fácil navegación',
    icon: FaBook,
    details: ['Explicaciones detalladas de comandos', 'Categorización intuitiva de funcionalidades']
  },
  {
    title: 'Configuración Centralizada',
    description: 'Fácil personalización de las funciones del bot',
    icon: FaCog,
    details: ['Ajustes globales y por servidor', 'Interfaz de configuración intuitiva']
  },
  {
    title: 'Manejo de Errores',
    description: 'Sistema robusto de logging y manejo de excepciones',
    icon: FaBug,
    details: ['Detección y reporte de errores', 'Logs detallados para fácil depuración']
  },
  {
    title: 'Comandos Avanzados',
    description: 'Soporte para comandos con prefijo y comandos de barra (/)',
    icon: FaHashtag,
    details: ['Flexibilidad en el uso de comandos', 'Compatibilidad con diferentes estilos de interacción']
  },
  {
    title: 'Panel de Estado',
    description: 'Visualización atractiva del estado del bot',
    icon: FaChartBar,
    details: ['Estadísticas en tiempo real', 'Monitoreo de rendimiento y uso']
  },
  {
    title: 'Sistema de Automod',
    description: 'Moderación automática avanzada',
    icon: FaShieldAlt,
    details: ['Detección de spam y palabras prohibidas', 'Acciones automáticas configurables']
  },
  {
    title: 'Sistema de Pokémon',
    description: 'Captura de Pokémon con inventario y estadísticas',
    icon: FaPaw,
    details: ['Colección de Pokémon virtuales', 'Batallas y evoluciones']
  },
  {
    title: 'Sistema de Yu-Gi-Oh!',
    description: 'Obtención aleatoria de cartas y gestión de deck',
    icon: FaYinYang,
    details: ['Colección de cartas virtuales', 'Duelos entre usuarios']
  },
  {
    title: 'Sistema de Economía',
    description: 'Monedas virtuales y recompensas',
    icon: FaCoins,
    details: ['Tienda virtual', 'Sistema de trabajo y recompensas diarias']
  }
];

interface FeatureCardProps {
  feature: Feature;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, isOpen, toggleOpen }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-4">
    <div className="flex items-center justify-between cursor-pointer" onClick={toggleOpen}>
      <div className="flex items-center">
        <feature.icon className="text-3xl text-cyan-500 mr-4" />
        <h3 className="text-xl font-semibold">{feature.title}</h3>
      </div>
      <span className="text-2xl">{isOpen ? '−' : '+'}</span>
    </div>
    {isOpen && (
      <div className="mt-4">
        <p className="text-gray-600 dark:text-gray-300 mb-2">{feature.description}</p>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
          {feature.details.map((detail: string, index: number) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

const Features: React.FC = () => {
  const [openFeature, setOpenFeature] = useState<number | null>(null);

  const toggleFeature = (index: number) => {
    setOpenFeature(openFeature === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-cyan-600 dark:text-cyan-400">Características de Tatiana Bot</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature: Feature, index: number) => (
          <FeatureCard
            key={index}
            feature={feature}
            isOpen={openFeature === index}
            toggleOpen={() => toggleFeature(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
