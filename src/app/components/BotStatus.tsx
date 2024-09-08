'use client';

import React, { useState, useEffect } from 'react';

interface BotStatusData {
  isOnline: boolean;
  serverCount: number;
  uptime: string;
  // Puedes añadir más campos según lo que quieras mostrar
}

const BotStatus: React.FC = () => {
  const [status, setStatus] = useState<BotStatusData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch('/api/bot-status');
        if (!response.ok) {
          throw new Error('Failed to fetch bot status');
        }
        const data: BotStatusData = await response.json();
        setStatus(data);
      } catch (error) {
        console.error('Error fetching bot status:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();
    // Actualiza el estado cada 60 segundos
    const intervalId = setInterval(fetchStatus, 60000);

    return () => clearInterval(intervalId);
  }, []);

  if (loading) {
    return <div className="text-center">Cargando estado del bot...</div>;
  }

  if (!status) {
    return <div className="text-center">No se pudo cargar el estado del bot.</div>;
  }

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-cyan-600 dark:text-cyan-400">Estado de Tatiana Bot</h2>
      <div className="space-y-2">
        <p className="flex justify-between">
          <span>Estado:</span>
          <span className={status.isOnline ? 'text-green-500' : 'text-red-500'}>
            {status.isOnline ? 'En línea' : 'Fuera de línea'}
          </span>
        </p>
        <p className="flex justify-between">
          <span>Servidores:</span>
          <span>{status.serverCount}</span>
        </p>
        <p className="flex justify-between">
          <span>Tiempo activo:</span>
          <span>{status.uptime}</span>
        </p>
      </div>
    </div>
  );
};

export default BotStatus;
