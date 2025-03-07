import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Home, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Obrigado = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Obrigado! | Arrefecer";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-16 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <CheckCircle className="h-24 w-24 text-green-500" />
          </div>
          
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            Obrigado pelo seu contacto!
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Recebemos a sua mensagem com sucesso. A nossa equipa entrará em contacto consigo o mais brevemente possível.
          </p>

          <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">
              Enquanto isso, você pode:
            </h2>
            <ul className="text-gray-600 space-y-2">
              <li>• Explorar nossos serviços de climatização</li>
              <li>• Conhecer mais sobre a Arrefecer</li>
              <li>• Entrar em contacto direto pelo WhatsApp</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="default" size="lg" className="bg-arrefecer-600 hover:bg-arrefecer-700">
              <Link to="/">
                <Home className="mr-2 h-5 w-5" />
                Voltar ao Início
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Contactos
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Obrigado; 