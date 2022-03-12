import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaTimes, FaBars } from 'react-icons/fa'
import { GiTigerHead } from 'react-icons/gi'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
import { useGlobalContext } from '../../contexts/AppContext'
import { useAuth } from '../../contexts/AuthContext'

function Navbar() {
  const {
    openSubmenu,
    closeSubmenu,
    isSubmenuOpen,
    toggleSubmenu,
    isSidebarClicked,
    toggleSidebar,
    closeMobileMenu,
  } = useGlobalContext()
  const { currentUser, logout } = useAuth()

  // Show the submenu when mouse over the animals menu, get the coordinate of animals
  const displaySubmenu = (e) => {
    const page = e.target.textContent
    const tempRect = e.target.getBoundingClientRect()
    const coorX = (tempRect.left + tempRect.right) / 2
    const coorY = tempRect.bottom
    openSubmenu(page, { coorX, coorY })
  }

  // Once the mouse is moved other places of nav bar, close submenu
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('nav-links')) {
      closeSubmenu()
    }
  }

  return (
    <header className='navbar' onMouseOver={handleSubmenu}>
      <nav className='navbar-container'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          Learn Animals <GiTigerHead />
        </Link>
        <div className='menu-icon' onClick={toggleSidebar}>
          {isSidebarClicked ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={isSidebarClicked ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/animals'
              className='nav-links'
              onClick={(closeMobileMenu, toggleSubmenu)}
              onMouseOver={displaySubmenu}
            >
              Animals{' '}
              {isSubmenuOpen ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/products'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Products
            </Link>
          </li>
          {currentUser && (
            <li>
              <Link
                to='/dashboard'
                className='nav-links'
                onClick={closeMobileMenu}
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
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
