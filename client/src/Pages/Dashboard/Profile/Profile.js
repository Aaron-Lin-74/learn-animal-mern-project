import React, { useState } from 'react'
import { useAuth } from '../../../contexts/AuthContext'
import './Profile.scss'
import Button from '../../../components/Button'
import { BsFillGearFill } from 'react-icons/bs'

const Profile = () => {
  const { currentUser, deleteUser } = useAuth()
  const [toggle, setToggle] = useState(false)
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
    <div
      className={toggle ? 'profile-on profile-container' : 'profile-container'}
    >
      <div className='profile'>
        <div className='profile-edit' onClick={() => setToggle(!toggle)}>
          <BsFillGearFill />
        </div>
      </div>
      <div className='profile-down'>
        <div className='profile-text'>
          <h2>{currentUser.name}</h2>
          <p>Email: {currentUser.email}</p>
        </div>
      </div>
      <div className='profile-back'>
        <h2>Profile</h2>
        <Button path='/update-profile' buttonStyle='btn--confirm'>
          Update Profile
        </Button>
        <Button onClick={handleDeleteUser} buttonStyle='btn--danger'>
          Delete Account
        </Button>
      </div>
    </div>
  )
}

export default Profile
