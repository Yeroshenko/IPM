import React, { ReactNode } from 'react'
import cn from 'classnames'

import 'styles/components/Button.sass'

export type ButtonProps = {
  type?: 'default' | 'primary'
  size?: 'normal' | 'large'
  htmlType?: 'submit' | 'button' | 'reset'
  children?: ReactNode
  disabled?: boolean
  rounded?: boolean
  className?: string
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  onClick?: () => void
}

export const Button = (props: ButtonProps) => {
  const {
    type = 'default',
    size = 'normal',
    htmlType = 'button',
    disabled = false,
    rounded = false,
    children,
    className,
    icon,
    iconPosition = 'left',
    onClick
  } = props

  const cls = cn(
    'button',
    className,
    { 'button--primary': type === 'primary' },
    { 'button--large': size === 'large' },
    { 'button--rounded': rounded },
    { 'button--icon-on-right': icon && iconPosition === 'right' },
    { 'button--icon-only': !children && icon}
  )

  return (
    <button className={cls} disabled={disabled} type={htmlType} onClick={onClick}>
      {icon && <span className='button__icon'>{icon}</span>}
      {children}
    </button>
  )
}
