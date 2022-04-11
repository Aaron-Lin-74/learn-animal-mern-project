import React, { useEffect } from 'react'
import useUtils from '../../hooks/useUtils'
import SignUpForm from './SignUpForm/SignUpForm'
import './SignUpForm/SignUpForm.scss'

function SignUp() {
  const { scrollTop } = useUtils()
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
