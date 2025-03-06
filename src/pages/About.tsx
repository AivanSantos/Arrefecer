import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Shield, Award, Users, Zap, Clock, Smile } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Sobre Nós | Arrefecer.com - Ar-Condicionado em Portugal";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-arrefecer-600 to-blue-700 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Sobre a Arrefecer</h1>
            <p className="max-w-2xl text-lg opacity-90">
              Conheça nossa missão e compromisso com a excelência em soluções de ar-condicionado para todo Portugal.
            </p>
          </div>
        </div>
        
        {/* Our Story */}
        
        
        {/* Mission and Values */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">Nossa Missão e Valores</h2>
              <p className="text-gray-600">
                Guiados por princípios sólidos, trabalhamos para proporcionar o melhor conforto térmico 
                com responsabilidade ambiental e compromisso com nossos clientes.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="bg-blue-50 p-4 rounded-full inline-flex mb-4">
                  <Shield className="h-8 w-8 text-arrefecer-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Confiabilidade</h3>
                <p className="text-gray-600">
                  Comprometemo-nos com a transparência e honestidade em todos os nossos serviços, 
                  construindo relações de confiança duradouras com nossos clientes.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="bg-blue-50 p-4 rounded-full inline-flex mb-4">
                  <Award className="h-8 w-8 text-arrefecer-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Excelência</h3>
                <p className="text-gray-600">
                  Buscamos a excelência em tudo o que fazemos, desde a seleção dos melhores equipamentos 
                  até a perfeição técnica em instalação e manutenção.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="bg-blue-50 p-4 rounded-full inline-flex mb-4">
                  <Users className="h-8 w-8 text-arrefecer-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Foco no Cliente</h3>
                <p className="text-gray-600">
                  Colocamos nossos clientes no centro de tudo, oferecendo soluções personalizadas 
                  e atendimento que supera expectativas.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">Por Que Escolher a Arrefecer ?</h2>
              <p className="text-gray-600">
                Descubra as razões que fazem de nós a escolha preferida para soluções de ar-condicionado em Portugal.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex items-start">
                <div className="bg-blue-50 p-3 rounded-full mr-4 flex-shrink-0">
                  <Zap className="h-6 w-6 text-arrefecer-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Equipe Especializada</h3>
                  <p className="text-gray-600">
                    Nossa equipe é composta por técnicos certificados e experientes, garantindo um trabalho de qualidade superior.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-50 p-3 rounded-full mr-4 flex-shrink-0">
                  <Clock className="h-6 w-6 text-arrefecer-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Atendimento Rápido</h3>
                  <p className="text-gray-600">
                    Valorizamos o seu tempo e respondemos rapidamente às suas necessidades, com agendamentos flexíveis.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-50 p-3 rounded-full mr-4 flex-shrink-0">
                  <Award className="h-6 w-6 text-arrefecer-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Garantia de Qualidade</h3>
                  <p className="text-gray-600">
                    Oferecemos garantia em todos os nossos serviços e trabalhamos apenas com equipamentos de qualidade comprovada.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-50 p-3 rounded-full mr-4 flex-shrink-0">
                  <Shield className="h-6 w-6 text-arrefecer-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Segurança e Confiança</h3>
                  <p className="text-gray-600">
                    Todos os nossos processos seguem rigorosos padrões de segurança, protegendo você e sua propriedade.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-50 p-3 rounded-full mr-4 flex-shrink-0">
                  <Smile className="h-6 w-6 text-arrefecer-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Satisfação Garantida</h3>
                  <p className="text-gray-600">
                    Nossa maior conquista é a satisfação dos nossos clientes, comprovada por avaliações positivas e indicações.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-50 p-3 rounded-full mr-4 flex-shrink-0">
                  <Users className="h-6 w-6 text-arrefecer-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Suporte Contínuo</h3>
                  <p className="text-gray-600">
                    Estamos sempre disponíveis para responder dúvidas e oferecer suporte, antes e depois da instalação.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-gradient-to-r from-arrefecer-600 to-blue-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Pronto para Experimentar Nossos Serviços?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Entre em contato conosco hoje mesmo para um orçamento gratuito e descubra como podemos melhorar o conforto térmico do seu ambiente.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Fale Conosco</Link>
            </Button>
          </div>
        </section>

        {/* Áreas de Atuação */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Áreas de Atuação</h2>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
