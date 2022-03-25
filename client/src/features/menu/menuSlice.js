import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isSubmenuOpen: false,
  isMobileMenuClicked: false,
  submenuLocation: { coorX: 0, coorY: 0 },
}

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    openSubmenu: (state, action) => {
      state.isSubmenuOpen = true
      state.submenuLocation = action.payload
    },
    closeSubmenu: (state) => {
      state.isSubmenuOpen = false
    },
    toggleSubmenu: (state) => {
      state.isSubmenuOpen = !state.isSubmenuOpen
    },
    toggleMobileMenu: (state) => {
      state.isMobileMenuClicked = !state.isMobileMenuClicked
    },
    closeMobileMenu: (state) => {
      state.isMobileMenuClicked = false
    },
  },
})

export const {
  openSubmenu,
  closeSubmenu,
  toggleSubmenu,
  toggleMobileMenu,
  closeMobileMenu,
} = menuSlice.actions

export const selectIsSubmenuOpen = (state) => state.menu.isSubmenuOpen
export const selectIsMobileMenuClicked = (state) =>
  state.menu.isMobileMenuClicked
export const selectSubmenuLocation = (state) => state.menu.submenuLocation

export default menuSlice.reducer
