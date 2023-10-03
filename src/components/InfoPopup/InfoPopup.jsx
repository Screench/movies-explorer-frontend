import React from 'react'
import success from '../../images/success.svg'
import error from '../../images/error.svg'
import './InfoPopup.css'

export default function InfoPopup(props) {
  return (
    <div
      className={`popup popup_type_info ${props.isOpen ? 'popup_opened' : ''}`}
      onClick={props.onCloseOverlay}>
      <div className='popup__container'>
        <img className='popup__image' src={props.isSuccess ? success : error} alt='status' />
        <p className='popup__title'>{props.text}</p>
        <button className='popup__close-btn' type='button' onClick={props.onClose}></button>
      </div>
    </div>
  )
}