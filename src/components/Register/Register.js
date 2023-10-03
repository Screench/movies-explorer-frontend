import React from 'react'
import Form from '../Form/Form'
import useForm from '../../hooks/useForm'
import { REGEXP_EMAIL } from '../../utils/constants'
import '../Form/Form.css'

export default function Register({ onRegister, isLoading }) {
  const { inputFieldValues, handleInputChange, isFormValid, errors } = useForm()

  function updateUserData(event) {
    event.preventDefault()
    onRegister({
      name: inputFieldValues.name,
      email: inputFieldValues.email,
      password: inputFieldValues.password,
    })
  }
  return (
    <Form
      title='Добро пожаловать!'
      buttonText='Зарегистрироваться'
      question='Уже зарегистрированы?'
      path='/signin'
      linkText=' Войти'
      onSubmit={updateUserData}
      isLoading={isLoading}
      isDisabledButton={!isFormValid}
    >
      <label className='form__label'>
      <div className='form__input-name'>Имя</div>
        <input
          className='form__input'
          id='name-input'
          type='text'
          name='name'
          minLength='2'
          maxLength='30'
          placeholder='Введите имя'
          required
          value={inputFieldValues.name || ''}
          onChange={handleInputChange}
        />
        <span className='form__input-err'>{errors.name}</span>
      </label>
      <label className='form__label'>
      <div className='form__input-name'>E-mail</div>
        <input
          className='form__input'
          id='email-input'
          type='email'
          name='email'
          pattern={REGEXP_EMAIL}
          placeholder='Введите почту'
          required
          value={inputFieldValues.email || ''}
          onChange={handleInputChange}
        />
        <span className='form__input-err'>{errors.email}</span>
      </label>
      <label className='form__label'>
      <div className='form__input-name'>Пароль</div>
        <input
          className='form__input'
          id='password-input'
          type='password'
          name='password'
          placeholder='Введите пароль'
          minLength='2'
          required
          value={inputFieldValues.password || ''}
          onChange={handleInputChange}
        />
        <span className='form__input-err'>{errors.password}</span>
      </label>
    </Form>
  )
}
