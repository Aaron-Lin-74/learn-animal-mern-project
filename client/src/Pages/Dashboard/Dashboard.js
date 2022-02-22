import React, { useEffect } from 'react'
import { useGlobalContext } from '../../contexts/AppContext'
import { useAuth } from '../../contexts/AuthContext'
import Profile from './Profile/Profile'

const Dashboard = () => {
  const { currentUser } = useAuth()
  const { scrollTop } = useGlobalContext()
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
