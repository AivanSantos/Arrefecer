import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  useEffect(() => {
    // Define o status HTTP 404
    document.title = "Página Não Encontrada | Arrefecer";
    
    // Força o status 404 no Vercel
    if (typeof window !== 'undefined') {
      const meta = document.createElement('meta');
      meta.httpEquiv = 'status';
      meta.content = '404';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-6xl font-bold text-gray-900">404</h1>
        
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
    </div>
  );
};

export default NotFound;
