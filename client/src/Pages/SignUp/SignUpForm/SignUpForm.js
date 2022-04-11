import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../contexts/AuthContext'
import Button from '../../../components/Button/Button'

function SignUpForm() {
  const userNameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const [error, setError] = useState('')

  // Aviod multi clicks of the Sign Up button after first submission
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { signUp } = useAuth()

  // The error notice will disappear after 3 seconds
  function showError(message) {
    setError(message)
    setTimeout(() => setError(''), 3000)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      showError('Passwords do not match')
      return
    }
    try {
      setError('')
      setLoading(true)
      const user = {
        name: userNameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }
      const [success, result] = await signUp(user)
      if (!success) {
        showError(result || 'Something went wrong, please try later.')
        setLoading(false)
        return
      }
      navigate('/dashboard')
    } catch (err) {
      showError('Failed to create an account, please try later.')
      setLoading(false)
    }
  }

  return (
    <>
      {error && <div className='sign-up-error'>{error}</div>}
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <label htmlFor='sign-up-username'>
          User Name
          <input
            id='sign-up-username'
            type='text'
            ref={userNameRef}
            placeholder='user name'
            required
          />
        </label>
        <label htmlFor='sign-up-email'>
          Email
          <input
            id='sign-up-email'
            type='email'
            ref={emailRef}
            placeholder='example@example.com'
            required
          />
        </label>
        <label htmlFor='sign-up-password'>
          Password
          <input
            id='sign-up-password'
            type='password'
            ref={passwordRef}
            placeholder='password'
            required
          />
        </label>
        <label htmlFor='sign-up-password2'>
          Password Confirmation
          <input
            id='sign-up-password2'
            type='password'
            placeholder='password'
            ref={passwordConfirmRef}
            required
          />
        </label>
        <div className='btn-wrap'>
          <Button disabled={loading} type='submit' buttonstyle='btn--submit'>
            Sign Up
          </Button>
        </div>
        <div className='switch'>
          Already have an account? <Link to='/login'>Log In</Link>
        </div>
      </form>
    </>
  )
}

export default SignUpForm
