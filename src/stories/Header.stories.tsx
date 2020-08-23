import React from 'react'
import { Story, Meta } from '@storybook/react'
import 'styles/common/global.sass'

import { Header } from 'components'

export default {
  title: 'Example/Header',
  component: Header
} as Meta

const Template: Story = args => <Header {...args} />

export const Default = Template.bind({})
Default.args = {}
