import React, { useEffect } from 'react'
import useUtils from '../../hooks/useUtils'
import UpdateProfileForm from './UpdateProfileForm/UpdateProfileForm'
import './UpdateProfileForm/UpdateProfileForm.css'

function UpdateProfile() {
  const { scrollTop } = useUtils()
  useEffect(() => {
    scrollTop()
  }, [scrollTop])
  return (
    <main className='update-profile'>
      <div className='update-profile-flex'>
        <UpdateProfileForm />
      </div>
    </main>
  )
}

export default UpdateProfile
