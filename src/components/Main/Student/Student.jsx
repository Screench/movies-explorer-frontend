import React from 'react';
import './Student.css';
import studPhoto from '../../../images/student-photo.png';
import { Link } from 'react-router-dom';
import Portfolio from '../Portfolio/Portfolio'

export default function Student() {
  return (
    <section className='stud' id='student'>
      <h2 className='stud__title'>Студент</h2>
      <div className='stud__wrapper'>
        <div className='stud__content'>
          <h3 className='stud__name'>Виталий</h3>
          <p className='stud__job'>Фронтенд-разработчик, 30 лет</p>
          <p className='stud__info'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <Link className='stud__link' to={'https://github.com/Screench'} target='_blank'>
            Github
          </Link>
        </div>
        <img className='stud__photo' src={studPhoto} alt='Виталик' />
      </div>
      <Portfolio />
    </section>
  )
};
