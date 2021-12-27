import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import Button from './Button'
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'
import { GiTigerHead } from 'react-icons/gi'
const Footer = () => {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <h3 className='footer-subscription-heading'>
          Join the Learn Animals newsletter to receive our latest updates
        </h3>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              type='email'
              name='email'
              className='footer-input'
              placeholder='Your Email'
              required
            />
            <Button buttonStyle='btn--outline' buttonSize='btn--medium'>
              Subscribe
            </Button>
          </form>
        </div>
      </section>
      <section className='footer-links'>
        <div className='footer-nav-items'>
          <Link className='footer-btn' to='/contact'>
            Contact
          </Link>
          <Link className='footer-btn' to='/about-us'>
            About Us
          </Link>
          <Link className='footer-btn' to='/faq'>
            FAQ
          </Link>
          <Link className='footer-btn' to='/terms-of-use'>
            Terms of Use
          </Link>
        </div>
      </section>
      <section className='social-media'>
        <div className='social-media-wrapper'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              Learn Animals <GiTigerHead />
            </Link>
          </div>
          <small className='website-rights'>Learn Animals © 2021</small>
          <div className='social-icons'>
            <a
              className='social-icon-link facebook'
              href='https://www.facebook.com/'
              target='_blank'
              rel='noreferrer'
              aria-label='Facebook'
            >
              <BsFacebook />
            </a>
            <a
              className='social-icon-link instagram'
              href='https://www.instagram.com/'
              target='_blank'
              rel='noreferrer'
              aria-label='Instagram'
            >
              <BsInstagram />
            </a>
            <a
              className='social-icon-link twitter'
              href='https://twitter.com/'
              target='_blank'
              rel='noreferrer'
              aria-label='Twitter'
            >
              <BsTwitter />
            </a>
            <a
              className='social-icon-link youtube'
              href='https://www.youtube.com/'
              target='_blank'
              rel='noreferrer'
              aria-label='Youtube'
            >
              <BsYoutube />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
