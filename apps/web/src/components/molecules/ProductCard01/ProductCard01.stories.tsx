import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { userReducer, userInitialState } from '@ikea/store/user'
import { combineReducers, createStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { ProductCard01 } from './ProductCard01'
import { sampleProduct } from '@ikea/util/data/products'

const reducers = { user: userReducer }

const store = createStore(combineReducers(reducers), {
  user: userInitialState,
})

export default {
  title: 'organisms/ProductCard01',
  component: ProductCard01,
  decorators: [
    (story) => (
      <div className="max-w-xs">
        <Provider store={store}>{story()}</Provider>
      </div>
    ),
  ],
} as ComponentMeta<typeof ProductCard01>

const Template: ComponentStory<typeof ProductCard01> = (args) => (
  <ProductCard01 {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  product: sampleProduct,
}

export const HugePrice = Template.bind({})
HugePrice.args = {
  product: sampleProduct,
}

export const NoRatingAndDiscount = Template.bind({})
NoRatingAndDiscount.args = {
  product: sampleProduct,
}

export const LineClamps = Template.bind({})
LineClamps.args = {
  product: sampleProduct,
}
