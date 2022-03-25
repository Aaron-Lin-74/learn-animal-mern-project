import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allTypes: ['mammal', 'bird', 'reptile', 'fish', 'amphibian', 'invertebrate'],
  allTypesPlural: [
    'mammals',
    'birds',
    'reptiles',
    'fish',
    'amphibians',
    'invertebrates',
  ],
  premiumTypes: ['reptiles', 'fish', 'amphibians', 'invertebrates'],
  searchTerm: '',
  animals: [],
}

const animalSlice = createSlice({
  name: 'animal',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    },
    setAnimals: (state, action) => {
      state.animals = action.payload
    },
  },
})

export const { setSearchTerm, setAnimals } = animalSlice.actions

export const selectAllTypes = (state) => state.animal.allTypes
export const selectAllTypesPlural = (state) => state.animal.allTypesPlural
export const selectPremiumTypes = (state) => state.animal.premiumTypes
export const selectSearchTerm = (state) => state.animal.searchTerm
export const selectAnimals = (state) => state.animal.animals
export const selectAnimalById = (state, id) => {
  return state.animal.animals.filter((animal) => {
    return animal._id === id
  })[0]
}

export default animalSlice.reducer
