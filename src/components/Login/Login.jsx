import React from 'react'
import '../Form/Form.css'
import Form from '../Form/Form'
import useForm from '../../hooks/useForm'
import { REGEXP_EMAIL } from '../../utils/constants'

export default function Login({ onAuthorization, isLoading }) {
  const { inputFieldValues, handleInputChange, isFormValid, errors } = useForm()

  function updateUserData(event) {
    event.preventDefault()
    onAuthorization({email: inputFieldValues.email, password: inputFieldValues.password,})
  }
  
  return (
    <Form
      noValidate
      title='Рады видеть!'
      buttonText='Войти'
      question='Еще не зарегистрированы?'
      path='/signup'
      linkText=' Регистрация'
      
      onSubmit={updateUserData}
      isLoading={isLoading}
      isDisabledButton={!isFormValid}>
      <label className='form__label'>
        <div className='form__input-name'>E-mail</div>
        <input
          className='form__input'
          id='email-input'
          type='email'
          name='email'
          placeholder='Введите email'
          required
          pattern={REGEXP_EMAIL}
          value={inputFieldValues.email || ''}
          onChange={handleInputChange}
        />
        <span className='form__input-err'>
        {errors.email}
        </span>
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

