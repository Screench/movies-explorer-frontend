import React from 'react';
import './AboutProject.css';

export default function AboutProject() {
  return (
    <section id='about' className='about'>
      <h2 className='about__title'>О проекте</h2>
      <ul className='about__project'>
        <li className='about__project-item'>
        <h3 className='about__project-subtitle'>Дипломный проект включал 5 этапов</h3>
          <p className='about__project-text'>Составление плана, работу над бэкендом, верстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className='about__project-item'>
          <h3 className='about__project-subtitle'>На выполнение диплома ушло 5 недель</h3>
          <p className='about__project-text'>У каждого этапа был мягкий и жесткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <div className='about__week'>
        <h4 className='about__week-style about__week-subtitle about__week-subtitle_mod'>1 неделя</h4>
        <h4 className='about__week-style about__week-subtitle'>4 недели</h4>
        <p className='about__week-style about__week-description'>Back-end</p>
        <p className='about__week-style about__week-description'>Front-end</p>
      </div>
    </section>
  );
};
