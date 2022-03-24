import { configureStore } from '@reduxjs/toolkit'
import galleryReducer from '../features/gallery/gallerySlice'

export default configureStore({
  reducer: {
    gallery: galleryReducer,
  },
})
