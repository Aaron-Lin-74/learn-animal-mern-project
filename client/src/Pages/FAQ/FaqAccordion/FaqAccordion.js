import React, { useState } from 'react'
import { faqs } from '../../../faqs'
import FaqCard from './FaqCard/FaqCard'
import './FaqAccordion.css'

const FaqAccordion = () => {
  // Use activeIdx local state to store the active question index.
  const [activeIdx, setActiveIdx] = useState(0)
  return (
    <div className='accordion'>
      {faqs.map((faq, index) => {
        return (
          <FaqCard
            key={index}
            question={faq.question}
            answer={faq.answer}
            setActiveIdx={setActiveIdx}
            activeIdx={activeIdx}
            index={index}
          />
        )
      })}
    </div>
  )
}

export default FaqAccordion
