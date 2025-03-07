const SecurityPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Política de Segurança</h1>
      <div className="prose max-w-none">
        <h2>Relatório de Vulnerabilidades</h2>
        <p>
          Agradecemos o seu interesse em ajudar a manter a segurança do nosso site.
          Se você descobrir uma vulnerabilidade de segurança, por favor:
        </p>
        <ul>
          <li>Envie um email para geral@arrefecer.com</li>
          <li>Forneça detalhes suficientes para reproduzir o problema</li>
          <li>Não explore a vulnerabilidade além do necessário para demonstrá-la</li>
        </ul>
        
        <h2>O que esperamos</h2>
        <ul>
          <li>Não realizar ataques que possam impactar a disponibilidade do serviço</li>
          <li>Não acessar ou modificar dados de outros usuários</li>
          <li>Não divulgar a vulnerabilidade antes de sua correção</li>
        </ul>
        
        <h2>O que oferecemos</h2>
        <ul>
          <li>Reconhecimento na nossa página de agradecimentos</li>
          <li>Confirmação de recebimento em até 48 horas</li>
          <li>Atualizações regulares sobre o status da correção</li>
        </ul>
      </div>
    </div>
  );
};

export default SecurityPolicy; 