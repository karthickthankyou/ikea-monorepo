import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { userReducer, userInitialState } from '@ikea/store/user'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from '@reduxjs/toolkit'
import { ChatWindow } from './ChatWindow'

const reducers = { user: userReducer }

const store = createStore(combineReducers(reducers), {
  user: userInitialState,
})

const authenticatedStore = createStore(combineReducers(reducers), {})

export default {
  title: 'organisms/ChatWindow',
  component: ChatWindow,
} as ComponentMeta<typeof ChatWindow>

const Template: ComponentStory<typeof ChatWindow> = () => <ChatWindow />

export const Primary = Template.bind({})
Primary.decorators = [(story) => <Provider store={store}>{story()}</Provider>]
export const Authenticated = Template.bind({})
Authenticated.decorators = [
  (story) => <Provider store={authenticatedStore}>{story()}</Provider>,
]
