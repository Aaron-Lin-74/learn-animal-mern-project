import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './contexts/AuthContext'
import Button from './Button'
import './UpdateProfileForm.css'

const UpdateProfileForm = () => {
  const userNameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const [error, setError] = useState('')
  // aviod multi clicks of the Sign Up button after first submission
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { currentUser, updateUserProfile, logout } = useAuth()

  async function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return showError('Passwords do not match')
    }
    try {
      setError('')
      setLoading(true)
      const updatedUser = {}

      // const promises = []
      // Check whether the user name has been changed
      if (userNameRef.current.value !== currentUser.name) {
        //   promises.push(updateName(userNameRef.current.value))
        updatedUser.name = userNameRef.current.value
      }

      // Check whether the email has been changed
      if (emailRef.current.value !== currentUser.email) {
        // promises.push(updateEmail(emailRef.current.value))
        updatedUser.email = emailRef.current.value
      }

      // Check if the new password has been entered
      if (passwordRef.current.value) {
        // promises.push(updatePassword(passwordRef.current.value))
        updatedUser.password = passwordRef.current.value
      }
      // const result = await Promise.all(promises)
      const result = await updateUserProfile(updatedUser)
      if (!result) {
        showError('Failed to update the profile')
        return
      }

      // The access token is not valid, re-login
      if (result === 403) {
        showError('Session expires, please login again')
        setTimeout(logout, 3000)
        return
      }
      navigate('/dashboard')
    } catch {
      showError('Failed to update the profile')
      setLoading(false)
    }
  }

  function showError(message) {
    setError(message)
    setTimeout(() => setError(''), 5000)
  }

  return (
    <>
      {error && <div className='update-profile-error'>{error}</div>}
      <form className='update-profile-form' onSubmit={handleSubmit}>
        <h3>Update Profile</h3>
        <label htmlFor='update-profile-username'>User Name</label>
        <input
          id='update-profile-username'
          type='text'
          ref={userNameRef}
          required
          defaultValue={currentUser.name}
        />

        <label htmlFor='update-profile-email'>Email</label>
        <input
          id='update-profile-email'
          type='email'
          ref={emailRef}
          required
          defaultValue={currentUser.email}
        />
        <label htmlFor='update-profile-password'>Password</label>
        <input
          id='update-profile-password'
          type='password'
          ref={passwordRef}
          placeholder='Leave blank to keep the same'
        />
        <label htmlFor='update-profile-password2'>Password Confirmation</label>
        <input
          id='update-profile-password2'
          type='password'
          placeholder='Leave blank to keep the same'
          ref={passwordConfirmRef}
        />
        <Button disabled={loading} type='submit' buttonStyle='btn--confirm'>
          Update
        </Button>

        <Button path='/dashboard' buttonStyle='btn--outline'>
          Cancel
        </Button>
      </form>
    </>
  )
}
export default UpdateProfileForm
