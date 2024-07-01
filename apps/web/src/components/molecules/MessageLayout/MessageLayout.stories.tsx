import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MessageLayout } from './MessageLayout'

export default {
  title: 'src/components/molecules/MessageLayout',
  component: MessageLayout,
} as ComponentMeta<typeof MessageLayout>

const Template: ComponentStory<typeof MessageLayout> = (args) => (
  <MessageLayout {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
