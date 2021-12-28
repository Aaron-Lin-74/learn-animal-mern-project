import React, { useEffect } from 'react'
import { useGlobalContext } from '../contexts/AppContext'

const Contact = () => {
  const { scrollTop } = useGlobalContext()
  useEffect(() => {
    scrollTop()
  }, [scrollTop])

  return (
    <div className='contact'>
      <h1>Contact</h1>
    </div>
  )
}

export default Contact
