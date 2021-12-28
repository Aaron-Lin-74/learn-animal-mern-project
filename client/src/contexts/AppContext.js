import React, { useState, useEffect, useContext, useCallback } from 'react'
// import axios from 'axios'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  // The animals data fetched from the server
  // const [animals, setAnimals] = useState([])

  // Small large screen break point is 960px
  const screenBreakPoint = 960
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)

  // use click state to control the appearance of sidebar menu button
  const [isSidebarClicked, setIsSidebarClicked] = useState(false)

  // We set 960px to be the break point of large screen and small screen
  const [largeScreenMode, setLargeScreenMode] = useState(true)

  // The gallery modal
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Gallery image names
  const galleryImageNames = ['quokka', 'panda', 'koala', 'red_panda']

  // Gallery modal image index
  const [modalIndex, setModalIndex] = useState(0)

  // Scroll to the top of the page
  const scrollTop = useCallback(() => {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
  }, [])

  // location is an object that has the coordinate (x, y) properties
  const [location, setLocation] = useState({})

  // const loadAnimals = async (type, limit) => {
  //   try {
  //     // Use query string to set the type and limit
  //     const response = await axios.get(`/api/animals/${type}?limit=${limit}`)
  //     setAnimals(response.data)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }
  const openSubmenu = (page, coordinate) => {
    setLocation(coordinate)
    setIsSubmenuOpen(true)
  }
  const closeSubmenu = () => {
    setIsSubmenuOpen(false)
  }
  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen)
  }

  // The break point we set is 960px
  const checkScreenSize = () => {
    if (window.innerWidth <= screenBreakPoint) {
      setLargeScreenMode(false)
    } else {
      setLargeScreenMode(true)
    }
  }
  const toggleSidebar = () => setIsSidebarClicked(!isSidebarClicked)

  // When close mobile menu, close the submenu as well
  const closeMobileMenu = () => {
    setIsSidebarClicked(false)
    closeSubmenu()
  }
  const openModal = (ind) => {
    setModalIndex(ind)
    setIsModalOpen(true)
    /**  When Modal opened, we don't want the underline page scroll. With body position to fixed, the issue is page will scroll top
    // document.body.style.position = 'fixed'
    // document.body.style.overflow = 'hidden' */
    document.body.style.setProperty('overflow', 'hidden', 'important')
    document.getElementById('hero-video').pause()
  }
  const closeModal = () => {
    setIsModalOpen(false)
    // document.body.style.position = ''
    document.body.style.overflow = 'visible'
    // document.body.style.setProperty('overflow', 'visible', 'important')
    document.getElementById('hero-video').play()
  }

  useEffect(() => {
    // Check the small large screen break point
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  return (
    <AppContext.Provider
      value={{
        // animals,
        // loadAnimals,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        toggleSubmenu,
        location,
        setLocation,
        largeScreenMode,
        setLargeScreenMode,
        scrollTop,
        screenBreakPoint,
        isSidebarClicked,
        toggleSidebar,
        closeMobileMenu,
        isModalOpen,
        openModal,
        closeModal,
        galleryImageNames,
        modalIndex,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
