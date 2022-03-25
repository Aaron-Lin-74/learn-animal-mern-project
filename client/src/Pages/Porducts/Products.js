import React, { useEffect } from 'react'
import useUtils from '../../hooks/useUtils'
import ProductSection from './ProductSection/ProductSection'

const Products = () => {
  const { scrollTop } = useUtils()
  useEffect(() => {
    scrollTop()
  }, [scrollTop])
  return (
    <main className='products'>
      <ProductSection />
    </main>
  )
}

export default Products
