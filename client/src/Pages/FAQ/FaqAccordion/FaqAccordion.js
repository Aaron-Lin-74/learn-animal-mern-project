import React, { useState } from 'react'
import faqs from '../../../constants/faqs'
import FaqCard from './FaqCard/FaqCard'
import './FaqAccordion.css'

function FaqAccordion() {
  // Use activeIdx local state to store the active question index.
  const [activeIdx, setActiveIdx] = useState(0)
  return (
    <div className='accordion'>
      {faqs.map((faq) => {
        return (
          <FaqCard
            key={faq.id}
            question={faq.question}
            answer={faq.answer}
            setActiveIdx={setActiveIdx}
            activeIdx={activeIdx}
            index={faq.id}
          />
        )
      })}
    </div>
  )
}

export default FaqAccordion
