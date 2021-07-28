import React from 'react'
import { ButtonProps } from './Button.props'
import { Ripple } from '../Ripple'
import { Icon } from '../Icon'
import styles from './Button.styles'

export const checkIconColor = (variant: string, isDisabled: boolean) => (isDisabled && variant !== 'contained' ? 'mediumEmphasis' : 'highEmphasis')

const Button = ({
  disabled = false,
  fullWidth = false,
  onClick,
  size = 'semiX',
  testID,
  text,
  variant = 'contained',
  iconPosition = 'right',
  ...rest
}: ButtonProps): JSX.Element => {
  const { button, label, labelContainer } = styles({
    size,
    fullWidth,
    variant,
    disabled,
    iconPosition,
    ...rest
  })

  return (
    <Ripple disabled={disabled} fullWidth={fullWidth}>
      <button
        className={button}
        data-testid={testID}
        disabled={disabled}
        onClick={onClick}
        type="button"
      >
        <span className={labelContainer}>
          <span className={label}>{text}</span>
          {rest.showIcon && <Icon name={rest.iconName} color={checkIconColor(variant, disabled)} />}
        </span>
      </button>
    </Ripple>
  )
}

export default Button
