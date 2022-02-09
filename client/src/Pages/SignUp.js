import React, { useEffect } from 'react'
import { useGlobalContext } from '../contexts/AppContext'
import SignUpForm from '../components/SignUpForm'
import '../components/LoginSignUpForm.css'

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
