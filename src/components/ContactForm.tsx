import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import { z } from "zod";
import emailjs from '@emailjs/browser';

const ContactForm = ({ compact = false }) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "installation",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    // Atualizar o email de destino
    const emailData = {
      to: "geral@arrefecer.com",
      // ... resto da configuração do email
    }
    // ... resto do código
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Adicionar logs para debug
      console.log('Enviando dados:', formData);

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      // Verificar se a resposta é JSON
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        const data = await response.json();
        
        if (data.success) {
          toast({
            title: "Formulário enviado com sucesso!",
            description: "Em breve entraremos em contato consigo.",
          });

          setFormData({
            name: "",
            email: "",
            phone: "",
            service: "installation",
            message: "",
          });
        } else {
          throw new Error(data.error || 'Falha ao enviar email');
        }
      } else {
        // Se não for JSON, ler como texto
        const text = await response.text();
        console.error('Resposta não-JSON:', text);
        throw new Error('Resposta inválida do servidor');
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      toast({
        title: "Erro ao enviar formulário",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${compact ? "p-0" : "p-6 glass rounded-xl"}`}>
      {!compact && (
        <h3 className="text-xl font-semibold mb-6">Solicite um Orçamento Gratuito</h3>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Input
            type="text"
            name="name"
            placeholder="Nome completo *"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-white/80"
          />
        </div>
        <div>
          <Input
            type="email"
            name="email"
            placeholder="Email *"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-white/80"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Input
            type="tel"
            name="phone"
            placeholder="Telefone *"
            value={formData.phone}
            onChange={handleChange}
            required
            className="bg-white/80"
          />
        </div>
        <div>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full p-2 rounded-md border border-gray-300 bg-white/80 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          >
            <option value="installation">Instalação</option>
            <option value="maintenance">Manutenção</option>
            <option value="pre-installation">Pré-Instalação</option>
            <option value="purchase">Compra de Equipamento</option>
            <option value="other">Outro Serviço</option>
          </select>
        </div>
      </div>

      <Textarea
        name="message"
        placeholder="Mensagem *"
        value={formData.message}
        onChange={handleChange}
        className="min-h-[120px] bg-white/80"
        required
      />

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? (
          <div className="loading-dots flex space-x-1">
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <div className="w-2 h-2 rounded-full bg-white"></div>
          </div>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" /> Enviar Pedido
          </>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
