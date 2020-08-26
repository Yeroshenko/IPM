import React from 'react'
import { Story, Meta } from '@storybook/react'
import 'styles/common/global.sass'

import { Input, InputProps } from 'components'

export default {
  title: 'Example/Input',
  component: Input
} as Meta

const Template: Story<InputProps> = args => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Placeholder Text'
}

export const Label = Template.bind({})
Label.args = {
  placeholder: 'Placeholder Text',
  label: 'Label Title'
}


export const HelperText = Template.bind({})
HelperText.args = {
  placeholder: 'Placeholder Text',
  label: 'Label Title',
  helperText: 'Helper Text'
}

export const Error = Template.bind({})
Error.args = {
  placeholder: 'Placeholder Text',
  label: 'Label Title',
  hasError: true
}

export const ErrorText = Template.bind({})
ErrorText.args = {
  placeholder: 'Placeholder Text',
  label: 'Label Title',
  errorText: 'Error Text'
}

