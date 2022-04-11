import React from 'react'
import { useParams } from 'react-router-dom'
import { FcSpeaker } from 'react-icons/fc'
import { BiArrowBack } from 'react-icons/bi'
import { useSelector } from 'react-redux'
import Loading from '../../components/Loading/Loading'
import Button from '../../components/Button/Button'
import useUtils from '../../hooks/useUtils'
import { selectAnimalById } from '../../features/animal/animalSlice'

function SingleAnimal() {
  const { id } = useParams()
  const { redirect } = useUtils()
  const animal = useSelector((state) => selectAnimalById(state, id))
  const { name, type, imageUrl, population, life, weight, length, link, desc } =
    animal

  // Local state to show the loading component when image was loading
  const [loading, setLoading] = React.useState(true)
  const handleOnLoaded = () => {
    setLoading(false)
  }

  // Pronounce the name of the animal
  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = 0.75
    speechSynthesis.speak(utterance)
  }

  return (
    <section className='animal-section'>
      <div className='animal-section-header'>
        <Button
          path={`/animals/${animal.type}`}
          buttonstyle='btn--circle'
          aria-label='go back'
          title='go back'
        >
          <BiArrowBack />
        </Button>
        <h2>{name}</h2>
        <Button
          onClick={() => speak(name)}
          buttonstyle='btn--circle'
          aria-label='pronounce the name'
          title='pronounce the name'
        >
          <FcSpeaker />
        </Button>
      </div>
      <div className='animal-container'>
        {loading && <Loading />}
        <img src={imageUrl} alt={name} onLoad={handleOnLoaded} />
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
          <Button buttonstyle='btn--submit' onClick={() => redirect(link)}>
            Learn more
          </Button>
        </article>
      </div>
    </section>
  )
}

export default SingleAnimal
