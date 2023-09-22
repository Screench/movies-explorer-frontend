import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ProfileNavigation from './ProfileNavigation/ProfileNavigation';
import MainNavigation from './MainNavigation/MainNavigation';
import siteLogo from './../../images/site-logo.svg';
import './Navigation.css';

export default function Navigation() {
  const location = useLocation();

  return (
    <nav className='nav'>
      <Link className='nav__logo' to='/'><img className='nav__logo' src={siteLogo} alt='Логотип' /></Link>
      {location.pathname === '/' ? <MainNavigation /> : <ProfileNavigation />}
    </nav>
  )
}
