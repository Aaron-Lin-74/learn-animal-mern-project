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
  'btn--unStyled',
]
const SIZES = ['btn--medium', 'btn--large']

const Button = (props) => {
  const { children, buttonStyle, buttonSize, path } = props

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
          {...props}
          style={{ display: props.display }}
        >
          {children}
        </button>
      </Link>
    )
  }

  // Use its own style defined in related css file
  if (buttonStyle === 'btn--unStyled') {
    return (
      <button {...props} style={{ display: props.display }}>
        {children}
      </button>
    )
  }
  return (
    <button
      className={`btns ${checkButtonStyle} ${checkButtonSize}`}
      style={{ display: props.display }}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
