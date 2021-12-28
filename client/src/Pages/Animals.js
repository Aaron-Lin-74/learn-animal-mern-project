import React, { useEffect, useRef } from 'react'
import { Outlet } from 'react-router-dom'
import { ImArrowUp } from 'react-icons/im'
import { useGlobalContext } from '../contexts/AppContext'

const Animals = () => {
  const scrollTopRef = useRef()

  const { scrollTop } = useGlobalContext()

  // Add onscroll event listener determining to show the button or not
  useEffect(() => {
    scrollTop()
    window.addEventListener('scroll', showScrollBtn)

    // Always use a cleanup function to avoid the memery leak and overwritten issue
    return () => window.removeEventListener('scroll', showScrollBtn)
  }, [scrollTop, scrollTopRef])

  // When the user scrolls down 20px from the top of the document, show the button
  const showScrollBtn = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollTopRef.current.style.display = 'block'
    } else {
      scrollTopRef.current.style.display = 'none'
    }
  }

  return (
    <div className='animals'>
      <Outlet />
      <button className='scroll-top' ref={scrollTopRef} onClick={scrollTop}>
        <ImArrowUp />
      </button>
    </div>
  )
}

export default Animals
