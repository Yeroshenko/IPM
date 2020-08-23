import React from 'react'
import { Story, Meta } from '@storybook/react'
import 'styles/common/global.sass'

import { Avatar, AvatarProps } from 'components'

export default {
  title: 'Example/Avatar',
  component: Avatar
} as Meta

const Template: Story<AvatarProps> = args => <Avatar {...args} />

export const WithoutPicture = Template.bind({})
WithoutPicture.args = {
  size: 'xxl'
}

export const WithPicture = Template.bind({})
WithPicture.args = {
  src: 'https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg',
  size: 'xxl'
}
