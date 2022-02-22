import React, { useEffect } from 'react'
import { useGlobalContext } from '../../contexts/AppContext'
import SignUpForm from './SignUpForm/SignUpForm'
import './SignUpForm/SignUpForm.scss'

const SignUp = () => {
  const { scrollTop } = useGlobalContext()
  useEffect(() => {
    scrollTop()
  }, [scrollTop])
  return (
    <main className='sign-up'>
      <div className='sign-up-flex'>
        <SignUpForm />
      </div>
    </main>
  )
}

export default SignUp
