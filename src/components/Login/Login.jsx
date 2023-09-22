import React from 'react';
import './Login.css'
import Form from '../Form/Form';

export default function Login() {
  return (
    <section className='login'>
      <Form title='Рады видеть!' buttonText='Войти' question='Еще не зарегистрированы?' path='/signup' linkText='Регистрация' >
        <label className='field__label' htmlFor='email'>E-mail</label>
        <input className='field__input' type='text' id='email' placeholder='Введите почту' required minLength='2' />
        <span className='field__span'> Что-то пошло не так... </span>
        <label className='field__label' htmlFor='password'> Пароль </label>
        <input className='field__input' type='password' id='name' placeholder='Введите пароль' required />
        <span className='field__span field__span_error-login'> Что-то пошло не так... </span>
      </Form>
    </section>
  );
}
