import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ThankYou = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto" />
          
          <h1 className="text-4xl font-bold text-gray-900">
            Obrigado pelo seu contacto!
          </h1>
          
          <p className="text-lg text-gray-600">
            Recebemos a sua mensagem e entraremos em contacto o mais brevemente possível.
          </p>
          
          <Button asChild size="lg">
            <Link to="/">
              Voltar para a página inicial
            </Link>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYou; 