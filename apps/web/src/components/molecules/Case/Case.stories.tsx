import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Case } from './Case'

export default {
  title: 'src/components/molecules/Case',
  component: Case,
} as ComponentMeta<typeof Case>

const Template: ComponentStory<typeof Case> = (args) => <Case {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
