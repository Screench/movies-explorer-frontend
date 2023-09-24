import React from 'react';
import './Login.css'
import Form from '../Form/Form';

export default function Login() {
  return (
    <section className='login'>
      <Form title='Рады видеть!' buttonText='Войти' question='Еще не зарегистрированы?' path='/signup' linkText='Регистрация' >
        <label className='form__label' htmlFor='email'>E-mail</label>
        <input className='form__input' type='text' id='email' placeholder='Введите почту' required minLength='2' />
        <span className='form__span'> Что-то пошло не так... </span>
        <label className='form__label' htmlFor='password'> Пароль </label>
        <input className='form__input' type='password' id='password' placeholder='Введите пароль' required />
        <span className='form__span form__span_login-err'> Что-то пошло не так... </span>
      </Form>
    </section>
  );
}
