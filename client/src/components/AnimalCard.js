import React from 'react'
import { FcSpeaker } from 'react-icons/fc'

const AnimalCard = ({ animal }) => {
  // Pronounce the name of the animal
  const speak = (name) => {
    let utterance = new SpeechSynthesisUtterance(name)
    utterance.rate = 0.75
    speechSynthesis.speak(utterance)
  }

  // Redirect to the wiki in a new tab
  const redirect = (link) => {
    window.open(link, '_blank')
  }

  return (
    <div className='animal-card' key={animal._id}>
      <div className='animal-img-container'>
        <img src={animal.imageUrl} alt={animal.name} />
      </div>
      <aside className='animal-info'>
        <div className='animal-name'>
          <h3>{animal.name}</h3>
          <button onClick={() => speak(animal.name)}>
            <FcSpeaker />
          </button>
        </div>
        <h4>Population: {animal.population}</h4>
        <h4>Life span: {animal.life}</h4>
        <h4>Weight: {animal.weight}</h4>
        <h4>Length: {animal.length}</h4>
        <button className='learn-more' onClick={() => redirect(animal.link)}>
          Learn more
        </button>
      </aside>
      <article className='animal-desc'>
        <p>{animal.desc}</p>
      </article>
    </div>
  )
}

export default AnimalCard
