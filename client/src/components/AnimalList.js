import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { useGlobalContext } from '../contexts/AppContext'
import { useAuth } from '../contexts/AuthContext'
import CardItem from './CardItem'
import useFetch from '../hooks/useFetch'
import Loading from './Loading'
import './AnimalList.css'

const AnimalList = () => {
  const { animalType } = useParams()

  // Change the animal type from plural to single
  const type = animalType.endsWith('s') ? animalType.slice(0, -1) : animalType

  const { currentUser } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  // The number of record shown at first place
  const [limit, setLimit] = useState(6)

  // The url of the backend server, defined in the AppContext
  const { scrollTop, allTypes, searchTerm } = useGlobalContext()
  const [loadMore, setLoadMore] = useState(true)

  // Store the url as a state, update url when the type or limit changed
  const [url, setUrl] = useState(`/api/animals/${type}?limit=${limit}`)
  const [withToken, setWithToken] = useState(false)
  const { data: animals, isLoaded } = useFetch(url, withToken)

  useEffect(() => {
    // Every time the animal type changes, scroll to the top
    scrollTop()

    // If user types the wrong route instead of using menu, navigate to error page
    if (!allTypes.includes(type)) {
      navigate('/error', { replace: true })
      return
    }

    // Only Mammal and Bird are public, the rest types need log in
    if (!currentUser && type !== 'mammal' && type !== 'bird') {
      navigate('/login', { replace: true, path: location.pathname })
      return
    }

    // If user has logged in, access private route with token
    if (currentUser && type !== 'mammal' && type !== 'bird') {
      setWithToken(true)
    }
  }, [type, currentUser, scrollTop, allTypes, navigate, location.pathname])

  // Specify the type of the animal and number of animals to fetch
  useEffect(() => {
    setUrl(`/api/animals/${type}?limit=${limit}&search=${searchTerm}`)
  }, [type, limit, searchTerm])

  // Load extra 3 records from the server when click load more
  const handleLoadMore = () => {
    setLimit((limit) => limit + 3)
    if (limit + 3 > animals.length) {
      setLoadMore(false)
    }
  }

  // Show the loading component before the data is fetched
  if (!isLoaded) {
    return <Loading />
  }

  // Show the notice when there is no result from search
  if (animals.length < 1 && searchTerm !== '') {
    return (
      <article className='animals-container-flex'>
        <h2 className='animals-notice'>
          No animal matched your search criteria.
        </h2>
      </article>
    )
  }

  // Show the notice when there is no animal for this type
  if (animals.length < 1) {
    return (
      <article className='animals-container-flex'>
        <h2 className='animals-notice'>Comming soon!</h2>
      </article>
    )
  }
  return (
    <article className='animals-container-flex'>
      <div className='animal-cards'>
        {animals.map((animal) => {
          return (
            <CardItem
              key={animal._id}
              path={`/animal/${animal._id}`}
              src={animal.imageUrl}
              label={animal.type}
              text={animal.name}
              class='animal'
            />
          )
        })}
      </div>
      <button
        className={loadMore ? 'load-more' : 'load-more hidden'}
        onClick={handleLoadMore}
      >
        Load more
      </button>
    </article>
  )
}

export default AnimalList
