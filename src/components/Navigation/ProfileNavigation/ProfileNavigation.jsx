import React from 'react';
import { useState } from 'react';
import './ProfileNavigation.css'
import { Link, NavLink } from 'react-router-dom';
import BurgerSidebar from './BurgerMenu/BurgerMenu';
import avatar from '../../../images/avatar.svg';

export default function NavigationProfile() {
  const [isOpenBurger, setIsOpenBurger] = useState(false);
  function toggleBurger() {
    setIsOpenBurger(!isOpenBurger);
  }

  return (
    <>
      {!isOpenBurger ? (
        <button className='nav__burger' onClick={toggleBurger} />
      ) : (
        <button className='nav__burger-close' onClick={toggleBurger} />
      )}
      <BurgerSidebar isOpenSidebar={isOpenBurger} />
      <div className='nav__prof'>
        <div className='nav__prof-links'>
          <NavLink className={({ isActive }) => `nav__prof-link ${isActive ? 'active' : ''}`} to='/movies'>Фильмы</NavLink>
          <NavLink className={({ isActive }) => `nav__prof-link ${isActive ? 'active' : ''}`} to='/saved-movies'>Сохранённые фильмы</NavLink>
        </div>
        <Link className='nav__prof-account' to='/profile'>
          <div className='nav__prof-wrapper'>
            <img className='nav__prof-avatar' src={avatar} alt='Профиль' />
          </div>
          Аккаунт
        </Link>
      </div>
    </>
  )
}
