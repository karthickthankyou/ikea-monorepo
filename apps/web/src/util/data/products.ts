import { ProductsQuery, UserProductStatus } from '@ikea/generated/types'

export const sampleProduct: ProductsQuery['products'][number] = {
  id: 4,
  name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At enim perspiciatis pariatur sit amet consectetur adipisicing elit. At enim perspiciatis pariatur!!',
  images: [
    'https://res.cloudinary.com/thankyou/image/upload/v1648218985/nike/ikea/sofa-01_fgsi8y.jpg',
  ],
  category: 'Furniture',
  subCategory: 'Desk',
  price: 2.29,
  discount: 12,
  oldPrice: 3,
  outOfStock: false,
  rating: 2,
  reviews: 2,
  userProduct: {
    id: 1,
    uid: '',
    pid: 4,
    status: UserProductStatus.InCart,
  },
  createdAt: undefined,
  updatedAt: undefined,
  url: '',
  tags: [],
  description: '',
  sellerId: '',
  measurements: '',
}
