import React, { useState, useEffect } from 'react'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import { filterByMovieDuration, findShortDurationMovie } from '../../utils/utils'

export default function SavedMovies({ savedMovies, onRemoveCard, loggedIn }) {
  const [filtratedMovies, setFiltratedMovies] = useState(savedMovies)
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
    setFiltratedMovies(
      isShortDurationMovies ? filterByMovieDuration(moviesCardList) : moviesCardList
    )
  }, [savedMovies, isShortDurationMovies, searchQuery])

  useEffect(() => {
    if (filtratedMovies.length === 0) {
      setIsNotFound(true)
    } else {
      setIsNotFound(false)
    }
  }, [filtratedMovies])

  return (
    <section className='movies'>
      <SearchForm 
        onSearchMovies={handleMoviesSearch}
        onMoviesFiltration={switchToShortDurationFilm}/>
      <MoviesCardList 
        cards={filtratedMovies}
        isLikedFilms={true}
        savedMovies={savedMovies}
        onRemoveCard={onRemoveCard}
        isNotFound={isNotFound}
        />
    </section>
  )
}
