import React from 'react'
import { Story, Meta } from '@storybook/react'
import 'styles/common/global.sass'

import { Button, ButtonProps } from 'components'

export default {
  title: 'Example/Button',
  component: Button
} as Meta

const Template: Story<ButtonProps> = args => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Default'
}

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary',
  type: 'primary'
}

export const Rounded = Template.bind({})
Rounded.args = {
  children: 'Rounded',
  rounded: true
}

export const Large = Template.bind({})
Large.args = {
  children: 'Large',
  rounded: true,
  type: 'primary',
  size: 'large'
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: 'Disabled',
  rounded: true,
  size: 'large',
  disabled: true
}
