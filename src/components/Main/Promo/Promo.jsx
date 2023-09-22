import React from 'react';
import './Promo.css';
import { Link } from 'react-scroll';
import globe from '../../../images/globe.svg';

export default function Promo() {
  return (
    <section className='promo'>
      <div className='promo__container'>
        <div className='promo__container-intro'>
          <h1 className='promo__title'>Учебный проект студента факультета Веб&#8209;разработки.</h1>
          <p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <Link className='promo__link' to='about' duration={500} smooth={true}>Узнать больше</Link>
        </div>
        <img className='promo__globe' src={globe} alt='Стилизованное изображение глобуса' />
      </div>
    </section>
  );
};

