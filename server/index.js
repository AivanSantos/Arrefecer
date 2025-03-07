const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Configurar o transporter do Nodemailer
const transporter = nodemailer.createTransport({
  host: "seu-servidor-smtp", // exemplo: mail.arrefecer.com
  port: 587, // porta SMTP padrão
  secure: false, // true para 465, false para outras portas
  auth: {
    user: "geral@arrefecer.com",
    pass: "sua-senha-do-email"
  }
});

app.post('/api/contact', async (req, res) => {
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

    res.json({ success: true });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    res.status(500).json({ success: false, error: 'Erro ao enviar email' });
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
}); 