import { Button } from '@ikea/components/atoms/Button/Button'
import { Image } from '@ikea/components/atoms/Image'
import { Price } from '@ikea/components/molecules/Price/Price'
import {
  ProductFragmentFragment,
  useCreateUserProductMutation,
  MyProductsDocument,
  UserProductStatus,
} from '@ikea/generated/types'
import { useAppSelector } from '@ikea/store'
import { notification$ } from '@ikea/subjects'

export interface ISavedForLaterCardProps {
  product: ProductFragmentFragment
}

export const SavedForLaterCard = ({ product }: ISavedForLaterCardProps) => {
  const {
    category,
    subCategory,
    name,
    price,
    oldPrice,
    outOfStock,
    images,
    id: pid,
  } = product
  const [updateUserProduct, { loading: updatingUserProduct }] =
    useCreateUserProductMutation({
      awaitRefetchQueries: true,
      refetchQueries: [{ query: MyProductsDocument }],
    })

  const uid = useAppSelector((state) => state.user.uid)
  return (
    <div className="flex group">
      <div className="flex-shrink-0 w-24 h-24 mr-2">
        <Image src={images && images[0]} alt="" />
      </div>
      <div className="flex-grow">
        <div className="text-sm font-medium line-clamp-3">{name}</div>
        <div className="mt-1 text-sm text-gray-600">
          {category} {subCategory}
        </div>
        <Price price={price} oldPrice={oldPrice} className="mt-2" />
        {outOfStock && <div className="text-red">Out of stock</div>}
        <div className="flex items-center justify-between">
          <Button
            variant="text"
            loading={updatingUserProduct}
            disabled={Boolean(outOfStock)}
            onClick={() => {
              if (!uid) {
                notification$.next({ message: 'You are not logged in.' })
                return
              }
              updateUserProduct({
                variables: {
                  createUserProductInput: {
                    pid,
                    uid,
                    status: UserProductStatus.RemovedFromWishlist,
                  },
                },
              })
            }}
          >
            Remove
          </Button>
          {!outOfStock && (
            <div className="flex justify-between mt-2">
              <Button
                variant="text"
                loading={updatingUserProduct}
                disabled={Boolean(outOfStock)}
                onClick={() => {
                  if (!uid) {
                    notification$.next({ message: 'You are not logged in.' })
                    return
                  }
                  updateUserProduct({
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
        </div>
      </div>
    </div>
  )
}
