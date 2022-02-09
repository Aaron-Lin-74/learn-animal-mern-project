import React, { useEffect } from 'react'
import { useGlobalContext } from '../contexts/AppContext'
import LoginForm from '../components/LoginForm'
import '../components/LoginSignUpForm.css'

const Login = () => {
  const { scrollTop } = useGlobalContext()
  useEffect(() => {
    scrollTop()
  }, [scrollTop])
  return (
    <main className='login'>
      <div className='login-flex'>
        <LoginForm />
      </div>
    </main>
  )
}

export default Login
