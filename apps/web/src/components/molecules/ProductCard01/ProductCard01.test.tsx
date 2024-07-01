import { mount } from '@cypress/react'
import { sampleProduct } from '@ikea/util/data/products'
import { ProductCard01 } from './ProductCard01'

describe('ProductCard01 Component', () => {
  it('ProductCard01 renders', () => {
    mount(<ProductCard01 product={sampleProduct} />)
  })
})
