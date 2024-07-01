import { UserProductStatus } from '@ikea/generated/types'
import {
  IconHeart,
  IconHeartFilled,
  IconShoppingCart,
} from '@tabler/icons-react'

export interface IWishlistProps {}

export const Wishlist = ({
  fetching,
  mutationStatus,
  status,
}: {
  fetching: boolean
  mutationStatus: UserProductStatus | undefined
  status: UserProductStatus | undefined
}) => {
  if (fetching)
    return (
      <IconHeartFilled className="w-6 h-6 text-red-200 fill-red animate-pulse" />
    )

  if (status === UserProductStatus.InCart)
    return <IconShoppingCart className="w-6 h-6 fill-red" />

  if (
    status === UserProductStatus.Wishlisted ||
    mutationStatus === UserProductStatus.Wishlisted
  )
    return <IconHeart className="w-6 h-6 text-red fill-red" />

  return <IconHeart className="w-6 h-6 text-white" />
}
