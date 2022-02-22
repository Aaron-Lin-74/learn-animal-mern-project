import React from 'react'
import Button from '../../components/Button/Button'
import { useParams } from 'react-router-dom'

const ThankYou = () => {
  const { type } = useParams()
  return (
    <div className='thank-you'>
      <div className='thank-you-container'>
        <h1>Thank You!</h1>
        {type === 'contact' ? (
          <h3>We value your feedback.</h3>
        ) : (
          <h3>We've just added your email address to our subscription list.</h3>
        )}
        <div className='thank-you-wrap'>
          <h4>Click here to return home</h4>
          <Button path='/'>Home</Button>
        </div>
      </div>
    </div>
  )
}

export default ThankYou
