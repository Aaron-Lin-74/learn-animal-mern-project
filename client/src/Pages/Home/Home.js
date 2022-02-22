import React, { useEffect } from 'react'
import { useGlobalContext } from '../../contexts/AppContext'
import HeroSection from './HeroSection/HeroSection'
import Cards from '../../components/Cards'
import Gallery from '../../components/Gallery'
import Reviews from './Reviews/Reviews'
import Subscription from './Subscription/Subscription'
import '../../App.css'

const Home = () => {
  const { scrollTop } = useGlobalContext()
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
