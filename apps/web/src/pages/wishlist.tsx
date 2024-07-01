import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { Container } from '@ikea/components/atoms/Container'
import Link from 'next/link'
import { LoadingSection } from '@ikea/components/molecules/Loading/Loading'
import { useTransition, animated, config } from 'react-spring'
import { WishlistCard } from '@ikea/components/organisms/WishlistCard'
import {
  MyProductsQuery,
  useMyProductsQuery,
  UserProductStatus,
} from '@ikea/generated/types'

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

const WishlistPage: NextPage = ({}: {}) => {
  const { data, loading, error } = useMyProductsQuery({
    variables: { where: { status: { equals: UserProductStatus.Wishlisted } } },
  })

  const wishlistItemsTransitions = useTransition(data?.myProducts || [], {
    keys: (item) => item.product.id,
    from: { opacity: 0, transform: 'translateY(24px) skew(6deg)' },
    enter: { opacity: 1, transform: 'translateY(0px) skew(0deg)' },
    leave: { opacity: 0, transform: 'translateY(12px) skew(6deg)' },
    trail: 200,
    config: config.gentle,
  })

  if (loading) return <LoadingSection />
  if (data?.myProducts?.length === 0)
    return (
      <div>
        <Container>
          <HeadingWithLink
            title="Wishlist"
            linkText="Go to cart"
            linkhref="/cart"
          />
          <div className="flex items-center justify-center h-screen80">
            No items wishlisted
          </div>
        </Container>
      </div>
    )

  return (
    <Container>
      <NextSeo
        title={`${
          data?.myProducts.length || 'Loading...'
        } - Ikea clone | Karthick Ragavendran`}
        description="Create account with your email or google account."
      />
      <div className="h-screen">
        <HeadingWithLink
          title="Wishlist"
          linkText="Go to cart"
          linkhref="/cart"
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {wishlistItemsTransitions((style, item) => (
            <animated.div style={style} key={item.id}>
              <WishlistCard product={item} />
            </animated.div>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default WishlistPage
