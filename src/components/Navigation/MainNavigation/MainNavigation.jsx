import React from 'react';
import { Link } from 'react-router-dom';
import './MainNavigation.css';

export default function MainNavigation() {
  return (
    <div className='nav__main'>
      <div className='nav__links'>
        <Link className='nav__link nav__signup' to='/signup'>Регистрация</Link>
        <Link className='nav__link nav__signin' to='/signin'>Войти</Link>
      </div>
    </div>
  );
};
