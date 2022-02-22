import React, { useEffect } from 'react'
import { useGlobalContext } from '../../contexts/AppContext'
import ContactForm from './ContactForm/ContactForm'

const Contact = () => {
  const { scrollTop } = useGlobalContext()
  useEffect(() => {
    scrollTop()
  }, [scrollTop])

  return (
    <main className='contact'>
      <h1>Contact Us</h1>
      <ContactForm />
    </main>
  )
}

export default Contact
