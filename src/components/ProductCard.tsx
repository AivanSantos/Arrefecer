
import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Heart, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  image: string;
  category: string;
  brand: string;
  energyRating: string;
  isFeatured?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  description,
  price,
  discountPrice,
  image,
  category,
  brand,
  energyRating,
  isFeatured = false,
}) => {
  const { toast } = useToast();
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isImageError, setIsImageError] = useState(false);
  
  const formattedPrice = new Intl.NumberFormat('pt-PT', {
    style: 'currency',
    currency: 'EUR',
  }).format(price);
  
  const formattedDiscountPrice = discountPrice 
    ? new Intl.NumberFormat('pt-PT', {
        style: 'currency',
        currency: 'EUR',
      }).format(discountPrice)
    : null;
  
  const discount = discountPrice 
    ? Math.round(((price - discountPrice) / price) * 100) 
    : 0;

  const handleAddToCart = () => {
    toast({
      title: "Produto adicionado ao carrinho",
      description: `${name} foi adicionado ao seu carrinho de compras.`,
    });
  };

  const handleAddToWishlist = () => {
    toast({
      title: "Produto adicionado à lista de desejos",
      description: `${name} foi adicionado à sua lista de desejos.`,
    });
  };

  const handleCompare = () => {
    toast({
      title: "Produto adicionado à comparação",
      description: `${name} foi adicionado à sua lista de comparação.`,
    });
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setIsImageError(true);
  };

  return (
    <div 
      className="group relative rounded-xl overflow-hidden bg-white transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {discount > 0 && (
        <div className="absolute top-4 left-4 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
          -{discount}%
        </div>
      )}
      
      {isFeatured && (
        <div className="absolute top-4 right-4 z-10 bg-arrefecer-500 text-white text-xs font-bold px-2 py-1 rounded-md">
          Destaque
        </div>
      )}
      
      {/* Product Image */}
      <Link to={`/products/${id}`} className="block relative aspect-square overflow-hidden bg-gray-100">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="w-8 h-8 border-4 border-arrefecer-300 border-t-arrefecer-600 rounded-full animate-spin"></div>
          </div>
        )}
        
        {isImageError ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400">
            <span>Imagem não disponível</span>
          </div>
        ) : (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onLoad={handleImageLoad}
            onError={handleImageError}
            style={{ opacity: isLoading ? 0 : 1 }}
          />
        )}
      </Link>
      
      {/* Product info */}
      <div className="p-4">
        <div className="text-xs text-gray-500 mb-1 flex justify-between">
          <span>{brand}</span>
          <div className="flex items-center">
            <BarChart className="h-3 w-3 mr-1" />
            <span>{energyRating}</span>
          </div>
        </div>
        
        <Link to={`/products/${id}`} className="block">
          <h3 className="font-semibold text-gray-900 hover:text-arrefecer-600 transition-colors line-clamp-1">
            {name}
          </h3>
        </Link>
        
        <p className="text-sm text-gray-600 mt-1 mb-2 line-clamp-2">
          {description}
        </p>
        
        <div className="flex justify-between items-center mt-4">
          <div>
            {discountPrice ? (
              <div className="flex flex-col">
                <span className="text-gray-500 line-through text-sm">
                  {formattedPrice}
                </span>
                <span className="font-bold text-lg text-arrefecer-600">
                  {formattedDiscountPrice}
                </span>
              </div>
            ) : (
              <span className="font-bold text-lg text-arrefecer-600">
                {formattedPrice}
              </span>
            )}
          </div>
          
          <Button onClick={handleAddToCart} size="sm">
            <ShoppingCart className="h-4 w-4 mr-1" /> 
            <span className="sr-only md:not-sr-only md:inline-block">Comprar</span>
          </Button>
        </div>
      </div>
      
      {/* Quick action buttons */}
      <div 
        className={`absolute top-4 right-4 flex flex-col space-y-2 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <button 
          onClick={handleAddToWishlist} 
          className="p-2 bg-white rounded-full shadow-md hover:bg-arrefecer-50 transition-colors text-gray-700 hover:text-arrefecer-600"
          aria-label="Adicionar à lista de desejos"
        >
          <Heart className="h-4 w-4" />
        </button>
        
        <button 
          onClick={handleCompare}
          className="p-2 bg-white rounded-full shadow-md hover:bg-arrefecer-50 transition-colors text-gray-700 hover:text-arrefecer-600"
          aria-label="Comparar produto"
        >
          <BarChart className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
