import React, { useState, useEffect } from 'react'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import { findShortDurationMovie, filterByMovieDuration } from '../../utils/utils'
import * as movies from '../../utils/MoviesApi'
import './Movies.css'

export default function Movies({ handleLikeFilm, onRemoveCard, savedMovies, loggedIn }) {

  const [filtratedMovies, setFiltratedMovies] = useState([])
  const [startMovies, setStartMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isShortDurationMovies, setIsShortDurationMovies] = useState(false)

  const [isNotFound, setIsNotFound] = useState(false)
  const [isFetchError, setIsFetchError] = useState(false)

  async function handleMoviesSearch(query) {
    localStorage.setItem('movieSearch', query)
    localStorage.setItem('shortDurationMovies', isShortDurationMovies)

    if (localStorage.getItem('allMoviesCollection')) {
      const movies = JSON.parse(localStorage.getItem('allMoviesCollection'))
      handleMovieFiltration(movies, query, isShortDurationMovies)
    } else {
      setIsLoading(true)
      try {
        const cardsData = await movies.getMovies()
        handleMovieFiltration(cardsData, query, isShortDurationMovies)
        setIsFetchError(false)
      } catch (err) {
        setIsFetchError(true)
        console.log(err)
      } finally {
        setIsLoading(false)
      }
    }
  }

  function handleMovieFiltration(movies, query, short) {
    const moviesCardList = findShortDurationMovie(movies, query, short)
    setStartMovies(moviesCardList)
    setFiltratedMovies(short ? filterByMovieDuration(moviesCardList) : moviesCardList)
    localStorage.setItem('movies', JSON.stringify(moviesCardList))
    localStorage.setItem('allMoviesCollection', JSON.stringify(movies))
  }

  function switchToShortDurationFilm() {
    setIsShortDurationMovies(!isShortDurationMovies)
    if (!isShortDurationMovies) {
      setFiltratedMovies(filterByMovieDuration(startMovies))
    } else { setFiltratedMovies(startMovies) }
    localStorage.setItem('shortDurationMovies', !isShortDurationMovies)
  }

  useEffect(() => {
    if (localStorage.getItem('movies')) {
      const movies = JSON.parse(localStorage.getItem('movies'))
      setStartMovies(movies)
      if (localStorage.getItem('shortDurationMovies') === 'true') {
        setFiltratedMovies(filterByMovieDuration(movies))
      } else {setFiltratedMovies(movies)}
    }
  }, [])

  useEffect(() => {
    if (localStorage.getItem('shortDurationMovies') === 'true') {
      setIsShortDurationMovies(true)
    } else {setIsShortDurationMovies(false)}
  }, [])

  useEffect(() => {
    if (localStorage.getItem('movieSearch')) {
      if (filtratedMovies.length === 0) {
        setIsNotFound(true)
      } else { setIsNotFound(false) }
    } else { setIsNotFound(false) }
  }, [filtratedMovies])

  return (
    <section className='movies'>
      <SearchForm
        onMoviesFiltration={switchToShortDurationFilm}
        isShortDurationMovies={isShortDurationMovies}
        onSearchMovies={handleMoviesSearch} />
      <MoviesCardList
        cards={filtratedMovies}
        isLikedFilms={false}
        isNotFound={isNotFound}
        isLoading={isLoading}
        savedMovies={savedMovies}
        onRemoveCard={onRemoveCard}
        handleLikeFilm={handleLikeFilm}
        isFetchError={isFetchError} />
    </section>
  )
}
