
import { Link } from "react-router-dom";
import { Snowflake, Wind, Wrench, ArrowRight, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";

const ServicesSection = () => {
  return (
    <section className="py-20 relative" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-arrefecer-600 font-medium">Nossos Serviços</span>
          <h2 className="text-3xl font-bold mt-2 mb-4">Soluções Completas de Ar-Condicionado</h2>
          <p className="text-gray-600">
            Oferecemos um conjunto completo de serviços para garantir o melhor conforto térmico para sua casa ou negócio, com qualidade e profissionalismo.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            id="venda"
            title="Venda de Equipamentos"
            description="Equipamentos das melhores marcas com garantia e assistência técnica."
            icon={<ShoppingBag className="h-6 w-6" />}
            delay={0}
          />
          
          <ServiceCard
            id="instalacao"
            title="Instalação"
            description="Instalação profissional com técnicos certificados e experientes."
            icon={<Wrench className="h-6 w-6" />}
            delay={100}
          />
          
          <ServiceCard
            id="manutencao"
            title="Manutenção"
            description="Manutenção preventiva e corretiva para aumentar a vida útil do seu ar-condicionado."
            icon={<Wrench className="h-6 w-6" />}
            delay={200}
          />
          
          <ServiceCard
            id="pre-instalacao"
            title="Pré-Instalação"
            description="Preparação completa do local para futura instalação de ar-condicionado."
            icon={<Wind className="h-6 w-6" />}
            delay={300}
          />
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/services" className="inline-flex items-center">
              Ver todos os serviços <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
