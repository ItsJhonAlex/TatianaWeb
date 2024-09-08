'use client';

import React, { useState } from 'react';
import { FaBook, FaHandshake, FaCode, FaBug, FaCog, FaTerminal } from 'react-icons/fa';

interface DocSection {
  title: string;
  content: string;
  icon: React.ElementType;
}

const docSections: DocSection[] = [
  {
    title: "Código de Conducta",
    content: `
      <h2>🤝 Nuestro Compromiso</h2>
      <p>En el interés de fomentar un ambiente abierto y acogedor, nosotros como contribuidores y mantenedores nos comprometemos a hacer de la participación en nuestro proyecto y nuestra comunidad una experiencia libre de acoso para todos, independientemente de:</p>
      <ul>
        <li>🌍 Edad, tamaño corporal, discapacidad visible o invisible, etnia, características sexuales, identidad y expresión de género</li>
        <li>🎓 Nivel de experiencia, educación, estatus socioeconómico, nacionalidad</li>
        <li>👤 Apariencia personal, raza, casta, color, religión, o identidad y orientación sexual</li>
      </ul>

      <h2>🌟 Nuestros Estándares</h2>
      <p>Ejemplos de comportamiento que contribuyen a crear un ambiente positivo:</p>
      <ul>
        <li>🗣️ Uso de lenguaje amable e inclusivo</li>
        <li>🤔 Respeto a diferentes puntos de vista y experiencias</li>
        <li>🤝 Aceptación de críticas constructivas</li>
        <li>🎯 Enfocarse en lo que es mejor para la comunidad</li>
        <li>💖 Mostrar empatía hacia otros miembros de la comunidad</li>
      </ul>

      <p>Ejemplos de comportamiento inaceptable:</p>
      <ul>
        <li>🚫 Uso de lenguaje o imágenes sexualizadas y atención sexual no deseada</li>
        <li>🧨 Comentarios insultantes o despectivos, y ataques personales o políticos</li>
        <li>😠 Acoso público o privado</li>
        <li>🕵️ Publicación de información privada de terceros sin su consentimiento</li>
        <li>🦹 Otras conductas que pudieran considerarse inapropiadas en un entorno profesional</li>
      </ul>

      <h2>🛡️ Nuestras Responsabilidades</h2>
      <p>Los mantenedores del proyecto son responsables de aclarar los estándares de comportamiento aceptable y se espera que tomen medidas correctivas y apropiadas en respuesta a situaciones de conducta inaceptable.</p>

      <h2>🌐 Alcance</h2>
      <p>Este Código de Conducta aplica tanto a espacios del proyecto como a espacios públicos cuando un individuo esté representando al proyecto o su comunidad.</p>

      <h2>🚨 Aplicación</h2>
      <p>Casos de abuso, acoso u otro tipo de comportamiento inaceptable pueden ser reportados contactando al equipo del proyecto en <a href="mailto:isenkidu@gmail.com">isenkidu@gmail.com</a>.</p>
    `,
    icon: FaHandshake
  },
  {
    title: "Configuración del Entorno",
    content: `
      <h2>🛠 Configuración del Entorno de Desarrollo</h2>
      <ol>
        <li><strong>Clona el repositorio:</strong>
          <pre><code>git clone https://github.com/ItsJhonAlex/TatianaBot.git
cd TatianaBot</code></pre>
        </li>
        <li><strong>Crea un entorno virtual:</strong>
          <pre><code>python -m venv venv
source venv/bin/activate  # En Windows: venv\\Scripts\\activate</code></pre>
        </li>
        <li><strong>Instala las dependencias:</strong>
          <pre><code>pip install -r requirements.txt</code></pre>
        </li>
        <li><strong>Configura las variables de entorno:</strong>
          <p>Crea un archivo <code>.env</code> en la raíz del proyecto con el siguiente contenido:</p>
          <pre><code>DISCORD_TOKEN=tu_token_de_discord
GEMINI_API_KEY=tu_clave_api_de_gemini
CHANNEL_ID=id_del_canal_principal
AUTHORIZED_USER_ID=tu_id_de_usuario
STATUS_CHANNEL_ID=id_del_canal_de_estado</code></pre>
        </li>
        <li><strong>Inicia el bot:</strong>
          <pre><code>python main.py</code></pre>
        </li>
      </ol>
    `,
    icon: FaCog
  },
  {
    title: "Estructura del Proyecto",
    content: `
      <h2>📁 Estructura del Proyecto</h2>
      <pre>
TatianaBot/
├── src/
│   ├── bot/
│   ├── chat/
│   ├── config/
│   ├── core/
│   ├── data/
│   ├── plugins/
│   │   └── commands/
│   └── utils/
├── docs/
├── tests/
├── .env
├── main.py
├── README.md
└── requirements.txt
      </pre>
    `,
    icon: FaBook
  },
  {
    title: "Guía de Desarrollo",
    content: `
      <h2>💻 Guía de Desarrollo</h2>

      <h3>🔌 Creación de Plugins</h3>
      <ol>
        <li>Crea un nuevo archivo Python en <code>src/plugins/</code></li>
        <li>Define tu clase de plugin heredando de <code>commands.Cog</code></li>
        <li>Implementa tus comandos usando <code>@app_commands.command()</code></li>
        <li>Asegúrate de incluir la propiedad <code>name</code> y el método <code>get_commands()</code></li>
        <li>El bot cargará automáticamente tu plugin al iniciar</li>
      </ol>

      <h4>Ejemplo de Plugin:</h4>
      <pre><code>
import discord
from discord import app_commands
from discord.ext import commands

class EjemploPlugin(commands.Cog):
    """
    Este es un plugin de ejemplo que muestra cómo crear un nuevo comando.
    """
    name = "🔧 Ejemplo"

    def __init__(self, bot):
        self.bot = bot

    @app_commands.command(name="saludar", description="Saluda al usuario")
    async def saludar(self, interaction: discord.Interaction):
        await interaction.response.send_message(f"¡Hola, {interaction.user.name}!")

    def get_commands(self):
        return [command for command in self.bot.tree.walk_commands() if command.binding == self]

async def setup(bot):
    await bot.add_cog(EjemploPlugin(bot))
      </code></pre>

      <h3>⚙️ Personalización del Bot</h3>
      <ul>
        <li><strong>Configuración global:</strong> Modifica <code>src/config/settings.py</code></li>
        <li><strong>Integración con IA:</strong> Ajusta <code>src/chat/gemini_interface.py</code></li>
        <li><strong>Sistema de ayuda:</strong> Personaliza <code>src/plugins/help.py</code></li>
      </ul>

      <h3>📝 Comandos con Prefijo</h3>
      <p>Los comandos con prefijo se manejan en archivos separados dentro de <code>src/plugins/commands/</code>.</p>

      <h4>Ejemplo de Comando con Prefijo:</h4>
      <pre><code>
from discord.ext import commands
import discord
import random

class EjemploComandos(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.command(name="saludo", description="Saluda al usuario")
    async def saludo(self, ctx):
        await ctx.send(f"¡Hola, {ctx.author.name}!")

    @commands.command(name="dado", description="Tira un dado")
    async def dado(self, ctx):
        resultado = random.randint(1, 6)
        await ctx.send(f"🎲 El dado cayó en: {resultado}")

async def setup(bot):
    await bot.add_cog(EjemploComandos(bot))
      </code></pre>
    `,
    icon: FaCode
  },
  {
    title: "Estilo de Código",
    content: `
      <h2>🎨 Estilo de Código</h2>
      <ul>
        <li>Sigue las convenciones de <a href="https://www.python.org/dev/peps/pep-0008/" target="_blank">PEP 8</a> para el estilo de código Python.</li>
        <li>Utiliza nombres descriptivos para variables, funciones y clases.</li>
        <li>Comenta tu código cuando sea necesario, especialmente para lógica compleja.</li>
        <li>Utiliza docstrings para documentar clases y funciones.</li>
      </ul>
    `,
    icon: FaTerminal
  },
  {
    title: "Proceso de Contribución",
    content: `
      <h2>🔄 Proceso de Contribución</h2>
      <ol>
        <li>Crea un fork del repositorio.</li>
        <li>Verifica que el problema no haya sido reportado anteriormente.</li>
        <li>Abre un nuevo <a href="https://github.com/ItsJhonAlex/TatianaBot/issues/new" target="_blank">issue</a> en GitHub.</li>
        <li>Proporciona una descripción clara del problema.</li>
        <li>Incluye pasos para reproducir el bug.</li>
        <li>Si es posible, adjunta capturas de pantalla o logs relevantes.</li>
      </ol>
      
      <h2>Sugerencias de Mejora</h2>
      <p>Si tienes una idea para mejorar el bot:</p>
      <ol>
        <li>Abre un nuevo issue etiquetado como "mejora" o "feature request".</li>
        <li>Describe detalladamente tu idea y cómo beneficiaría al proyecto.</li>
        <li>Si es posible, proporciona ejemplos o mockups de la funcionalidad propuesta.</li>
      </ol>
    `,
    icon: FaBug
  }
];

const Documentation: React.FC = () => {
  const [activeSection, setActiveSection] = useState<number>(0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-cyan-600 dark:text-cyan-400">Documentación de Tatiana Bot</h1>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4 mb-4 md:mb-0">
          <ul className="space-y-2">
            {docSections.map((section, index) => (
              <li key={index}>
                <button
                  onClick={() => setActiveSection(index)}
                  className={`flex items-center w-full p-2 rounded ${
                    activeSection === index
                      ? 'bg-cyan-500 text-white'
                      : 'hover:bg-cyan-100 dark:hover:bg-cyan-800'
                  }`}
                >
                  <section.icon className="mr-2" />
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-3/4 md:pl-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">{docSections[activeSection].title}</h2>
            <div dangerouslySetInnerHTML={{ __html: docSections[activeSection].content }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;