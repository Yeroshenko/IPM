import React, { ReactNode } from 'react'
import cn from 'classnames'

import 'styles/components/Button.sass'

export type ButtonProps = {
  type?: 'default' | 'primary'
  size?: 'normal' | 'large'
  htmlType: 'submit' | 'button' | 'reset'
  children: ReactNode
  disabled?: boolean
  rounded?: boolean
  className?: string
  onClick?: () => void
}

export const Button = ({
  type = 'default',
  size = 'normal',
  htmlType = 'button',
  disabled = false,
  rounded = false,
  children,
  className,
  onClick
}: ButtonProps) => {
  const cls = cn(
    'button',
    className,
    { 'button--primary': type === 'primary' },
    { 'button--large': size === 'large' },
    { 'button--rounded': rounded }
  )

  return (
    <button className={cls} disabled={disabled} type={htmlType} onClick={onClick}>
      {children}
    </button>
  )
}
