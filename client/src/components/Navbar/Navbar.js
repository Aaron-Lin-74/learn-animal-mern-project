import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaTimes, FaBars } from 'react-icons/fa'
import { GiTigerHead } from 'react-icons/gi'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
import { useAuth } from '../../contexts/AuthContext'
import Submenu from './Submenu/Submenu'
import { useDispatch, useSelector } from 'react-redux'
import {
  openSubmenu,
  closeSubmenu,
  toggleSubmenu,
  toggleMobileMenu,
  closeMobileMenu,
  selectIsSubmenuOpen,
  selectIsMobileMenuClicked,
} from '../../features/menu/menuSlice'

function Navbar() {
  const dispatch = useDispatch()
  const isSubmenuOpen = useSelector(selectIsSubmenuOpen)
  const isMobileMenuClicked = useSelector(selectIsMobileMenuClicked)
  const { currentUser, logout } = useAuth()
  const screenBreakPoint = 960

  // We set 960px to be the break point of large screen and small screen
  const [largeScreenMode, setLargeScreenMode] = useState(true)

  // The break point we set is 960px
  const checkScreenSize = () => {
    if (window.innerWidth <= screenBreakPoint) {
      setLargeScreenMode(false)
    } else {
      setLargeScreenMode(true)
    }
  }

  // Check the small large screen break point at initial render
  useEffect(() => {
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const calculateLocation = (tempRect) => {
    const coorX = Math.floor((tempRect.left + tempRect.right) / 2)
    const coorY = Math.floor(tempRect.bottom)
    return { coorX, coorY }
  }

  // Show the submenu when mouse over the animals menu, calculate the coordinate of submenu
  const displaySubmenu = (e) => {
    e.stopPropagation()
    if (isSubmenuOpen) return
    const tempRect = e.target.getBoundingClientRect()
    const coordinate = calculateLocation(tempRect)
    dispatch(openSubmenu(coordinate))
  }

  // Close submenu anyway and do nothing if in large screen mode, close mobile menu otherwise.
  const handleCloseMobileMenu = () => {
    if (isSubmenuOpen) {
      dispatch(closeSubmenu())
    }
    if (largeScreenMode) return
    dispatch(closeMobileMenu())
  }

  // When clicked mobile menu button, toggle mobile menu and close submenu if it is open.
  const handleToggleMobileMenu = () => {
    if (isSubmenuOpen) {
      dispatch(closeSubmenu())
    }
    dispatch(toggleMobileMenu())
  }
  const onAnimalsMenuClicked = () => {
    dispatch(toggleSubmenu())
  }

  // While submenu is open, close submenu when the mouse is moved to other places.
  const handleMouseOverNavbar = (e) => {
    e.stopPropagation()
    if (!isSubmenuOpen) return
    if (e.target.classList.contains('submenu')) return
    if (!e.target.classList.contains('nav-links')) {
      dispatch(closeSubmenu())
    }
  }

  return (
    <header className='navbar'>
      <nav className='navbar-container' onMouseOver={handleMouseOverNavbar}>
        <Link to='/' className='navbar-logo' onClick={handleCloseMobileMenu}>
          Learn Animals <GiTigerHead />
        </Link>
        <div className='menu-icon' onClick={handleToggleMobileMenu}>
          {isMobileMenuClicked ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={isMobileMenuClicked ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={handleCloseMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/animals'
              className='nav-links'
              onClick={onAnimalsMenuClicked}
              onMouseOver={displaySubmenu}
            >
              Animals
              {isSubmenuOpen ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact'
              className='nav-links'
              onClick={handleCloseMobileMenu}
            >
              Contact
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/products'
              className='nav-links'
              onClick={handleCloseMobileMenu}
            >
              Products
            </Link>
          </li>
          {currentUser && (
            <li>
              <Link
                to='/dashboard'
                className='nav-links'
                onClick={handleCloseMobileMenu}
              >
                {currentUser.name}
              </Link>
            </li>
          )}
          {currentUser ? (
            <li>
              <span className='nav-links-sign-up' onClick={logout}>
                Log out
              </span>
            </li>
          ) : (
            <li>
              <Link
                to='/sign-up'
                className='nav-links-sign-up'
                onClick={handleCloseMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          )}
        </ul>
      </nav>
      <Submenu
        largeScreenMode={largeScreenMode}
        closeMobileMenu={handleCloseMobileMenu}
      />
    </header>
  )
}

export default Navbar
