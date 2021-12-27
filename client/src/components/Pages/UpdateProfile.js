import React, { useEffect } from 'react'
import { useGlobalContext } from '../contexts/AppContext'
import UpdateProfileForm from '../UpdateProfileForm'
import '../UpdateProfileForm.css'

const UpdateProfile = () => {
  const { scrollTop } = useGlobalContext()
  useEffect(() => {
    scrollTop()
  }, [])
  return (
    <div className='update-profile'>
      <div className='update-profile-flex'>
        <UpdateProfileForm />
      </div>
    </div>
  )
}

export default UpdateProfile
