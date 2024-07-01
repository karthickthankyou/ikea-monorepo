import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Provider } from 'react-redux'
import { userReducer, userInitialState } from '@ikea/store/user'
import { combineReducers, createStore } from '@reduxjs/toolkit'
import { sampleProductFragment } from '@ikea/store/sampleData'
import { SavedForLaterCard } from './SavedForLaterCard'

const reducers = { user: userReducer }

const store = createStore(combineReducers(reducers), {
  user: userInitialState,
})

export default {
  title: 'organisms/SavedForLaterCard',
  component: SavedForLaterCard,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
} as ComponentMeta<typeof SavedForLaterCard>

const Template: ComponentStory<typeof SavedForLaterCard> = (args) => (
  <SavedForLaterCard {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  product: sampleProductFragment,
}
