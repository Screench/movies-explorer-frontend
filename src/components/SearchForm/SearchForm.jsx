import React from 'react';
import './SearchForm.css';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';

export default function SearchForm () {
  return (
    <section className='movies__search'>
      <form className='movies__search-form'>
        <input className='movies__search-form-input' name='search' minLength='2' type='text' placeholder='Фильм' required />
        <button className='movies__search-form-button' type='button'>Поиск</button>
      </form>
      <ToggleSwitch />
    </section>
  );
};
