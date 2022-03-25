import { configureStore } from '@reduxjs/toolkit'
import galleryReducer from '../features/gallery/gallerySlice'
import menuReducer from '../features/menu/menuSlice'

export default configureStore({
  reducer: {
    gallery: galleryReducer,
    menu: menuReducer,
  },
})
