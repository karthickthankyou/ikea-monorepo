import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { GridOpinionated } from './GridOpinionated'

export default {
  title: 'src/components/molecules/GridOpinionated',
  component: GridOpinionated,
} as ComponentMeta<typeof GridOpinionated>

const Template: ComponentStory<typeof GridOpinionated> = (args) => (
  <GridOpinionated {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
