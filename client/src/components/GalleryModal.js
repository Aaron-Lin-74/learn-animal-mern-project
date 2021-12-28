import React, { useState, useEffect } from 'react'
import './GalleryModal.css'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaTimes, FaPauseCircle, FaPlayCircle } from 'react-icons/fa'
import { useGlobalContext } from '../contexts/AppContext'

const GalleryModal = () => {
  const {
    closeModal,
    galleryImageNames: images,
    modalIndex,
  } = useGlobalContext()
  const [isPlay, setIsPlay] = useState(true)
  const [index, setIndex] = useState(modalIndex)
  console.log(modalIndex)

  // Update the index to loop through images
  useEffect(() => {
    if (index < 0) {
      setIndex(images.length - 1)
    } else if (index > images.length - 1) {
      setIndex(0)
    }
  }, [images, index])

  // Set the modal images to auto play by default
  useEffect(() => {
    let indexInterval
    if (isPlay) {
      indexInterval = setInterval(() => {
        setIndex((index) => index + 1)
      }, 4000)
    } else {
      clearInterval(indexInterval)
    }
    return () => clearInterval(indexInterval)
  }, [isPlay])

  // When click the previous button, pause the image auto play
  const prevImage = () => {
    setIndex((index) => index - 1)
    setIsPlay(false)
  }
  // When click the next button, pause the image auto play
  const nextImage = () => {
    setIndex((index) => index + 1)
    setIsPlay(false)
  }

  return (
    <div className='modal-overlay show-modal'>
      <div className='modal-container'>
        {images.map((image, ind) => {
          let imgClass = 'next-image'
          if (index === ind) {
            imgClass = 'current-image'
          }
          if (ind === index - 1 || (index === 0 && ind === images.length - 1)) {
            imgClass = 'last-image'
          }
          return (
            <figure className={imgClass} key={image}>
              <img
                className='gal-modal-img'
                src={`/images/${image}.jpg`}
                alt='modal'
              ></img>
            </figure>
          )
        })}
      </div>
      <div className='modal-btns'>
        <button onClick={prevImage}>
          <FiChevronLeft />
        </button>
        <button onClick={nextImage}>
          <FiChevronRight />
        </button>{' '}
        <button onClick={() => setIsPlay(!isPlay)}>
          {isPlay ? <FaPauseCircle /> : <FaPlayCircle />}
        </button>
        <button onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  )
}

export default GalleryModal
