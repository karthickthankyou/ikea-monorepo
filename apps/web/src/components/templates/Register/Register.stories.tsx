import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { userReducer, userInitialState } from '@ikea/store/user'
import { combineReducers, createStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { Register } from './Register'

const reducers = { user: userReducer }

const store = createStore(combineReducers(reducers), {
  user: userInitialState,
})

export default {
  title: 'templates/CreateAccount',
  component: Register,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
} as ComponentMeta<typeof Register>

const Template: ComponentStory<typeof Register> = () => <Register />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
