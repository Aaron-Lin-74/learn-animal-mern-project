import { useState, useEffect, useRef } from 'react'

import axios from 'axios'

// todo apply useRef for data catch
/** Custom hook that fetches the data (like reviews and animals) from server
 *  If the withToken is true, a token is added in the headers
 */
const useFetch = (url, withToken = false) => {
  let cancelRequest = false
  const [data, setData] = useState([])
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
          const data = cache.current[url]
          setData(data)
          setIsLoaded(true)
        } else {
          const response = await axios.get(url, config)
          if (response.status === 200) {
            const data = response.data
            cache.current[url] = data
            if (cancelRequest) return
            setData(data)
            setIsLoaded(true)
          }
        }
      } catch (err) {
        if (cancelRequest) return
        console.log(err.message)
      }

      return function cleanup() {
        cancelRequest = true
      }
    }
    fetchData()
  }, [url, withToken])
  return { data, isLoaded }
}

export default useFetch
