import React from 'react';
import './Form.css';
import { Link } from 'react-router-dom';
import siteLogo from '../../images/site-logo.svg';

export default function Form ({ title, children, buttonText, question, path, linkText }) {
  return (
    <form className='form'>
      <Link className='field__link' to={'/'}>
        <img className='field__logo' src={siteLogo} alt='Логотип' />
      </Link>
      <h1 className='field__title'>{title}</h1>
      {children}
      <button className='field__button' type='submit'>{buttonText}</button>
      <span className='field__button-span'>{question}
        <Link className='field__button-span-link' to={path}>{linkText}</Link>
      </span>
    </form>
  );
};
