import { format } from 'date-fns'
import { Image } from '@ikea/components/atoms/Image'
import { MyOrdersQuery } from '@ikea/generated/types'

export interface IPurchasedCardProps {
  product: MyOrdersQuery['myOrders'][number]
}

export const PurchasedCard = ({ product }: IPurchasedCardProps) => {
  const {
    updatedAt,
    product: { images, name },
  } = product

  return (
    <div>
      <Image src={images && images[0]} alt={''} />
      <div className="mt-2 font-semibold">{name}</div>
      <div className="mt-2 text-sm">{format(new Date(updatedAt), 'PPp')}</div>
    </div>
  )
}
