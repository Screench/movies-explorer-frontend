import React from 'react';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Student from './Student/Student';
import Techs from './Techs/Techs';

export default function Main () {
  return (
    <>
      <main>
        <Promo />
        <AboutProject />
        <Techs />
        <Student />
      </main>
    </>
  );
};
