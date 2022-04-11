import React, { useState, useEffect } from 'react'
import './GalleryModal.css'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaTimes, FaPauseCircle, FaPlayCircle } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import Button from '../Button/Button'
import {
  selectImageIndex,
  selectGalleryImageNames,
  closeModal,
} from '../../features/gallery/gallerySlice'

function GalleryModal() {
  const dispatch = useDispatch()
  const imageIndex = useSelector(selectImageIndex)
  const galleryImageNames = useSelector(selectGalleryImageNames)
  const totalImages = galleryImageNames.length
  const [isPlay, setIsPlay] = useState(true)
  const [index, setIndex] = useState(imageIndex)

  // Update the index to loop through images
  useEffect(() => {
    if (index < 0) {
      setIndex(totalImages - 1)
    } else if (index > totalImages - 1) {
      setIndex(0)
    }
  }, [totalImages, index])

  // Set the modal images to auto play by default
  useEffect(() => {
    let indexInterval
    if (isPlay) {
      indexInterval = setInterval(() => {
        setIndex((preIndex) => preIndex + 1)
      }, 4000)
    } else {
      clearInterval(indexInterval)
    }
    return () => clearInterval(indexInterval)
  }, [index, isPlay])

  // When click the previous button, pause the image auto play
  const prevImage = () => {
    setIndex((preIndex) => preIndex - 1)
    setIsPlay(false)
  }
  // When click the next button, pause the image auto play
  const nextImage = () => {
    setIndex((preIndex) => preIndex + 1)
    setIsPlay(false)
  }

  // When the Modal closed, unfreeze the background page.
  const onCloseButtonClick = () => {
    document.body.style.setProperty('overflow', 'visible', 'important')
    document.getElementById('hero-video').play()
    dispatch(closeModal())
  }

  return (
    <div className='modal-overlay show-modal'>
      <div className='modal-container'>
        {galleryImageNames.map((image, ind) => {
          let imgClass = 'next-image'
          if (index === ind) {
            imgClass = 'current-image'
          }
          if (ind === index - 1 || (index === 0 && ind === totalImages - 1)) {
            imgClass = 'last-image'
          }
          return (
            <figure className={imgClass} key={image}>
              <img
                className='gal-modal-img'
                src={`/images/${image}.jpg`}
                alt={image}
              />
            </figure>
          )
        })}
      </div>
      <div className='modal-btns'>
        <Button
          onClick={prevImage}
          aria-label='previous image'
          title='previous image'
          buttonstyle='btn--outline'
        >
          <FiChevronLeft />
        </Button>
        <Button
          onClick={nextImage}
          aria-label='next image'
          title='next image'
          buttonstyle='btn--outline'
        >
          <FiChevronRight />
        </Button>{' '}
        <Button
          onClick={() => setIsPlay(!isPlay)}
          aria-label={isPlay ? 'pause images auto play' : 'auto play images'}
          title={isPlay ? 'pause images auto play' : 'auto play images'}
          buttonstyle='btn--outline'
        >
          {isPlay ? <FaPauseCircle /> : <FaPlayCircle />}
        </Button>
        <Button
          onClick={onCloseButtonClick}
          aria-label='close modal'
          title='close modal'
          buttonstyle='btn--outline'
        >
          <FaTimes />
        </Button>
      </div>
    </div>
  )
}

export default GalleryModal
