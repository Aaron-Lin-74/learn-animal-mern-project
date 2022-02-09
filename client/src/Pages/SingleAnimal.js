import React from 'react'
import useFetch from '../hooks/useFetch'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading'
import Button from '../components/Button'
import { FcSpeaker } from 'react-icons/fc'
import { BiArrowBack } from 'react-icons/bi'

const SingleAnimal = () => {
  const { id } = useParams()
  const url = `/api/animals/animal/${id}`
  const { data: animal, isLoaded } = useFetch(url)
  const { name, type, imageUrl, population, life, weight, length, link, desc } =
    animal
  // Local state to show the loading component when image was loading
  const [loading, setLoading] = React.useState(true)
  const handleOnLoaded = () => {
    setLoading(false)
  }

  // Redirect to the wiki in a new tab
  const redirect = (link) => {
    window.open(link, '_blank')
  }

  // Pronounce the name of the animal
  const speak = (name) => {
    let utterance = new SpeechSynthesisUtterance(name)
    utterance.rate = 0.75
    speechSynthesis.speak(utterance)
  }

  // Show the loading component before the data is fetched
  if (!isLoaded) {
    return <Loading />
  }
  return (
    <section className='animal-section'>
      <div className='animal-section-header'>
        <Button path={`/animals/${animal.type}`} buttonStyle='btn--circle'>
          <BiArrowBack />
        </Button>
        <h2>{name}</h2>
        <Button onClick={() => speak(name)} buttonStyle='btn--circle'>
          <FcSpeaker />
        </Button>
      </div>
      <div className='animal-container'>
        {loading && <Loading />}
        <img src={imageUrl} alt={name} onLoad={handleOnLoaded}></img>
        <div className='animal-info-container'>
          <p>
            <span className='animal-data-title'>name :</span>
            <span className='animal-data'>{name}</span>
          </p>
          <p>
            <span className='animal-data-title'>category :</span>
            <span className='animal-data'>{type}</span>
          </p>
          <p>
            <span className='animal-data-title'>population :</span>
            <span className='animal-data'>{population}</span>
          </p>
          <p>
            <span className='animal-data-title'>life span :</span>
            <span className='animal-data'>{life}</span>
          </p>
          <p>
            <span className='animal-data-title'>weight :</span>
            <span className='animal-data'>{weight}</span>
          </p>
          <p>
            <span className='animal-data-title'>length :</span>
            <span className='animal-data'>{length}</span>
          </p>
        </div>
        <article className='animal-desc'>
          <p>{desc}</p>
          <Button buttonStyle='btn--submit' onClick={() => redirect(link)}>
            Learn more
          </Button>
        </article>
      </div>
    </section>
  )
}

export default SingleAnimal
