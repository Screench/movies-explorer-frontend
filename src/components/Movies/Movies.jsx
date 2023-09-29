import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MovieCardList from './MovieCardList/MovieCardList';
// import Preloader from '../Preloader/Preloader';
import './Movies.css';

export default function Movies({ textButton }) {
  return (
    <>
      <Header />
      <main className='movies'>
        <SearchForm />
        <MovieCardList textButton={textButton} />
        <button className='movies__button'>Еще</button>
      </main>
    </>
  );
};
