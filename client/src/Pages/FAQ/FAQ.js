import React, { useEffect } from 'react'
import useUtils from '../../hooks/useUtils'
import FaqAccordion from './FaqAccordion/FaqAccordion'

function FAQ() {
  const { scrollTop } = useUtils()
  useEffect(() => {
    scrollTop()
  }, [scrollTop])
  return (
    <main className='faq'>
      <h1>Frequently Asked Questions (FAQs)</h1>
      <div className='faq-img-container'>
        <img src='/images/dog.png' alt='question dog' />
      </div>
      <FaqAccordion />
    </main>
  )
}

export default FAQ
