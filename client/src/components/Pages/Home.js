import React, { useEffect } from 'react'
import { useGlobalContext } from '../contexts/AppContext'
import HeroSection from '../HeroSection'
import '../../App.css'
import Cards from '../Cards'
import Gallery from '../Gallery'
import Reviews from '../Reviews'
import { HomeProvider } from '../contexts/HomeContext'

const Home = () => {
  const { scrollTop } = useGlobalContext()
  useEffect(() => {
    scrollTop()
  }, [])
  return (
    <div>
      <HomeProvider>
        <HeroSection />
        <Gallery />
        <Cards />
        <Reviews />
      </HomeProvider>
    </div>
  )
}

export default Home
