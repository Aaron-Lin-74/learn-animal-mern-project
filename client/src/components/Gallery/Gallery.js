import React from 'react'
import './Gallery.css'
import { HiPlus } from 'react-icons/hi'
import GalleryModal from '../GalleryModal/GalleryModal'
import { useSelector, useDispatch } from 'react-redux'
import {
  selectIsModalOpen,
  selectGalleryImageNames,
  openModal,
} from '../../features/gallery/gallerySlice'

const Gallery = () => {
  const dispatch = useDispatch()
  const isModalOpen = useSelector(selectIsModalOpen)
  const galleryImageNames = useSelector(selectGalleryImageNames)

  // When the Modal opened, freeze the background page.
  const onImageClicked = (ind) => {
    document.body.style.setProperty('overflow', 'hidden', 'important')
    document.getElementById('hero-video').pause()
    dispatch(openModal(ind))
  }

  return (
    <section className='gallery'>
      <div className='ani-info'>
        <div className='ani-text'>
          <h2>Animals share the world around us </h2>
        </div>
      </div>
      <div className='gallery-wrapper'>
        <div className='gallery-flex'>
          {galleryImageNames.map((image, ind) => {
            return (
              <div
                key={ind}
                className='gal-flex-item'
                onClick={() => onImageClicked(ind)}
              >
                <figure>
                  <img
                    className='gal-img'
                    src={`/images/${image}.jpg`}
                    alt={`click to see ${image}`}
                  ></img>
                  <span className='gal-add'>
                    <HiPlus />
                  </span>
                </figure>
              </div>
            )
          })}
        </div>
      </div>
      {isModalOpen && <GalleryModal />}
    </section>
  )
}

export default Gallery
