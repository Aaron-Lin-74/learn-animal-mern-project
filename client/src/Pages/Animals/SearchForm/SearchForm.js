import React from 'react'
import { useParams } from 'react-router-dom'
import { FcSearch } from 'react-icons/fc'
import './SearchForm.scss'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectSearchTerm,
  setSearchTerm,
} from '../../../features/animal/animalSlice'

const SearchForm = () => {
  const dispatch = useDispatch()
  const searchTerm = useSelector(selectSearchTerm)

  // Change the animal type from plural to single
  const { animalType } = useParams()
  const type = animalType.endsWith('s') ? animalType.slice(0, -1) : animalType
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <section className='search-section'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='search-form-control'>
          <label htmlFor='name'>
            Search your favorite {type}
            <FcSearch />
          </label>
          <input
            type='search'
            name='name'
            id='name'
            value={searchTerm}
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
