
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Snowflake, Wind, Wrench, ArrowRight, ShoppingBag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Serviços | Arrefecer.com - Ar-Condicionado em Portugal";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-arrefecer-600 to-blue-700 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Nossos Serviços</h1>
            <p className="max-w-2xl text-lg opacity-90">
              Oferecemos um conjunto completo de serviços para garantir o melhor conforto térmico para sua casa ou negócio, 
              com qualidade e profissionalismo.
            </p>
          </div>
        </div>
        
        {/* Services Section */}
        <section className="py-16" id="venda">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
              <div className="order-2 md:order-1">
                <div className="bg-blue-50 inline-flex p-3 rounded-full mb-4">
                  <ShoppingBag className="h-6 w-6 text-arrefecer-600" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Venda de Equipamentos</h2>
                <p className="text-gray-600 mb-6">
                  Na Arrefecer.com, oferecemos uma ampla variedade de equipamentos de ar-condicionado das melhores marcas do mercado. 
                  Nossa equipe especializada ajuda você a escolher o modelo ideal para suas necessidades, considerando o tamanho do ambiente, 
                  eficiência energética e orçamento.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-arrefecer-500 mr-2">✓</span>
                    <span>Equipamentos de diversas marcas e modelos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-arrefecer-500 mr-2">✓</span>
                    <span>Garantia de fábrica em todos os produtos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-arrefecer-500 mr-2">✓</span>
                    <span>Assistência técnica especializada</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-arrefecer-500 mr-2">✓</span>
                    <span>Aconselhamento personalizado</span>
                  </li>
                </ul>
                <Button asChild>
                  <Link to="/products">Ver Equipamentos</Link>
                </Button>
              </div>
              <div className="order-1 md:order-2">
                <img 
                  src="https://www.estadao.com.br/recomenda/wp-content/uploads/2023/10/Como-escolher-o-melhor-ar-condicionado-Conheca-5-modelos-que-se-destacam.jpg.webp"
                  alt="Venda de Equipamentos" 
                  className="rounded-lg shadow-lg w-full h-auto object-cover aspect-video"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-24" id="instalacao">
              <div>
                <img 
                  src=""
                  alt="Instalação de Ar-Condicionado" 
                  className="rounded-lg shadow-lg w-full h-auto object-cover aspect-video"
                />
              </div>
              <div>
                <div className="bg-blue-50 inline-flex p-3 rounded-full mb-4">
                  <Wrench className="h-6 w-6 text-arrefecer-600" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Instalação</h2>
                <p className="text-gray-600 mb-6">
                  A instalação correta é fundamental para o bom funcionamento e durabilidade do seu ar-condicionado. 
                  Nossa equipe técnica garante uma instalação profissional, seguindo todas as normas técnicas e de segurança.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-arrefecer-500 mr-2">✓</span>
                    <span>Técnicos certificados e experientes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-arrefecer-500 mr-2">✓</span>
                    <span>Instalação de acordo com as normas técnicas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-arrefecer-500 mr-2">✓</span>
                    <span>Teste completo após a instalação</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-arrefecer-500 mr-2">✓</span>
                    <span>Orientação de uso e manutenção</span>
                  </li>
                </ul>
                <Button asChild>
                  <Link to="/contact">Solicitar Orçamento</Link>
                </Button>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-24" id="manutencao">
              <div className="order-2 md:order-1">
                <div className="bg-blue-50 inline-flex p-3 rounded-full mb-4">
                  <Wrench className="h-6 w-6 text-arrefecer-600" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Manutenção</h2>
                <p className="text-gray-600 mb-6">
                  A manutenção regular é essencial para garantir o desempenho eficiente e prolongar a vida útil do seu ar-condicionado. 
                  Oferecemos planos de manutenção preventiva e serviços de manutenção corretiva para todos os tipos de sistemas.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-arrefecer-500 mr-2">✓</span>
                    <span>Limpeza de filtros e componentes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-arrefecer-500 mr-2">✓</span>
                    <span>Verificação de gás refrigerante</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-arrefecer-500 mr-2">✓</span>
                    <span>Diagnóstico de problemas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-arrefecer-500 mr-2">✓</span>
                    <span>Planos de manutenção periódica</span>
                  </li>
                </ul>
                <Button asChild>
                  <Link to="/contact">Agendar Manutenção</Link>
                </Button>
              </div>
              <div className="order-1 md:order-2">
                <img 
                  src="https://img.freepik.com/fotos-gratis/close-up-do-trabalhador-operando-uma-maquina-industrial-em-uma-fabrica_637285-4184.jpg?t=st=1741320018~exp=1741323618~hmac=78f44d64ef54b6a6046655c6117bae5e481c6c503a8e21fbc408a6766d51952f&w=1060"
                  alt="Manutenção de Ar-Condicionado" 
                  className="rounded-lg shadow-lg w-full h-auto object-cover aspect-video"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center" id="pre-instalacao">
              <div>
                <img 
                  src="https://fluxoconsultoria.poli.ufrj.br/wp-content/uploads/2023/05/image-4.webp"
                  alt="Pré-Instalação de Ar-Condicionado" 
                  className="rounded-lg shadow-lg w-full h-auto object-cover aspect-video"
                />
              </div>
              <div>
                <div className="bg-blue-50 inline-flex p-3 rounded-full mb-4">
                  <Wind className="h-6 w-6 text-arrefecer-600" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Pré-Instalação</h2>
                <p className="text-gray-600 mb-6">
                  A pré-instalação é uma opção ideal para quem está construindo ou reformando. Preparamos toda a infraestrutura 
                  necessária para a futura instalação do aparelho de ar-condicionado, evitando quebra-quebra posterior.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-arrefecer-500 mr-2">✓</span>
                    <span>Planejamento de infraestrutura</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-arrefecer-500 mr-2">✓</span>
                    <span>Instalação de tubulações e suportes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-arrefecer-500 mr-2">✓</span>
                    <span>Preparação de pontos elétricos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-arrefecer-500 mr-2">✓</span>
                    <span>Integração com o projeto arquitetônico</span>
                  </li>
                </ul>
                <Button asChild>
                  <Link to="/contact">Solicitar Orçamento</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Precisa de Ajuda com Seu Ar-Condicionado?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Nossa equipe está pronta para ajudar com qualquer necessidade relacionada ao seu sistema de ar-condicionado.
              Entre em contato para um orçamento gratuito.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Fale Conosco</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Services;
