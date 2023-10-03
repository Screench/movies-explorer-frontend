import { SHORTS_DURATION } from './constants'

export const handleFetchRequest = (res) => {
  if (res.ok) {
    return res.json()
  }
  return Promise.reject(`Error: ${res.status}`)
}

export function findShortDurationMovie(movies, query) {
  const moviesQuery = movies.filter((movie) => {
    const movieRu = String(movie.nameRU).toLowerCase().trim()
    const movieEn = String(movie.nameEN).toLowerCase().trim()
    const userQuery = query.toLowerCase().trim()
    return (
      movieRu.includes(userQuery) || movieEn.includes(userQuery)
    )
  })
  return moviesQuery
}

export function filterByMovieDuration(movies) {
  return movies.filter((movie) => movie.duration < SHORTS_DURATION)
}

export function durationCalculator(duration) {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  return `${hours}ч ${minutes}м`;
}

