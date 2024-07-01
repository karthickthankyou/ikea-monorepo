import { Button } from '@ikea/components/atoms/Button/Button'
import { Image } from '@ikea/components/atoms/Image'
import { Price } from '@ikea/components/molecules/Price/Price'
import {
  ProductFragmentFragment,
  useCreateUserProductMutation,
  MyProductsDocument,
  UserProductStatus,
} from '@ikea/generated/types'
import { UserProduct } from '@ikea/util/queries/index.gql'
import { useAppSelector } from '@ikea/store'
import { notification$ } from '@ikea/subjects'

export interface ICartCardProps {
  product: ProductFragmentFragment
}

export const CartCard = ({ product }: ICartCardProps) => {
  const {
    category,
    id: pid,
    subCategory,
    name,
    price,
    oldPrice,
    outOfStock,
    images,
  } = product
  const [removeProductFromCart, { loading: savingForLater, data, error }] =
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
      <div className="flex-grow text-sm">
        <div className="max-w-md font-medium">{name}</div>
        <div className="text-gray-600">
          {category} {subCategory}
        </div>
      </div>
      <div className="flex flex-col items-end justify-between ">
        <Price price={price} oldPrice={oldPrice} />

        <Button
          variant="text"
          className="hidden group-hover:block"
          loading={savingForLater}
          onClick={() => {
            if (!uid) {
              notification$.next({ message: 'You are not logged in.' })
              return
            }
            removeProductFromCart({
              variables: {
                createUserProductInput: {
                  pid,
                  uid,
                  status: UserProductStatus.SavedForLater,
                },
              },
            })
          }}
        >
          Save for later
        </Button>
      </div>
    </div>
  )
}
