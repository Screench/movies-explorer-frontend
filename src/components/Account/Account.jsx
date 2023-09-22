import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './Account.css'

export default function Account() {

  const [name, setName] = useState('Виталий');
  const [email, setEmail] = useState('pochta@yandex.ru')
  return (
    <main className='account'>
      <Header />
      <section className='account__content'>
        <h1 className='account__title'>Привет, Виталий!</h1>
        <form className='account__form'>
          <div className='account__element'>
            <label className='account__label'>
              <p className='account__name'>Имя</p>
              <input className='account__input' type='text' placeholder='Ваше имя' value={name} onChange={(evt) => setName(evt.target.value)} />
            </label>
            <label className='account__label'>
              <p className='account__name'>E-mail</p>
              <input className='account__input' type='text' placeholder='Ваш e-mail' value={email} onChange={(evt) => setEmail(evt.target.value)} />
            </label>
          </div>
          <div className='account__buttons'>
            <button className='account__button-submit' type='submit'>Редактировать</button>
            <Link className='account__button-signout' to='/signin'>Выйти из аккаунта</Link>
          </div>
        </form>
      </section>
    </main>
  );
};
