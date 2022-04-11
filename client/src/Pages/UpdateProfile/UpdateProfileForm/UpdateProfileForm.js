import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../contexts/AuthContext'
import Button from '../../../components/Button/Button'
import './UpdateProfileForm.css'

function UpdateProfileForm() {
  const userNameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const [error, setError] = useState('')
  // aviod multi clicks of the button after first submission
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { currentUser, updateUserProfile } = useAuth()

  function showError(message) {
    setError(message)
    setTimeout(() => setError(''), 3000)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      showError('Passwords do not match')
      return
    }
    try {
      setError('')
      setLoading(true)
      const updatedUser = {}

      // Check whether the user name has been changed
      if (userNameRef.current.value !== currentUser.name) {
        updatedUser.name = userNameRef.current.value
      }

      // Check whether the email has been changed
      if (emailRef.current.value !== currentUser.email) {
        updatedUser.email = emailRef.current.value
      }

      // Check if the new password has been entered
      if (passwordRef.current.value) {
        updatedUser.password = passwordRef.current.value
      }

      const [success, result] = await updateUserProfile(updatedUser)
      if (!success) {
        showError(result || 'Failed to update the profile, please try later.')
        setLoading(false)
      } else navigate('/dashboard')
    } catch (err) {
      showError('Failed to update the profile, please try later.')
      setLoading(false)
    }
  }

  return (
    <>
      {error && <div className='update-profile-error'>{error}</div>}
      <form className='update-profile-form' onSubmit={handleSubmit}>
        <h1>Update Profile</h1>
        <label htmlFor='update-profile-username'>
          User Name
          <input
            id='update-profile-username'
            type='text'
            ref={userNameRef}
            required
            defaultValue={currentUser.name}
          />
        </label>
        <label htmlFor='update-profile-email'>
          Email
          <input
            id='update-profile-email'
            type='email'
            ref={emailRef}
            required
            defaultValue={currentUser.email}
          />
        </label>
        <label htmlFor='update-profile-password'>
          Password
          <input
            id='update-profile-password'
            type='password'
            ref={passwordRef}
            placeholder='Leave blank to keep the same'
          />
        </label>
        <label htmlFor='update-profile-password2'>
          Password Confirmation
          <input
            id='update-profile-password2'
            type='password'
            placeholder='Leave blank to keep the same'
            ref={passwordConfirmRef}
          />
        </label>
        <Button disabled={loading} type='submit' buttonstyle='btn--confirm'>
          Update
        </Button>

        <Button path='/dashboard' buttonstyle='btn--outline'>
          Cancel
        </Button>
      </form>
    </>
  )
}
export default UpdateProfileForm
