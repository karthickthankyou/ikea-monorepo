import { Button } from '@ikea/components/atoms/Button/Button'
import { Image } from '@ikea/components/atoms/Image'
import { Price } from '@ikea/components/molecules/Price/Price'
import {
  MyProductsDocument,
  MyProductsQuery,
  useCreateUserProductMutation,
  UserProductStatus,
} from '@ikea/generated/types'
import { useAppSelector } from '@ikea/store'
import Link from 'next/link'
import { format } from 'date-fns'
import { notification$ } from '@ikea/subjects'

export interface IWishlistCardProps {
  product: MyProductsQuery['myProducts'][number]
}

export const WishlistCard = ({ product }: IWishlistCardProps) => {
  const {
    updatedAt,
    product: {
      id: pid,
      category,
      subCategory,
      name,
      price,
      oldPrice,
      outOfStock,
      images,
    },
  } = product
  const [insertUserProduct, { loading: movingToCart, data, error }] =
    useCreateUserProductMutation({
      awaitRefetchQueries: true,
      refetchQueries: [
        {
          query: MyProductsDocument,
          variables: {
            where: { status: { equals: UserProductStatus.Wishlisted } },
          },
        },
      ],
    })
  const uid = useAppSelector((state) => state.user?.uid)
  return (
    <div className="flex">
      <Link
        href={`/products/${pid}`}
        className="relative flex-shrink-0 w-40 h-48 mr-2"
      >
        <Image
          src={images && images[0]}
          alt=""
          className="transition-transform hover:scale-105"
        />
      </Link>
      <div className="flex flex-col flex-grow">
        <div className="font-medium line-clamp-3">{name}</div>
        <div className="mt-1 text-sm text-gray-600">
          {category} {subCategory}
        </div>
        <Price price={price} oldPrice={oldPrice} className="mt-2" />
        {outOfStock && <div className="text-red">Out of stock</div>}
        {!outOfStock && (
          <div className="mt-2">
            <Button
              variant="text"
              className="hover:underline underline-offset-4"
              loading={movingToCart}
              disabled={Boolean(outOfStock)}
              onClick={() => {
                if (!uid) {
                  notification$.next({ message: 'You are not logged in' })
                  return
                }

                insertUserProduct({
                  variables: {
                    createUserProductInput: {
                      pid,
                      uid,
                      status: UserProductStatus.InCart,
                    },
                  },
                })
              }}
            >
              Move to cart
            </Button>
          </div>
        )}
        <div className="mt-auto text-xs text-gray">
          {format(new Date(updatedAt), 'PPp')}
        </div>
      </div>
    </div>
  )
}
