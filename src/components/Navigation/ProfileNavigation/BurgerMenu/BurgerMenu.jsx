import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import avatar from '../../../../images/avatar.svg'
import './BurgerMenu.css';

export default function BurgerSidebar ({ isOpenSidebar }) {
  return (
    <section className={`burger-sidebar ${isOpenSidebar ? 'burger-sidebar_active' : ''}`}>
      <div className={`burger-sidebar__overlay ${isOpenSidebar ? 'burger-sidebar__overlay_active' : ''}`}></div>
      <div className='burger-sidebar__wrap'>
        <nav className='burger-sidebar__nav'>
          <NavLink className={({ isActive }) => `burger-sidebar__link ${isActive ? 'active' : ''}`} to='/'>Главная</NavLink>
          <NavLink className={({ isActive }) => `burger-sidebar__link ${isActive ? 'active' : ''}`} to='/movies'>Фильмы</NavLink>
          <NavLink className={({ isActive }) => `burger-sidebar__link ${isActive ? 'active' : ''}`} to='/saved-movies'>Сохранённые фильмы</NavLink>
        </nav>
        <Link className='burger-sidebar__profile' to='/profile'>
          <div className='burger-sidebar__profile-wrap'>
            <img className='burger-sidebar__profile-avatar' src={avatar} alt='Профиль' />
          </div>
          Аккаунт
        </Link>
      </div>
    </section>
  )
};