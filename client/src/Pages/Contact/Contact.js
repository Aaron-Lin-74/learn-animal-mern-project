import React, { useEffect } from 'react'
import useUtils from '../../hooks/useUtils'
import ContactForm from './ContactForm/ContactForm'

function Contact() {
  const { scrollTop } = useUtils()
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
