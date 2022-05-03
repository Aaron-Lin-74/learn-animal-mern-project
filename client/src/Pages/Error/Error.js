import React, { useEffect } from 'react'
import useUtils from '../../hooks/useUtils'
import Button from '../../components/Button/Button'

function Error({ header = 'Oops!', content = 'Something goes wrong!' }) {
  const { scrollTop } = useUtils()
  useEffect(() => {
    scrollTop()
  }, [scrollTop])
  return (
    <main className='error'>
      <h1>{header}</h1>
      <p>{content}</p>
      <Button path='/'>Home</Button>
    </main>
  )
}

export default Error
