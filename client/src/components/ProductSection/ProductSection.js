import React, { useState } from 'react'
import './ProductSection.scss'

const ProductSection = () => {
  const [index, setIndex] = useState(1)

  // Used to dynamicaly change the image class name
  const setClassName = (key) => {
    if (key === index) {
      return 'display'
    } else {
      return 'hide'
    }
  }
  return (
    <section className='product-section'>
      <div className='product'>
        <div className='product-imgs'>
          <div className='img-display'>
            <img
              src='/images/product.jpg'
              className={setClassName(1)}
              alt='product'
            />
            <img
              src='/images/product-2.jpg'
              className={setClassName(2)}
              alt='product'
            />
            <img
              src='/images/product-3.jpg'
              className={setClassName(3)}
              alt='product'
            />
            <img
              src='/images/product-4.jpg'
              className={setClassName(4)}
              alt='product'
            />
          </div>

          <div className='img-select'>
            <div className='img-item' onClick={() => setIndex(1)}>
              <img src='/images/product.jpg' alt='product' />
            </div>
            <div className='img-item' onClick={() => setIndex(2)}>
              <img src='/images/product-2.jpg' alt='product' />
            </div>
            <div className='img-item' onClick={() => setIndex(3)}>
              <img src='/images/product-3.jpg' alt='product' />
            </div>
            <div className='img-item' onClick={() => setIndex(4)}>
              <img src='/images/product-4.jpg' alt='product' />
            </div>
          </div>
        </div>
        <div className='product-desc'>
          <h1>Description</h1>
          <p>
            The Animal Sounds web application is created by Aaron Lin for his
            beloved children and for kids to learn more about animals. We used
            React to create the UI and Google Firebase to store information
            about different kinds of animals like images and sounds. It is fun
            to explore how different types of animals sound. We will add more
            new animals constantly.
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
