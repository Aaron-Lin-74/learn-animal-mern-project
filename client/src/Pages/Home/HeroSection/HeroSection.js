import React, { useRef, useState } from 'react'
import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa'
import Button from '../../../components/Button/Button'
import './HeroSection.css'
import useUtils from '../../../hooks/useUtils'

function HeroSection() {
  const videoRef = useRef()
  const [isPlay, setIsPlay] = useState(true)
  const { redirect } = useUtils()

  // Toggle the play or pause of the hero video
  const pausePlayVideo = () => {
    setIsPlay(!isPlay)
    if (videoRef.current.paused || videoRef.current.ended)
      videoRef.current.play()
    else videoRef.current.pause()
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
          buttonstyle='btn--outline'
          buttonsize='btn--medium'
          onClick={pausePlayVideo}
          title={isPlay ? 'pause video' : 'play video'}
        >
          {isPlay ? <FaPauseCircle /> : <FaPlayCircle />}
        </Button>
      </div>
      <h1>Adventure awaits</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          buttonstyle='btn--outline'
          buttonsize='btn--large'
          path='/sign-up'
        >
          GET STARTED
        </Button>

        <Button
          buttonstyle='btn--primary'
          buttonsize='btn--large'
          onClick={() =>
            redirect('https://www.youtube.com/watch?v=MhhAox6Zei8')
          }
        >
          Watch <FaPlayCircle />
        </Button>
      </div>
    </section>
  )
}

export default HeroSection
