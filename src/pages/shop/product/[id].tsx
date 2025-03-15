import { useState } from 'react';
import { useCart } from '@/lib/store/cart';
import { Button } from '@/components/ui/button';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
}

export default function ProductPage({ product }: { product: Product }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const { addItem } = useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Imagens */}
        <div className="space-y-4">
          <img
            src={product.images[selectedImage]}
            alt={product.name}
            className="w-full rounded-lg"
          />
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className="border-2 rounded-lg overflow-hidden"
              >
                <img src={image} alt={`${product.name} ${index + 1}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Detalhes */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-2xl font-semibold">€{product.price}</p>
          <div className="prose max-w-none">
            <p>{product.description}</p>
          </div>
          <Button
            onClick={() =>
              addItem({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: 1,
                image: product.images[0],
              })
            }
            className="w-full"
          >
            Adicionar ao Carrinho
          </Button>
        </div>
      </div>
    </div>
  );
} 