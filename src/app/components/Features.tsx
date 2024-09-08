import { FaMagic, FaCog, FaRobot } from 'react-icons/fa'

export default function Features() {
    const features = [
      { title: 'Magia de moderación', description: 'Mantén tu servidor seguro y ordenado con un toque mágico', icon: FaMagic },
      { title: 'Comandos personalizables', description: 'Adapta a Tatiana a las necesidades únicas de tu comunidad', icon: FaCog },
      { title: 'Asistente IA', description: 'Interactúa con una IA amigable y siempre dispuesta a ayudar', icon: FaRobot },
    ]

    return (
      <div className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-cyan-600 dark:text-cyan-400 mb-8">Características mágicas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <feature.icon className="text-4xl text-cyan-500 dark:text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-cyan-700 dark:text-cyan-300">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
}