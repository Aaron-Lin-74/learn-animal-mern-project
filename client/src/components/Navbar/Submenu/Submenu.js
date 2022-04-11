import React, { useRef, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import './Submenu.css'
import { BsStarFill } from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux'
import {
  closeSubmenu,
  selectIsSubmenuOpen,
  selectSubmenuLocation,
} from '../../../features/menu/menuSlice'

function Submenu(props) {
  const { largeScreenMode, closeMobileMenu } = props
  const dispatch = useDispatch()
  const isSubmenuOpen = useSelector(selectIsSubmenuOpen)
  const submenuLocation = useSelector(selectSubmenuLocation)
  const submenuRef = useRef()

  useLayoutEffect(() => {
    if (largeScreenMode) {
      // Move the submenu to the bottom of the navbar
      submenuRef.current.style.top = `90px`
      submenuRef.current.style.left = `${submenuLocation.coorX}px`
    } else {
      submenuRef.current.style.top = `${submenuLocation.coorY}px`
      submenuRef.current.style.left = '0'
    }
  }, [largeScreenMode, submenuLocation])

  return (
    <aside
      className={isSubmenuOpen ? 'submenu show' : 'submenu'}
      ref={submenuRef}
      onMouseLeave={() => dispatch(closeSubmenu())}
    >
      <div
        className={`${
          largeScreenMode ? 'submenu-center col-3' : 'submenu-center'
        }`}
      >
        <Link to='/animals/mammals' onClick={closeMobileMenu}>
          <h4>Mammals</h4>
        </Link>

        <Link to='/animals/birds' onClick={closeMobileMenu}>
          <h4>Birds</h4>
        </Link>

        <Link to='/animals/reptiles' onClick={closeMobileMenu}>
          <h4>
            Reptiles <BsStarFill />
          </h4>
        </Link>

        <Link to='/animals/fish' onClick={closeMobileMenu}>
          <h4>
            Fish
            <BsStarFill />
          </h4>
        </Link>

        <Link to='/animals/amphibians' onClick={closeMobileMenu}>
          <h4>
            Amphibians
            <BsStarFill />
          </h4>
        </Link>

        <Link to='/animals/invertebrates' onClick={closeMobileMenu}>
          <h4>
            Invertebrates <BsStarFill />
          </h4>
        </Link>
      </div>
    </aside>
  )
}

export default Submenu
