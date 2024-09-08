import { NextResponse } from 'next/server';

export async function GET() {
  // Aquí deberías implementar la lógica real para obtener el estado del bot
  // Por ahora, usaremos datos de ejemplo
  const botStatus = {
    isOnline: true,
    serverCount: 100,
    uptime: '2 días, 3 horas',
  };

  return NextResponse.json(botStatus);
}