import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Header } from './Header'
import { Provider } from 'react-redux'
import { userInitialState, userReducer } from '../../../store/user'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

const reducers = { user: userReducer }

const store = configureStore({
  reducer: combineReducers(reducers),
  preloadedState: {
    user: {
      uid: '3',
      roles: ['cook'],
      loaded: true,
    },
  },
})

export default {
  title: 'organisms/Header',
  component: Header,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = () => <Header />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
