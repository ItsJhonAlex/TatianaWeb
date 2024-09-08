import BotStatus from '../components/BotStatus';

export default function StatusPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-cyan-600 dark:text-cyan-400">Estado de Tatiana Bot</h1>
      <BotStatus />
    </div>
  );
}