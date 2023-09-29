import React from 'react';
import Form from '../Form/Form';
import './Register.css'

export default function Register() {
  return (
    <main className='register'>
      <Form title='Добро пожаловать!' buttonText='Зарегистрироваться' question='Уже зарегистрированы?' path='/signin' linkText='Войти' >
        <label className='form__label' htmlFor='name'>Имя</label>
        <input className='form__input' id='name' placeholder='Введите имя' type='text' required />
        <span className='form__span'>Что-то пошло не так...</span>
        <label className='form__label' htmlFor='email'>E-mail</label>
        <input className='form__input' id='email' placeholder='Введите почту' type='text' required />
        <span className='form__span'>Что-то пошло не так...</span>
        <label className='form__label' htmlFor='password'>Пароль</label>
        <input className='form__input form__input-err' id='password' placeholder='Введите пароль' type='password' required />
        <span className='form__span form__span_err-signup'>Что-то пошло не так...</span>
      </Form>
    </main>
  )
};