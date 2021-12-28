import { useEffect } from 'react'
import { useGlobalContext } from '../contexts/AppContext'
import UpdateProfileForm from '../components/UpdateProfileForm'
import '../components/UpdateProfileForm.css'

const UpdateProfile = () => {
  const { scrollTop } = useGlobalContext()
  useEffect(() => {
    scrollTop()
  }, [scrollTop])
  return (
    <div className='update-profile'>
      <div className='update-profile-flex'>
        <UpdateProfileForm />
      </div>
    </div>
  )
}

export default UpdateProfile
