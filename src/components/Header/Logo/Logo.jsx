import React from 'react';
import _ from './Logo.module.css';
// import logo from '../../../img/gallery.png';
import {Text} from '../../../UI/Text';
import {ReactComponent as LogoIcon} from '../../../img/logo.svg';

export const Logo = () => {
  console.log();
  return (
    <Text className={_.authLink} As='a'>
      <LogoIcon className={_.svg}/>
    </Text>
  );
};
