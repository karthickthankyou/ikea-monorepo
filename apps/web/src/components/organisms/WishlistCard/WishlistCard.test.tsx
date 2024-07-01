import { mount } from '@cypress/react'
import { sampleProduct } from '@ikea/util/data/products'
import { UserProductStatus } from '@ikea/generated/types'
import { WishlistCard } from './WishlistCard'

describe('WishlistCard Component', () => {
  it('WishlistCard renders', () => {
    mount(
      <WishlistCard
        product={{
          createdAt: '',
          id: 1,
          status: UserProductStatus.Wishlisted,
          uid: '',
          updatedAt: '',
          product: {
            ...sampleProduct,
            name: 'BOKKREMLA',
            category: 'Office',
            subCategory: 'Desk, white',
            price: 2.29,
            images: [
              'https://res.cloudinary.com/thankyou/image/upload/v1648218985/nike/ikea/sofa-01_fgsi8y.jpg',
            ],
          },
        }}
      />,
    )
  })
})
