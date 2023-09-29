import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='footer'>
      <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className='footer__wrapper'>
        <span className='footer__span'>&copy; 2020</span>
        <ul className='footer__links'>
          <li>
            <Link className='footer__link' to='https://praktikum.yandex.ru' target='_blank'>Яндекс.Практикум</Link>
          </li>
          <li>
            <Link className='footer__link' to='https://github.com/Screench' target='_blank'>
              GitHub
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}