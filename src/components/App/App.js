import React, { useState, useEffect } from 'react'
import { Route, Navigate, useNavigate, useLocation, Routes } from 'react-router-dom'
import './App.css'
import * as api from '../../utils/MainApi'
import CurrentUserContext from '../../contexts/CurrentUserContext'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import InfoPopup from '../InfoPopup/InfoPopup'
import Login from '../Login/Login'
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import NotFound from '../NotFound/NotFound'
import Account from '../Account/Account'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import Register from '../Register/Register'
import SavedMovies from '../SavedMovies/SavedMovies'

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [savedMovies, setSavedMovies] = useState([])
  const [currentUser, setCurrentUser] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isInfoPopupOpen, setInfoPopupOpen] = useState(false)
  const [infoPopupText, setInfoPopupText] = useState('');
  const navigate = useNavigate()
  const location = useLocation()
  const path = location.pathname
  
  useEffect(() => {
    const jwt = localStorage.getItem('jwt')
    if (jwt) {
      api.getContent(jwt)
      .then((res) => {
        if (res) {
          localStorage.removeItem('allMoviesCollection')
          setLoggedIn(true)
        }
        navigate(path)
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }, [])

  useEffect(() => {
    if (loggedIn) {
      api.getUserData()
        .then((userData) => {
          setCurrentUser(userData)
        })
        .catch((err) => {
          console.log(err)
        })
      api.getMovies()
        .then((cardsData) => {
          setSavedMovies(cardsData.reverse())
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [loggedIn])

  function handleRegister({ name, email, password }) {
    api.register(name, email, password)
      .then(() => {
        setInfoPopupOpen(true)
        setIsSuccess(true)
        handleLogin({ email, password })
        setInfoPopupText('Вы успешно зарегистрировались!')
      })
      .catch((err) => {
        setInfoPopupOpen(true)
        setIsSuccess(false)
        setInfoPopupText(`${err} Попробуйте еще раз`)
      })
  }

  function handleLogin({ email, password }) {
    setIsLoading(true)
    api.authorize(email, password)
      .then((res) => {
        if (res) {
          setInfoPopupOpen(true)
          setIsSuccess(true)
          setInfoPopupText('Добро пожаловать!')
          localStorage.setItem('jwt', res.token)
          navigate('/movies', { replace: true })
          setLoggedIn(true)
        }
      })
      .catch((err) => {
        setInfoPopupOpen(true)
        setInfoPopupText(`${err} Попробуйте еще раз`)
        setIsSuccess(false)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  function handleUserDataUpdate(newUserData) {
    setIsLoading(true)
    api.editUserData(newUserData)
      .then((data) => {
        setInfoPopupOpen(true)
        setIsSuccess(true)
        setCurrentUser(data)
        setInfoPopupText('Успешно обновлено')
      })
      .catch((err) => {
        setInfoPopupOpen(true)
        setIsSuccess(false)
        setInfoPopupText(`${err} Попробуйте еще раз`)
        console.log(err)
        handleAuthorizationError(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  function handleMovieLike(card) {
    api.addNewFavoriteMovie(card)
      .then((newMovie) => {
        setSavedMovies([newMovie, ...savedMovies])
      })
      .catch((err) => {
        setIsSuccess(false)
        console.log(err)
        handleAuthorizationError(err)
      })
  }
  function handleMovieRemoval(card) {
    api.removeMovie(card._id)
      .then(() => {
        setSavedMovies((state) => state.filter((item) => item._id !== card._id))
      })
      .catch((err) => {
        setIsSuccess(false)
        console.log(err)
        handleAuthorizationError(err)
      })
  }

  function handleAuthorizationError(err) {
    if (err === 'Error: 401') {
      onSignOut()
    }
  }

  const isOpen = isInfoPopupOpen || isInfoPopupOpen

  const onSignOut = () => {
    setLoggedIn(false)
    localStorage.removeItem('allMoviesCollection')
    localStorage.removeItem('jwt')
    localStorage.removeItem('shortDurationMovies')
    localStorage.removeItem('movieSearchResults')
    localStorage.removeItem('movies')
    localStorage.clear()
    navigate('/')
  }

  function closePupup() {
    setInfoPopupOpen(false)
  }

  function closePopupOnOverlay(event) {
    if (event.target === event.currentTarget) {
      closePupup()
    }
  }
  useEffect(() => {
    function closePopupOnEscape(evt) {
      if (evt.key === 'Escape') {
        closePupup()
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', closePopupOnEscape)
      return () => {
        document.removeEventListener('keydown', closePopupOnEscape)
      }
    }
  }, [isOpen])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='body'>
        <Routes>

          <Route path='/' element={<>
            <Header loggedIn={loggedIn} />
            <Main />
            <Footer /></>} />

          <Route path='/movies' element={<>
            <Header loggedIn={loggedIn} />
            <ProtectedRoute
              path='/movies'
              loggedIn={loggedIn}
              component={Movies}
              savedMovies={savedMovies}
              onRemoveCard={handleMovieRemoval}
              handleLikeFilm={handleMovieLike}
               />
            <Footer /></>} />

          <Route path='/saved-movies' element={<>
            <Header loggedIn={loggedIn} />
            <ProtectedRoute
              path='/saved-movies'
              loggedIn={loggedIn}
              savedMovies={savedMovies}
              component={SavedMovies}
              onRemoveCard={handleMovieRemoval} />
            <Footer /> </>} />

          <Route path='/profile' element={
            <ProtectedRoute
              path='/profile'
              isLoading={isLoading}
              component={Account}
              signout={onSignOut}
              loggedIn={loggedIn}
              onUpdateUser={handleUserDataUpdate}
               />} />

          <Route path='/signup' element={
            loggedIn ?
              (<Navigate to='/movies' replace />) :
              (<Register onRegister={handleRegister} isLoading={isLoading} />)} />
          <Route path='/signin' element={
            loggedIn ?
              (<Navigate to='/movies' replace />) :
              (<Login onAuthorization={handleLogin} isLoading={isLoading} />)} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <InfoPopup
          isOpen={isInfoPopupOpen}
          text={infoPopupText}
          onClose={closePupup}
          isSuccess={isSuccess}
          onCloseOverlay={closePopupOnOverlay}/>
      </div>

    </CurrentUserContext.Provider>
  )
}
