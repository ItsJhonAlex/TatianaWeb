import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Header from './components/Header'
import Footer from './components/Footer'
import Script from 'next/script'

const poppins = localFont({
  src: [
    {
      path: '../../public/fonts/Poppins-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Poppins-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Poppins-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Poppins-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
})

export const metadata: Metadata = {
  title: 'Tatiana Bot - Tu asistente de Discord',
  description: 'Tatiana Bot - El asistente mágico para tu servidor de Discord',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            (function() {
              function getInitialColorMode() {
                const persistedColorPreference = window.localStorage.getItem('theme');
                const hasPersistedPreference = typeof persistedColorPreference === 'string';
                if (hasPersistedPreference) {
                  return persistedColorPreference;
                }
                const mql = window.matchMedia('(prefers-color-scheme: dark)');
                const hasMediaQueryPreference = typeof mql.matches === 'boolean';
                if (hasMediaQueryPreference) {
                  return mql.matches ? 'dark' : 'light';
                }
                return 'light';
              }
              const colorMode = getInitialColorMode();
              document.documentElement.classList.toggle('dark', colorMode === 'dark');
            })()
          `}
        </Script>
      </head>
      <body className={`${poppins.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}