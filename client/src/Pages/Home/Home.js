import React, { useEffect } from 'react'
import useUtils from '../../hooks/useUtils'
import HeroSection from './HeroSection/HeroSection'
import Cards from '../../components/Cards/Cards'
import Gallery from '../../components/Gallery/Gallery'
import Reviews from './Reviews/Reviews'
import Subscription from './Subscription/Subscription'
import '../../App.css'

const Home = () => {
  const { scrollTop } = useUtils()
  useEffect(() => {
    scrollTop()
  }, [scrollTop])
  return (
    <main className='home'>
      <HeroSection />
      <Gallery />
      <Cards />
      <Reviews />
      <Subscription />
    </main>
  )
}

export default Home
