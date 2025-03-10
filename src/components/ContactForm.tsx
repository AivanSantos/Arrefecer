import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const ContactForm = ({ compact = false }) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/geral@arrefecer.com", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        toast({
          title: "Mensagem enviada com sucesso!",
          description: "Entraremos em contacto consigo brevemente.",
          variant: "default",
        });
        
        // Limpar o formulário
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error("Erro ao enviar mensagem");
      }
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className={`space-y-4 ${compact ? "p-0" : "p-6 glass rounded-xl"}`}
    >
      {/* FormSubmit Configurações */}
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />

      {!compact && (
        <h3 className="text-xl font-semibold mb-6">Solicite um Orçamento Gratuito</h3>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Input
            type="text"
            name="name"
            placeholder="Nome completo *"
            required
            className="bg-white/80"
          />
        </div>
        <div>
          <Input
            type="email"
            name="email"
            placeholder="Email *"
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
            required
            className="bg-white/80"
          />
        </div>
        <div>
          <select
            name="service"
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
        className="min-h-[120px] bg-white/80"
        required
      />

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        <Send className="mr-2 h-4 w-4" />
        {isSubmitting ? "A enviar..." : "Enviar Pedido"}
      </Button>
    </form>
  );
};

export default ContactForm;
