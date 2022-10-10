import React from 'react';
import _ from './Logo.module.css';
import logo from '../../../img/gallery.png';

export const Logo = () => {
  console.log();
  return (
    <a className={_.link} href='/'>
      <img className={_.logo} src={logo} alt='Логотип' />
    </a>
  );
};
