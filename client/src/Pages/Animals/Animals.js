import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setSearchTerm } from '../../features/animal/animalSlice'
const Animals = () => {
  const dispatch = useDispatch()
  const { animalType } = useParams()

  // Reset the search bar to empty when routes to other animal type
  useEffect(() => {
    dispatch(setSearchTerm(''))
  }, [animalType, setSearchTerm])

  return (
    <main className='animals'>
      <Outlet />
    </main>
  )
}

export default Animals
