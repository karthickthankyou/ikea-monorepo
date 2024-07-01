import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { sampleSavedForLater, sampleUserProducts } from '@ikea/store/sampleData'
import { userReducer, userInitialState } from '@ikea/store/user'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from '@reduxjs/toolkit'
import { WishlistCard } from './WishlistCard'

const reducers = { user: userReducer }

const store = createStore(combineReducers(reducers), {
  user: userInitialState,
})

export default {
  title: 'organisms/WishlistCard',
  component: WishlistCard,
} as ComponentMeta<typeof WishlistCard>

const Template: ComponentStory<typeof WishlistCard> = (args) => (
  <WishlistCard {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  product: sampleUserProducts[0],
}
Primary.decorators = [(story) => <Provider store={store}>{story()}</Provider>]
