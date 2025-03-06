
import { Link } from "react-router-dom";
import { Snowflake, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhyChooseUs = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1636193535246-a602ffb372f4?q=80&w=2070&auto=format')] bg-cover bg-center opacity-[0.03] -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-arrefecer-600 font-medium">Por que escolher-nos</span>
            <h2 className="text-3xl font-bold mt-2 mb-6">Compromisso com a Excelência</h2>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="bg-arrefecer-100 p-2 rounded-full">
                    <Snowflake className="h-6 w-6 text-arrefecer-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">Especialistas em Ar-Condicionado</h3>
                  <p className="text-gray-600">
                    Nossa equipe é especializada exclusivamente em sistemas de ar-condicionado, garantindo conhecimento profundo e soluções adequadas para cada necessidade.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="bg-arrefecer-100 p-2 rounded-full">
                    <Wrench className="h-6 w-6 text-arrefecer-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">Equipe Certificada</h3>
                  <p className="text-gray-600">
                    Todos os nossos técnicos são certificados e passam por treinamentos constantes para estarem atualizados com as mais recentes tecnologias.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="bg-arrefecer-100 p-2 rounded-full">
                    <Wrench className="h-6 w-6 text-arrefecer-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">Atendimento Personalizado</h3>
                  <p className="text-gray-600">
                    Cada cliente é único, e por isso oferecemos soluções personalizadas que atendam às necessidades específicas de cada residência ou estabelecimento.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/about">
                  Conheça Nossa Empresa
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1581275196840-bdf555ac54ef?q=80&w=1287&auto=format&fit=crop"
                alt="Técnico instalando ar-condicionado"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -bottom-6 right-12 glass p-6 rounded-xl max-w-xs">
              <div className="flex items-center mb-3">
                <div className="p-1 bg-green-100 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-green-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="font-medium text-lg ml-2">100% Garantia</h3>
              </div>
              <p className="text-sm text-gray-600">
                Todos os nossos serviços e produtos possuem garantia para sua total segurança e satisfação.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
