const useUtils = () => {
  // redirect to the url on a new tab
  const redirect = (url) => {
    window.open(url, '_blank')
  }
  return { redirect }
}

export default useUtils
