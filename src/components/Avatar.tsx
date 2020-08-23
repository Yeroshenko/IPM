import React from 'react'
import cn from 'classnames'

import { ReactComponent as UserIcon } from 'assets/icons/user.svg'
import 'styles/components/Avatar.sass'

export type AvatarProps = {
  src?: string
  size?: 's' | 'm' | 'l' | 'xl' | 'xxl'
  numberSize?: number
}

export const Avatar = ({ src, size = 'm', numberSize }: AvatarProps) => {
  const styles = numberSize
    ? {
        width: `${numberSize}px`,
        height: `${numberSize}px`,
        fontSize: `${numberSize / 2}px`
      }
    : {}

  return (
    <div className={cn('avatar', `avatar--${size}`)} style={styles}>
      {src ? (
        <img className='avatar__image' src={src} alt='user avatar' />
      ) : (
        <UserIcon className='avatar__icon' />
      )}
    </div>
  )
}
