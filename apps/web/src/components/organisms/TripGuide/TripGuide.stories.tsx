import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { userReducer, userInitialState } from '@ikea/store/user'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from '@reduxjs/toolkit'
import produce from 'immer'
import { TripGuide } from './TripGuide'

const reducers = { user: userReducer }

const stateWithUid = produce(userInitialState, (userDraft) => {
  // @ts-ignore
  userDraft.data.user?.uid = '123'
})

const store = createStore(combineReducers(reducers), {
  user: userInitialState,
})
const storeWithUid = createStore(combineReducers(reducers), {
  user: stateWithUid,
})

export default {
  title: 'organisms/TripGuide',
  component: TripGuide,
} as ComponentMeta<typeof TripGuide>

const Template: ComponentStory<typeof TripGuide> = (args) => (
  <TripGuide {...args} />
)

export const UnAuthenticated = Template.bind({})
UnAuthenticated.args = {
  currentPageName: 'Home',
}
UnAuthenticated.decorators = [
  (story) => <Provider store={store}>{story()}</Provider>,
]
export const Authenticated = Template.bind({})
Authenticated.args = {
  currentPageName: '404',
}
Authenticated.decorators = [
  (story) => <Provider store={storeWithUid}>{story()}</Provider>,
]
