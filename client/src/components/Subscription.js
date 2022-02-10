import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './Button'
import './Subscription.css'

const Subscription = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  function showError(message) {
    setError(message)
    setTimeout(() => setError(''), 3000)
  }
  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const response = await fetch('/api/subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })
      const jsonResponse = await response.json()
      if (!response.ok) {
        throw new Error(jsonResponse.message)
      }
      navigate('/thank-you/subscription')
    } catch (err) {
      showError(err.message)
      setEmail('')
    }
  }
  return (
    <section className='subscription'>
      {error && <div className='error-info'>{error}</div>}
      <h3 className='subscription-heading'>
        Join the Learn Animals newsletter to receive our latest updates
      </h3>
      <p className='subscription-text'>You can unsubscribe at any time.</p>
      <div className='subscription-input-wrap'>
        <form onSubmit={handleSubmit}>
          <input
            type='email'
            name='email'
            className='subscription-input'
            placeholder='Your Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button
            buttonStyle='btn--outline'
            buttonSize='btn--medium'
            type='submit'
          >
            Join Now
          </Button>
        </form>
      </div>
    </section>
  )
}

export default Subscription
