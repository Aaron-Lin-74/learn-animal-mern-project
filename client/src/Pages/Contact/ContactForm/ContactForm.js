import React, { useState, useRef } from 'react'
import './ContactForm.scss'
import { useNavigate } from 'react-router-dom'
import { GrSend } from 'react-icons/gr'
import Button from '../../../components/Button/Button'
import image from '../../../backgroundImages/default-profile.jpg'

function ContactForm() {
  const navigate = useNavigate()

  // Use uncontrolled form input for simplicity
  const nameRef = useRef()
  const emailRef = useRef()
  const messageRef = useRef()
  const [error, setError] = useState('')
  function showError(message) {
    setError(message)
    setTimeout(() => setError(''), 3000)
  }

  // Aviod multi clicks of the send button after first submission
  const [loading, setLoading] = useState(false)
  const submitContactForm = (e) => {
    e.preventDefault()
    setLoading(true)
    fetch(
      `https://formsubmit.co/ajax/${process.env.REACT_APP_FORM_SUBMIT_EMAIL}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: nameRef.current.value,
          email: emailRef.current.value,
          message: messageRef.current.value,
        }),
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        throw new Error('Something went wrong, please try later again.')
      })
      .then(() => {
        navigate('/thank-you/contact')
      })
      .catch((err) => {
        showError(err.message)
        setLoading(false)
      })
  }

  return (
    <div className='contact-container'>
      {error && <div className='contact-error'>{error}</div>}
      <div className='form-container'>
        <form className='contact-form' onSubmit={submitContactForm}>
          <h4>We&apos;d love to hear from you!</h4>
          <input
            type='text'
            ref={nameRef}
            placeholder='Name'
            aria-label='name(required)'
            required
          />
          <input
            type='email'
            ref={emailRef}
            placeholder='Example@example.com'
            aria-label='email(required)'
            required
          />
          <textarea
            ref={messageRef}
            placeholder='Message'
            aria-label='message(required)'
            required
          />
          <div className='btn-wrap'>
            <Button disabled={loading} type='submit' buttonstyle='btn--submit'>
              Send <GrSend />
            </Button>
          </div>
        </form>
      </div>
      <div className='image-container'>
        <div className='image-wrap'>
          <img src={image} alt=' ' />
        </div>
      </div>
    </div>
  )
}

export default ContactForm
