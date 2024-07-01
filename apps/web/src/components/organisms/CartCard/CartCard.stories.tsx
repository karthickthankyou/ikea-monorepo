import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { userReducer, userInitialState } from '@ikea/store/user'
import { combineReducers, createStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { CartCard } from './CartCard'

const reducers = { user: userReducer }

const store = createStore(combineReducers(reducers), {
  user: userInitialState,
})

export default {
  title: 'molecules/CartCard',
  component: CartCard,
  decorators: [
    (story) => (
      <div className="max-w-sm">
        <Provider store={store}>{story()}</Provider>
      </div>
    ),
  ],
} as ComponentMeta<typeof CartCard>

const Template: ComponentStory<typeof CartCard> = (args) => (
  <CartCard {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  product: {
    id: 1,
    createdAt: '',
    updatedAt: '',
    outOfStock: false,
    sellerId: '',
    tags: [],
    url: '',
    name: 'BOKKREMLA',
    category: 'Office',
    subCategory: 'Desk, white',
    price: 2.29,
    images: [
      'https://res.cloudinary.com/thankyou/image/upload/v1648218985/nike/ikea/sofa-01_fgsi8y.jpg',
    ],
  },
}
