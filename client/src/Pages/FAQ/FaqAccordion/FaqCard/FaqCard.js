import React, { useState, useEffect } from 'react'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
import './FaqCard.css'

function FaqCard({ question, answer, setActiveIdx, activeIdx, index }) {
  // Whether the active question index is the current question index
  const [toggle, setToggle] = useState(index === activeIdx)

  // Everytime when the active index changes, reinitialise the toggle
  useEffect(() => {
    setToggle(index === activeIdx)
  }, [index, activeIdx])

  const handleClick = () => {
    if (index === activeIdx) {
      setToggle(!toggle)
    } else {
      setActiveIdx(index)
    }
  }
  return (
    <div className='faq-card'>
      <div
        className={toggle ? 'card-header select' : 'card-header'}
        onClick={handleClick}
        onKeyDown={handleClick}
        role='button'
        tabIndex={0}
      >
        <h2>
          {question}{' '}
          <span className='arrow-icon'>
            {toggle ? <BiChevronUp /> : <BiChevronDown />}{' '}
          </span>
        </h2>
      </div>

      <div className={toggle ? 'collapse show' : 'collapse'}>{answer}</div>
    </div>
  )
}

export default FaqCard
