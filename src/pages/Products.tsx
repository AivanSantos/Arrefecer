
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Loja | Arrefecer.com - Ar-Condicionado em Portugal";
  }, []);

  // Sample products data
  const products = [
    {
      id: 1,
      name: "Ar-Condicionado Split Inverter 9000 BTU",
      price: 599.99,
      image: "https://images.unsplash.com/photo-1673586031271-2203346d10ea?q=80&w=1887&auto=format&fit=crop",
      description: "Ideal para quartos e escritórios pequenos até 12m².",
      category: "Split",
      energyClass: "A++",
    },
    {
      id: 2,
      name: "Ar-Condicionado Split Inverter 12000 BTU",
      price: 799.99,
      image: "https://images.unsplash.com/photo-1673586031255-35aee16288c8?q=80&w=1887&auto=format&fit=crop",
      description: "Perfeito para salas e espaços médios até 20m².",
      category: "Split",
      energyClass: "A++",
    },
    {
      id: 3,
      name: "Ar-Condicionado Portátil 7000 BTU",
      price: 349.99,
      image: "https://images.unsplash.com/photo-1606946883689-d6c9daf5e055?q=80&w=1887&auto=format&fit=crop",
      description: "Solução móvel para pequenos ambientes sem necessidade de instalação fixa.",
      category: "Portátil",
      energyClass: "A",
    },
    {
      id: 4,
      name: "Ar-Condicionado Multi-Split 18000 BTU",
      price: 1299.99,
      image: "https://images.unsplash.com/photo-1627041684064-5857b4180ba9?q=80&w=1887&auto=format&fit=crop",
      description: "Sistema para climatizar múltiplos ambientes com uma única unidade externa.",
      category: "Multi-Split",
      energyClass: "A++",
    },
    {
      id: 5,
      name: "Ar-Condicionado Cassete 24000 BTU",
      price: 1799.99,
      image: "https://images.unsplash.com/photo-1614637114760-ef5e17e9d3d3?q=80&w=1887&auto=format&fit=crop",
      description: "Solução embutida no teto para espaços comerciais.",
      category: "Cassete",
      energyClass: "A+",
    },
    {
      id: 6,
      name: "Ar-Condicionado Piso-Teto 36000 BTU",
      price: 2499.99,
      image: "https://images.unsplash.com/photo-1531133187893-812813849e8a?q=80&w=1887&auto=format&fit=crop",
      description: "Ideal para grandes espaços comerciais com instalação vertical ou horizontal.",
      category: "Piso-Teto",
      energyClass: "A+",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-arrefecer-700 to-arrefecer-900 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Loja de Ar-Condicionado</h1>
            <p className="max-w-2xl text-lg opacity-90">
              Descubra a nossa seleção de equipamentos de ar-condicionado das melhores marcas, 
              com garantia e assistência técnica profissional em todo Portugal.
            </p>
          </div>
        </div>
        
        {/* Filters and Products */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <div className="md:col-span-1 space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4">Categorias</h3>
                <ul className="space-y-2">
                  <li>
                    <Button variant="ghost" className="w-full justify-start">Split</Button>
                  </li>
                  <li>
                    <Button variant="ghost" className="w-full justify-start">Multi-Split</Button>
                  </li>
                  <li>
                    <Button variant="ghost" className="w-full justify-start">Portátil</Button>
                  </li>
                  <li>
                    <Button variant="ghost" className="w-full justify-start">Cassete</Button>
                  </li>
                  <li>
                    <Button variant="ghost" className="w-full justify-start">Piso-Teto</Button>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4">Preço</h3>
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start">Até €500</Button>
                  <Button variant="ghost" className="w-full justify-start">€500 - €1000</Button>
                  <Button variant="ghost" className="w-full justify-start">€1000 - €2000</Button>
                  <Button variant="ghost" className="w-full justify-start">Acima de €2000</Button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4">Eficiência Energética</h3>
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start">A+++</Button>
                  <Button variant="ghost" className="w-full justify-start">A++</Button>
                  <Button variant="ghost" className="w-full justify-start">A+</Button>
                  <Button variant="ghost" className="w-full justify-start">A</Button>
                </div>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="md:col-span-2 lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    tag={product.energyClass}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Products;
