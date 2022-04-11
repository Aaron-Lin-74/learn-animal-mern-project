import React, { useEffect } from 'react'
import { Outlet, useParams } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { setSearchTerm } from '../../features/animal/animalSlice'

function Animals() {
  const dispatch = useDispatch()
  const { animalType } = useParams()

  // Reset the search bar to empty when routes to other animal type
  useEffect(() => {
    dispatch(setSearchTerm(''))
  }, [animalType, dispatch])

  return (
    <main className='animals'>
      <Outlet />
    </main>
  )
}

export default Animals
