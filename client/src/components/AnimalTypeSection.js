import React from 'react'
import Button from './Button'
import './AnimalTypeSection.css'
import { VscFoldDown } from 'react-icons/vsc'
import { BsStarFill } from 'react-icons/bs'
import { Fade } from 'react-awesome-reveal'

import { useGlobalContext } from '../contexts/AppContext'

const AnimalTypeSection = ({ type, description }) => {
  const { premiumTypes, redirect, allTypesPlural } = useGlobalContext()

  // Check is current section the last section
  const isLastSection =
    allTypesPlural.indexOf(type) === allTypesPlural.length - 1

  // If not, get the next type of animals
  const nextType = isLastSection
    ? ''
    : allTypesPlural[allTypesPlural.indexOf(type) + 1]

  return (
    <section
      className='animal-type-section'
      id={type}
      style={{ backgroundImage: `url('/images/${type}.jpg')` }}
    >
      <Fade direction='down'>
        <div className='animal-type-text'>
          <h1>{type}</h1>
          <p>{description}</p>
        </div>
      </Fade>
      <Fade direction='left'>
        <div className='animal-type-btns-container'>
          <Button path={`/animals/${type}`} buttonStyle='btn--outline'>
            Explore More{premiumTypes.includes(type) && <BsStarFill />}
          </Button>
          <Button
            onClick={() => redirect(`https://en.wikipedia.org/wiki/${type}`)}
          >
            Learn More
          </Button>

          <a
            href={`#${nextType}`}
            className={`animal-type-btn-down ${
              isLastSection && 'last-section'
            }`}
          >
            <VscFoldDown />
          </a>
        </div>
      </Fade>
    </section>
  )
}

export default AnimalTypeSection
