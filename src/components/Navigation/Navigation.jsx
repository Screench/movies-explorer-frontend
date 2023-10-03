import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import avatar from '../../images/avatar.svg'
import './Navigation.css'

export default function Navigation({ handleCloseMenu }) {
  return (
    <div className='navigate__block'>
      <div className='navigate__block-overlay'></div>
      <div className='navigate__menu'>
        <button className='navigate__close-btn' onClick={handleCloseMenu} ></button>
        <nav className='navigate__links'>
          <NavLink to='/' className='navigate__link'>Главная</NavLink>
          <NavLink to='/movies' className='navigate__link'>Фильмы</NavLink>
          <NavLink to='/saved-movies' className='navigate__link'> Сохранённые фильмы </NavLink>
        </nav>
        <Link className='header__account-wrapper' to='/profile' ><div className='header__button'>Аккаунт</div><img className='header__account-image header__account-image_movies' src={avatar} alt='Аккаунт' /></Link>
      </div>
    </div>
  )
}
