
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Carrinho | Arrefecer.com - Ar-Condicionado em Portugal";
  }, []);

  // Sample cart items
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Ar-Condicionado Split Inverter 9000 BTU",
      price: 599.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1673586031271-2203346d10ea?q=80&w=1887&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Ar-Condicionado Portátil 7000 BTU",
      price: 349.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1606946883689-d6c9daf5e055?q=80&w=1887&auto=format&fit=crop",
    }
  ]);

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const shippingCost = 45.00;
  const calculateTotal = () => {
    return calculateSubtotal() + shippingCost;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Carrinho de Compras</h1>
          
          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <div className="inline-flex justify-center items-center p-4 bg-gray-100 rounded-full mb-4">
                <ShoppingBag className="h-8 w-8 text-gray-500" />
              </div>
              <h2 className="text-2xl font-semibold mb-4">Seu carrinho está vazio</h2>
              <p className="text-gray-600 mb-8">
                Adicione alguns produtos para continuar suas compras.
              </p>
              <Button asChild>
                <Link to="/products">Ver Produtos</Link>
              </Button>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Itens no Carrinho</h2>
                    
                    <div className="space-y-6">
                      {cartItems.map((item) => (
                        <div key={item.id}>
                          <div className="flex flex-col sm:flex-row gap-4">
                            <div className="w-24 h-24 flex-shrink-0">
                              <img 
                                src={item.image} 
                                alt={item.name} 
                                className="w-full h-full object-cover rounded"
                              />
                            </div>
                            <div className="flex-grow">
                              <h3 className="font-medium">{item.name}</h3>
                              <p className="text-arrefecer-600 font-semibold mt-1">
                                €{item.price.toFixed(2)}
                              </p>
                              <div className="flex items-center gap-4 mt-2">
                                <div className="flex items-center">
                                  <button 
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l"
                                  >
                                    -
                                  </button>
                                  <span className="w-10 h-8 flex items-center justify-center border-t border-b border-gray-300">
                                    {item.quantity}
                                  </span>
                                  <button 
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r"
                                  >
                                    +
                                  </button>
                                </div>
                                <button 
                                  onClick={() => removeItem(item.id)}
                                  className="text-red-500 hover:text-red-700 transition-colors"
                                >
                                  <Trash2 className="h-5 w-5" />
                                </button>
                              </div>
                            </div>
                            <div className="text-right sm:min-w-[100px] font-semibold">
                              €{(item.price * item.quantity).toFixed(2)}
                            </div>
                          </div>
                          <Separator className="mt-6" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-between items-center">
                  <Button asChild variant="outline">
                    <Link to="/products" className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
                      Continuar Comprando
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-24">
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Resumo do Pedido</h2>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal</span>
                        <span>€{calculateSubtotal().toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Entrega</span>
                        <span>€{shippingCost.toFixed(2)}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-semibold text-lg">
                        <span>Total</span>
                        <span>€{calculateTotal().toFixed(2)}</span>
                      </div>
                    </div>
                    
                    <Button className="w-full mt-6">
                      Finalizar Compra
                    </Button>
                    
                    <div className="mt-6 text-sm text-gray-500">
                      <p>
                        Ao finalizar a compra, você concorda com nossos 
                        <Link to="/terms" className="text-arrefecer-600 hover:underline ml-1">
                          Termos e Condições
                        </Link>.
                      </p>
                      <p className="mt-2">
                        Para orçamentos de instalação ou serviços adicionais, 
                        <Link to="/contact" className="text-arrefecer-600 hover:underline ml-1">
                          entre em contato conosco
                        </Link>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Cart;
