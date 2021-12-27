import React, { useEffect } from 'react'
import { useGlobalContext } from '../contexts/AppContext'

const Services = () => {
  const { scrollTop } = useGlobalContext()
  useEffect(() => {
    scrollTop()
  }, [])
  return (
    <div className='services'>
      <h1>Services</h1>
    </div>
  )
}

export default Services
