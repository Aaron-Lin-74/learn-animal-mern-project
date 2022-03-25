import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import useUtils from '../../../hooks/useUtils'
import { useAuth } from '../../../contexts/AuthContext'
import CardItem from '../../../components/CardItem/CardItem'
import useFetch from '../../../hooks/useFetch'
import Loading from '../../../components/Loading/Loading'
import Button from '../../../components/Button/Button'
import './AnimalList.css'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectAllTypes,
  selectPremiumTypes,
  selectSearchTerm,
  selectAnimals,
  setAnimals,
} from '../../../features/animal/animalSlice'

const AnimalList = () => {
  const { animalType } = useParams()
  const dispatch = useDispatch()

  // Change the animal type from plural to single
  const type = animalType.endsWith('s') ? animalType.slice(0, -1) : animalType

  const { currentUser } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const { scrollTop } = useUtils()
  const allTypes = useSelector(selectAllTypes)
  const premiumTypes = useSelector(selectPremiumTypes)
  const searchTerm = useSelector(selectSearchTerm)
  const animals = useSelector(selectAnimals)

  // The number of record shown at first place
  const [limit, setLimit] = useState(6)
  const [loadMore, setLoadMore] = useState(true)

  // Store the url as a state, update url when the type or limit changed
  const [url, setUrl] = useState(`/api/animals/${type}?limit=${limit}`)
  const [withToken, setWithToken] = useState(false)
  const { data, isLoaded } = useFetch(url, withToken)

  useEffect(() => {
    dispatch(setAnimals(data))
  }, [data])

  useEffect(() => {
    // Every time the animal type changes, scroll to the top
    scrollTop()

    // If user types the wrong route instead of using menu, navigate to error page
    if (!allTypes.includes(type)) {
      navigate('/error', { replace: true })
      return
    }

    // User needs to login to access the premium types
    if (!currentUser && premiumTypes.includes(animalType)) {
      navigate('/login', { replace: true, path: location.pathname })
      return
    }

    // If user has logged in, access private route with token
    if (currentUser && premiumTypes.includes(animalType)) {
      setWithToken(true)
    }
  }, [type, currentUser, scrollTop, allTypes, navigate, location.pathname])

  // Specify the type of the animal and number of animals to fetch
  // If a search term is provided, add it to the url query string
  useEffect(() => {
    searchTerm === ''
      ? setUrl(`/api/animals/${type}?limit=${limit}`)
      : setUrl(`/api/animals/${type}?limit=${limit}&search=${searchTerm}`)
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
      <Button
        className={loadMore ? 'load-more' : 'load-more hidden'}
        onClick={handleLoadMore}
        buttonStyle='btn--unStyled'
      >
        Load more
      </Button>
    </article>
  )
}

export default AnimalList
