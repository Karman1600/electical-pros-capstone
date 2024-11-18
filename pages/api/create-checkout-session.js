import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { serviceName, planName, area, baseAmount, appliances } = req.body;

      const lineItems = [
        {
          price_data: {
            currency: 'cad',
            product_data: {
              name: serviceName,
              description: `${planName} Plan, ${area} sq meters`,
            },
            unit_amount: baseAmount * 100, // Convert to cents
          },
          quantity: 1,
        },
      ];

      // Add each appliance as a line item if provided
      if (appliances) {
        appliances.forEach(appliance => {
          lineItems.push({
            price_data: {
              currency: 'cad',
              product_data: {
                name: appliance.name,
              },
              unit_amount: appliance.price * 100, // Convert to cents
            },
            quantity: 1,
          });
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: lineItems,
        mode: 'payment',
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/cancel`,
      });

      res.status(200).json({ id: session.id });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
};
//Reference: https://chatgpt.com/c/67311e87-5d98-800c-8624-6dc1a1b6d8a6