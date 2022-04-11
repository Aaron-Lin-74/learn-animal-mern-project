import React from 'react'
import { useParams } from 'react-router-dom'
import Button from '../../components/Button/Button'

function ThankYou() {
  const { type } = useParams()
  return (
    <main className='thank-you'>
      <div className='thank-you-container'>
        <h1>Thank You!</h1>
        {type === 'contact' ? (
          <h2>We value your feedback.</h2>
        ) : (
          <h3>
            We&apos;ve just added your email address to our subscription list.
          </h3>
        )}
        <div className='thank-you-wrap'>
          <h3>Click here to return home</h3>
          <Button path='/'>Home</Button>
        </div>
      </div>
    </main>
  )
}

export default ThankYou
