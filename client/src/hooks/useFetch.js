import { useState, useEffect } from 'react'

import axios from 'axios'

/** Custom hook that fetches the data (like reviews and animals) from server
 *  If the withToken is true, a token is added in the headers
 */
const useFetch = (url, withToken = false) => {
  const [data, setData] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  // When url or withToken changes, triggle fetchData function to update data
  useEffect(() => {
    // Fetch the data from the server
    // Move the function into the effect as it is only ever used in this local effect
    const fetchData = async () => {
      setIsLoaded(false)
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
        const response = await axios.get(url, config)
        if (response.status === 200) {
          setData(response.data)
          setIsLoaded(true)
        }
      } catch (err) {
        console.log(err.message)
      }
    }
    fetchData()
  }, [url, withToken])
  return { data, isLoaded }
}

export default useFetch
