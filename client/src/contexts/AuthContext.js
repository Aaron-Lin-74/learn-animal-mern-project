import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = React.createContext()

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  const navigate = useNavigate()

  async function signUp(user) {
    // create a new user, this is the test api url
    try {
      const response = await fetch(`/api/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
      if (!response.ok) {
        throw new Error('Network response was not OK')
      }
      const data = await response.json()
      setCurrentUser(data.user)
      localStorage.setItem('accessToken', data.accessToken)
      return data
    } catch (err) {
      console.error(err)
      return false
    }
  }

  async function login(user) {
    // create a new user, this is the test api url
    try {
      const response = await fetch(`/api/auth`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
      if (!response.ok) {
        throw new Error('Network response was not OK')
      }
      const data = await response.json()
      setCurrentUser(data.user)
      localStorage.setItem('accessToken', data.accessToken)
      return data
    } catch (err) {
      console.error(err)
      return false
    }
  }

  async function logout(user) {
    setCurrentUser(null)
    localStorage.removeItem('accessToken')

    // Replace the current location instead of push a new one onto the history stack
    navigate('/login', { replace: true })
  }

  async function updateUserProfile(user) {
    try {
      const response = await fetch(`/api/users`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: JSON.stringify({ ...user }),
      })
      if (!response.ok) {
        // throw new Error('Network response was not OK')
        return response.status
      }
      const data = await response.json()
      setCurrentUser(data.user)
      return data.message
    } catch (err) {
      console.error(err)
    }
  }

  async function deleteUser() {
    try {
      const response = await fetch(`/api/users`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      if (!response.ok) {
        throw new Error('Network response was not Ok')
      }
      // const result = await response.json()
      setCurrentUser(null)
      localStorage.removeItem('accessToken')
      navigate('/', { replace: true })
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        signUp,
        login,
        logout,
        updateUserProfile,
        deleteUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

// Custom hook
export function useAuth() {
  return useContext(AuthContext)
}
