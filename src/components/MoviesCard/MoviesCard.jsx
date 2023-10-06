import React from 'react'
import './MoviesCard.css'
import { durationCalculator } from '../../utils/utils'

export default function MoviesCard({
  card,
  handleLikeFilm,
  isLikedFilms,
  onRemoveCard,
  saved,
  savedMovies,
}) {

  function onDelete() {
    onRemoveCard(card)
  }

  function onCardClick() {
    if (saved) { onRemoveCard(savedMovies.filter((m) => m.movieId === card.id)[0]) }
    else { handleLikeFilm(card) }
  }

  const cardLikeClassName = `${saved ? 'card__like-btn card__like-btn_active' : 'card__like-btn'}`

  return (
    <>
      <li key={card.id} className='card'>
        <div className='card__title-block'>
          <h2 className='card__title'>{card.nameRU}</h2>
          <span className='card__duration'>{' '}
            {durationCalculator(card.duration)}</span>
        </div>
        <a href={card.trailerLink} target='_blank' rel='noreferrer'>
          <img className='card__image'
            alt={card.nameRU}
            src={isLikedFilms
              ? card.image
              : `https://api.nomoreparties.co${card.image.url}`} /></a>
        <div className='card__container'>
          {isLikedFilms ?
            (<button type='button' className='card__btn-delete' onClick={onDelete}></button>) :
            (<button type='button' className={cardLikeClassName} onClick={onCardClick}></button>)}
        </div>
      </li>
    </>
  );
};
