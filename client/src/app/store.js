import { configureStore } from '@reduxjs/toolkit'
import galleryReducer from '../features/gallery/gallerySlice'
import menuReducer from '../features/menu/menuSlice'
import animalReducer from '../features/animal/animalSlice'

export default configureStore({
  reducer: {
    gallery: galleryReducer,
    menu: menuReducer,
    animal: animalReducer,
  },
})
