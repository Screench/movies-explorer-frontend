import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MovieCardList from '../Movies/MovieCardList/MovieCardList';
import './SavedMovies.css';

export default function SavedMovies({ textButton }) {
  return (
    <>
      <Header />
      <main className='saved__movies'>
        <SearchForm />
        <MovieCardList textButton={textButton} />
      </main>
    </>
  )
};
