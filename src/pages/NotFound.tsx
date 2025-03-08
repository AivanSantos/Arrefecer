import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  useEffect(() => {
    // Atualiza o título
    document.title = "404 - Página Não Encontrada | Arrefecer";
    
    // Define o status 404
    const meta = document.createElement('meta');
    meta.setAttribute('http-equiv', 'status');
    meta.setAttribute('content', '404');
    document.head.appendChild(meta);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center bg-gray-50">
        <div className="text-center space-y-6 p-8">
          <h1 className="text-6xl font-bold text-arrefecer-600">404</h1>
          
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-gray-800">
              Página Não Encontrada
            </h2>
            
            <p className="text-gray-600 max-w-md">
              Desculpe, a página que procura não existe ou foi movida.
            </p>
          </div>

          <Button asChild>
            <Link to="/" className="inline-flex items-center">
              <Home className="mr-2 h-4 w-4" />
              Voltar para a página inicial
            </Link>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
