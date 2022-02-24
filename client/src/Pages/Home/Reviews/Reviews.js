import React, { useState, useEffect, useCallback } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
import useFetch from '../../../hooks/useFetch'
import './Reviews.css'

const Reviews = () => {
  // Use custom hook to replace the fetch reviews, to reuse the functionality
  const {
    data: { reviews },
    isLoaded,
  } = useFetch('/api/reviews')

  // Use index local state to store the index of the current review
  const [index, setIndex] = useState(0)

  // Handle the boundary condition for reviews index, set to loop
  const checkNumber = useCallback(
    (num) => {
      const lastIndex = reviews.length - 1
      if (num < 0) {
        return lastIndex
      }
      if (num > lastIndex) {
        return 0
      }
      return num
    },
    [reviews]
  )

  const prevReivew = () => {
    setIndex((index) => checkNumber(index - 1))
  }
  const nextReview = () => {
    setIndex((index) => checkNumber(index + 1))
  }

  // Let the reivews keep rolling every 4 seconds
  useEffect(() => {
    const slider = setInterval(() => {
      setIndex((index) => checkNumber(index + 1))
    }, 4000)
    return () => clearInterval(slider)
  }, [index, checkNumber])

  // Set slide class based on the relation to index
  const setSlideClass = (ind) => {
    // Set the default slide class to nextSlide
    let slideClass = 'nextSlide'
    if (ind === index) {
      slideClass = 'activeSlide'
    }
    if (ind === index - 1 || (index === 0 && ind === reviews.length - 1)) {
      slideClass = 'lastSlide'
    }
    return slideClass
  }

  return (
    <section className='reviews'>
      <h2 className='rev-title'>/ Reviews</h2>
      <div className='reviews-center'>
        {isLoaded &&
          reviews.map((review, ind) => {
            const { id, image, name, title, quote } = review
            let slideClass = setSlideClass(ind)
            return (
              <article key={id} className={slideClass}>
                <figure>
                  <img src={image} alt={name} className='person-img' />
                </figure>
                <h3>{name}</h3>
                <p className='title'>{title}</p>
                <p className='text'>{quote}</p>
                <FaQuoteRight className='icon' />
              </article>
            )
          })}

        <button className='prev' onClick={prevReivew}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={nextReview}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  )
}

export default Reviews
