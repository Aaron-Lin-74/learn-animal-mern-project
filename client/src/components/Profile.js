import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import './Profile.css'
import Button from './Button'

const Profile = () => {
  const { currentUser, deleteUser } = useAuth()

  const handleDeleteUser = () => {
    if (
      window.confirm(
        `Deleting your account is permanent and will remove all content and profile settings. Are you sure you want to delete your account?`
      ) === true
    ) {
      deleteUser()
    }
  }
  return (
    <div className='profile'>
      <h1>Profile</h1>
      <h2>User Name: {currentUser.name}</h2>
      <h2>Email: {currentUser.email}</h2>
      <Button path='/update-profile'>Update Profile</Button>
      <Button onClick={handleDeleteUser} buttonStyle='btn--danger'>
        Delete Account
      </Button>
    </div>
  )
}

export default Profile
