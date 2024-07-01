import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { userReducer, userInitialState } from '@ikea/store/user'
import { searchReducer, searchInitialState } from '@ikea/store/search'

import { combineReducers, createStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import { ProductListing } from './ProductListing'

const reducers = {
  user: userReducer,
  search: searchReducer,
}

const store = createStore(combineReducers(reducers), {
  user: userInitialState,
  search: searchInitialState,
})

export default {
  title: 'templates/ProductListing',
  component: ProductListing,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
} as ComponentMeta<typeof ProductListing>

const Template: ComponentStory<typeof ProductListing> = (args) => (
  <ProductListing />
)

export const ResultsPage = Template.bind({})
