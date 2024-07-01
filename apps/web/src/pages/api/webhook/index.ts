import {
  CreateOrderDocument,
  CreateOrderMutationVariables,
  OrderStatus,
  RemoveCartDocument,
  RemoveCartMutationVariables,
  UserProductStatus,
} from '@ikea/generated/types'
import getRawBody from 'raw-body'

import { createAuthenticatedClient } from '@ikea/config/network/apollo'

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    let event

    try {
      const rawBody = await getRawBody(req)

      const signature = req.headers['stripe-signature']

      event = stripe.webhooks.constructEvent(
        rawBody,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET,
      )
    } catch (err: any) {
      console.log(`❌ Error message: ${err.message}`)
      res.status(400).send(`Webhook Error: ${err.message}`)
      return
    }

    if (event.type === 'checkout.session.completed') {
      const { uid, productIds } = event.data.object.metadata

      try {
        const apolloClient = await createAuthenticatedClient()

        const objects = productIds
          .split(',')
          .map((item: any) => ({ pid: item }))

        for (const { pid } of objects) {
          await apolloClient.mutate<CreateOrderMutationVariables>({
            mutation: CreateOrderDocument,
            variables: {
              createOrderInput: {
                pid: +pid,
                uid,
                status: OrderStatus.OrderReceived,
              },
            },
          })

          await apolloClient.mutate<RemoveCartMutationVariables>({
            mutation: RemoveCartDocument,
            variables: {
              createUserProductInput: {
                pid: +pid,
                uid,
                status: UserProductStatus.RemovedFromWishlist,
              },
            },
          })
        }
      } catch (error) {
        console.error('Error', error)
      }
    } else {
      console.warn(`🤷‍♀️ Unhandled event type: ${event.type}`)
    }
    res.status(200).json({ received: true })
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}
