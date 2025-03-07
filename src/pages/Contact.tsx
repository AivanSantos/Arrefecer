
import { useEffect } from "react";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contacto | Arrefecer.com - Ar-Condicionado em Portugal";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-arrefecer-600 to-blue-700 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Entre em Contacto</h1>
            <p className="max-w-2xl text-lg opacity-90">
              Estamos disponíveis para esclarecer suas dúvidas e ajudar com soluções 
              personalizadas para suas necessidades de climatização.
            </p>
          </div>
        </div>
        
        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Informações de Contacto</h2>
                <p className="text-gray-600 mb-8">
                  Entre em contacto conosco por telefone, e-mail ou WhatsApp. Estamos 
                  disponíveis para atendê-lo e responder a todas as suas perguntas sobre 
                  nossos serviços de ar-condicionado.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-50 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-arrefecer-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Telefone</h3>
                      <a href="tel:+351962827946" className="text-gray-600 hover:text-arrefecer-600 transition-colors">
                        +351 962 827 946
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-50 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-arrefecer-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email</h3>
                      <a href="mailto:geral@arrefecer.com" className="text-gray-600 hover:text-arrefecer-600 transition-colors">
                        geral@arrefecer.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-50 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-arrefecer-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Localização</h3>
                      <p className="text-gray-600">
                        Prestamos serviços em todo o território de Portugal
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-50 p-3 rounded-full mr-4">
                      <MessageCircle className="h-6 w-6 text-arrefecer-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">WhatsApp</h3>
                      <a 
                        href="https://wa.me/351962827946" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-arrefecer-600 transition-colors"
                      >
                        +351 962 827 946
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-50 p-3 rounded-full mr-4">
                      <Clock className="h-6 w-6 text-arrefecer-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Horário de Atendimento</h3>
                      <p className="text-gray-600">
                        Segunda a Sexta: 9h às 18h<br />
                        Sábado: 9h às 13h
                      </p>
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
        
        {/* Map Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Áreas de Atuação</h2>
              <p className="text-gray-600">
                Prestamos serviços em todo Portugal, com atuação principal nas seguintes regiões:
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold text-lg mb-2">Lisboa e Vale do Tejo</h3>
                <p className="text-gray-600">
                  Lisboa, Cascais, Sintra, Oeiras, Almada, Setúbal
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold text-lg mb-2">Norte</h3>
                <p className="text-gray-600">
                  Porto, Braga, Guimarães, Viana do Castelo
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold text-lg mb-2">Centro</h3>
                <p className="text-gray-600">
                  Coimbra, Aveiro, Leiria, Viseu
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold text-lg mb-2">Sul</h3>
                <p className="text-gray-600">
                  Faro, Albufeira, Portimão, Lagos
                </p>
              </div>
            </div>
            
           
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
