import React, { useState } from 'react';
import './ToggleSwitch.css';

export default function ToggleSwitch({ onFilter }) {
  const [shortFilms, setShortFilms] = useState(true);

  return (
    <section className='switch'>
      <input className='switch__input' id='checkbox' type='checkbox' checked={shortFilms} onChange={() => {
        setShortFilms(!shortFilms);
      }
      } />
      <label htmlFor='checkbox' className='switch__toggle'>Короткометражки</label>
    </section>
  );
}