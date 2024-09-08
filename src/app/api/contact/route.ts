import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  console.log('Solicitud POST recibida en /api/contact');
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'isenkidu@gmail.com',
    subject: `Nuevo mensaje de contacto de ${name}`,
    text: `
      Nombre: ${name}
      Email: ${email}
      Mensaje: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Correo enviado con éxito' }, { status: 200 });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return NextResponse.json({ error: 'Error al enviar el correo' }, { status: 500 });
  }
}