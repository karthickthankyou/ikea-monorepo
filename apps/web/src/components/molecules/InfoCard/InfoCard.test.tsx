import { mount } from '@cypress/react'
import { IconHeart } from '@tabler/icons-react'

import { InfoCard } from './InfoCard'

describe('InfoCard Component', () => {
  it('InfoCard renders', () => {
    mount(
      <InfoCard
        Icon={IconHeart}
        title="Returns policy"
        description="Exceptions during COVID19"
        href="/"
      />,
    )
  })
})
