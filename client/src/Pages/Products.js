import React, { useEffect } from 'react'
import { useGlobalContext } from '../contexts/AppContext'
import ProductSection from '../components/ProductSection/ProductSection'

const Products = () => {
  const { scrollTop } = useGlobalContext()
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
