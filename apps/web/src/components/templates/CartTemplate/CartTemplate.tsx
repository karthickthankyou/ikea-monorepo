import { loadStripe } from '@stripe/stripe-js'
import { useState } from 'react'
import { Button } from '@ikea/components/atoms/Button/Button'
import { Price } from '@ikea/components/molecules/Price/Price'
import { CartCard } from '@ikea/components/organisms/CartCard/CartCard'
import { useTransition, animated, config } from 'react-spring'
import { useAppSelector } from '@ikea/store'
import axios from 'axios'
import { MINIMUM_TOTAL } from '@ikea/util/static'
import { notification$ } from '@ikea/subjects'
import { MyProductsQuery } from '@ikea/generated/types'

export interface ICartTemplateProps {
  products: MyProductsQuery['myProducts']
  fetching?: boolean
  className?: string
}

export const CartTemplate = ({
  products,
  fetching = false,
  className,
}: ICartTemplateProps) => {
  const [creatingCheckoutSession, setCreatingCheckoutSession] = useState(false)
  const uid = useAppSelector((state) => state.user.uid)

  const cartItemsTransitions = useTransition(products || [], {
    keys: (item) => item.product.id,
    from: {
      opacity: 0,
      height: 80,
      transform: 'translateX(-24px) skewX(6deg)',
    },
    enter: { opacity: 1, transform: 'translateX(0px) skewX(0deg)' },
    leave: { opacity: 0, transform: 'translateX(24px) skewX(-6deg)' },
    trail: 200,
    config: config.gentle,
  })

  const transformedCart = products?.map((item) => ({
    id: item.product.id,
    name: item.product.name,
    description: item.product.category + item.product.subCategory,
    image:
      (item.product.images && item.product.images[0]) ||
      'https://res.cloudinary.com/thankyou/image/upload/v1648563867/zillow-clone/ul7h0tcrtl3bycfd8za1.jpg',
    price: Math.round(item.product.price * 100),
  }))
  console.log('key ', process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY

  const stripePromise = loadStripe(publishableKey || '')
  const createCheckOutSession = async () => {
    setCreatingCheckoutSession(true)
    const stripe = await stripePromise
    const checkoutSession = await axios.post('/api/create-stripe-session', {
      items: transformedCart,
      uid,
    })
    const result = await stripe?.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    })

    if (result?.error) {
      notification$.next({
        message:
          result.error.message || 'Something went wrong. Please try again.',
        type: 'error',
      })
    }
    setCreatingCheckoutSession(false)
  }

  const totalPrice =
    products?.reduce((total, item) => total + item.product.price, 0) || 0

  const totalOldPrice = products?.reduce(
    (total, item) => total + (item.product.oldPrice || item.product.price),
    0,
  )

  if (products?.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen50">
        <div className="text-lg font-bold">Cart is empty.</div>
      </div>
    )
  }
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 min-h-screen50 gap-8 ${className}`}
    >
      <div className="col-span-1 space-y-8 md:col-span-2">
        {fetching &&
          [1, 2, 3, 4].map((item) => (
            <div className="w-full bg-gray-200 h-28 animate-pulse" key={item} />
          ))}
        {cartItemsTransitions((style, item) => (
          <animated.div style={style}>
            <CartCard product={item.product} />
          </animated.div>
        ))}
      </div>
      <div>
        <div className="sticky top-0">
          <div className="text-lg font-semibold leading-none">Cart summary</div>
          <div className="flex justify-between mt-4 mb-2">
            <div className="text-lg font-bold">Total:</div>
            <Price price={totalPrice} oldPrice={totalOldPrice} />
          </div>
          <Button
            fullWidth
            size="xl"
            disabled={products?.length === 0 || totalPrice < MINIMUM_TOTAL}
            loading={creatingCheckoutSession}
            onClick={createCheckOutSession}
            className="mt-4 disabled:bg-gray"
          >
            Checkout
          </Button>
          {(products?.length || 0) > 0 && totalPrice < MINIMUM_TOTAL && (
            <div className="flex items-center gap-2 mt-2 text-sm text-red-700">
              Minimum checkout price:{' '}
              <Price price={MINIMUM_TOTAL} className="inline" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
