import React from 'react';
import './MovieCard.css';
import { useState } from 'react';

export default function MovieCard({ movie, textButton }) {

  const [isChecked, setIsChecked] = useState(false);

  const handleMovieCheck = () => {
    setIsChecked(isChecked => !isChecked);
  }

  const movieButtonCheck = (`movie__button ${isChecked && 'movie__button_check'}`);

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
