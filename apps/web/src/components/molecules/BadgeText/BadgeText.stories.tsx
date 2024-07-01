import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { BadgeText } from './BadgeText'

export default {
  title: 'src/components/molecules/BadgeText',
  component: BadgeText,
} as ComponentMeta<typeof BadgeText>

const Template: ComponentStory<typeof BadgeText> = (args) => (
  <BadgeText {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
