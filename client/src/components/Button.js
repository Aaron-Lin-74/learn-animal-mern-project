import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

const STYLES = ['btn--primary', 'btn--outline', 'btn--danger', 'btn--confirm']
const SIZES = ['btn--medium', 'btn--large']

const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  path,
  disabled,
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
