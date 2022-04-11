import React, { useEffect } from 'react'
import useUtils from '../../hooks/useUtils'
import Button from '../../components/Button/Button'

function Error() {
  const { scrollTop } = useUtils()
  useEffect(() => {
    scrollTop()
  }, [scrollTop])
  return (
    <main className='error'>
      <h1>404</h1>
      <p>
        Sorry, we can&apos;t find that page. Don&apos;t worry through,
        everything is still awesome.
      </p>
      <Button path='/'>Home</Button>
    </main>
  )
}

export default Error
