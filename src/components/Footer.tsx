import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Logo className="h-10 w-auto mb-4" />
            <p className="text-gray-600 mb-6">
              Especialistas em venda, instalação e manutenção de ar-condicionado para residências e serviços de pré-instalação.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-arrefecer-500 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-arrefecer-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-arrefecer-500 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-arrefecer-500 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-arrefecer-500 transition-colors">
                  Loja
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-arrefecer-500 transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-arrefecer-500 transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-arrefecer-500 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#venda" className="text-gray-600 hover:text-arrefecer-500 transition-colors">
                  Venda de Equipamentos
                </Link>
              </li>
              <li>
                <Link to="/services#instalacao" className="text-gray-600 hover:text-arrefecer-500 transition-colors">
                  Instalação
                </Link>
              </li>
              <li>
                <Link to="/services#manutencao" className="text-gray-600 hover:text-arrefecer-500 transition-colors">
                  Manutenção
                </Link>
              </li>
              <li>
                <Link to="/services#pre-instalacao" className="text-gray-600 hover:text-arrefecer-500 transition-colors">
                  Pré-Instalação
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-arrefecer-500 mr-3 mt-0.5" />
                <a href="tel:+351962827946" className="text-gray-600 hover:text-arrefecer-500 transition-colors">
                  +351 962 827 946
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-arrefecer-500 mr-3 mt-0.5" />
                <a href="mailto:geral@arrefecer.com" className="text-gray-600 hover:text-arrefecer-500 transition-colors">
                  geral@arrefecer.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-arrefecer-500 mr-3 mt-0.5" />
                <span className="text-gray-600">
                  Portugal
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-gray-500">
              © {currentYear} Arrefecer. Todos os direitos reservados.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link to="/privacy-policy" className="text-gray-500 hover:text-arrefecer-500 text-sm transition-colors">
                Política de Privacidade
              </Link>
              <Link to="/terms" className="text-gray-500 hover:text-arrefecer-500 text-sm transition-colors">
                Termos e Condições
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
