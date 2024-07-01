import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { LoadingSection } from './Loading'

export default {
  title: 'molecules/Loading',
  component: LoadingSection,
} as ComponentMeta<typeof LoadingSection>

const Template: ComponentStory<typeof LoadingSection> = () => <LoadingSection />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
