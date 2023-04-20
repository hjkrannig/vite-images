import { useState } from 'react'
import { useAppContext } from '../AppContext'
import Pager from './Pager'

const SearchForm = () => {
  const { searchValue, setSearchValue, page, setPage } = useAppContext()
  console.log('page: ', page)
  const handleSubmit = (evt) => {
    evt.preventDefault()
    const newSearchValue = evt.target.elements.search.value
    if (!newSearchValue) {
      return
    }
    setSearchValue(newSearchValue)
  }

  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <Pager />
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="cat"
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  )
}

export default SearchForm
