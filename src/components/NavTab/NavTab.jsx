import React from 'react';
import { Link } from 'react-scroll';
import './NavTab.css';


export default function NavTab() {
  return (
    <nav className='nav-tab'>
      <Link to='about' className='nav-tab__link' smooth={true} duration={400}>
        Узнать больше
      </Link>
    </nav>
  );
};
