import { useState, useEffect, useRef } from 'react'
import axios from 'axios'

axios.defaults.baseURL =
  'https://fzbvp5o7wd.execute-api.ap-southeast-2.amazonaws.com'

/** Custom hook that fetches the data (like reviews and animals) from server
 *  If the withToken is true, a token is added in the headers
 */
const useFetch = (url, withToken = false) => {
  let cancelRequest = false
  const [fetchedData, setFetchedData] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  // Memoizing Data With useRef
  const cache = useRef({})

  // When url or withToken changes, triggle fetchData function to update data
  useEffect(() => {
    // Move the function into the effect as it is only ever used in this local effect
    const fetchData = async () => {
      setIsLoaded(false)
      if (!url) return
      try {
        let config
        if (withToken) {
          config = {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
          }
        }
        if (cache.current[url]) {
          const cachedData = cache.current[url]
          setFetchedData(cachedData)
          setIsLoaded(true)
        } else {
          const response = await axios.get(url, config)
          if (response.status === 200) {
            const { data } = response
            cache.current[url] = data
            if (cancelRequest) return
            setFetchedData(data)
            setIsLoaded(true)
          }
        }
      } catch (err) {
        if (cancelRequest) return
        console.log(err.message)
      }
    }
    fetchData()
    return function cleanup() {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      cancelRequest = true
    }
  }, [url, withToken])
  return { fetchedData, isLoaded }
}

export default useFetch
