import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.ZOHO_HOST,
  port: Number(process.env.ZOHO_PORT),
  secure: false, // true para 465, false para outras portas
  auth: {
    user: process.env.ZOHO_USER,
    pass: process.env.ZOHO_PASS
  }
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Verificar método
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Método não permitido' });
  }

  try {
    const { name, email, phone, service, message } = req.body;

    // Validar dados
    if (!name || !email || !phone || !service || !message) {
      return res.status(400).json({ 
        success: false, 
        error: 'Todos os campos são obrigatórios' 
      });
    }

    // Enviar email
    await transporter.sendMail({
      from: '"Site Arrefecer" <geral@arrefecer.com>',
      to: "geral@arrefecer.com",
      subject: `Nova solicitação de orçamento - ${service}`,
      html: `
        <h2>Nova solicitação de orçamento</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Serviço:</strong> ${service}</p>
        <p><strong>Mensagem:</strong> ${message}</p>
      `
    });

    return res.status(200).json({ 
      success: true, 
      message: 'Email enviado com sucesso' 
    });

  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return res.status(500).json({ 
      success: false, 
      error: 'Erro ao enviar email. Por favor, tente novamente mais tarde.' 
    });
  }
} 