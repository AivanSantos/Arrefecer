import Stripe from 'stripe';
import { NextApiRequest, NextApiResponse } from 'next';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY não está configurada');
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { items, currency } = req.body;

    // Criar linha de itens para o Stripe
    const lineItems = items.map((item: any) => ({
      price_data: {
        currency,
        product_data: {
          name: item.name,
          images: [item.image],
        },
        unit_amount: item.price * 100, // Stripe usa centavos
      },
      quantity: item.quantity,
    }));

    // Criar sessão do Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'paypal', 'mb_way'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/cart`,
      shipping_address_collection: {
        allowed_countries: ['PT'],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: 500, // €5.00
              currency,
            },
            display_name: 'Entrega Standard',
            delivery_estimate: {
              minimum: {
                unit: 'business_day',
                value: 3,
              },
              maximum: {
                unit: 'business_day',
                value: 5,
              },
            },
          },
        },
      ],
    });

    res.status(200).json({ sessionId: session.id });
  } catch (error) {
    console.error('Erro no checkout:', error);
    res.status(500).json({ message: 'Erro ao processar pagamento' });
  }
} 