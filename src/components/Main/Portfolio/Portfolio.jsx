import React from 'react';
import './Portfolio.css';
import { Link } from 'react-router-dom';

export default function Portfolio() {
  return (
    <section className='port'>
      <h2 className='port__title'>Портфолио</h2>
      <ul className='port__list'>
        <li className='port__item'>
          <Link className='port__link' to={'https://screench.github.io/how-to-learn/'} target='_blank' rel='noopener noreferrer'>
            <p className='port__name'>Статичный сайт</p>
            <span className='port__icon'>↗</span>
          </Link>
        </li>
        <li className='port__item'>
          <Link className='port__link' to={'https://screench.github.io/russian-travel/'} target='_blank' rel='noopener noreferrer'>
            <p className='port__name'>Адаптивный сайт</p>
            <span className='port__icon'>↗</span>
          </Link>
        </li>
        <li className='port__item'>
          <Link className='port__link' to={'https://screench.github.io/mesto/'} target='_blank' rel='noopener noreferrer'>
            <p className='port__name'>Одностраничное приложение</p>
            <span className='port__icon'>↗</span>
          </Link>
        </li>
      </ul>
    </section>
  );
};
