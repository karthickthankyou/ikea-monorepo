import Link from 'next/link'
import {
  ProductsQuery,
  useCreateUserProductMutation,
  UserProductStatus,
} from '@ikea/generated/types'
import { useAppSelector } from '@ikea/store'
import { Image } from '@ikea/components/atoms/Image'

import { useRouter } from 'next/router'
import { OverlapSpace } from '../OverlapSpace'
import { Rating } from '../Rating/Rating'
import { Price } from '../Price/Price'
import { Skeleton } from '../Skeleton/Skeleton'
import {
  IconHeart,
  IconHeartFilled,
  IconShoppingCart,
} from '@tabler/icons-react'
import { selectUid } from '@ikea/store/user'
import { notification$ } from '@ikea/subjects'
import { Wishlist } from '../Wishlist'
import { Button } from '@ikea/components/atoms/Button'
import { useState } from 'react'
import { Dialog } from '../Dialog'
import { PriceCard } from '../PriceCard'

export interface IProductCard01Props {
  product: ProductsQuery['products'][number]
  className?: string
}

export const QuickView = ({ product }: IProductCard01Props) => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <Dialog open={open} setOpen={setOpen}>
        <PriceCard product={product} />
      </Dialog>
      <Button
        variant="text"
        className="text-xs hover:bg-white/20"
        color="white"
        onClick={() => setOpen(true)}
      >
        Quick View
      </Button>
    </div>
  )
}

export const ProductCard01 = ({ product, className }: IProductCard01Props) => {
  const {
    userProduct,
    id,
    name,
    category,
    subCategory,
    rating,
    reviews,
    price,
    oldPrice,
    outOfStock,
    images,
  } = product

  const src = images && images[0]
  const [wishlistProduct, { loading, data }] = useCreateUserProductMutation()
  const uid = useAppSelector(selectUid)

  const router = useRouter()

  return (
    <div className={`${className}`}>
      <OverlapSpace className="group">
        <OverlapSpace.Child className="flex items-start justify-end gap-2 p-2">
          <button
            type="button"
            onClick={() => {
              if (userProduct?.status === UserProductStatus.InCart) {
                router.push('/cart')
                return
              }

              const targetState =
                userProduct?.status === UserProductStatus.Wishlisted
                  ? UserProductStatus.RemovedFromWishlist
                  : UserProductStatus.Wishlisted
              // Todo: Implement add and remove wishlist.

              console.log('Target: ', targetState)
              if (!uid) {
                notification$.next({
                  message: 'You are not logged in.',
                })
                return
              }
              wishlistProduct({
                variables: {
                  createUserProductInput: {
                    pid: id,
                    uid,
                    status: targetState,
                  },
                },
              })
            }}
            className="z-10 p-1 transition-all rounded-full hover:shadow-lg bg-white/50 shadow-black/20"
          >
            <Wishlist
              fetching={loading}
              mutationStatus={data?.createUserProduct?.status}
              status={userProduct?.status}
            />
          </button>
        </OverlapSpace.Child>
        <OverlapSpace.Child className="items-end justify-center hidden group-hover:flex ">
          <QuickView product={product} />
        </OverlapSpace.Child>
        <OverlapSpace.Child>
          <Link key={id} href={`/products/${id}`}>
            <Image
              className="w-full"
              src={src || 'https://picsum.photos/200'}
              alt=""
            />
          </Link>
        </OverlapSpace.Child>
      </OverlapSpace>

      <div className="mt-4 font-bold line-clamp-1">{name}</div>
      <div className="mt-1 text-sm text-gray-600 line-clamp-2">
        {category} {subCategory}
      </div>

      <Price price={price} oldPrice={oldPrice} className="mt-3" />
      {outOfStock && <div className="text-red">Out of stock</div>}
      {rating && (
        <Rating
          rating={rating}
          color="black"
          reviews={reviews}
          className="mt-2"
        />
      )}
    </div>
  )
}

export const ProductCard01Skeleton = () => (
  <div>
    <Skeleton className="w-full aspect-square" />
    <Skeleton className="w-3/4 h-6 mt-3" />
    <Skeleton className="w-1/2 h-4 mt-1" />
    <Skeleton className="w-1/3 h-4 mt-1" />
    <Skeleton className="w-1/2 h-5 mt-1" />
    <Skeleton className="w-1/4 h-5 mt-1" />
  </div>
)
