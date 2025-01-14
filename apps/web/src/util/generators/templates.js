// component.tsx
exports.component = (
  componentName,
) => `export interface I${componentName}Props {}

export const ${componentName} = ({}: I${componentName}Props) => {
  return <div>Hello, This is ${componentName} component!</div>
}
`

// component.stories.tsx
exports.story = (componentName, componentType) => `import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ${componentName} } from './${componentName}'

export default {
  title: '${componentType}',
  component: ${componentName},
} as ComponentMeta<typeof ${componentName}>

const Template: ComponentStory<typeof ${componentName}> = (args) => <${componentName} {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
`

exports.barrel = (componentName) =>
  `export { ${componentName} } from './${componentName}'`
