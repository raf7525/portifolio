import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', // Endereço de envio padrão para testes
      to: ['rafaplanisa37@gmail.com'], // Seu e-mail pessoal aqui
      subject: `Nova Mensagem de Contato de ${name}`,
      html: `<p>Você recebeu uma nova mensagem de <strong>${name}</strong> (${email}):</p><p>${message}</p>`,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: 'E-mail enviado com sucesso!', data });
  } catch (error) {
    return NextResponse.json({ error: 'Ocorreu um erro inesperado.' }, { status: 500 });
  }
}