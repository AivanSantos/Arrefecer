const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.ZOHO_HOST,
  port: process.env.ZOHO_PORT,
  secure: false,
  auth: {
    user: process.env.ZOHO_USER,
    pass: process.env.ZOHO_PASS
  }
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, phone, service, message } = req.body;

  try {
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

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    res.status(500).json({ success: false, error: 'Erro ao enviar email' });
  }
} 