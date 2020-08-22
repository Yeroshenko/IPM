import React from 'react'
import { Story, Meta } from '@storybook/react'
import 'styles/common/global.sass'

import { Button, ButtonProps } from 'components'
import { ReactComponent as ArrowRight } from 'assets/icons/arrow_right.svg'

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
  disabled: true
}

export const IconLeft = Template.bind({})
IconLeft.args = {
  children: 'Icon',
  type: 'primary',
  icon: <ArrowRight />
}

export const IconRight = Template.bind({})
IconRight.args = {
  children: 'Icon right',
  iconPosition: 'right',
  rounded: true,
  icon: <ArrowRight />
}

export const IconOnly = Template.bind({})
IconOnly.args = {
  type: 'primary',
  icon: <ArrowRight />
}
