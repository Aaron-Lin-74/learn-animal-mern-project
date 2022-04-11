import React, { useState } from 'react'
import './ProductSection.scss'

function ProductSection() {
  const [index, setIndex] = useState(1)

  // Used to dynamicaly change the image class name
  const setClassName = (key) => {
    if (key === index) {
      return 'display'
    }
    return 'hide'
  }
  return (
    <section className='product-section'>
      <div className='product'>
        <div className='product-imgs'>
          <div className='img-display'>
            <img
              src='/images/product.jpg'
              className={setClassName(1)}
              alt='product screenshot 1'
            />
            <img
              src='/images/product-2.jpg'
              className={setClassName(2)}
              alt='product screenshot 2'
            />
            <img
              src='/images/product-3.jpg'
              className={setClassName(3)}
              alt='product screenshot 3'
            />
            <img
              src='/images/product-4.jpg'
              className={setClassName(4)}
              alt='product screenshot 4'
            />
          </div>

          <div className='img-select'>
            <div
              className='img-item'
              onClick={() => setIndex(1)}
              onKeyDown={() => setIndex(1)}
              role='button'
              tabIndex={0}
            >
              <img src='/images/product.jpg' alt='product' />
            </div>
            <div
              className='img-item'
              onClick={() => setIndex(2)}
              onKeyDown={() => setIndex(2)}
              role='button'
              tabIndex={0}
            >
              <img src='/images/product-2.jpg' alt='product' />
            </div>
            <div
              className='img-item'
              onClick={() => setIndex(3)}
              onKeyDown={() => setIndex(3)}
              role='button'
              tabIndex={0}
            >
              <img src='/images/product-3.jpg' alt='product' />
            </div>
            <div
              className='img-item'
              onClick={() => setIndex(4)}
              onKeyDown={() => setIndex(4)}
              role='button'
              tabIndex={0}
            >
              <img src='/images/product-4.jpg' alt='product' />
            </div>
          </div>
        </div>
        <div className='product-desc'>
          <h1>Description</h1>
          <p>
            We used React to create the UI and Google Firebase as the back-end
            which handles user authentication, and stores information about
            different kinds of animals, like images and sounds.
          </p>
          <p>
            It is fun to explore what different types of animals sound like. We
            will add more new animals constantly. The live application is hosted
            using Firebase. Feel free to play around with it and you will find
            some animal sounds are so amazing!
          </p>
          <p>Click the link below to explore more.</p>
          <a
            className='explore'
            href='https://aaronlin-animal-sounds.web.app/'
            target='_blank'
            rel='noreferrer'
          >
            Explore more
          </a>
        </div>
      </div>
    </section>
  )
}

export default ProductSection
