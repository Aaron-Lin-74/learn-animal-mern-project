import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

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

function Button(props) {
  const { children, buttonstyle, buttonsize, path } = props

  // If a button does not have a style, the default style is btn--primary, default size is medium
  const checkButtonStyle = STYLES.includes(buttonstyle)
    ? buttonstyle
    : STYLES[0]
  const checkButtonSize = SIZES.includes(buttonsize) ? buttonsize : SIZES[0]

  // If a path is provided, add Link. Otherwise, just wrapped with button.
  if (path) {
    return (
      <Link to={path}>
        <button
          className={`btns ${checkButtonStyle} ${checkButtonSize}`}
          {...props}
          style={{ display: props.display }}
          type='button'
        >
          {children}
        </button>
      </Link>
    )
  }

  // Use its own style defined in related css file
  if (buttonstyle === 'btn--unStyled') {
    return (
      <button {...props} style={{ display: props.display }} type='button'>
        {children}
      </button>
    )
  }

  // Default setting
  return (
    <button
      className={`btns ${checkButtonStyle} ${checkButtonSize}`}
      style={{ display: props.display }}
      type='button'
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
