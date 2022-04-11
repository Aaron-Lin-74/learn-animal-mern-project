import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

/*
 * The component for private route.
 * Use it to wrap the private route. Navigate to the login page if not set login.
 */
function RequireAuth({ children }) {
  const { currentUser } = useAuth()
  const location = useLocation()

  return currentUser ? (
    children
  ) : (
    <Navigate to='/login' replace state={{ path: location.pathname }} />
  )
}

export default RequireAuth
