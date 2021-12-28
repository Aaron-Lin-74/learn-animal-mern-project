import React, { useEffect } from 'react'
import { useGlobalContext } from '../contexts/AppContext'

const Products = () => {
  const { scrollTop } = useGlobalContext()
  useEffect(() => {
    scrollTop()
  }, [scrollTop])
  return (
    <div className='products'>
      <h1>Products</h1>
    </div>
  )
}

export default Products
