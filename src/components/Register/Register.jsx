import React from 'react';
import Form from '../Form/Form';
import './Register.css'

export default function Register() {
  return (
    <main className='register'>
      <Form title='Добро пожаловать!' buttonText='Зарегистрироваться' question='Уже зарегистрированы?' path='/signin' linkText='Войти' >
        <label className='field__label' htmlFor='name'>Имя</label>
        <input className='field__input' id='name' placeholder='Введите имя' type='text' required />
        <span className='field__span'>Что-то пошло не так...</span>
        <label className='field__label' htmlFor='email'>E-mail</label>
        <input className='field__input' id='email' placeholder='Введите почту' type='text' required />
        <span className='field__span'>Что-то пошло не так...</span>
        <label className='field__label' htmlFor='password'>Пароль</label>
        <input className='field__input field__input-err' id='password' placeholder='Введите пароль' type='password' required />
        <span className='field__span field__span_err-signup'>Что-то пошло не так...</span>
      </Form>
    </main>
  )
};