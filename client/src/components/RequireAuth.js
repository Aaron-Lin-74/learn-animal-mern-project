import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from './contexts/AuthContext.js'

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
