import React from 'react';
import './Techs.css';

export default function Techs() {
  return (
    <section className='tech' id='tech'>
      <h2 className='tech__title'>Технологии</h2>
      <h3 className='tech__subtitle'>7 технологий</h3>
      <p className='tech__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className='tech__list'>
        <li key={0} className='tech__item'>HTML</li>
        <li key={1} className='tech__item'>CSS</li>
        <li key={2} className='tech__item'>JS</li>
        <li key={3} className='tech__item'>React</li>
        <li key={4} className='tech__item'>Git</li>
        <li key={5} className='tech__item'>Express.js</li>
        <li key={6} className='tech__item'>mongoDB</li>
      </ul>
    </section>
  )
};