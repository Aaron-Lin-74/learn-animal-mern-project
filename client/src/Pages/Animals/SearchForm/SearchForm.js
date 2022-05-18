import React from 'react'
import { useParams } from 'react-router-dom'
import { FcSearch } from 'react-icons/fc'
import './SearchForm.scss'
import { useDispatch } from 'react-redux'
import { setSearchTerm } from '../../../features/animal/animalSlice'

function SearchForm() {
  const dispatch = useDispatch()

  // Change the animal type from plural to single
  const { animalType } = useParams()
  const type = animalType.endsWith('s') ? animalType.slice(0, -1) : animalType
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const debounce = (func, delay = 300) => {
    let timeoutId
    return (...args) => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        func.apply(this, args)
      }, delay)
    }
  }
  const handleSearchInput = (e) => {
    dispatch(setSearchTerm(e.target.value))
  }
  const debouncedHandleSearchInput = debounce(handleSearchInput, 300)
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
            onChange={debouncedHandleSearchInput}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
