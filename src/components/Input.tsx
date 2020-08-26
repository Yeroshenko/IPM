import React from 'react'
import cn from 'classnames'

import 'styles/components/Input.sass'

export type InputProps = {
  label?: string
  value?: string
  placeholder?: string
  hasError?: boolean
  className?: string
  helperText?: string
  errorText?: string
  onChange?: () => void
}

export const Input = ({
  label,
  value = '',
  placeholder,
  hasError,
  className,
  helperText,
  errorText,
  onChange
}: InputProps) => (
  <div className={cn('input', className)}>
    <label className='input__label'>
      {label && <span className='input__label-text'>{label}</span>}
      <input
        type='text'
        placeholder={placeholder}
        className={cn('input__field', { 'input__field--error': hasError || errorText })}
        onChange={onChange}
      />
    </label>
    {helperText && !errorText && <span className='input__helper-text'>{helperText}</span>}
    {errorText && <span className='input__helper-text_error'>{errorText}</span>}
  </div>
)
