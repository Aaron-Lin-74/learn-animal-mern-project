import React, { useEffect } from 'react'
import useUtils from '../../hooks/useUtils'
import LoginForm from './LoginForm/LoginForm'
import './LoginForm/LoginForm.scss'

const Login = () => {
  const { scrollTop } = useUtils()
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
