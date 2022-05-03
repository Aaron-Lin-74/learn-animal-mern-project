import React, { useState, useEffect, useCallback } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
import useFetch from '../../../hooks/useFetch'
import Button from '../../../components/Button/Button'
import './Reviews.css'

function Reviews() {
  // Use custom hook to replace the fetch reviews, to reuse the functionality
  const {
    fetchedData: { reviews },
    isLoaded,
  } = useFetch('/api/reviews')

  // Use index local state to store the index of the current review
  const [index, setIndex] = useState(0)

  // Handle the boundary condition for reviews index, set to loop
  const checkNumber = useCallback(
    (num) => {
      if (!reviews) return -1
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
    setIndex((preIndex) => checkNumber(preIndex - 1))
  }
  const nextReview = () => {
    setIndex((preIndex) => checkNumber(preIndex + 1))
  }

  // Let the reivews keep rolling every 4 seconds
  useEffect(() => {
    const slider = setInterval(() => {
      setIndex((preIndex) => checkNumber(preIndex + 1))
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
            const slideClass = setSlideClass(ind)
            return (
              <article key={id} className={slideClass}>
                <figure>
                  <img
                    src={image}
                    alt={`profile of ${name}`}
                    className='person-img'
                  />
                </figure>
                <h3>{name}</h3>
                <p className='title'>{title}</p>
                <p className='text'>{quote}</p>
                <FaQuoteRight className='icon' />
              </article>
            )
          })}

        <Button
          className='prev'
          onClick={prevReivew}
          aria-label='previous review'
          title='previous review'
          buttonstyle='btn--unStyled'
        >
          <FiChevronLeft />
        </Button>
        <Button
          className='next'
          onClick={nextReview}
          aria-label='next review'
          title='next review'
          buttonstyle='btn--unStyled'
        >
          <FiChevronRight />
        </Button>
      </div>
    </section>
  )
}

export default Reviews
