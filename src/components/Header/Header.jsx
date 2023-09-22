import React from 'react';

import Navigation from '../Navigation/Navigation';
import './Header.css';
import { useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  return (
    <header className={location.pathname === '/' ? 'header' : 'header header_authorized'}>
      <Navigation className='nav' />
    </header>
  );
};
