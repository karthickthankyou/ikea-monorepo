const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

async function CreateStripeSession(
  req: { body: { items: any; uid: string } },
  res: { json: (arg0: { id: any }) => void },
) {
  const { items, uid } = req.body

  const redirectURL =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://ikea.iamkarthick.com'

  const transformedItems = items.map(
    (item: { image: any; name: any; price: number; description: any }) => ({
      price_data: {
        currency: 'inr',
        unit_amount: item.price,
        product_data: {
          name: item.name,
          images: [item.image],
          description: item.description,
        },
      },
      adjustable_quantity: { enabled: true, minimum: 1, maximum: 10 },
      quantity: 1,
    }),
  )

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: transformedItems,
    mode: 'payment',
    success_url: `${redirectURL}/orders`,
    cancel_url: `${redirectURL}/cart`,
    metadata: {
      images: items[0].image,
      uid,
      productIds: items.map((item: { id: any }) => item.id).join(','),
    },
  })

  res.json({ id: session.id })
}

export default CreateStripeSession
