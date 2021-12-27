import React, { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { useGlobalContext } from './contexts/AppContext'
import { useAuth } from './contexts/AuthContext'
import AnimalCard from './AnimalCard'
import './AnimalType.css'

const AnimalType = () => {
  const { animalType } = useParams()
  const allTypes = [
    'mammal',
    'fish',
    'bird',
    'reptile',
    'amphibian',
    'invertebrate',
  ]
  const { currentUser } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  // The number of record shown at first place
  const [limit, setLimit] = useState(3)

  // The url of the backend server, defined in the AppContext
  const { animals, loadAnimals, scrollTop } = useGlobalContext()
  const loadMoreRef = useRef()

  useEffect(() => {
    // If user types the wrong route instead of using menu, navigate to 404
    if (!allTypes.includes(animalType)) {
      navigate('/error', { replace: true })
    }

    // Only Mammal and Bird are public, the rest types need log in
    if (!currentUser && animalType !== 'mammal' && animalType !== 'bird') {
      navigate('/login', { replace: true, path: location.pathname })
    }
  })

  // Every time the animal type changes, scroll to the top
  useEffect(() => {
    scrollTop()
  }, [animalType])

  // Specify the type of the animal and number of animals to fetch
  useEffect(() => {
    loadAnimals(animalType, limit)
  }, [animalType, limit])

  // Load extra 3 records from the server when click load more
  const loadMore = () => {
    setLimit((limit) => limit + 3)
    if (limit > animals.length) {
      loadMoreRef.current.style.visibility = 'hidden'
    }
  }

  return (
    <main className='animals-container-flex'>
      {animals.map((animal) => {
        return <AnimalCard animal={animal} key={animal.name} />
      })}
      <button className='load-more' ref={loadMoreRef} onClick={loadMore}>
        Load more
      </button>
    </main>
  )
}

export default AnimalType
