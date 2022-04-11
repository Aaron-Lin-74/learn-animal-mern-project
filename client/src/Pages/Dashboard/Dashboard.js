import React, { useEffect } from 'react'
import useUtils from '../../hooks/useUtils'
import { useAuth } from '../../contexts/AuthContext'
import Profile from './Profile/Profile'

function Dashboard() {
  const { currentUser } = useAuth()
  const { scrollTop } = useUtils()
  useEffect(() => {
    scrollTop()
  }, [scrollTop])
  return (
    currentUser && (
      <main className='dashboard'>
        <Profile />
      </main>
    )
  )
}

export default Dashboard
