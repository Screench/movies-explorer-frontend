import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/site-logo.svg'
import './Form.css'

export default function Form({ title, children, buttonText, question, path, linkText, onSubmit,
  isLoading, isDisabledButton }) {
  return (
    
    <div className='form__block'>
      <Link to='/' className='logo'>
        <img src={logo} alt='лого' />
      </Link>
      <h3 className='form__title'>{title}</h3>
      <form className='form' id='form' noValidate onSubmit={onSubmit}>
        {children}
        <button className={isLoading || isDisabledButton
              ? 'form__btn-save form__btn-save_inactive'
              : 'form__btn-save'
          }
          disabled={isLoading && isDisabledButton}
          type='submit'>
          {buttonText}
        </button>
      </form>
      <p className='form__text'>
        {question}
        <Link to={path} className='form__link'>
          {linkText}
        </Link>
      </p>
    </div>
  )
}
