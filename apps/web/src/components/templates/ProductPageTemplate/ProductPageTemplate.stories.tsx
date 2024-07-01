import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ProductPageTemplate } from './ProductPageTemplate'
import { sampleProductFragment } from '@ikea/store/sampleData'

export default {
  title: 'templates/ProductPageTemplate',
  component: ProductPageTemplate,
} as ComponentMeta<typeof ProductPageTemplate>

const Template: ComponentStory<typeof ProductPageTemplate> = (args) => (
  <div className="mt-24">
    <ProductPageTemplate
      product={{ loading: false, data: { product: sampleProductFragment } }}
    />
  </div>
)

export const Primary = Template.bind({})
