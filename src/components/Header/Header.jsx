import React from 'react';
import _ from './Header.module.css';
import Layout from '../Layout';
import Auth from './Auth';
import Search from './Search';
import Logo from './Logo';

export const Header = () => {
  console.log();
  return (
    <header className={_.header}>
      <Layout>
        <div className={_.flexContainer}>
          <Logo/>
          <Search/>
          <Auth />
        </div>
      </Layout>
    </header>
  );
};
