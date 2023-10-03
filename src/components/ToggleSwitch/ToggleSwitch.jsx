import React from 'react';
import './ToggleSwitch.css';

export default function ToggleSwitch({ onMoviesFiltration, isShortDurationMovies }) {

  return (
    <section className='switch'>
      <input className='switch__input' id='checkbox' type='checkbox' onChange={onMoviesFiltration}
        checked={isShortDurationMovies}/>
      <label htmlFor='checkbox' className='switch__toggle'>Короткометражки</label>
    </section>
  );
}