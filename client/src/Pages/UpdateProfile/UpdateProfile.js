import { useEffect } from 'react'
import { useGlobalContext } from '../../contexts/AppContext'
import UpdateProfileForm from './UpdateProfileForm/UpdateProfileForm'
import './UpdateProfileForm/UpdateProfileForm.css'

const UpdateProfile = () => {
  const { scrollTop } = useGlobalContext()
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
