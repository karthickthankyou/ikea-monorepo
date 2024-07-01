import { mount } from '@cypress/react'
import { sampleProduct } from '@ikea/util/data/products'
import PriceCard from './PriceCard'

describe('PriceCard Component', () => {
  it('PriceCard renders', () => {
    mount(<PriceCard product={sampleProduct} />)
  })
})
