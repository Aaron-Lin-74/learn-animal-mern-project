import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'
import { ImArrowUp } from 'react-icons/im'

const STYLES = [
  'btn--primary',
  'btn--outline',
  'btn--danger',
  'btn--confirm',
  'btn--scrollUp',
  'btn--submit',
  'btn--circle',
]
const SIZES = ['btn--medium', 'btn--large']

const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  path,
  disabled,
  display,
}) => {
  // If a button does not have a style, the default style is btn--primary, default size is medium
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0]
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

  // If a path is provided, add Link. Otherwise, just wrapped with button.
  if (path) {
    return (
      <Link to={path}>
        <button
          className={`btns ${checkButtonStyle} ${checkButtonSize}`}
          onClick={onClick}
          type={type}
          disabled={disabled}
        >
          {children}
        </button>
      </Link>
    )
  }
  if (buttonStyle === 'btn--scrollUp') {
    return (
      <button
        className={`btns ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
        disabled={disabled}
        style={{ display: display }}
      >
        <ImArrowUp />
      </button>
    )
  }
  return (
    <button
      className={`btns ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
