
import { Phone, Mail, MessageCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const ContactCTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-arrefecer-700 to-arrefecer-900 opacity-90 -z-10"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639254651746-51c9de638154?q=80&w=1974&auto=format')] bg-cover bg-center opacity-10 -z-20"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-6">Peça um Orçamento Gratuito</h2>
            <p className="mb-8 text-white/80 max-w-lg">
              Preencha o formulário e nossa equipe entrará em contato o mais breve possível para entender suas necessidades e oferecer a melhor solução.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-white/10 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Telefone</h3>
                  <a href="tel:+351962827946" className="text-white/80 hover:text-white transition-colors">
                    +351 962 827 946
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-white/10 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Email</h3>
                  <a href="mailto:geral@arrefecer.com" className="text-white/80 hover:text-white transition-colors">
                    geral@arrefecer.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-white/10 p-3 rounded-full mr-4">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">WhatsApp</h3>
                  <a 
                    href="https://wa.me/351962827946" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Enviar mensagem
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
