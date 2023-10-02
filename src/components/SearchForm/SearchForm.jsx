import { useLocation } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch'
import './SearchForm.css'

export default function SearchForm({ onSearchMovies, onMoviesFiltration, isShortDurationMovies }) {
  const location = useLocation()
  const [isSearchError, setIsSearchError] = useState(false)
  const [search, setSearch] = useState('')

  useEffect(() => {
    if (location.pathname === '/movies' && localStorage.getItem('movieSearchResults')) {
      const localSearch = localStorage.getItem('movieSearchResults')
      setSearch(localSearch)
    }
  }, [location])

  function updateUserData(e) {
    e.preventDefault()
    if (search.trim().length === 0) {
      setIsSearchError(true)
    } else {
      setIsSearchError(false)
      onSearchMovies(search)
    }
  }
  
  function updateSearch(event) {
    setSearch(event.target.value)
  }

  return (
    <section className='search'>
      <form className='search__form' id='form' onSubmit={updateUserData}>
        <input
          className='search__input'
          id='search-input'
          type='text'
          name='query'
          placeholder='Фильм'
          required
          value={search || ''}
          onChange={updateSearch}
        ></input>
        <button className='search__button' type='submit'>Поиск</button>
      </form>
      <ToggleSwitch 
        onMoviesFiltration={onMoviesFiltration}
        isShortDurationMovies={isShortDurationMovies}/>
        {isSearchError && (<span className='search__form-err'>Введите поисковый запрос</span>)}
      <div className='search__border-bottom'></div>
    </section>
  )
}
