import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = React.createContext()
const BASE_URL = 'https://fzbvp5o7wd.execute-api.ap-southeast-2.amazonaws.com'
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  const navigate = useNavigate()

  async function signUp(user) {
    try {
      const response = await fetch(`${BASE_URL}/api/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.message)
      }

      // Update the user state and save the token in local storage
      setCurrentUser(data.user)
      localStorage.setItem('accessToken', data.accessToken)
      return [true, data]
    } catch (err) {
      // console.error(err)
      return [false, err.message]
    }
  }

  async function login(user) {
    try {
      const response = await fetch(`${BASE_URL}/api/auth`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.message)
      }
      setCurrentUser(data.user)
      localStorage.setItem('accessToken', data.accessToken)
      return [true, data]
    } catch (err) {
      // console.error(err)
      return [false, err.message]
    }
  }

  async function logout() {
    setCurrentUser(null)
    localStorage.removeItem('accessToken')

    // Replace the current location instead of push a new one onto the history stack
    navigate('/login', { replace: true })
  }

  async function updateUserProfile(user) {
    try {
      const response = await fetch(`${BASE_URL}/api/users`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: JSON.stringify({ ...user }),
      })
      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.message)
      }
      setCurrentUser(data.user)
      return [true, data]
    } catch (err) {
      // console.error(err)
      return [false, err.message]
    }
  }

  async function deleteUser() {
    try {
      const response = await fetch(`${BASE_URL}/api/users`, {
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
      // eslint-disable-next-line react/jsx-no-constructed-context-values
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
