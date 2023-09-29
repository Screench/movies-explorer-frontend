import React from 'react';
import './Form.css';
import { Link } from 'react-router-dom';
import siteLogo from '../../images/site-logo.svg';

export default function Form ({ title, children, buttonText, question, path, linkText }) {
  return (
    <form className='form'>
      <Link className='form__link' to={'/'}>
        <img className='form__logo' src={siteLogo} alt='Логотип' />
      </Link>
      <h1 className='form__title'>{title}</h1>
      {children}
      <button className='form__button' type='submit'>{buttonText}</button>
      <span className='form__button-span'>{question}
        <Link className='form__button-span-link' to={path}>{linkText}</Link>
      </span>
    </form>
  );
};
