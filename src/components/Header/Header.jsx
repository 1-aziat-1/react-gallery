import React from 'react';
import _ from './Header.module.css';
import Layout from '../Layout';
import Auth from './Auth';
import Search from './Search';
import Logo from './Logo';
import PropTypes from 'prop-types';

export const Header = ({auth}) => {
  console.log();
  return (
    <header className={_.header}>
      <Layout>
        <div className={_.flexContainer}>
          <Logo/>
          <Search/>
          <Auth auth={false}/>
        </div>
      </Layout>
    </header>
  );
};

Header.propTypes = {
  auth: PropTypes.bool,
};
