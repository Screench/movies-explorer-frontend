import React, { useState, useEffect } from 'react'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import { filterByMovieDuration, findShortDurationMovie } from '../../utils/utils'

export default function SavedMovies({ savedMovies, onRemoveCard, loggedIn, isLoading }) {
  const [filteredMovies, setFilteredMovies] = useState(savedMovies)
  const [isShortDurationMovies, setIsShortDurationMovies] = useState(false)
  
  const [searchQuery, setSearchQuery] = useState('')
  const [isNotFound, setIsNotFound] = useState(false)

  function handleMoviesSearch(query) {
    setSearchQuery(query)
  }

  function switchToShortDurationFilm() {
    setIsShortDurationMovies(!isShortDurationMovies)
  }

  useEffect(() => {
    const moviesCardList = findShortDurationMovie(savedMovies, searchQuery)
    setFilteredMovies(
      isShortDurationMovies ? filterByMovieDuration(moviesCardList) : moviesCardList
    )
  }, [savedMovies, isShortDurationMovies, searchQuery])

  useEffect(() => {
    if (filteredMovies.length === 0) {
      setIsNotFound(true)
    } else {
      setIsNotFound(false)
    }
  }, [filteredMovies])

  return (
    <section className='movies'>
      <SearchForm 
        onSearchMovies={handleMoviesSearch}
        onMoviesFiltration={switchToShortDurationFilm}
        isLoading={isLoading}/>
      <MoviesCardList 
        cards={filteredMovies}
        isLikedFilms={true}
        savedMovies={savedMovies}
        onRemoveCard={onRemoveCard}
        isNotFound={isNotFound}
        />
    </section>
  )
}
