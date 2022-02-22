import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useGlobalContext } from '../../contexts/AppContext'
import { useParams } from 'react-router-dom'

const Animals = () => {
  // Reset the search bar to empty when routes to other animal type
  const { setSearchTerm } = useGlobalContext()
  const { animalType } = useParams()
  useEffect(() => {
    setSearchTerm('')
  }, [animalType, setSearchTerm])

  return (
    <main className='animals'>
      <Outlet />
    </main>
  )
}

export default Animals
