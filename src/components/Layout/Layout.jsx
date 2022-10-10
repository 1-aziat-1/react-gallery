import React from 'react';
import _ from './Layout.module.css';

export const Layout = ({children}) => {
  return <div className={_.container}> {children} </div>
};
