import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";

const navigation = [
  { name: "Início", href: "/" },
  { name: "Serviços", href: "/services" },
  { name: "Sobre", href: "/about" },
  { name: "Contacto", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-2 bg-white/80 backdrop-blur-md shadow-md"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex-shrink-0">
            <Logo className="h-10 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="text-foreground hover:text-arrefecer-700 font-medium transition-colors"
            >
              Início
            </Link>
            <Link
              to="/services"
              className="text-foreground hover:text-arrefecer-700 font-medium transition-colors"
            >
              Serviços
            </Link>
            <Link
              to="/about"
              className="text-foreground hover:text-arrefecer-700 font-medium transition-colors"
            >
              Sobre Nós
            </Link>
            <Link
              to="/contact"
              className="text-foreground hover:text-arrefecer-700 font-medium transition-colors"
            >
              Contacto
            </Link>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+351962827946"
              className="inline-flex items-center text-foreground hover:text-arrefecer-700 transition-colors"
            >
              <PhoneCall className="w-4 h-4 mr-2" />
              <span>+351 962 827 946</span>
            </a>
            <Button asChild className="bg-arrefecer-700 hover:bg-arrefecer-800">
              <Link to="/contact">Orçamento Grátis</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 transition-colors"
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-background z-40 transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6 pt-24">
          <nav className="flex flex-col space-y-6 text-lg">
            <Link
              to="/"
              className="text-foreground hover:text-arrefecer-700 font-medium transition-colors"
              onClick={closeMenu}
            >
              Início
            </Link>
            <Link
              to="/services"
              className="text-foreground hover:text-arrefecer-700 font-medium transition-colors"
              onClick={closeMenu}
            >
              Serviços
            </Link>
            <Link
              to="/about"
              className="text-foreground hover:text-arrefecer-700 font-medium transition-colors"
              onClick={closeMenu}
            >
              Sobre Nós
            </Link>
            <Link
              to="/contact"
              className="text-foreground hover:text-arrefecer-700 font-medium transition-colors"
              onClick={closeMenu}
            >
              Contacto
            </Link>
          </nav>
          <div className="mt-auto space-y-4">
            <a
              href="tel:+351962827946"
              className="inline-flex items-center text-foreground"
            >
              <PhoneCall className="w-5 h-5 mr-2" />
              <span>+351 962 827 946</span>
            </a>
            <Button
              asChild
              className="w-full bg-arrefecer-700 hover:bg-arrefecer-800"
              onClick={closeMenu}
            >
              <Link to="/contact">Orçamento Grátis</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
