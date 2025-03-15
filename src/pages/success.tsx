import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useCart } from '@/lib/store/cart';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SuccessPage = () => {
  const router = useRouter();
  const { clearCart } = useCart();
  const { session_id } = router.query;

  useEffect(() => {
    if (session_id) {
      // Limpar carrinho após pagamento bem-sucedido
      clearCart();
      // Aqui você pode também salvar o pedido no seu banco de dados
    }
  }, [session_id, clearCart]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center space-y-6 p-8">
        <CheckCircle className="w-20 h-20 text-green-500 mx-auto" />
        
        <h1 className="text-3xl font-bold text-gray-900">
          Pagamento Confirmado!
        </h1>
        
        <p className="text-gray-600 max-w-md mx-auto">
          Obrigado pela sua compra. Você receberá um email com os detalhes do pedido.
        </p>

        <div className="space-x-4">
          <Button onClick={() => router.push('/shop')}>
            Continuar Comprando
          </Button>
          <Button 
            variant="outline" 
            onClick={() => router.push('/profile/orders')}
          >
            Ver Meus Pedidos
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage; 