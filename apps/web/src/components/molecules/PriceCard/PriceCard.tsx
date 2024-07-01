import { Tooltip } from '@ikea/components/atoms/Tooltip'
import { Button } from '@ikea/components/atoms/Button/Button'
import { useRouter } from 'next/router'

import { useAppSelector } from '@ikea/store'
import Link from 'next/link'

import { Price } from '../Price/Price'
import { Rating } from '../Rating'
import { Loader } from '../Loader'
import { IconInfoCircle, IconShoppingCart } from '@tabler/icons-react'
import {
  ProductQuery,
  useCreateUserProductMutation,
  UserProductStatus,
} from '@ikea/generated/types'
import { selectUid } from '@ikea/store/user'

export type IPriceCardProps = {
  product: ProductQuery['product']
}

export const PriceCard = ({ product }: IPriceCardProps) => {
  const [AddProductToCart, { loading, data, error }] =
    useCreateUserProductMutation()
  const router = useRouter()

  const uid = useAppSelector(selectUid)

  //   if (loading) return <Loader />
  if (!product) return <div>Product not found.</div>
  const {
    rating,
    reviews,
    name,
    category,
    subCategory,
    outOfStock,
    price,
    oldPrice,
    id,
    userProduct,
  } = product

  const inCart = userProduct?.status === UserProductStatus.InCart

  return (
    <div className="max-w-lg">
      <div>
        <div className="text-3xl font-bold">{name}</div>
        <div className="text-lg font-light">{category}</div>
      </div>
      <Price
        showTaxComment
        className="mt-8"
        price={price || 0}
        oldPrice={oldPrice || 0}
      />

      {rating && (
        <Rating
          rating={rating}
          size="medium"
          color="black"
          className="mt-4"
          reviews={reviews || 0}
        />
      )}
      {outOfStock && (
        <div className="mt-4 text-sm text-gray-600">
          Product not in stock.
          <Tooltip
            placement="top"
            arrow
            text="white"
            bg="black"
            title="Even if the product is in stock, we(I) can not serve you as this is just a portfolio project?"
          >
            <IconInfoCircle className="inline w-4 h-4 ml-2" />
          </Tooltip>
        </div>
      )}
      <Button
        size="lg"
        disabled={Boolean(outOfStock) || inCart}
        loading={loading}
        className="flex items-center gap-2 mt-8"
        onClick={() => {
          if (!uid) {
            router.push('/login')
            return
          }

          AddProductToCart({
            variables: {
              createUserProductInput: {
                pid: +id,
                uid,
                status: UserProductStatus.InCart,
              },
            },
          })
        }}
      >
        <IconShoppingCart className="w-5 h-5 text-white" />
        {inCart ? 'In cart' : 'Add to shopping cart'}
      </Button>
      {inCart && (
        <Link href="/cart" className="inline-block mt-4 text-gray-600">
          Go to cart
        </Link>
      )}
    </div>
  )
}

export default PriceCard
