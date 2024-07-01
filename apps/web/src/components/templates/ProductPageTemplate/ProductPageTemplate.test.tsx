import { mount } from '@cypress/react'
import { sampleProductFragment } from '@ikea/store/sampleData'
import { ProductPageTemplate } from './ProductPageTemplate'

describe('ProductPageTemplate Component', () => {
  it('ProductPageTemplate renders', () => {
    mount(
      <ProductPageTemplate
        product={{ data: { product: sampleProductFragment }, loading: false }}
      />,
    )
  })
})
