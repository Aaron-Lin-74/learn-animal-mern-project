import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from './contexts/AuthContext'

const SignUpForm = () => {
  const userNameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const [error, setError] = useState('')
  // aviod multi clicks of the Sign Up button after first submission
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { signUp } = useAuth()

  async function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return showError('Passwords do not match')
    }
    try {
      setError('')
      setLoading(true)
      // await signup(emailRef.current.value, passwordRef.current.value)
      const user = {
        name: userNameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }
      const result = await signUp(user)
      if (!result) {
        showError('The error from the fetch')
        return
      }
      navigate('/dashboard')
    } catch {
      showError('Failed to create an account')
      setLoading(false)
    }
  }

  function showError(message) {
    setError(message)
    setTimeout(() => setError(''), 5000)
  }

  return (
    <>
      {error && <div className='sign-up-error'>{error}</div>}
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        <label htmlFor='sign-up-username'>User Name</label>
        <input
          id='sign-up-username'
          type='text'
          ref={userNameRef}
          placeholder='user name'
          required
        />

        <label htmlFor='sign-up-email'>Email</label>
        <input
          id='sign-up-email'
          type='email'
          ref={emailRef}
          placeholder='example@example.com'
          required
        />
        <label htmlFor='sign-up-password'>Password</label>
        <input
          id='sign-up-password'
          type='password'
          ref={passwordRef}
          placeholder='password'
          required
        />
        <label htmlFor='sign-up-password2'>Password Confirmation</label>
        <input
          id='sign-up-password2'
          type='password'
          placeholder='password'
          ref={passwordConfirmRef}
          required
        />
        <button disabled={loading} type='submit'>
          Sign Up
        </button>
        <div className='switch'>
          Already have an account? <Link to='/login'>Log In</Link>
        </div>
      </form>
    </>
  )
}

export default SignUpForm
