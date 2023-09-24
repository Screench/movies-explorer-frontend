import React from 'react';
import { useLocation } from 'react-router-dom';
import './MovieCardList.css';
import { initialCards, savedCards } from '../../../utils/constants';
import MovieCard from '../MovieCard/MovieCard';

export default function MovieCardList({ textButton }) {
  const location = useLocation();
  return (
    <section className='movies-container'>
      {location.pathname === '/movies' ? (
        <>
          <ul className='movies-container__list'>
            {initialCards.slice().map((movie, i) => (
              <MovieCard key={i} movie={movie} textButton={textButton} />
            ))}
          </ul>
        </>
      ) : (
        <ul className='movies-container__list'>
          {savedCards.slice().map((movie, i) => (
            <MovieCard key={i} movie={movie} textButton={textButton} />
          ))}
        </ul>
      )}
    </section>
  );
};
