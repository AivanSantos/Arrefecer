import { Link } from "react-router-dom";
import { Snowflake, Wrench, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-24 lg:pt-32 pb-16 lg:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-arrefecer-50 to-blue-50 -z-10"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1608077640671-d105f36a566c?q=80&w=2070&auto=format')] bg-cover bg-center opacity-[0.03] -z-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <Button asChild size="lg" className="bg-arrefecer-100 text-arrefecer-700 px-4 py-1 rounded-full text-sm font-medium inline-block mb-6 hover:bg-arrefecer-200">
              <Link to="/contact">
                Solicite o seu orçamento
              </Link>
            </Button>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Soluções Especializadas em Climatização
            </h1>
            
            <p className="text-gray-600 text-lg mb-8 max-w-lg">
              Oferecemos soluções completas de venda, instalação e manutenção de sistemas de ar-condicionado para sua residência ou negócio.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full bg-arrefecer-700 hover:bg-arrefecer-800">
                <Link to="/contact">
                  Solicitar Orçamento
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="rounded-full border-arrefecer-700 text-arrefecer-700 hover:bg-arrefecer-50">
                <Link to="/products">
                  <ShoppingBag className="mr-2 h-5 w-5" /> Ver Produtos
                </Link>
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="bg-white/80 rounded-full p-3 mb-3">
                  <span className="text-arrefecer-700 font-bold text-xl">750+</span>
                </div>
                <span className="text-sm text-gray-600">Instalações</span>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-white/80 rounded-full p-3 mb-3">
                  <span className="text-arrefecer-700 font-bold text-xl">1000+</span>
                </div>
                <span className="text-sm text-gray-600">Clientes</span>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-white/80 rounded-full p-3 mb-3">
                  <span className="text-arrefecer-700 font-bold text-xl">4+</span>
                </div>
                <span className="text-sm text-gray-600">Anos</span>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-white/80 rounded-full p-3 mb-3">
                  <span className="text-arrefecer-700 font-bold text-xl">100%</span>
                </div>
                <span className="text-sm text-gray-600">Satisfação</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-xl relative">
              <img 
                src="https://ideogram.ai/assets/image/lossless/response/ZNDZlWBaQVG5zZWh2w-sPw"
                alt="Instalação de ar-condicionado por profissionais"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 glass p-4 rounded-xl max-w-xs animate-float">
              <div className="flex items-center">
                <div className="p-2 bg-arrefecer-100 rounded-full mr-3">
                  <Snowflake className="h-6 w-6 text-arrefecer-700" />
                </div>
                <div>
                  <h3 className="font-semibold">Conforto Térmico</h3>
                  <p className="text-sm text-gray-600">Soluções para todas as estações do ano</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 glass p-4 rounded-xl max-w-xs animate-float" style={{ animationDelay: "1s" }}>
              <div className="flex items-center">
                <div className="p-2 bg-arrefecer-100 rounded-full mr-3">
                  <Wrench className="h-6 w-6 text-arrefecer-700" />
                </div>
                <div>
                  <h3 className="font-semibold">Instalação Profissional</h3>
                  <p className="text-sm text-gray-600">Técnicos certificados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
