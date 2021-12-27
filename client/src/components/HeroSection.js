import React, { useRef, useState } from 'react'
import Button from './Button'
import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa'
import './HeroSection.css'

const HeroSection = () => {
  const videoRef = useRef()
  const [isPlay, setIsPlay] = useState(true)

  // toggle the play or pause of the hero video
  const pausePlayVideo = () => {
    setIsPlay(!isPlay)
    if (videoRef.current.paused || videoRef.current.ended)
      videoRef.current.play()
    else videoRef.current.pause()
  }

  // redirect to the youtube on a new tab
  const redirect = () => {
    window.open('https://www.youtube.com/watch?v=MhhAox6Zei8', '_blank')
  }
  return (
    <section className='hero-container'>
      <video
        id='hero-video'
        ref={videoRef}
        autoPlay
        loop
        muted
        poster='/images/panda.jpg'
      >
        <source src='/videos/animals.mp4' type='video/mp4' />
        <source src='/videos/animals.webm' type='video/webm' />
      </video>
      <div className='toggle-hero-video'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--medium'
          onClick={pausePlayVideo}
        >
          {isPlay ? <FaPauseCircle /> : <FaPlayCircle />}
        </Button>
      </div>
      <h1>Adventure awaits</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          path='/sign-up'
        >
          GET STARTED
        </Button>

        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={redirect}
        >
          Watch <FaPlayCircle />
        </Button>
      </div>
    </section>
  )
}

export default HeroSection
