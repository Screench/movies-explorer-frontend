import React from 'react';
import './MovieCard.css';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function MovieCard({ movie, textButton }) {

  const [isChecked, setIsChecked] = useState(false);
  const location = useLocation();

  const handleMovieCheck = () => {
    setIsChecked(isChecked => !isChecked);
  }

  const movieButtonCheck = (`movie__button ${isChecked && 'movie__button_check'} ${location.pathname === '/saved-movies' ? 'movie__button_saved-movies' : ''}`);

  return (
    <li className='movie'>
      <div className='movie__description'>
        <h2 className='movie__name'>{movie.name}</h2>
        <p className='movie__time'>{movie.time}</p>
      </div>
      <img className='movie__image' src={movie.image} alt={`Постер фильма ${movie.name}`} />
      <button className={movieButtonCheck} onClick={handleMovieCheck} type='button'>
        {isChecked ? null : textButton}
      </button>
    </li>
  );
};
