import React, { useState, useEffect } from 'react'
import { useGlobalContext } from './contexts/AppContext'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
import './Reviews.css'

const Reviews = () => {
  const [reviews, setReviews] = useState(null)
  const [index, setIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const { serverUrl } = useGlobalContext()

  // Fetch the reviews from the server
  const fetchReivews = async () => {
    try {
      const response = await fetch('/api/reviews')
      console.log(response)
      if (!response.ok) {
        throw new Error('Network response was not OK')
      }
      const data = await response.json()
      setReviews(data.reviews)
      setIsLoaded(true)
    } catch (err) {
      console.log(err)
    }
  }
  // Call fetch reviews when mounted
  useEffect(() => {
    fetchReivews()
  }, [])

  useEffect(() => {
    if (isLoaded) {
      const lastIndex = reviews.length - 1

      // Boundary condition, set to loop
      if (index < 0) {
        setIndex(lastIndex)
      } else if (index > lastIndex) {
        setIndex(0)
      }
    }
  }, [index, reviews])

  // Let the reivews keep rolling
  useEffect(() => {
    const slider = setInterval(() => {
      setIndex((index) => index + 1)
    }, 4000)
    return () => clearInterval(slider)
  })

  return (
    <section className='reviews'>
      <h2 className='rev-title'>/ Reviews</h2>
      <div className='reviews-center'>
        {isLoaded &&
          reviews.map((review, ind) => {
            const { id, image, name, title, quote } = review
            let slideClass = 'nextSlide'
            if (ind === index) {
              slideClass = 'activeSlide'
            }
            if (
              ind === index - 1 ||
              (index === 0 && ind === reviews.length - 1)
            ) {
              slideClass = 'lastSlide'
            }
            return (
              <article key={id} className={slideClass}>
                <img src={image} alt={name} className='person-img' />
                <h4>{name}</h4>
                <p className='title'>{title}</p>
                <p className='text'>{quote}</p>
                <FaQuoteRight className='icon' />
              </article>
            )
          })}

        <button className='prev' onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  )
}

export default Reviews
