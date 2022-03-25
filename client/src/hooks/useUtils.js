import { useCallback } from 'react'

const useUtils = () => {
  // redirect to the url on a new tab
  const redirect = (url) => {
    window.open(url, '_blank')
  }

  // Scroll to the top of the page
  const scrollTop = useCallback(() => {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
  }, [])

  return { redirect, scrollTop }
}

export default useUtils
