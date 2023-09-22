import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Main from '../Main/Main';
import Account from '../Account/Account';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import './App.css';

export default function App() {
  const { pathname } = useLocation();

  const footer =
    pathname === '/' || pathname === '/movies' || pathname === '/saved-movies';

  return (
    <CurrentUserContext.Provider value={{}}>
      <div className='page'>
        <>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/movies' element={<Movies textButton='Сохранить' />} />
            <Route path='/saved-movies' element={<SavedMovies textButton='✖' />} />
            <Route path='/profile' element={<Account />} />
            <Route path='/signup' element={<Register />} />
            <Route path='/signin' element={<Login />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </>
        {footer && <Footer />}
      </div>
    </CurrentUserContext.Provider>
  );
}
