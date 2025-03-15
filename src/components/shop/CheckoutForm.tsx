import { useState } from 'react';
import { useCart } from '@/lib/store/cart';
import { loadStripe } from '@stripe/stripe-js';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

const CheckoutForm = () => {
  const { items, total } = useCart();
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleCheckout = async () => {
    try {
      setLoading(true);

      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items,
          currency: 'eur',
        }),
      });

      const { sessionId } = await response.json();

      // Redirecionar para o Stripe Checkout
      const stripe = await stripePromise;
      const { error } = await stripe!.redirectToCheckout({ sessionId });

      if (error) {
        throw new Error(error.message);
      }
    } catch (error) {
      toast({
        title: 'Erro no checkout',
        description: 'Ocorreu um erro ao processar o pagamento.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Resumo do Pedido */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Resumo do Pedido</h3>
        {items.map((item) => (
          <div key={item.id} className="flex justify-between py-2">
            <span>{item.name} x {item.quantity}</span>
            <span>€{(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <div className="border-t mt-4 pt-4">
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>€{total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Métodos de Pagamento */}
      <div className="space-y-4">
        <Button
          onClick={handleCheckout}
          className="w-full"
          disabled={loading}
        >
          {loading ? 'Processando...' : 'Pagar com Cartão/MB Way'}
        </Button>

        <div className="text-center text-sm text-gray-500">
          <p>Pagamentos processados de forma segura pela Stripe</p>
          <div className="flex justify-center gap-2 mt-2">
            <img src="/visa.svg" alt="Visa" className="h-8" />
            <img src="/mastercard.svg" alt="Mastercard" className="h-8" />
            <img src="/mbway.svg" alt="MB Way" className="h-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm; 