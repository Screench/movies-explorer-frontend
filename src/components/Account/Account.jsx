import React, { useState, useEffect, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import './Account.css'
import Header from '../Header/Header'
import CurrentUserContext from '../../contexts/CurrentUserContext'
import useForm from '../../hooks/useForm'
import { REGEXP_EMAIL } from '../../utils/constants'

export default function Account({ isLoading, loggedIn, signout, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext)
  const { inputFieldValues, handleInputChange, isFormValid, updateForm, errors } = useForm()
  const [isLastValues, setIsLastValues] = useState(false)

  useEffect(() => {
    if (currentUser) { updateForm(currentUser) }
  }, [currentUser, updateForm])

  function updateUserData(event) {
    event.preventDefault()
    if (isLastValues) {
      return;
    }
    onUpdateUser({
      name: inputFieldValues.name,
      email: inputFieldValues.email,
    })
  }

  useEffect(() => {
    if (
      currentUser.name === inputFieldValues.name &&
      currentUser.email === inputFieldValues.email
    ) {
      setIsLastValues(true)
    } else {
      setIsLastValues(false)
    }
  }, [inputFieldValues])

  return (
    <>
      <Header loggedIn={loggedIn} />
      <section className='profile'>
        <h3 className='account__title'>Привет, {currentUser.name}!</h3>
        <form className='account__form' id='form' noValidate onSubmit={updateUserData}>
          <label className='account__label'>
            Имя
            <input
              className='account__input'
              name='name'
              type='text'
              minLength='2'
              maxLength='40'
              placeholder='имя'
              required
              value={inputFieldValues.name || ''}
              onChange={handleInputChange}
            />
            <span className='account__input-err'>{errors.name}</span>
          </label>

          <div className='account__border'></div>
          <label className='account__label'>
            E-mail
            <input
              className='account__input'
              name='email'
              type='email'
              placeholder='почта'
              pattern={REGEXP_EMAIL}
              required
              value={inputFieldValues.email || ''}
              onChange={handleInputChange}
            />
            <span className='account__input-err'>{errors.email}</span>
          </label>
          <button type='submit'
            disabled={!isFormValid || isLoading}
            className={
              !isFormValid || isLoading || isLastValues
                ? 'account__btn-save form__btn-save_inactive'
                : 'account__btn-save'
            }>
            Редактировать
          </button>
          <NavLink to='/' className='account__exit-link'>
            <button type='button' className='account__exit-btn' onClick={signout}>
              Выйти из аккаунта
            </button>
          </NavLink>
        </form>
      </section>
    </>
  )
}
