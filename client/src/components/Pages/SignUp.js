import React, { useEffect } from 'react'
import { useGlobalContext } from '../contexts/AppContext'
import SignUpForm from '../SignUpForm'
import '../LoginSignUpForm.css'

const SignUp = () => {
  const { scrollTop } = useGlobalContext()
  useEffect(() => {
    scrollTop()
  }, [])
  return (
    <div className='sign-up'>
      <div className='sign-up-flex'>
        <SignUpForm />
      </div>
    </div>
  )
}

export default SignUp
