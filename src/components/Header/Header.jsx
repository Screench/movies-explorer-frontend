import React, { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'
import siteLogo from '../../images/site-logo.svg'
import menu from '../../images/burger.svg'
import avatar from '../../images/avatar.svg'
import './Header.css'

function Header({ loggedIn }) {
  const [isClicked, setIsClicked] = useState(false)

  function handleOpen() {
    setIsClicked(true)
  }

  function handleCloseMenu() {
    setIsClicked(false)
  }
  const location = useLocation();

  return (
    <>
      {!loggedIn ? (
        <header className={location.pathname === '/' ? 'header' : 'header header_authorized'}>
          <Link to='/' className='logo'>
            <img src={siteLogo} alt='лого' />
          </Link>
          <div className='header__btn-container'>
            <Link to='/signup' className='header__button'>
              Регистрация
            </Link>
            <Link to='/signin' className='header__button header__btn-color'>
              Войти
            </Link>
          </div>
        </header>
      ) : (
        <header className={location.pathname === '/' ? 'header' : 'header header_authorized'}>
          <Link to='/' className='logo'>
            <img className='header_logo' src={siteLogo} alt='Логотип' />
          </Link>
          <div className='header__btn-container header__btn-container_films'>
            <NavLink className='header__button' to='/movies'>Фильмы</NavLink>
            <NavLink className='header__button' to='/saved-movies'>Сохранённые фильмы</NavLink>
            <Link className='header__account-wrapper' to='/profile' ><div className='header__button'>Аккаунт</div><img className={location.pathname === '/' ? 'header__account-image' : 'header__account-image header__account-image_movies'} src={avatar} alt='Аккаунт' /></Link>
            
          </div>
          <button className='header__menu-btn' onClick={handleOpen}><img src={menu} alt='Бургерная' /></button>
          {isClicked ? <Navigation handleCloseMenu={handleCloseMenu} /> : ''}
        </header>
      )}
    </>
  )
}

export default Header
