import { Loading } from '@ikea/components/atoms/Button/Button.stories'
import { Container } from '@ikea/components/atoms/Container'
import { SavedForLaterCard } from '@ikea/components/organisms/SavedForLaterCard'
import { CartTemplate } from '@ikea/components/templates/CartTemplate'
import { UserProductStatus, useMyProductsQuery } from '@ikea/generated/types'
import axios from 'axios'

import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { useTransition, animated, config } from 'react-spring'

export const HeadingWithLink = ({
  title,
  linkText,
  linkhref,
}: {
  title: string
  linkText?: string
  linkhref?: string
}) => (
  <div className="flex items-center justify-between mt-2 mb-6">
    <div className="text-xl font-semibold ">{title}</div>
    {linkText && <Link href={linkhref || '/'}>{linkText}</Link>}
  </div>
)

const CartPage: NextPage = () => {
  const products = useMyProductsQuery()

  const {
    data: productsData,
    loading: productsFetching,
    error: productsError,
  } = products

  const cartProducts = productsData?.myProducts.filter(
    (item) => item.status === UserProductStatus.InCart,
  )

  const savedForLater = productsData?.myProducts.filter(
    (item) => item.status === UserProductStatus.SavedForLater,
  )

  const savedForLaterTransitions = useTransition(savedForLater || [], {
    keys: (item) => item.product.id,
    from: {
      opacity: 0,
      transform: 'translateY(-24px) skewY(-6deg)',
    },
    enter: {
      opacity: 1,
      transform: 'translateY(0px) skewY(0deg)',
    },
    leave: { opacity: 0, transform: 'translateY(-24px) skewY(6deg)' },
    trail: 200,
    config: config.gentle,
  })

  if (products.loading) return <Loading />

  return (
    <Container>
      <NextSeo
        title={`${products.data?.myProducts.length} - Ikea clone | Karthick Ragavendran`}
        description="Create account with your email or google account."
      />
      <HeadingWithLink
        title="Cart"
        linkText="Go to store"
        linkhref="/products"
      />
      <CartTemplate
        className="mb-12"
        products={cartProducts || []}
        fetching={productsFetching}
      />
      <div>
        {savedForLater && savedForLater?.length > 0 ? (
          <>
            <HeadingWithLink
              title="Saved for later"
              linkText="Go to wishlist"
              linkhref="/wishlist"
            />

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
              {productsFetching &&
                [1, 2, 3, 4].map((item) => (
                  <div
                    className="w-full bg-gray-200 h-28 animate-pulse"
                    key={item}
                  />
                ))}
              {savedForLaterTransitions((style, item) => (
                <animated.div style={style} key={item.product.id}>
                  <SavedForLaterCard product={item.product} />
                </animated.div>
              ))}
            </div>
          </>
        ) : null}
      </div>
    </Container>
  )
}

export default CartPage
