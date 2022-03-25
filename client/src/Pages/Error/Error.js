import React, { useEffect } from 'react'
import useUtils from '../../hooks/useUtils'
import Button from '../../components/Button/Button'

const Error = () => {
  const { scrollTop } = useUtils()
  useEffect(() => {
    scrollTop()
  }, [scrollTop])
  return (
    <main className='error'>
      <h1>404</h1>
      <p>
        Sorry, we can't find that page. Don't worry through, everything is still
        awesome.
      </p>
      <Button path='/'>Home</Button>
    </main>
  )
}

export default Error
