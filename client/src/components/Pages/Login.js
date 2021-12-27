import React, { useEffect } from 'react'
import { useGlobalContext } from '../contexts/AppContext'
import LoginForm from '../LoginForm'
import '../LoginSignUpForm.css'

const Login = () => {
  const { scrollTop } = useGlobalContext()
  useEffect(() => {
    scrollTop()
  }, [])
  return (
    <div className='login'>
      <div className='login-flex'>
        <LoginForm />
      </div>
    </div>
  )
}

export default Login
