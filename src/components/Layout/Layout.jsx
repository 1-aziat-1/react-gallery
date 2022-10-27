import React from 'react';
import _ from './Layout.module.css';
import PropTypes from 'prop-types';

export const Layout = ({children}) => {
  console.log();
  return <div className={_.container}> {children} </div>;
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
};
