import React, { useRef, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../../contexts/AuthContext'
import Button from '../../../components/Button/Button'

function LoginForm() {
  const emailRef = useRef()
  const passwordRef = useRef()

  const [error, setError] = useState('')
  // Aviod multi clicks of the Sign Up button after first submission
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { login } = useAuth()
  const { state } = useLocation

  function showError(message) {
    setError(message)
    setTimeout(() => setError(''), 3000)
  }
  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setError('')
      setLoading(true)
      const user = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }
      const [success, result] = await login(user)
      if (!success) {
        showError(result || 'Failed to login to account, please try later.')
        setLoading(false)
        return
      }
      navigate(state?.path || '/dashboard')
    } catch (err) {
      showError('Failed to login to account, please try later.')
      setLoading(false)
    }
  }

  return (
    <>
      {error && <div className='login-error'>{error}</div>}

      <form className='login-form' onSubmit={handleSubmit}>
        <h1>Log In</h1>
        <label htmlFor='login-email'>
          Email
          <input
            id='login-email'
            type='email'
            placeholder='example@example.com'
            ref={emailRef}
            required
          />
        </label>
        <label htmlFor='login-password'>
          Password
          <input
            id='login-password'
            type='password'
            placeholder='password'
            ref={passwordRef}
            required
          />
        </label>
        <div className='btn-wrap'>
          <Button disabled={loading} type='submit' buttonstyle='btn--submit'>
            Log In
          </Button>
        </div>
        <div className='switch'>
          Need to create an account? <Link to='/sign-up'>Sign Up</Link>
        </div>
      </form>
    </>
  )
}

export default LoginForm
