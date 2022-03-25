import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isModalOpen: false,
  galleryImageNames: ['quokka', 'panda', 'koala', 'red_panda'],
  imageIndex: 0,
}

const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isModalOpen = true
      state.imageIndex = action.payload
    },
    closeModal: (state) => {
      state.isModalOpen = false
    },
  },
})

export const { openModal, closeModal } = gallerySlice.actions

export const selectImageIndex = (state) => state.gallery.imageIndex
export const selectIsModalOpen = (state) => state.gallery.isModalOpen
export const selectGalleryImageNames = (state) =>
  state.gallery.galleryImageNames

export default gallerySlice.reducer
