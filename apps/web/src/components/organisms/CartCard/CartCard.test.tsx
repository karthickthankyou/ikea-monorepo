import { mount } from '@cypress/react'
import { CartCard } from './CartCard'

describe('CartCard Component', () => {
  it('CartCard renders', () => {
    mount(
      <CartCard
        product={{
          createdAt: '',
          id: 2,
          outOfStock: false,
          sellerId: '23',
          tags: [],
          updatedAt: '',
          url: '',
          name: 'BOKKREMLA',
          category: 'Office',
          subCategory: 'Desk, white',
          price: 2.29,
          images: [
            'https://res.cloudinary.com/thankyou/image/upload/v1648218985/nike/ikea/sofa-01_fgsi8y.jpg',
          ],
        }}
      />,
    )
  })
})
