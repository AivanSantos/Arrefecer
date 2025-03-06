
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";

// Produtos em destaque
const featuredProducts = [
  {
    id: 1,
    name: "Daikin Perfera FTXM35R 12000 BTU",
    description: "Ar-condicionado Split Inverter com tecnologia Flash Streamer, tratamento de ar e modo econômico.",
    price: 799.99,
    discountPrice: 699.99,
    image: "https://images.unsplash.com/photo-1614103514885-52662eb63a93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Split",
    brand: "Daikin",
    energyRating: "A+++",
    isFeatured: true,
  },
  {
    id: 2,
    name: "Mitsubishi Electric MSZ-AP25VG 9000 BTU",
    description: "Split Mural Inverter com filtro purificador de ar, modo silencioso e baixo consumo energético.",
    price: 649.99,
    image: "https://images.unsplash.com/photo-1618917500429-864bad5a2af6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Split",
    brand: "Mitsubishi",
    energyRating: "A++",
    isFeatured: true,
  },
  {
    id: 3,
    name: "Samsung Wind-Free Elite AR09TXCAAWKNEU 9000 BTU",
    description: "Tecnologia Wind-Free para conforto sem correntes de ar diretas, com controle por aplicativo.",
    price: 729.99,
    discountPrice: 649.99,
    image: "https://images.unsplash.com/photo-1689864317773-16071cfd6dd8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Split",
    brand: "Samsung",
    energyRating: "A++",
    isFeatured: true,
  },
  {
    id: 4,
    name: "LG ARTCOOL Mirror AC09BQ 9000 BTU",
    description: "Design elegante com acabamento espelhado, filtro duplo de proteção e conexão Wi-Fi.",
    price: 599.99,
    image: "https://images.unsplash.com/photo-1657748014547-8910281c1cd7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Split",
    brand: "LG",
    energyRating: "A++",
    isFeatured: false,
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="text-arrefecer-600 font-medium">Nossa Loja</span>
            <h2 className="text-3xl font-bold mt-2">Produtos em Destaque</h2>
          </div>
          
          <Button asChild variant="link" className="text-arrefecer-600">
            <Link to="/products" className="inline-flex items-center">
              Ver todos <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
