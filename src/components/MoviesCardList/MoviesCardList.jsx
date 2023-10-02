import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import MoviesCard from '../MoviesCard/MoviesCard'
import SearchError from '../SearchError/SearchError'
import Preloader from '../Preloader/Preloader'
import './MoviesCardList.css'
import {MOVIE_ROWS_MOBILE, MOVIE_ROWS_TABLET, MOVIE_ROWS_DESKTOP,} from '../../utils/constants'

export default function MoviesCardList({
  cards,
  isLoading,
  isLikedFilms,
  savedMovies,
  isFetchError,
  handleLikeFilm,
  onRemoveCard,
  isNotFound,
}) {
  const { pathname } = useLocation()
  const [numberOfMovies, setNumberOfMovies] = useState(0)

  function findMoviesNumber() {
    const windowWidthSize = window.innerWidth
    if (windowWidthSize > 1130) {
      setNumberOfMovies(12)
    } else if (windowWidthSize > 760) {
      setNumberOfMovies(8)
    } else {
      setNumberOfMovies(5)
    }
  }

  function increaseMoviesNumber() {
    const display = window.innerWidth
    if (display > 1130) {
      setNumberOfMovies(numberOfMovies + MOVIE_ROWS_DESKTOP)
    } else if (display > 760) {
      setNumberOfMovies(numberOfMovies + MOVIE_ROWS_TABLET)
    } else {
      setNumberOfMovies(numberOfMovies + MOVIE_ROWS_MOBILE)
    }
  }

  useEffect(() => {
    let resizeRefreshTimeout

    function handleResizeRefresh() {
      clearTimeout(resizeRefreshTimeout)
      resizeRefreshTimeout = setTimeout(() => {
        findMoviesNumber()
      }, 100)
    }
    findMoviesNumber()
    window.addEventListener('resize', handleResizeRefresh)
    return () => {
      clearTimeout(resizeRefreshTimeout)
      window.removeEventListener('resize', handleResizeRefresh)
    }
  }, [])

  function findSavedMovie(savedMovies, card) {
    return savedMovies.find((savedMovie) => savedMovie.movieId === card.id)
  }

  return (
    <section className='cards'>
      {isLoading && <Preloader />}
      {isNotFound && !isLoading && (<SearchError errorText={'Ничего не найдено'} />)}
      {isFetchError && !isLoading && (<SearchError errorText={'Проблема с соединением. Попробуйте позже'}/>)}
      {!isLoading && !isFetchError && !isNotFound && (
        <>
          {pathname === '/saved-movies' ? (
            <>
              <ul className='cards__list'>
                {cards.map((card) => (
                  <MoviesCard
                    key={isLikedFilms ? card._id : card.id}
                    card={card}
                    cards={cards}
                    isLikedFilms={isLikedFilms}
                    saved={findSavedMovie(savedMovies, card)}
                    savedMovies={savedMovies}
                    handleLikeFilm={handleLikeFilm}
                    onRemoveCard={onRemoveCard}
                  />
                ))}
              </ul>
              <div className='cards__btn-container'></div>
            </>
          ) : (
            <>
              <ul className='cards__list'>
                {cards.slice(0, numberOfMovies).map((card) => (
                  <MoviesCard
                    key={isLikedFilms ? card._id : card.id}
                    card={card}
                    cards={cards}
                    isLikedFilms={isLikedFilms}
                    saved={findSavedMovie(savedMovies, card)}
                    savedMovies={savedMovies}
                    handleLikeFilm={handleLikeFilm}
                    onRemoveCard={onRemoveCard}
                  />
                ))}
              </ul>
              <div className='cards__btn-container'>
                {cards.length > numberOfMovies ?
                  (<button className='cards__button' onClick={increaseMoviesNumber}>Ещё</button>) :
                  ('')}
              </div>
            </>
          )}
        </>
      )}
    </section>
  )
}
