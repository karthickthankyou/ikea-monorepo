import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { InfoCard } from './InfoCard'
import { IconHeart } from '@tabler/icons-react'

export default {
  title: 'molecules/InfoCard',
  component: InfoCard,
} as ComponentMeta<typeof InfoCard>

const Template: ComponentStory<typeof InfoCard> = (args) => (
  <InfoCard {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  Icon: IconHeart,
  title: 'Returns policy',
  description: 'Exceptions during COVID19',
  href: '/',
}
Primary.parameters = {}
