import Hero from './components/Hero';
import Features from './components/Features';
import BotStatus from './components/BotStatus';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Hero />
      <Features />
      <div className="py-12">
        <BotStatus />
      </div>
    </main>
  );
}